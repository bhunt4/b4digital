import { NextResponse } from "next/server";

import { contactSchema } from "@/components/forms/contact-schema";
import { ContactNotification } from "@/emails/contact-notification";
import { getResend } from "@/lib/resend";

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];

  const recentTimestamps = timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (recentTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitMap.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

function getClientIp(request: Request): string {
  const headers = new Headers(request.headers);
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data.", issues: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check — if filled, silently return success
    if (data.honeypot) {
      return NextResponse.json({ success: true });
    }

    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "B4Digital Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "hello@b4digital.com",
      subject: `New Contact Form Submission from ${data.name}`,
      react: ContactNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error in contact route:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "B4Digital — SEO Agency That Delivers Results",
    template: "%s | B4Digital SEO Services",
  },
  description:
    "B4Digital is a results-driven SEO agency helping businesses dominate search results with proven strategies in technical SEO, on-page optimization, off-page authority building, and local SEO.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://b4digital.com"
  ),
  openGraph: {
    title: "B4Digital — SEO Agency That Delivers Results",
    description:
      "Results-driven SEO agency helping businesses dominate search results.",
    url: "/",
    siteName: "B4Digital",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B4Digital — SEO Agency That Delivers Results",
    description:
      "Results-driven SEO agency helping businesses dominate search results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-foreground text-background min-h-[90vh] flex items-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-3/5 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Dominate Search Results
            </h1>
            <p className="text-lg md:text-xl text-background/80 max-w-xl">
              We help businesses grow with data-driven SEO strategies that
              deliver measurable results. From technical audits to content
              optimization, our proven process drives organic traffic and
              revenue.
            </p>
            <div className="flex items-center gap-2 text-background/90">
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <span className="font-semibold">
                Trusted by 150+ Businesses
              </span>
            </div>
          </div>

          <div className="lg:w-2/5 w-full">
            <Card className="bg-background text-foreground">
              <CardHeader>
                <CardTitle className="text-xl">
                  Get Your Free SEO Audit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

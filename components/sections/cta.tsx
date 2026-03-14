import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Get a free SEO audit and discover how we can help you dominate search
          results and drive more revenue.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8 text-base"
          nativeButton={false}
          render={<a href="#contact" />}
        >
          Get Started Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}

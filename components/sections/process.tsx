import { SectionWrapper } from "@/components/shared/section-wrapper";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper id="process" variant="muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Our Proven Process
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A systematic approach to SEO that delivers consistent, measurable
          results.
        </p>
      </div>

      <div className="relative">
        {/* Horizontal connecting line (desktop only) */}
        <div className="hidden lg:block absolute top-6 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-border" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="flex justify-center mb-4">
                <div className="relative z-10 rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

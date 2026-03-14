import { CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { benefits, stats } from "@/lib/constants";

export function Benefits() {
  return (
    <SectionWrapper id="benefits">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Why Choose B4Digital
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-muted/50"
            >
              <div className="text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits list */}
        <div className="space-y-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

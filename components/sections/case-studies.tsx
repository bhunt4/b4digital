import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { caseStudies } from "@/lib/constants";

export function CaseStudies() {
  return (
    <SectionWrapper id="results" variant="muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Real Results for Real Businesses
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          See how we have helped businesses like yours achieve measurable growth
          through strategic SEO.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Card key={study.client} className="h-full">
            <CardHeader>
              <CardDescription className="text-sm font-medium">
                {study.client}
              </CardDescription>
              <CardTitle className="text-3xl font-bold text-primary">
                {study.metric}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {study.description}
              </p>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {study.period}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

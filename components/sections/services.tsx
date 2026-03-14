import { Settings, FileText, Link, MapPin, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  FileText,
  Link,
  MapPin,
};

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Our SEO Services
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive SEO solutions tailored to your business goals and
          competitive landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.title} className="h-full">
              <CardHeader>
                {Icon && (
                  <div className="mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                )}
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

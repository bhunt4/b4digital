import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { siteConfig } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: siteConfig.businessHours,
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" variant="muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to take your SEO to the next level? Reach out and let us build a
          strategy for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-8">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.label} className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{detail.label}</p>
                  <p className="text-muted-foreground">{detail.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

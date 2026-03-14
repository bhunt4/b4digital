import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Benefits } from "@/components/sections/benefits";
import { CaseStudies } from "@/components/sections/case-studies";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/shared/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <CaseStudies />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

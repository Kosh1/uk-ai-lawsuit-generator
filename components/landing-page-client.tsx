"use client";

import { useSearchParams } from "next/navigation";
import {
  defaultUKConfig,
  familyConfig,
  employmentConfig,
  contractConfig,
  debtConfig,
  propertyConfig,
  LandingConfig
} from "@/lib/landingConfigs";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works";
import { ComparisonSection } from "@/components/comparison-section";
import { ExamplesSection } from "@/components/examples-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CTASection } from "@/components/cta-section";

const configMap = {
  "family": familyConfig,
  "employment": employmentConfig,
  "contract": contractConfig,
  "debt": debtConfig,
  "property": propertyConfig,
};

export default function LandingPageClient() {
  const searchParams = useSearchParams();
  const landing = searchParams.get("landing");
  const config = configMap[landing as keyof typeof configMap] || defaultUKConfig;

  const utm: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (key.startsWith("utm_")) {
      utm[key] = value;
    }
  });

  return (
    <>
      <main>
        <HeroSection config={config} utm={utm} landingType={landing || undefined} />
        <HowItWorksSection />
        <ComparisonSection />
        <ExamplesSection />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <CTASection
          title={config.ctaTitle}
          subtitle={config.ctaSubtitle}
          buttonText={config.ctaButton}
          placeholder={config.placeholder}
          utm={utm}
          landingType={landing || undefined}
        />
      </main>
      <Footer />
    </>
  );
}

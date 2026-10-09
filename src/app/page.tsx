import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Stories } from "@/components/Stories";

export default function HomePage() {
  return (
    <main className="page">
      <SiteNav />
      <Hero />
      <HowItWorks />
      <About />
      <Stories />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}

import { Testimonial } from "@/components/Testimonial";
import { Features } from "@/components/Features";
import { Headers } from "@/components/Headers";
import { Hero } from "@/components/Hero";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import { Faq } from "@/components/Faq";
import { WaitlistSection } from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-blue">
      <Hero />
      <Headers />
      <Features />
      <SecondaryFeatures />
      <Testimonial />
      <WaitlistSection />
      <Faq />
      <Footer />
    </main>
  );
}

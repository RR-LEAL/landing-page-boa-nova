import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <ProcessSteps />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
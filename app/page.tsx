import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TargetAudience } from "@/components/sections/target-audience";
import { GalleryCarousel } from "@/components/sections/gallery-carousel";
import { Reasons } from "@/components/sections/reasons";
import Experts from "@/components/sections/experts";
import { Schedule } from "@/components/sections/schedule";

import { Location } from "@/components/sections/location";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { MouseGlow } from "@/components/ui/mouse-glow";
import { BackgroundElements } from "@/components/ui/background-elements";
import { GeometricMesh } from "@/components/ui/geometric-mesh";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundElements />
      <MouseGlow />
      <Header />
      <Hero />
      <About />
      <TargetAudience />
      <GalleryCarousel />
      <Reasons />
      <Experts />
      <Schedule />

      <Location />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

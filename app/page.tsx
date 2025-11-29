import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TargetAudience } from "@/components/sections/target-audience";
import { GalleryCarousel } from "@/components/sections/gallery-carousel";
import { Reasons } from "@/components/sections/reasons";
import { TechnicalCoordination } from "@/components/sections/technical-coordination";
import { Speakers } from "@/components/sections/speakers";
import { Schedule } from "@/components/sections/schedule";
import { Registration } from "@/components/sections/registration";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Header />
      <Hero />
      <About />
      <TargetAudience />
      <GalleryCarousel />
      <Reasons />
      <TechnicalCoordination />
      <Speakers />
      <Schedule />
      <Registration />
      <Location />
      <Footer />
    </main>
  );
}

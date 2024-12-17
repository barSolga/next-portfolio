import AboutSection from "./partials/AboutSection";
import ExpirienceSection from "./partials/ExpirienceSection";
import HeroSection from "./partials/HeroSection";
import TechstackSection from "./partials/TechstackSection";
import { companies } from "./data";
import ContactSection from "./partials/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechstackSection />
      <ExpirienceSection companies={companies} />
      <ContactSection />
    </main>
  );
}

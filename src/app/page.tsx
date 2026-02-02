import { GridBackground } from "@/components/ui/grid-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { ContactTerminal } from "@/components/sections/contact";
import { Expertise } from "@/components/sections/expertise";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex-col overflow-hidden">
      <GridBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Stats />
      <Projects />
      <About />
      <Expertise />
      <ContactTerminal />
      <Footer />
    </main>
  );
}

import React from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { AmbientGlow } from "./components/AmbientGlow";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { portfolioData } from "./data/portfolioData";

export const App: React.FC = () => {
  // Initialize scroll reveal animations for .rv elements
  useRevealOnScroll();

  return (
    <>
      <ScrollProgress />
      <AmbientGlow />

      <Navbar
        name={portfolioData.name.toLowerCase()}
        location={`${portfolioData.location} · open to work`}
      />

      <main id="top">
        <Hero
          statusText={portfolioData.status}
          headlineLine1={portfolioData.headline.line1}
          headlineLine2={portfolioData.headline.line2}
          roles={portfolioData.roles}
          leadText={portfolioData.lead}
          experienceYears={portfolioData.experienceTag}
          experienceLabel={portfolioData.experienceSubtag}
        />

        <Marquee skills={portfolioData.marqueeSkills} />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default App;

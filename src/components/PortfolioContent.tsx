"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export function PortfolioContent() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];

  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
      <Experience items={data.experience} />
      <Skills groups={data.skills} />
      <Projects projects={data.projects} />
      <Contact data={data.about} socials={data.hero.socials} />
    </>
  );
}

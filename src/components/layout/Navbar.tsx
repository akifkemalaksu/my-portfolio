"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const active = useActiveSection();
  const { lang, setLang } = useLanguage();
  const t = useTranslation();

  const cvPath = portfolioData[lang].hero.cvPath;

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-[#58a6ff] font-bold text-lg hover:text-[#79c0ff] transition-colors"
        >
          AKA
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const key = link.href.slice(1) as keyof typeof t.nav.links;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? "text-[#58a6ff]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                }`}
              >
                {t.nav.links[key]}
              </a>
            );
          })}

          {/* CV download */}
          <a
            href={cvPath}
            download
            className="flex items-center gap-1.5 font-mono text-sm px-4 py-1.5 border border-[#58a6ff] text-[#58a6ff] rounded-md hover:bg-[#1f3a5f] transition-colors"
          >
            <Download size={14} />
            {t.nav.downloadCv}
          </a>

          {/* Language toggle */}
          <div className="flex gap-0.5 border border-[#30363d] rounded-md p-0.5">
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold transition-colors uppercase ${
                  lang === l
                    ? "bg-[#58a6ff] text-[#0d1117]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile language toggle */}
          <div className="flex gap-0.5 border border-[#30363d] rounded-md p-0.5">
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded text-xs font-mono font-semibold transition-colors uppercase ${
                  lang === l
                    ? "bg-[#58a6ff] text-[#0d1117]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMobileOpen((o) => !o)}
            className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const key = link.href.slice(1) as keyof typeof t.nav.links;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`font-mono text-sm transition-colors ${
                  active === link.href.slice(1) ? "text-[#58a6ff]" : "text-[#8b949e]"
                }`}
              >
                {t.nav.links[key]}
              </a>
            );
          })}
          <a
            href={cvPath}
            download
            onClick={handleNavClick}
            className="flex items-center gap-1.5 font-mono text-sm text-[#58a6ff] w-fit"
          >
            <Download size={14} />
            {t.nav.downloadCv}
          </a>
        </div>
      )}
    </header>
  );
}

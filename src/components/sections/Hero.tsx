"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HeroData } from "@/data/portfolio";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useTranslation } from "@/hooks/useTranslation";

interface HeroProps {
  data: HeroData;
}

const iconMap = {
  github:   FaGithub,
  linkedin: FaLinkedin,
  mail:     Mail,
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Hero({ data }: HeroProps) {
  const t = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 dot-grid overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0d1117 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.p variants={item} className="font-mono text-[#58a6ff] text-sm mb-4">
          {t.hero.greeting}
        </motion.p>

        <motion.h1 variants={item} className="text-5xl sm:text-7xl font-bold mb-4 text-gradient">
          {data.name}
        </motion.h1>

        <motion.div variants={item} className="text-xl sm:text-2xl font-mono text-[#8b949e] mb-3 h-8">
          <AnimatedText phrases={t.hero.typewriterPhrases} />
        </motion.div>

        <motion.p variants={item} className="text-[#8b949e] text-lg mb-10 max-w-xl mx-auto">
          {data.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={data.cvPath}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79c0ff] transition-colors"
          >
            <Download size={18} />
            {t.hero.downloadCv}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#58a6ff] text-[#58a6ff] font-semibold hover:bg-[#1f3a5f] transition-colors"
          >
            {t.hero.contactMe}
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {data.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon !== "mail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}

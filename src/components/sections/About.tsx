"use client";

import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { AboutData } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";

interface AboutProps {
  data: AboutData;
}

export function About({ data }: AboutProps) {
  const t = useTranslation();

  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold text-[#e6edf3] mb-10">
        <span className="text-[#58a6ff] font-mono text-xl mr-2">{t.about.heading.split(".")[0]}.</span>
        {t.about.heading.split(". ")[1]}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Bio */}
        <div className="md:col-span-3 space-y-5">
          <p className="text-[#8b949e] text-base leading-relaxed border-l-2 border-[#58a6ff] pl-4">
            {data.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-[#8b949e]">
              <MapPin size={16} className="text-[#58a6ff] shrink-0" />
              {data.location}
            </div>
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-sm text-[#8b949e] hover:text-[#58a6ff] transition-colors"
            >
              <Mail size={16} className="text-[#58a6ff] shrink-0" />
              {data.email}
            </a>
          </div>

          <div className="flex gap-6 pt-2">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#58a6ff]">6+</p>
              <p className="text-xs text-[#8b949e] font-mono">{t.about.yearsLabel}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#58a6ff]">10+</p>
              <p className="text-xs text-[#8b949e] font-mono">{t.about.technologiesLabel}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#58a6ff]">5</p>
              <p className="text-xs text-[#8b949e] font-mono">{t.about.projectsLabel}</p>
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative w-52 h-52 rounded-2xl ring-2 ring-[#58a6ff] ring-offset-4 ring-offset-[#0d1117] overflow-hidden bg-[#161b22] flex items-center justify-center">
            {data.avatarPath ? (
              <Image
                src={data.avatarPath}
                alt="Akif Kemal Aksu"
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <span className="text-5xl font-bold text-gradient select-none">AKA</span>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/data/portfolio";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const isInternship = item.type === "internship";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-10"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-5 bottom-0 w-px bg-[#30363d]" />
      )}

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isInternship
            ? "bg-[#0d1117] border-[#30363d]"
            : "bg-[#0d1117] border-[#58a6ff]"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isInternship ? "bg-[#30363d]" : "bg-[#58a6ff]"
          }`}
        />
      </div>

      {/* Card */}
      <div
        className={`mb-10 rounded-xl border p-6 transition-colors ${
          isInternship
            ? "bg-[#0d1117] border-[#30363d]"
            : "bg-[#161b22] border-[#30363d] hover:border-[#58a6ff]/50"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3
              className={`font-semibold text-lg ${
                isInternship ? "text-[#8b949e]" : "text-[#e6edf3]"
              }`}
            >
              {item.role}
            </h3>
            <p className="text-[#58a6ff] font-medium">{item.company}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-mono text-sm text-[#8b949e]">
              {item.startDate} — {item.endDate}
            </p>
            <p className="font-mono text-xs text-[#8b949e]">{item.location}</p>
          </div>
        </div>

        {/* Project badges */}
        {item.projects && item.projects.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.projects.map((p) => (
              <span
                key={p}
                className="font-mono text-xs px-2 py-0.5 rounded bg-[#1f3a5f] text-[#79c0ff] border border-[#58a6ff]/30"
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {/* Bullets */}
        <ul className="space-y-1.5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-[#8b949e]">
              <span className="text-[#58a6ff] mt-0.5 shrink-0">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

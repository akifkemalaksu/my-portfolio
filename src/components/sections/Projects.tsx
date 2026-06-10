"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/hooks/useTranslation";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const t = useTranslation();
  const [num, ...rest] = t.projects.heading.split(". ");

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold text-[#e6edf3] mb-10">
        <span className="text-[#58a6ff] font-mono text-xl mr-2">{num}.</span>
        {rest.join(". ")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col hover:border-[#58a6ff]/40 transition-colors group"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-[#e6edf3] font-semibold text-base group-hover:text-[#58a6ff] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-[#58a6ff] mt-0.5">{project.company}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b949e] hover:text-[#58a6ff] transition-colors mt-0.5"
                  aria-label="View project"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <p className="text-sm text-[#8b949e] mb-4">{project.description}</p>

            <ul className="space-y-1 mb-5 flex-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-xs text-[#8b949e]">
                  <span className="text-[#58a6ff] shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#30363d]">
              {project.stack.map((tech) => (
                <Badge key={tech} label={tech} variant="muted" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

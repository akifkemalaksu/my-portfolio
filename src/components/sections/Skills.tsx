"use client";

import { SkillGroup } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/hooks/useTranslation";

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  const t = useTranslation();
  const [num, ...rest] = t.skills.heading.split(". ");

  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-bold text-[#e6edf3] mb-10">
        <span className="text-[#58a6ff] font-mono text-xl mr-2">{num}.</span>
        {rest.join(". ")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group) => (
          <div
            key={group.category}
            className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#58a6ff]/40 transition-colors"
          >
            <h3 className="text-sm font-mono font-semibold text-[#58a6ff] mb-4 pb-2 border-b border-[#30363d]">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

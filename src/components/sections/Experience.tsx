"use client";

import { ExperienceItem as ExperienceItemType } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { useTranslation } from "@/hooks/useTranslation";

interface ExperienceProps {
  items: ExperienceItemType[];
}

export function Experience({ items }: ExperienceProps) {
  const t = useTranslation();
  const [num, ...rest] = t.experience.heading.split(". ");

  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl font-bold text-[#e6edf3] mb-10">
        <span className="text-[#58a6ff] font-mono text-xl mr-2">{num}.</span>
        {rest.join(". ")}
      </h2>

      <div>
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

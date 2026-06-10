"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t border-[#30363d] py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#8b949e]">
        <p>© {new Date().getFullYear()} Akif Kemal Aksu. {t.footer.rights}</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}

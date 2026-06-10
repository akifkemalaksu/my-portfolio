"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AboutData, SocialLink } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";

interface ContactProps {
  data: AboutData;
  socials: SocialLink[];
}

const iconMap = {
  github:   { Icon: FaGithub,   label: "GitHub"   },
  linkedin: { Icon: FaLinkedin, label: "LinkedIn" },
  mail:     { Icon: Mail,       label: "Email"    },
};

type Status = "idle" | "sent";

export function Contact({ data, socials }: ContactProps) {
  const t = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [num, ...rest] = t.contact.heading.split(". ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.contact.emailSubject} — ${form.name}`);
    const body = encodeURIComponent(
      `İsim / Name: ${form.name}\nE-posta / Email: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
        <span className="text-[#58a6ff] font-mono text-xl mr-2">{num}.</span>
        {rest.join(". ")}
      </h2>

      <p className="text-[#8b949e] mb-10 max-w-lg">{t.contact.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Direct links */}
        <div className="space-y-4">
          <h3 className="font-mono text-sm text-[#58a6ff] mb-4">{t.contact.directContact}</h3>
          {socials.map((social) => {
            const { Icon } = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon !== "mail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#58a6ff]/50 hover:text-[#58a6ff] text-[#8b949e] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1f3a5f] flex items-center justify-center group-hover:bg-[#58a6ff]/20 transition-colors">
                  <Icon size={18} className="text-[#58a6ff]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8b949e]">{social.label}</p>
                  <p className="text-sm text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors">
                    {social.href.replace("mailto:", "").replace("https://", "")}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact form */}
        <div>
          <h3 className="font-mono text-sm text-[#58a6ff] mb-4">{t.contact.sendMessage}</h3>

          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-4 h-64 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
              <CheckCircle size={40} className="text-[#58a6ff]" />
              <p className="text-[#e6edf3] font-semibold">{t.contact.successTitle}</p>
              <p className="text-sm text-[#8b949e]">{t.contact.successBody}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 font-mono text-xs text-[#58a6ff] hover:text-[#79c0ff] transition-colors underline underline-offset-4"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                required
                className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-colors"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                required
                className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-colors"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                rows={4}
                required
                className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-sm hover:bg-[#79c0ff] transition-colors"
              >
                {t.contact.sendButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

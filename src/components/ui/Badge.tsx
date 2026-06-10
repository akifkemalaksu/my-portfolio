interface BadgeProps {
  label: string;
  variant?: "default" | "accent" | "muted";
}

export function Badge({ label, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-[#1f3a5f] text-[#58a6ff] border border-[#58a6ff]/30",
    accent:  "bg-[#58a6ff] text-[#0d1117]",
    muted:   "bg-[#161b22] text-[#8b949e] border border-[#30363d]",
  };

  return (
    <span
      className={`inline-block font-mono text-xs px-3 py-1 rounded-full transition-transform hover:scale-105 ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

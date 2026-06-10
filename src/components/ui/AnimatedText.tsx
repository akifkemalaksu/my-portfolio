"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
}

export function AnimatedText({ phrases, className = "" }: AnimatedTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink ml-0.5 text-[#58a6ff]">|</span>
    </span>
  );
}

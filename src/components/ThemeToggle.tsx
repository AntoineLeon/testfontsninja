"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-[var(--button-primary)] hover:opacity-90 text-white w-[150px] h-[49px] rounded-[32px] flex items-center justify-center gap-2 transition-opacity"
    >
      Switch theme
    </button>
  );
}

"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-2 rounded-lg transition-colors"
    >
      Switch theme
    </button>
  );
}

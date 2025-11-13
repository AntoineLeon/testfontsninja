"use client";

import { useState } from "react";

interface FontDetail {
  name: string;
  foundry: {
    name: string;
  };
  images: {
    pangram: {
      svg: string;
    };
    alphabet: {
      svg: string;
    };
  };
}

interface FontDetailClientProps {
  font: FontDetail;
}

export function FontDetailClient({ font }: FontDetailClientProps) {
  const [selectedView, setSelectedView] = useState<"pangram" | "alphabet">(
    "pangram"
  );

  return (
    <main className="px-14 pb-8 mt-4">
      <div className="flex gap-2">
        <div className="bg-[var(--card-bg)] rounded-[32px] p-14 w-[883px] h-[592px]">
          <div className="mb-8 h-[400px] flex items-start">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  selectedView === "pangram"
                    ? font.images.pangram.svg
                    : font.images.alphabet.svg,
              }}
              className="[&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[400px] [&_path]:fill-current [&_g]:fill-current"
            />
          </div>
          <div className="flex gap-4 text-sm">
            <button
              onClick={() => setSelectedView("pangram")}
              className={
                selectedView === "pangram"
                  ? "text-[var(--button-primary)] font-medium cursor-pointer"
                  : "text-[var(--text-deactivated)] cursor-pointer hover:text-foreground transition-colors"
              }
            >
              Pangram
            </button>
            <button
              onClick={() => setSelectedView("alphabet")}
              className={
                selectedView === "alphabet"
                  ? "text-[var(--button-primary)] font-medium cursor-pointer"
                  : "text-[var(--text-deactivated)] cursor-pointer hover:text-foreground transition-colors"
              }
            >
              Alphabet
            </button>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] rounded-[32px] p-14 w-[437px] h-[592px]">
          <h1 className="text-2xl font-bold leading-none mb-2">{font.name}</h1>
          <p className="text-base font-medium leading-none text-foreground/60">
            From {font.foundry.name}
          </p>
        </div>
      </div>
    </main>
  );
}

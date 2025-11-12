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
    <main className="px-8 md:px-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="bg-[var(--card-bg)] rounded-2xl p-12">
            <div className="mb-8 h-[400px] flex items-center justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    selectedView === "pangram"
                      ? font.images.pangram.svg
                      : font.images.alphabet.svg,
                }}
                className="[&>svg]:max-w-full [&>svg]:max-h-full [&_path]:fill-current [&_g]:fill-current"
              />
            </div>
            <div className="flex gap-4 text-sm">
              <button
                onClick={() => setSelectedView("pangram")}
                className={
                  selectedView === "pangram"
                    ? "text-[#E74C3C] font-medium cursor-pointer"
                    : "cursor-pointer"
                }
              >
                Pangram
              </button>
              <button
                onClick={() => setSelectedView("alphabet")}
                className={
                  selectedView === "alphabet"
                    ? "text-[#E74C3C] font-medium cursor-pointer"
                    : "cursor-pointer"
                }
              >
                Alphabet
              </button>
            </div>
          </div>

          <div className="bg-[var(--card-bg)] rounded-2xl p-8 flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-2">{font.name}</h1>
            <p className="text-sm text-foreground/60">
              From {font.foundry.name}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

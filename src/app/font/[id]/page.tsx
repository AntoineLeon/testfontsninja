import { Metadata } from "next";
import { FontDetailClient } from "@/components/FontDetailClient";

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

async function getFontDetails(): Promise<FontDetail> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/familyDetails`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch font details");
  }
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const font = await getFontDetails();
  return {
    title: `${font.foundry.name} ${font.name}`,
  };
}

export default async function FontDetailPage() {
  const font = await getFontDetails();

  return <FontDetailClient font={font} />;
}

import { FontCard } from "@/components/FontCard";
import { Pagination } from "@/components/Pagination";
import { Metadata } from "next";

interface Family {
  idFont: number;
  url: string;
  name: string;
  totalFonts: number;
  foundry: {
    name: string;
  };
  price: {
    formatedPrice: string;
  } | null;
  images: {
    alphabet: {
      svg: string;
    };
  };
}

interface PageData {
  families: Family[];
  totalFamilies: number;
}

async function getFamilies(page: number): Promise<PageData> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/families?page=${page}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return { families: [], totalFamilies: 0 };
  }
  return res.json();
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  return {
    title: `Home - Page ${currentPage}`,
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  const data = await getFamilies(currentPage);
  const totalPages = Math.ceil(data.totalFamilies / 24);

  return (
    <main className="px-14 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
        {data.families.map((family) => (
          <FontCard key={family.idFont} {...family} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}

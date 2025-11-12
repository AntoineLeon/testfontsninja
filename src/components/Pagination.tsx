"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Link
        href={createPageURL(Math.max(1, currentPage - 1))}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === 1
            ? "text-foreground/30 pointer-events-none"
            : "text-foreground/60 hover:text-foreground"
        }`}
        aria-disabled={currentPage === 1}
      >
        ←
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
            page === currentPage
              ? "bg-[#E74C3C] text-white"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createPageURL(Math.min(totalPages, currentPage + 1))}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === totalPages
            ? "text-foreground/30 pointer-events-none"
            : "text-foreground/60 hover:text-foreground"
        }`}
        aria-disabled={currentPage === totalPages}
      >
        →
      </Link>
    </div>
  );
}

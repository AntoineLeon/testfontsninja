"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function ArrowLeft({ disabled }: { disabled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.73333 4L2 7.73333L5.73333 11.4667"
        stroke={disabled ? "var(--arrow-disabled)" : "var(--text-deactivated)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7.73334H13.9333"
        stroke={disabled ? "var(--arrow-disabled)" : "var(--text-deactivated)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ disabled }: { disabled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2 11.4667L13.9333 7.73334L10.2 4.00001"
        stroke={disabled ? "var(--arrow-disabled)" : "var(--text-deactivated)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9333 7.73334L1.99999 7.73334"
        stroke={disabled ? "var(--arrow-disabled)" : "var(--text-deactivated)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
    <div className="flex items-center justify-start gap-2 mt-4">
      <Link
        href={createPageURL(Math.max(1, currentPage - 1))}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === 1 ? "pointer-events-none" : ""
        }`}
        aria-disabled={currentPage === 1}
      >
        <ArrowLeft disabled={currentPage === 1} />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
            page === currentPage
              ? "bg-[var(--button-primary)] text-white"
              : "text-[var(--text-deactivated)] hover:text-foreground"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createPageURL(Math.min(totalPages, currentPage + 1))}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === totalPages ? "pointer-events-none" : ""
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ArrowRight disabled={currentPage === totalPages} />
      </Link>
    </div>
  );
}

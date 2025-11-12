import Link from "next/link";

interface FontCardProps {
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

export function FontCard({
  url,
  name,
  totalFonts,
  foundry,
  price,
  images,
}: FontCardProps) {
  return (
    <Link
      href={url}
      className="block bg-[var(--card-bg)] rounded-[32px] p-10 hover:shadow-lg transition-shadow"
    >
      <div className="h-[140px] mb-4">
        <div
          dangerouslySetInnerHTML={{ __html: images.alphabet.svg }}
          className="[&_path]:fill-current [&>svg]:h-[140px] [&>svg]:w-auto"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm leading-tight mb-1">{name}</h3>
          <p className="text-xs text-foreground/60">{foundry.name}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-foreground/60 leading-tight mb-1">
            {price ? price.formatedPrice : "From $19"}
          </p>
          <p className="text-xs text-foreground/60">{totalFonts} styles</p>
        </div>
      </div>
    </Link>
  );
}

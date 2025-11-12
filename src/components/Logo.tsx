import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    </Link>
  );
}

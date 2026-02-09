import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Handmade by Roshani"
            width={50}
            height={50}
            className=""
          />
          <span className="text-xl font-serif font-bold text-primary hidden sm:inline">
            Handmade by Roshani
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/gallery"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Gallery
          </Link>
          <Link
            href="/#contact"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

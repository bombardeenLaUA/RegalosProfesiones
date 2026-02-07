import { ExternalLink, ShoppingBag } from "lucide-react";

const AMAZON_TAG = "giftgenius-21";

interface AmazonCtaButtonProps {
  slug: string;
  displayName: string;
  /** Variante compacta para Hero, extendida para sección de productos */
  variant?: "hero" | "grid";
}

export function buildAmazonSearchUrl(slug: string): string {
  const query = encodeURIComponent(`regalos para ${slug}`);
  return `https://www.amazon.es/s?k=${query}&tag=${AMAZON_TAG}`;
}

export default function AmazonCtaButton({ slug, displayName, variant = "grid" }: AmazonCtaButtonProps) {
  const url = buildAmazonSearchUrl(slug);
  const text = `Ver todos los regalos para ${displayName} en Amazon`;

  const baseClasses =
    "inline-flex items-center justify-center gap-3 rounded-2xl font-bold text-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]";

  const variantClasses =
    variant === "hero"
      ? "w-full max-w-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-5 text-lg"
      : "w-full max-w-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-5 text-base";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={`${baseClasses} ${variantClasses}`}
    >
      <ShoppingBag className="h-6 w-6 flex-shrink-0" aria-hidden />
      <span>{text}</span>
      <ExternalLink className="h-5 w-5 flex-shrink-0" aria-hidden />
    </a>
  );
}

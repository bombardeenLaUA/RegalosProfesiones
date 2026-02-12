"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { trackShare } from "@/hooks/use-analytics";

interface ShareCategoryButtonProps {
  slug: string;
  displayName: string;
}

export default function ShareCategoryButton({
  slug,
  displayName,
}: ShareCategoryButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `${process.env.NEXT_PUBLIC_SITE_URL || "https://giftgenius.es"}/regalos/${slug}`;

    try {
      await navigator.clipboard.writeText(url);
      trackShare("copy_link", "categoria");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: abrir diálogo de compartir nativo si existe
      if (navigator.share) {
        try {
          await navigator.share({
            title: `Regalos para ${displayName}`,
            url,
            text: `Ideas de regalos para ${displayName}`,
          });
          trackShare("native_share", "categoria");
        } catch {
          // Usuario canceló
        }
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
      aria-label="Copiar enlace"
    >
      <Share2 className="h-4 w-4" />
      {copied ? "¡Enlace copiado!" : "Copiar enlace"}
    </button>
  );
}

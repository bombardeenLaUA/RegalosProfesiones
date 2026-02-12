"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { trackShare } from "@/hooks/use-analytics";

interface ShareIconProps {
  slug: string;
  displayName: string;
}

export default function ShareIcon({ slug, displayName }: ShareIconProps) {
  const [toast, setToast] = useState(false);

  const handleShare = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `${process.env.NEXT_PUBLIC_SITE_URL || "https://giftgenius.es"}/regalos/${slug}`;

    // 1. Intentar Web Share API primero (móviles: WhatsApp, Instagram, etc.)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `Regalos para ${displayName}`,
          url,
          text: `Ideas de regalos para ${displayName}`,
        });
        trackShare("native_share", "categoria");
        return;
      } catch (err) {
        // Usuario canceló o error: caer a clipboard
      }
    }

    // 2. Fallback: copiar al portapapeles (desktop)
    try {
      await navigator.clipboard.writeText(url);
      trackShare("copy_link", "categoria");
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch {
      // Clipboard no disponible
    }
  };

  return (
    <div className="relative inline-flex shrink-0">
      <button
        type="button"
        onClick={handleShare}
        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        aria-label="Compartir"
      >
        <Share2 className="h-4 w-4" />
      </button>
      {toast && (
        <span
          className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-800 px-3 py-1.5 text-xs text-white shadow-lg"
          role="status"
        >
          Enlace copiado
        </span>
      )}
    </div>
  );
}

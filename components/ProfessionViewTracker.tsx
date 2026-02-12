"use client";

import { useEffect } from "react";
import { trackProfessionView } from "@/hooks/use-analytics";

interface ProfessionViewTrackerProps {
  slug: string;
  title: string;
}

export default function ProfessionViewTracker({
  slug,
  title,
}: ProfessionViewTrackerProps) {
  useEffect(() => {
    trackProfessionView(slug, title);
  }, [slug, title]);

  return null;
}

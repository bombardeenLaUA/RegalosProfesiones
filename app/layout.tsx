import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PriceDisclaimer from "@/components/PriceDisclaimer";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://giftgenius.es"),
  title: {
    default: "GiftGenius - Encuentra el regalo perfecto por profesión",
    template: "%s | GiftGenius",
  },
  description:
    "Guía de regalos útiles y herramientas profesionales para cada sector. Sin clichés, solo lo que realmente necesitan.",
  openGraph: {
    title: "GiftGenius",
    description: "Ideas de regalos expertos para cada profesión.",
    type: "website",
    locale: "es_ES",
    // Next.js usa automáticamente app/opengraph-image.png si existe
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-VTC5MCCQXY"} />
          <GoogleTagManager gtmId="GTM-PSDFBXLQ" />
          <Navbar />
          <PriceDisclaimer />
          <div className="flex justify-center w-full pt-6 pb-4 bg-amber-50 dark:bg-slate-900 border-0">
            <ThemeToggle />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

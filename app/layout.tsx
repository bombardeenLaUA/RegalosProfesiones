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
  // URL absoluta necesaria para que WhatsApp y redes muestren la imagen de previsualización
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://giftgenius.es"),
  title: {
    default: "GiftGenius - Regalos Perfectos por Profesión",
    template: "%s | GiftGenius",
  },
  description:
    "Ideas reales para gente real. Encuentra el regalo que un profesional realmente usará.",
  openGraph: {
    title: "GiftGenius - Regalos Perfectos por Profesión",
    description: "Ideas reales para gente real. Encuentra el regalo que un profesional realmente usará.",
    type: "website",
    locale: "es_ES",
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
          <div className="flex justify-center w-full pt-8 pb-4 bg-amber-50 dark:bg-slate-900 border-0">
            <ThemeToggle />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

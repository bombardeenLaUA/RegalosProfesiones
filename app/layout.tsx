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
    default: "GiftGenius - Ideas de Regalos Originales por Profesión y Hobby",
    template: "%s | GiftGenius",
  },
  description:
    "Ideas de regalo por profesión, seleccionadas a mano. Arquitectos, programadores, cocineros, gamers y más. Sin algoritmos, con criterio.",
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
          {/* Fondo sólido igual al inicio del Hero: amber-50 (claro) / slate-900 (oscuro). Toggle centrado en móvil y PC */}
          <div className="flex justify-center items-center pt-8 pb-0 bg-amber-50 dark:bg-slate-900">
            <ThemeToggle />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

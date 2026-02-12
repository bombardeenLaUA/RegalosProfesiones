import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PriceDisclaimer from "@/components/PriceDisclaimer";
import Footer from "@/components/Footer";

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
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <GoogleAnalytics gaId="G-VTC5MCCQXY" />
        <GoogleTagManager gtmId="GTM-PSDFBXLQ" />
        <Navbar />
        <PriceDisclaimer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

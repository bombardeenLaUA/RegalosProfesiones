import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        {/* Google Tag Manager - script se inyecta en head automáticamente */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSDFBXLQ');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSDFBXLQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <GoogleAnalytics gaId="G-VTC5MCCQXY" />
        <Navbar />
        <PriceDisclaimer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

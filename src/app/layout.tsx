import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--head" });
const inter = Inter({ subsets: ["latin"], variable: "--body" });

export const metadata: Metadata = {
  title: "Balogh Krisztián | Villanyszerelő Budapest és környékén",
  description: "Megbízható villanyszerelő lakossági és ipari munkákhoz Budapesten és környékén. Gyors kiszállás, precíz kivitelezés, garanciával."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          src="https://statisztika.bdsystem.hu/script.js"
          data-website-id="8255307d-4a64-4fc7-808a-773a8ceda900"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

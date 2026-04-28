import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--head" });
const inter = Inter({ subsets: ["latin"], variable: "--body" });

export const metadata: Metadata = {
  title: "Balogh Krisztián — Villanyszerelő mester",
  description: "Megbízható villanyszerelő mester Budapesten. 12 éves tapasztalat, MVM-engedély, garancia minden munkára."
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
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balogh Krisztian Weboldal",
  description: "Node.js alapú weboldal scaffold Coolify és PostgreSQL támogatással"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}

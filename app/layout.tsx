import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "dorksense",
  description:
    "dorksense — a neobrutalist sensory playground engineered with saturated energy, motion, and curiosity."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} bg-ink text-acid antialiased selection:bg-bubble selection:text-ink`}
      >
        {children}
      </body>
    </html>
  );
}

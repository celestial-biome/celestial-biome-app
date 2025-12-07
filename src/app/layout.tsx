import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { TopNav } from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Celestial Biome | Unified Ops",
  description: "Next.js/Tailwind starter for the Celestial Biome unified observability console."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Providers>
          <TopNav />
          <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

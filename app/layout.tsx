import type { Metadata } from "next";
import { Inter } from "next/font/google";

import constructMetadata from "@/lib/metadata";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-full`}>{children}</body>
    </html>
  );
}

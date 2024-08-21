import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slider Web Sr-Pipa",
  description: "Slider Web Sr-Pipa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` text-gray-400 ${inter.className}`}>{children}</body>
    </html>
  );
}

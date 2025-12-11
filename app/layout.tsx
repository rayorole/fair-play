import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Arabic,
  Inter,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAGDEMPT PROMOTIONS",
  description:
    "TAGDEMPT PROMOTIONS - شركة متخصصة في الترقية العقارية والاستثمار والمشاريع العقارية.",
  verification: {
    google: "Ms-XBfHVPAp1bx5LEmtUPT2reDn18382n1ASW4DwXog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arabic.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-slate-900">
        <Navbar />

        <main>{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
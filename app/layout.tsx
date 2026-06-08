import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handmade by Roshani - Artisan Crochet",
  description:
    "Beautiful handmade crochet creations including clothing, accessories, and home decor",
  generator: "v0.app",
  openGraph: {
    title: "Handmade by Roshani - Artisan Crochet",
    description:
      "Beautiful handmade crochet creations including clothing, accessories, and home decor",
    images: [
      {
        url: "/logo.jpg",
        width: 400,
        height: 400,
        alt: "Handmade by Roshani Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handmade by Roshani - Artisan Crochet",
    description:
      "Beautiful handmade crochet creations including clothing, accessories, and home decor",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={
        {
          "--font-cormorant": cormorant.style.fontFamily,
          "--font-lora": lora.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <meta name="apple-mobile-web-app-title" content="Handmade" />
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}

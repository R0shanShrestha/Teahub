import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/assets/logo/teahub.png",
  },
  title: "Tea Hub — A Perfect Place to Relax",
  description:
    "Tea Hub is a cozy local tea shop in Kakarvitta jhapa, Nepal. Handcrafted teas brewed slowly with premium leaves and whole spices. Come visit us.",
  keywords: ["tea shop", "Tea Hub", "Kakarvitta jhapa", "Nepal", "milk tea", "herbal tea"],
  openGraph: {
    title: "Tea Hub — A Perfect Place to Relax",
    description: "Handcrafted teas brewed slowly with premium leaves and whole spices. A cozy spot in Kakarvitta jhapa, Nepal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

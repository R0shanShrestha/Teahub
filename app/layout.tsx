import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tea Hub — A Perfect Place to Relax",
  description:
    "Tea Hub is a cozy local tea shop in Itahari, Nepal. Handcrafted teas brewed slowly with premium leaves and whole spices. Come visit us.",
  keywords: ["tea shop", "Tea Hub", "Itahari", "Nepal", "milk tea", "herbal tea"],
  openGraph: {
    title: "Tea Hub — A Perfect Place to Relax",
    description: "Handcrafted teas brewed slowly with premium leaves and whole spices. A cozy spot in Itahari, Nepal.",
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

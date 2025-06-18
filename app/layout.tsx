import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal", "italic"],
  fallback: ["Arial", "Helvetica", "sans-serif"]
});

export const metadata: Metadata = {
  title: "Logos Botanicals",
  description: "High Quality Medical Cannabinoids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-merriweather">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-merriweather antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Julian Canales",
    template: "%s | Julian Canales",
  },
  description:
    "Personal website for Julian Canales — AI systems, engineering, projects, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-gb-bg0 text-gb-fg1 antialiased">
        {children}
      </body>
    </html>
  );
}

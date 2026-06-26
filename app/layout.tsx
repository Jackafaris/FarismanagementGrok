import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "sonner";
import { company, featuredProperty, propertyLabel } from "../lib/property";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${company.name} | ${featuredProperty.address} Rental`,
  description: `Rent ${propertyLabel}. ${featuredProperty.bedrooms} bed, ${featuredProperty.bathrooms} bath, ${featuredProperty.sqft.toLocaleString()} sq ft. Contact ${company.name}.`,
  openGraph: {
    title: `${company.name} — ${featuredProperty.address}`,
    description: company.tagline,
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
        <Toaster position="top-center" richColors closeButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LocalBusinessSchema from "@/components/local-business-schema";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Adult Day Habilitation & Home Care in Newark, NJ`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "adult day habilitation Newark NJ",
    "DDD day program New Jersey",
    "home care agency Newark NJ",
    "respite care New Jersey",
    "developmental disabilities support Newark",
    "Essex County adult day program",
    "Mankind Care",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | Adult Day Habilitation & Home Care in Newark, NJ`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} | Adult Day Habilitation & Home Care in Newark, NJ`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  formatDetection: {
    telephone: true,
  },
  other: {
    "geo.placename": "Newark, New Jersey",
    "geo.region": "US-NJ",
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

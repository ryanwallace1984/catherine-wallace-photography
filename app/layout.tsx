import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Catherine Wallace Photography",
  description:
    "Documenting real moments between you and your loved ones. Lifestyle & documentary photographer based in Port Moody, BC. Coming soon.",
  keywords: [
    "photographer",
    "Port Moody",
    "BC",
    "family photographer",
    "lifestyle photographer",
    "documentary",
    "wedding photographer",
    "maternity",
    "newborn",
  ],
  authors: [{ name: "Catherine Wallace" }],
  openGraph: {
    title: "Catherine Wallace Photography",
    description:
      "Documenting real moments between you and your loved ones. Coming soon.",
    siteName: "Catherine Wallace Photography",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catherine Wallace Photography",
    description: "Documenting real moments between you and your loved ones.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-black antialiased">{children}</body>
    </html>
  );
}

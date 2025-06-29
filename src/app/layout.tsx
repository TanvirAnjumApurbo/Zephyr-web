import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zephyr-web.vercel.app'),
  title: "Zephyr Weather App - Experience Weather Like Never Before",
  description:
    "Beautiful weather app with real-time updates, global coverage, and 24-hour forecasts. Download Zephyr for accurate weather predictions and stunning visualizations.",
  keywords: [
    "weather app",
    "weather forecast",
    "real-time weather",
    "weather radar",
    "mobile app",
    "android app",
    "weather updates",
    "meteorology",
  ],
  authors: [{ name: "Tanvir Anjum Apurbo" }],
  creator: "Tanvir Anjum Apurbo",
  publisher: "Zephyr Weather App",
  openGraph: {
    title: "Zephyr Weather App - Experience Weather Like Never Before",
    description:
      "Beautiful weather app with real-time updates, global coverage, and 24-hour forecasts.",
    url: "https://zephyr-web.vercel.app",
    siteName: "Zephyr Weather App",
    images: [
      {
        url: "/icon/zephyr-icon.png",
        width: 512,
        height: 512,
        alt: "Zephyr Weather App Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zephyr Weather App - Experience Weather Like Never Before",
    description:
      "Beautiful weather app with real-time updates, global coverage, and 24-hour forecasts.",
    images: ["/icon/zephyr-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://zephyr-web.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

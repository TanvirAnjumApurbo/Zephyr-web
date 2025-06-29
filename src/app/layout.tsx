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
  metadataBase: new URL('https://zephyr-self.vercel.app'),
  title: "Zephyr - Beautiful Weather App",
  description: "Real-time weather updates with beautiful UI and 24h forecast. Download now!",
  icons: {
    icon: '/icon/zephyr-icon.png',
    shortcut: '/icon/zephyr-icon.png',
    apple: '/icon/zephyr-icon.png',
  },
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
    title: "Zephyr - Beautiful Weather App",
    description: "Real-time weather updates with beautiful UI and 24h forecast. Download now!",
    url: "https://zephyr-self.vercel.app/",
    siteName: "Zephyr App",
    images: [
      {
        url: "https://zephyr-self.vercel.app/icon/zephyr-icon.png",
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
    title: "Zephyr - Beautiful Weather App",
    description: "Real-time weather updates with beautiful UI and 24h forecast.",
    images: ["https://zephyr-self.vercel.app/icon/zephyr-icon.png"],
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
    canonical: "https://zephyr-self.vercel.app",
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

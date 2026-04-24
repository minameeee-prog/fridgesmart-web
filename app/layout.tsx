import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fridgesmartapp.com"),
  title: "FridgeSmart App — Scan Your Fridge, Reduce Food Waste & Get AI Recipes",
  description:
    "FridgeSmart (also searched as Fridge Smart or FridgeSmart App) is an AI-powered app that helps you scan your fridge, track expiration dates, get alerts before food goes bad, and create recipes from ingredients you already have.",
  keywords: [
    "FridgeSmart",
    "Fridge Smart",
    "FridgeSmart App",
    "food tracking app",
    "fridge inventory app",
    "expiration tracking app",
    "reduce food waste",
    "AI recipe app",
    "meal planning app",
    "Scan my Fridge app",
    "Pantry Scan app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FridgeSmart App — Track Your Fridge, Reduce Food Waste & Get AI Recipes",
    description:
      "Scan your fridge, track expiration dates, get food reminders, and turn ingredients you already have into real meals.",
    url: "https://fridgesmartapp.com",
    siteName: "FridgeSmart",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FridgeSmart App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FridgeSmart App — Track Your Fridge, Reduce Food Waste & Get AI Recipes",
    description:
      "Scan your fridge, track expiration dates, get food reminders, and turn ingredients you already have into real meals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TYK752TL26"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TYK752TL26');
          `}
        </Script>
      </body>
    </html>
  );
}

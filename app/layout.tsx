import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FridgeSmart App — Scan Your Fridge, Reduce Food Waste & Get AI Recipes",
  description:
    "FridgeSmart (also known as Fridge Smart) is an AI-powered app that tracks your fridge, alerts you before food expires, and creates recipes from what you already have. Waste less. Save more. Decide faster.",

  keywords: [
    "FridgeSmart",
    "Fridge Smart",
    "FridgeSmart app",
    "food tracking app",
    "reduce food waste",
    "AI recipe generator",
    "fridge inventory app",
    "grocery list app",
    "fridge inventory app",
    "food waste app",
    "expiration tracker app",
    "pantry inventory app",
    "kitchen organization app",
    "meal planning app",
    "recipe app with ingredients you have",
    "smart grocery list",
    "save money on groceries",
  ],

  metadataBase: new URL("https://fridgesmartapp.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "FridgeSmart App — Track Your Fridge & Reduce Food Waste",
    description:
      "Scan your fridge, track expiration dates, and get AI-powered recipes instantly with FridgeSmart.",
    url: "https://fridgesmartapp.com",
    siteName: "FridgeSmart",
    images: [
      {
        url: "/og-image.png", // make sure this exists
        width: 1200,
        height: 630,
        alt: "FridgeSmart App",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FridgeSmart App — Track Your Fridge & Reduce Food Waste",
    description:
      "Your fridge isn’t empty… you just don’t know what’s in it. Scan, track, and cook smarter.",
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
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://fridgesmartapp.com';
const siteName = 'FridgeSmart';
const title = 'FridgeSmart | Waste less. Save more. Decide faster.';
const description =
  'FridgeSmart helps households track food, catch expiring items, reduce waste, and cook from what they already have. Organize your fridge, save money, and shop smarter.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | FridgeSmart',
  },
  description,
  applicationName: siteName,
  keywords: [
    'fridge inventory app',
    'food waste app',
    'expiration tracker app',
    'pantry inventory app',
    'kitchen organization app',
    'meal planning app',
    'recipe app with ingredients you have',
    'smart grocery list',
    'save money on groceries',
    'FridgeSmart',
  ],
  authors: [{ name: 'FridgeSmart' }],
  creator: 'FridgeSmart',
  publisher: 'FridgeSmart',
  category: 'food',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: '/assets/og-fridgesmart.jpg',
        width: 1200,
        height: 630,
        alt: 'FridgeSmart app preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/og-fridgesmart.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'amazon-associates-link-disclosure':
      'As an Amazon Associate, FridgeSmart earns from qualifying purchases.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F4EE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FridgeSmart',
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    sameAs: [
      'https://apps.apple.com/us/app/fridgesmart-app/id6755790933',
      'https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart',
    ],
  };

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'FridgeSmart',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS, Android',
    description,
    url: siteUrl,
    downloadUrl: [
      'https://apps.apple.com/us/app/fridgesmart-app/id6755790933',
      'https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart',
    ],
    publisher: {
      '@type': 'Organization',
      name: 'FridgeSmart',
    },
  };

  return (
    <html lang="en">
  <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
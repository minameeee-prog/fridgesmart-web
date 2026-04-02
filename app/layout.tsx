import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FridgeSmart | Waste less. Save more. Decide faster.',
  description:
    'FridgeSmart helps households track food, catch expiring items, and cook from what they already have.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
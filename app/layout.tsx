import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FridgeSmart | Smart kitchen companion',
  description: 'Marketing site plus web dashboard for FridgeSmart. Log in with the same account you use in the app, track expiry, get recipes, and shop smarter.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

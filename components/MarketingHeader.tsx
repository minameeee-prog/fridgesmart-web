import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Dashboard', href: '#dashboard-preview' },
  { label: 'Kitchen Picks', href: '#kitchen-picks' },
  { label: 'Download', href: '#download' }
];

export default function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <BrandLogo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-brand-ink/80 transition hover:text-brand-olive">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-brand-ink/10 px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-brand-olive hover:text-brand-olive">
            Log in
          </Link>
          <Link href="/signup" className="rounded-full bg-brand-olive px-5 py-2.5 text-sm font-bold text-white shadow-card transition hover:bg-brand-oliveDark">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

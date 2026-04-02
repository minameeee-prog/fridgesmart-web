import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-black text-brand-ink">FridgeSmart</div>
          <p className="mt-2 max-w-xl text-sm text-brand-ink/70">
            Track what you have, catch items before they expire, get recipes from what is already in your kitchen, and shop smarter.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-brand-ink/70">
          <Link href="/login">Log in</Link>
          <Link href="/signup">Sign up</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933" target="_blank" rel="noreferrer">App Store</a>
        </div>
      </div>
    </footer>
  );
}

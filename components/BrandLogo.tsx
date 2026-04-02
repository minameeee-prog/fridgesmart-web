import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/60 bg-white shadow-card">
        <Image src="/assets/fridgesmart-logo.png" alt="FridgeSmart logo" fill className="object-contain p-2" />
      </div>
      <div>
        <div className="text-lg font-black text-brand-ink">FridgeSmart</div>
        <div className="text-xs font-semibold text-brand-olive">Smart kitchen companion</div>
      </div>
    </Link>
  );
}

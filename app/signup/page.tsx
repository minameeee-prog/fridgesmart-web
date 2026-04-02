import AuthCard from '@/components/AuthCard';
import BrandLogo from '@/components/BrandLogo';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-cream px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <BrandLogo />
          <Link href="/" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-brand-ink shadow-card">Back to home</Link>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="inline-flex rounded-full bg-brand-softMint px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-olive">Sign up</div>
            <h1 className="mt-4 max-w-2xl text-5xl font-black text-brand-ink">Use the same FridgeSmart account across web and mobile.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-ink/75">
              The public homepage brings new users in. The private dashboard helps existing users see what they have, what is expiring, and what to cook next.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {'My Fridge':'Inventory at a glance','Expiring Soon':'Catch items before waste','Recipes':'Cook from what you already have'}.items()
            </div>
          </div>
          <AuthCard mode="signup" />
        </div>
      </div>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();

    supabase.auth.getSession().then(({ data }) => {
      setStatus(data.session ? 'authenticated' : 'unauthenticated');
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setStatus(session ? 'authenticated' : 'unauthenticated');
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (status === 'loading') {
    return <div className="rounded-[2rem] bg-white p-8 text-sm font-semibold text-brand-ink shadow-card">Checking your FridgeSmart session...</div>;
  }

  if (status === 'unauthenticated') {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-card">
        <h2 className="text-2xl font-black text-brand-ink">Log in to view your dashboard</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-brand-ink/70">
          This web dashboard uses the same FridgeSmart account as the mobile app. Sign in to see your fridge, expiring items, and recipes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/login" className="rounded-full bg-brand-olive px-5 py-3 text-sm font-bold text-white">Log in</Link>
          <Link href="/signup" className="rounded-full border border-black/10 px-5 py-3 text-sm font-bold text-brand-ink">Create account</Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

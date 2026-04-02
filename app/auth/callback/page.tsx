'use client';

import { useEffect } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

export default function AuthCallbackPage() {
  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.auth.getSession().finally(() => {
      window.location.href = '/dashboard';
    });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-cream px-6">
      <div className="rounded-[2rem] bg-white p-8 text-center shadow-soft">
        <h1 className="text-2xl font-black text-brand-ink">Finishing your login...</h1>
        <p className="mt-3 text-sm text-brand-ink/70">You will be redirected to your FridgeSmart dashboard.</p>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

type Mode = 'login' | 'signup' | 'forgot';

export default function AuthCard({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const heading = mode === 'login' ? 'Welcome back' : mode === 'signup' ? 'Create your account' : 'Reset your password';
  const subheading = mode === 'login'
    ? 'Use the same FridgeSmart account from your mobile app.'
    : mode === 'signup'
      ? 'Start tracking your fridge from web and mobile.'
      : 'Enter your email and we will send you a reset link.';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const supabase = getSupabaseBrowserClient();

      if (mode === 'login') {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        setMessage('Logged in successfully. Open /dashboard to continue.');
        window.location.href = '/dashboard';
      }

      if (mode === 'signup') {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;
        setMessage('Account created. Check your email if confirmation is enabled in Supabase.');
      }

      if (mode === 'forgot') {
        const redirectTo = `${window.location.origin}/login`;
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
        if (resetError) throw resetError;
        setMessage('Password reset email sent.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="mb-6 inline-flex rounded-full bg-brand-softMint px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-olive">
        FridgeSmart account
      </div>
      <h1 className="text-3xl font-black text-brand-ink">{heading}</h1>
      <p className="mt-3 text-sm leading-6 text-brand-ink/70">{subheading}</p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-bold text-brand-ink">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-2xl border border-black/10 bg-brand-cream px-4 py-3 text-sm outline-none transition focus:border-brand-olive"
            placeholder="you@example.com"
          />
        </div>

        {mode !== 'forgot' && (
          <div>
            <label className="mb-2 block text-sm font-bold text-brand-ink">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-2xl border border-black/10 bg-brand-cream px-4 py-3 text-sm outline-none transition focus:border-brand-olive"
              placeholder="Enter your password"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-brand-olive px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-oliveDark disabled:opacity-70"
        >
          {loading ? 'Please wait...' : mode === 'login' ? 'Log in' : mode === 'signup' ? 'Create account' : 'Send reset email'}
        </button>
      </form>

      {message && <p className="mt-4 rounded-2xl bg-brand-softMint px-4 py-3 text-sm font-medium text-brand-oliveDark">{message}</p>}
      {error && <p className="mt-4 rounded-2xl bg-[#FFF0EA] px-4 py-3 text-sm font-medium text-[#B45309]">{error}</p>}

      <div className="mt-6 text-sm text-brand-ink/70">
        {mode === 'login' && (
          <div className="flex flex-col gap-2">
            <Link href="/forgot-password" className="font-semibold text-brand-olive">Forgot password?</Link>
            <span>Need an account? <Link href="/signup" className="font-semibold text-brand-olive">Sign up</Link></span>
          </div>
        )}
        {mode === 'signup' && (
          <span>Already have an account? <Link href="/login" className="font-semibold text-brand-olive">Log in</Link></span>
        )}
        {mode === 'forgot' && (
          <span>Remembered it? <Link href="/login" className="font-semibold text-brand-olive">Back to login</Link></span>
        )}
      </div>
    </div>
  );
}

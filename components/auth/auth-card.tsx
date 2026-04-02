'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type AuthMode = 'login' | 'signup' | 'forgot';

type AuthCardProps = {
  mode: AuthMode;
};

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.805 10.023H12v3.955h5.617c-.242 1.27-.966 2.346-2.057 3.07v2.55h3.32c1.944-1.79 2.925-4.43 2.925-7.575 0-.668-.06-1.308-.17-2Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.655 0 4.88-.88 6.507-2.402l-3.32-2.55c-.922.618-2.103.985-3.187.985-2.448 0-4.523-1.653-5.263-3.875H3.305v2.63A9.997 9.997 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.737 14.158A5.997 5.997 0 0 1 6.442 12c0-.75.13-1.477.295-2.158v-2.63H3.305A9.997 9.997 0 0 0 2 12c0 1.61.385 3.135 1.305 4.788l3.432-2.63Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.967c1.444 0 2.742.497 3.762 1.473l2.82-2.82C16.875 3.03 14.65 2 12 2a9.997 9.997 0 0 0-8.695 5.212l3.432 2.63C7.477 7.62 9.552 5.967 12 5.967Z"
      />
    </svg>
  );
}

export default function AuthCard({ mode }: AuthCardProps) {
  const [showPassword, setShowPassword] = useState(false);

  const content = useMemo(() => {
    if (mode === 'login') {
      return {
        eyebrow: 'Welcome back',
        title: 'Log in to your FridgeSmart account',
        subtitle: 'See what you have, what is expiring, and what to cook next.',
        buttonLabel: 'Log in',
        footerText: "Don't have an account?",
        footerLinkLabel: 'Create one',
        footerHref: '/signup',
        showGoogle: true,
      };
    }

    if (mode === 'signup') {
      return {
        eyebrow: 'Start free',
        title: 'Create your FridgeSmart account',
        subtitle: 'Track groceries, reduce waste, and make faster food decisions.',
        buttonLabel: 'Create account',
        footerText: 'Already have an account?',
        footerLinkLabel: 'Log in',
        footerHref: '/login',
        showGoogle: true,
      };
    }

    return {
      eyebrow: 'Reset access',
      title: 'Reset your password',
      subtitle: 'Enter your email and we will send you a reset link.',
      buttonLabel: 'Send reset link',
      footerText: 'Remembered your password?',
      footerLinkLabel: 'Back to login',
      footerHref: '/login',
      showGoogle: false,
    };
  }, [mode]);

  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="mx-auto max-w-md">
        <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-peach">
          {content.eyebrow}
        </div>

        <h2 className="mt-3 text-3xl font-black leading-tight text-brand-ink">
          {content.title}
        </h2>

        <p className="mt-3 text-base leading-7 text-brand-ink/70">{content.subtitle}</p>

        {content.showGoogle && (
          <>
            <a
              href="/api/auth/google"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-ink/10 bg-white px-5 py-3 text-base font-bold text-brand-ink shadow-card transition hover:translate-y-[-1px]"
            >
              <GoogleIcon />
              Continue with Google
            </a>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-brand-ink/10" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-ink/40">
                Or use email
              </span>
              <div className="h-px flex-1 bg-brand-ink/10" />
            </div>
          </>
        )}

        <form className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold text-brand-ink">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-brand-ink/10 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-peach"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-brand-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-brand-ink/10 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-peach"
            />
          </div>

          {mode !== 'forgot' && (
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-bold text-brand-ink">
                Password
              </label>

              <div className="flex items-center gap-2 rounded-2xl border border-brand-ink/10 bg-white px-4 py-3 focus-within:border-brand-peach">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-brand-ink outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-sm font-bold text-brand-olive"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          )}

          {mode === 'login' && (
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-brand-ink/70">
                <input type="checkbox" className="rounded border-brand-ink/20" />
                Remember me
              </label>

              <Link href="/forgot-password" className="text-sm font-bold text-brand-peach">
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-brand-peach px-5 py-3 text-base font-black text-white shadow-card transition hover:translate-y-[-1px]"
          >
            {content.buttonLabel}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-brand-ink/70">
          {content.footerText}{' '}
          <Link href={content.footerHref} className="font-black text-brand-peach">
            {content.footerLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
import AuthCard from '@/components/auth/auth-card';

const bullets = [
  {
    title: 'Get back into your account',
    text: 'Reset your password and return to your saved inventory.',
  },
  {
    title: 'Keep your kitchen organized',
    text: 'Your food tracking and recipe flow will be right where you left it.',
  },
  {
    title: 'Back to faster meal decisions',
    text: 'Jump back into FridgeSmart without starting over.',
  },
];

export default function ForgotPasswordPage() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-brand-cream px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <BrandLogo />
          <Link
            href="/"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-brand-ink shadow-card"
          >
            Back to home
          </Link>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="inline-flex rounded-full bg-brand-softMint px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-olive">
              Forgot password
            </div>

            <h1 className="mt-4 max-w-2xl text-5xl font-black text-brand-ink">
              Reset your password.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-ink/75">
              Enter your email and we’ll send you a link to reset your password.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: 'My Fridge', description: 'Inventory at a glance' },
                { title: 'Expiring Soon', description: 'Catch items before waste' },
                { title: 'Recipes', description: 'Cook from what you already have' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-brand-cream p-4"
                >
                  <div className="text-sm font-black text-brand-ink">{item.title}</div>
                  <div className="mt-1 text-sm text-brand-ink/70">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          <AuthCard mode="forgot" />
=======
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
        <div className="max-w-2xl">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">
            Reset access
          </div>

          <h1 className="mt-3 text-4xl font-black leading-tight text-brand-ink">
            Reset your password and get back to FridgeSmart
          </h1>

          <p className="mt-4 text-base leading-7 text-brand-ink/75">
            Enter your email and we will send you a password reset link so you can get back to your
            inventory, expiring items, and recipe recommendations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {bullets.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/80 p-4 shadow-card">
                <div className="text-sm font-black text-brand-ink">{item.title}</div>
                <div className="mt-1 text-sm text-brand-ink/70">{item.text}</div>
              </div>
            ))}
          </div>
>>>>>>> aee9070 (Update homepage, auth pages, Android link, and favicon)
        </div>
      </section>

      <AuthCard mode="forgot" />
    </div>
  );
}
import AuthCard from '@/components/auth/auth-card';

const bullets = [
  {
    title: 'Save money on groceries',
    text: 'Use more of what you buy before it expires.',
  },
  {
    title: 'Make meal decisions faster',
    text: 'Stop guessing and start cooking from real ingredients.',
  },
  {
    title: 'Build better kitchen habits',
    text: 'Track what you have and waste less over time.',
  },
];

export default function SignupPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
        <div className="max-w-2xl">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">
            Start free
          </div>

          <h1 className="mt-3 text-4xl font-black leading-tight text-brand-ink">
            Create your account and make your kitchen smarter
          </h1>

          <p className="mt-4 text-base leading-7 text-brand-ink/75">
            FridgeSmart helps you track food, reduce waste, and turn ingredients you already have
            into real meal ideas.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {bullets.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/80 p-4 shadow-card">
                <div className="text-sm font-black text-brand-ink">{item.title}</div>
                <div className="mt-1 text-sm text-brand-ink/70">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthCard mode="signup" />
    </div>
  );
}
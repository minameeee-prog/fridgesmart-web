import AuthCard from '@/components/auth/auth-card';

const bullets = [
  {
    title: 'Track what is in your kitchen',
    text: 'Keep groceries, leftovers, and pantry items organized in one place.',
  },
  {
    title: 'Catch food before waste',
    text: 'See what is expiring soon before it gets forgotten.',
  },
  {
    title: 'Cook with what you already have',
    text: 'Get recipe ideas based on ingredients you already own.',
  },
];

export default function LoginPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
        <div className="max-w-2xl">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">
            Welcome back
          </div>

          <h1 className="mt-3 text-4xl font-black leading-tight text-brand-ink">
            Log in and pick up right where you left off
          </h1>

          <p className="mt-4 text-base leading-7 text-brand-ink/75">
            See your inventory, check what is expiring next, and get meal ideas from what is
            already in your kitchen.
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

      <AuthCard mode="login" />
    </div>
  );
}
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
          <h1 className="text-4xl font-black text-brand-ink">Log in</h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {bullets.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/80 p-4">
                <div className="font-bold">{item.title}</div>
                <div className="text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthCard mode="login" />
    </div>
  );
}
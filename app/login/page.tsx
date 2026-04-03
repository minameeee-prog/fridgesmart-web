import AuthCard from '@/components/auth/auth-card';

export default function LoginPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
        <h1 className="text-4xl font-black text-brand-ink">Log in</h1>
      </section>

      <AuthCard mode="login" />
    </div>
  );
}
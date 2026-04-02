import { expiringItems, fridgeStats, recipeCards } from '@/lib/site-data';

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">Dashboard home</div>
            <h1 className="mt-2 text-4xl font-black text-brand-ink">Welcome back to FridgeSmart</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-brand-ink/75">This is where logged-in users should quickly see what they have, what is expiring, and what they can cook next.</p>
          </div>
          <div className="rounded-full bg-[#FFF5E8] px-4 py-2 text-sm font-black text-brand-peach">Web companion dashboard</div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fridgeStats.map((stat) => (
            <div key={stat.label} className={`rounded-[1.5rem] ${stat.tone} p-5 shadow-card`}>
              <div className="text-3xl font-black text-brand-ink">{stat.value}</div>
              <div className="mt-1 text-sm font-semibold text-brand-ink/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">Recipes ready now</div>
          <div className="mt-5 space-y-4">
            {recipeCards.map((recipe) => (
              <div key={recipe.title} className="rounded-[1.5rem] bg-white p-5 shadow-card">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xl font-black text-brand-ink">{recipe.title}</div>
                    <div className="mt-1 text-sm text-brand-ink/70">Uses {recipe.uses}</div>
                  </div>
                  <div className="rounded-full bg-brand-softMint px-3 py-1 text-xs font-black text-brand-olive">{recipe.ready}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#FFF6EF] p-8 shadow-soft">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-peach">Expiring soon</div>
          <div className="mt-5 space-y-4">
            {expiringItems.map((item) => (
              <div key={item.name} className="rounded-[1.5rem] bg-white p-5 shadow-card">
                <div className="text-lg font-black text-brand-ink">{item.name}</div>
                <div className="mt-1 text-sm text-brand-ink/70">{item.qty}</div>
                <div className="mt-3 inline-flex rounded-full bg-[#FFF5E8] px-3 py-1 text-xs font-black text-brand-peach">{item.window}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

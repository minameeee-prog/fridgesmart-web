import Link from 'next/link';

const appStoreUrl = 'https://apps.apple.com/us/app/fridgesmart-app/id6755790933';
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart';

const highlights = [
  {
    title: 'Know what you already have',
    text: 'Stop rebuying food that is already sitting in your fridge, freezer, or pantry.',
  },
  {
    title: 'Catch items before they expire',
    text: 'See what needs attention now so less food gets wasted every week.',
  },
  {
    title: 'Cook faster with what is already there',
    text: 'Get recipe ideas from your real ingredients instead of guessing what to make.',
  },
];

const featureCards = [
  {
    eyebrow: 'Smart inventory',
    title: 'See your food at a glance',
    text: 'FridgeSmart helps you keep track of groceries, leftovers, and pantry staples in one place.',
  },
  {
    eyebrow: 'Expiration tracking',
    title: 'Use food before it goes bad',
    text: 'Spot expiring items early and make better decisions before food turns into waste.',
  },
  {
    eyebrow: 'AI recipe help',
    title: 'Turn ingredients into meals',
    text: 'Chef Lumi helps you figure out what to cook with what you already have.',
  },
  {
    eyebrow: 'Busy household friendly',
    title: 'Spend less time deciding',
    text: 'Perfect for families, meal preppers, and anyone tired of forgetting what is in the fridge.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-brand-ink">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
          <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-12">
            <div>
              <div className="inline-flex rounded-full bg-[#FFF0E8] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-peach">
                Built for busy households
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-brand-ink md:text-6xl">
                Waste less. Save more. Decide faster.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/75">
                FridgeSmart helps you track what is in your fridge, catch expiring items before
                they go bad, and turn ingredients you already have into real meals.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-peach px-6 py-4 text-base font-black text-white shadow-card transition hover:translate-y-[-1px]"
                >
                  Download on the App Store
                </a>

                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-brand-ink/10 bg-white px-6 py-4 text-base font-black text-brand-ink shadow-card transition hover:translate-y-[-1px]"
                >
                  Get it on Google Play
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] bg-[#F7F9F2] p-5 shadow-card">
                    <div className="text-sm font-black text-brand-olive">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-brand-ink/70">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F7F9F2] p-6">
              <div className="rounded-[1.75rem] bg-white p-6 shadow-card">
                <div className="text-sm font-black uppercase tracking-[0.14em] text-brand-olive">
                  What FridgeSmart helps you do
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-[1.25rem] bg-brand-softMint p-4">
                    <div className="text-3xl font-black text-brand-ink">42</div>
                    <div className="mt-1 text-sm font-semibold text-brand-ink/70">
                      Items tracked in one place
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] bg-[#FFF3EA] p-4">
                    <div className="text-3xl font-black text-brand-ink">7</div>
                    <div className="mt-1 text-sm font-semibold text-brand-ink/70">
                      Items expiring soon
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] bg-brand-softBlue p-4">
                    <div className="text-3xl font-black text-brand-ink">18</div>
                    <div className="mt-1 text-sm font-semibold text-brand-ink/70">
                      Recipes ready with current ingredients
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] bg-brand-softLilac p-4">
                    <div className="text-3xl font-black text-brand-ink">$84</div>
                    <div className="mt-1 text-sm font-semibold text-brand-ink/70">
                      Estimated food saved
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-[#FFF8F3] p-5">
                  <div className="text-sm font-black uppercase tracking-[0.14em] text-brand-peach">
                    Perfect for
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-brand-ink/75">
                    <li>• Families managing weekly groceries</li>
                    <li>• Busy professionals who forget what they bought</li>
                    <li>• Anyone trying to save money and reduce waste</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-brand-peach">
                {card.eyebrow}
              </div>
              <h2 className="mt-3 text-2xl font-black leading-tight text-brand-ink">
                {card.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-brand-ink/70">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-6 lg:px-10">
        <div className="rounded-[2.5rem] bg-white px-6 py-8 shadow-soft lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">
                Ready to make your fridge smarter?
              </div>
              <h2 className="mt-3 text-3xl font-black leading-tight text-brand-ink md:text-4xl">
                Download FridgeSmart and start making better food decisions today.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-brand-ink/75">
                Track inventory, reduce waste, and get meal ideas from the ingredients you already
                have.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-peach px-6 py-4 text-base font-black text-white shadow-card"
              >
                App Store
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-brand-ink/10 bg-white px-6 py-4 text-base font-black text-brand-ink shadow-card"
              >
                Google Play
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-brand-ink/60">
            <Link href="/login" className="hover:text-brand-peach">
              Log in
            </Link>
            <Link href="/signup" className="hover:text-brand-peach">
              Sign up
            </Link>
            <Link href="/forgot-password" className="hover:text-brand-peach">
              Forgot password
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
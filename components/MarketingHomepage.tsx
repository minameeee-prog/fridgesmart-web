import Image from 'next/image';
import Link from 'next/link';
import { fridgeStats, dealProducts, expiringItems, recipeCards } from '@/lib/site-data';
import MarketingHeader from '@/components/MarketingHeader';
import Footer from '@/components/Footer';

function affiliateUrl(href: string) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'fridgesmartapp-20';
  return `${href}&tag=${tag}`;
}

export default function MarketingHomepage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <MarketingHeader />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-olive shadow-card">
              FridgeSmart+ • scan, track, cook, save
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-6xl">
              The marketing site that sells the dream. <span className="text-brand-olive">The dashboard that delivers the utility.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/75">
              Know what is in your fridge, catch items before they expire, get recipes from what you already have, and log in with the same FridgeSmart account you use in the app.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933" target="_blank" rel="noreferrer" className="rounded-full bg-brand-olive px-7 py-4 text-sm font-black text-white shadow-card transition hover:bg-brand-oliveDark">
                Download the App
              </a>
              <Link href="/login" className="rounded-full border border-brand-ink/10 bg-white px-7 py-4 text-sm font-black text-brand-ink shadow-card transition hover:border-brand-olive hover:text-brand-olive">
                Log in to your account
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {fridgeStats.map((stat) => (
                <div key={stat.label} className={`rounded-[1.5rem] ${stat.tone} p-5 shadow-card`}>
                  <div className="text-3xl font-black text-brand-ink">{stat.value}</div>
                  <div className="mt-1 text-sm font-semibold text-brand-ink/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-4 shadow-soft">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-[1.5rem] bg-brand-softMint p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-brand-olive">Home dashboard preview</div>
                    <div className="mt-1 text-2xl font-black text-brand-ink">Track your fridge at a glance</div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-brand-peach shadow-card">Premium</span>
                </div>
                <div className="relative h-[360px] overflow-hidden rounded-[1.25rem] border border-white/70 bg-white">
                  <Image src="/assets/fridgesmart-app-screen.png" alt="FridgeSmart app screen" fill className="object-cover object-top" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-[#FFF5E8] p-5 shadow-card">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-brand-peach">Expiring next</div>
                  <div className="mt-3 space-y-3">
                    {expiringItems.slice(0, 3).map((item) => (
                      <div key={item.name} className="rounded-2xl bg-white px-4 py-3">
                        <div className="font-black text-brand-ink">{item.name}</div>
                        <div className="text-sm font-medium text-brand-ink/70">{item.qty} • {item.window}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-brand-softLilac p-5 shadow-card">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-brand-ink/70">Chef Lumi says</div>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/85">
                    “You already have enough for dinner. Use what is on hand first, then restock only what you need.”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white">
                      <Image src="/assets/chef-lumi-avatar.png" alt="Chef Lumi avatar" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-black text-brand-ink">Chef Lumi</div>
                      <div className="text-xs font-semibold text-brand-ink/70">Smart recipes + shopping support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="max-w-2xl">
              <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-olive">How it works</div>
              <h2 className="mt-3 text-4xl font-black text-brand-ink">A marketing-first homepage with an app companion behind login.</h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                FridgeSmart should welcome new visitors with a clean story, then let existing users log in and see what they have, what is expiring, and what they can cook next.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['1', 'Scan what you have', 'Barcodes, receipts, quick images, and item confirmation.'],
                ['2', 'Track expiry automatically', 'Spot what needs attention before it gets wasted.'],
                ['3', 'Cook from what is already there', 'Get smarter recipe suggestions with Chef Lumi.'],
                ['4', 'Log in on web or mobile', 'Use the same account across your app and website.']
              ].map(([num, title, desc]) => (
                <div key={title} className="rounded-[1.5rem] bg-brand-cream p-5 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-olive text-sm font-black text-white">{num}</div>
                  <h3 className="mt-4 text-xl font-black text-brand-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard-preview" className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
              <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-olive">Dashboard preview</div>
              <h2 className="mt-3 text-4xl font-black text-brand-ink">Show users the value before they log in.</h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                The homepage should preview the product with app-style cards, not dump visitors straight into a private dashboard. That keeps conversion strong while still showing what the product actually does.
              </p>
              <div className="mt-6 space-y-4">
                {recipeCards.map((recipe) => (
                  <div key={recipe.title} className="rounded-[1.5rem] bg-white p-5 shadow-card">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-lg font-black text-brand-ink">{recipe.title}</div>
                        <div className="mt-1 text-sm text-brand-ink/70">Uses {recipe.uses}</div>
                      </div>
                      <span className="rounded-full bg-brand-softMint px-3 py-1 text-xs font-black text-brand-olive">{recipe.ready}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#FFF6EF] p-8 shadow-soft">
              <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Private user portal</div>
              <h2 className="mt-3 text-4xl font-black text-brand-ink">Once they log in, give them real utility.</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ['My Fridge', 'See inventory, quantities, and categories.'],
                  ['Expiring Soon', 'Prioritize what to use next.'],
                  ['Recipes', 'Cook from what is already on hand.'],
                  ['Shopping List', 'Restock smarter and waste less.']
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[1.5rem] bg-white p-5 shadow-card">
                    <div className="text-lg font-black text-brand-ink">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-brand-ink/70">{desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/dashboard" className="rounded-full bg-brand-olive px-5 py-3 text-sm font-black text-white">Open dashboard</Link>
                <Link href="/signup" className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-brand-ink">Create account</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="kitchen-picks" className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="max-w-2xl">
              <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-olive">Chef Lumi’s kitchen picks</div>
              <h2 className="mt-3 text-4xl font-black text-brand-ink">Useful kitchen finds that make FridgeSmart even more helpful.</h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/75">
                Add a smart recommendations section on the homepage so the website can educate, convert, and monetize. Keep it useful, not pushy.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {dealProducts.map((product) => (
                <div key={product.title} className="rounded-[1.75rem] bg-brand-cream p-5 shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-4xl">{product.emoji}</div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-brand-peach shadow-card">{product.badge}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-brand-ink">{product.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/70">{product.description}</p>
                  <a href={affiliateUrl(product.href)} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-brand-olive px-5 py-3 text-sm font-black text-white transition hover:bg-brand-oliveDark">
                    View on Amazon
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold text-brand-ink/55">
              FridgeSmart may earn from qualifying purchases through affiliate links.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] bg-brand-softLilac p-8 shadow-soft">
              <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-olive">Meet Chef Lumi</div>
              <h2 className="mt-3 text-4xl font-black text-brand-ink">A smarter kitchen assistant built into the FridgeSmart experience.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-brand-ink/75">
                Chef Lumi helps users make meals from what they already have, suggests what to use first, and supports a smarter shopping flow instead of random overbuying.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Recipe generation', 'Use-it-first suggestions', 'Multi-language support', 'Smarter shopping prompts'].map((item) => (
                  <div key={item} className="rounded-full bg-white px-4 py-2 text-sm font-black text-brand-ink shadow-card">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-[1.5rem] bg-brand-cream">
                  <Image src="/assets/owner-avatar.png" alt="Owner avatar" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-peach">Built for busy households</div>
                  <div className="mt-1 text-2xl font-black text-brand-ink">Waste less. Save more. Decide faster.</div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-brand-ink/75">
                This site should feel like FridgeSmart from the first second: friendly, premium, useful, and closely aligned with the app your users already know.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-brand-softMint p-5">
                <div className="text-sm font-black text-brand-olive">Suggested final flow</div>
                <ul className="mt-3 space-y-2 text-sm font-medium text-brand-ink/75">
                  <li>• Public homepage sells the value</li>
                  <li>• Login and signup connect to Supabase</li>
                  <li>• Private dashboard shows inventory, recipes, and expiring items</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-6 py-8 pb-16">
          <div className="rounded-[2rem] bg-brand-ink px-8 py-10 text-white shadow-soft md:px-12">
            <div className="max-w-3xl">
              <div className="text-sm font-black uppercase tracking-[0.22em] text-brand-orange">Download + login</div>
              <h2 className="mt-3 text-4xl font-black">One brand. Two experiences. One FridgeSmart account.</h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                Use the homepage to convert new visitors. Use the dashboard to keep existing users engaged. Keep both tied together with the same Supabase account system as the mobile app.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933" target="_blank" rel="noreferrer" className="rounded-full bg-brand-olive px-6 py-3 text-sm font-black text-white transition hover:bg-[#8bb433]">
                Download on the App Store
              </a>
              <Link href="/login" className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white/90 transition hover:bg-white/10">
                Log in on the web
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

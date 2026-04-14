export default function HomePage() {
  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Rewards", href: "#rewards" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Amazon Picks", href: "#amazon-picks" },
    { label: "Download", href: "#download" },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Scan your fridge",
      description:
        "Snap a photo of your fridge, groceries, or receipt to quickly capture what you already have.",
    },
    {
      step: "2",
      title: "Track freshness automatically",
      description:
        "Get alerts for items that may expire soon so you can use food before it gets wasted.",
    },
    {
      step: "3",
      title: "Cook smarter with Chef Lumi",
      description:
        "Get recipe ideas from different cuisines based on the ingredients already in your kitchen.",
    },
    {
      step: "4",
      title: "Restock with less guesswork",
      description:
        "Build a smarter shopping plan from what is missing, what is running low, and what you actually use.",
    },
  ];

  const rewardTiers = [
    {
      badge: "Start fast",
      orders: "1 qualifying order",
      reward: "$3 reward",
      note: "A low-friction first step to help new users get started.",
    },
    {
      badge: "Build the habit",
      orders: "5 qualifying orders",
      reward: "$10 reward",
      note: "A strong mid-point reward that keeps people coming back.",
    },
    {
      badge: "Top tier",
      orders: "10 qualifying orders",
      reward: "$25 gift card",
      note: "Best for users who make FridgeSmart part of their weekly routine.",
    },
  ];

  const testimonials = [
    {
      name: "Monique R.",
      meta: "Busy mom, New Jersey",
      quote:
        "I scanned my fridge, caught items about to expire, and used Chef Lumi to make dinner without another last-minute store run.",
    },
    {
      name: "Daniel T.",
      meta: "Meal prep user, Texas",
      quote:
        "The expiration alerts helped me waste less, and the shopping suggestions made restocking way easier than guessing.",
    },
    {
      name: "Sarah K.",
      meta: "Working professional, Florida",
      quote:
        "I like that it turns what I already have into actual meal ideas from different cuisines instead of generic suggestions.",
    },
  ];

  const amazonPicks = [
    {
      title: "Healthy Pantry Staples Bundle",
      subtitle: "Best for weekly restocking",
      description:
        "A curated essentials bundle idea for rice, oats, canned beans, olive oil, pasta, and shelf-stable basics.",
      href: "https://www.amazon.com/s?k=rice+oats+canned+beans+olive+oil+pasta&tag=fridgesmartap-20",
      cta: "Shop pantry bundle",
    },
    {
      title: "Quick Breakfast Restock",
      subtitle: "Best for busy mornings",
      description:
        "A practical breakfast bundle idea for cereal, oatmeal, peanut butter, granola bars, and healthy add-ons.",
      href: "https://www.amazon.com/s?k=cereal+oatmeal+peanut+butter+granola+bars&tag=fridgesmartap-20",
      cta: "Shop breakfast bundle",
    },
    {
      title: "Easy Dinner Essentials",
      subtitle: "Best for fast meal planning",
      description:
        "A practical dinner bundle idea for pasta, sauce, broth, seasonings, grains, and common weeknight staples.",
      href: "https://www.amazon.com/s?k=pasta+sauce+broth+seasonings+grains&tag=fridgesmartap-20",
      cta: "Shop dinner bundle",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f2937]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="FridgeSmart logo"
              className="h-11 w-11 rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-bold tracking-tight">FridgeSmart</p>
              <p className="text-xs text-[#6b7280]">
                Waste less. Save more. Decide faster.
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#374151] transition hover:text-[#111827]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Download App
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-4 py-2 text-sm font-medium text-[#374151] shadow-sm">
              Your fridge isn&apos;t empty — you just don&apos;t know what&apos;s in it yet.
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Scan your fridge.
              <br />
              Track expiration.
              <br />
              Cook from what you already have.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
              FridgeSmart helps you see what is in your fridge, catch items
              before they expire, get recipe ideas from different cuisines, and
              restock more intentionally through smart shopping suggestions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                Get FridgeSmart
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] bg-white px-6 py-3 text-base font-semibold text-[#111827] transition hover:bg-[#f9fafb]"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-[#6b7280]">Scan & detect</p>
                <p className="mt-1 text-lg font-bold text-[#111827]">
                  Fridge + receipt support
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-[#6b7280]">Stay ahead</p>
                <p className="mt-1 text-lg font-bold text-[#111827]">
                  Expiration alerts
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-[#6b7280]">Cook smarter</p>
                <p className="mt-1 text-lg font-bold text-[#111827]">
                  Recipes from many cuisines
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto flex max-w-md items-center justify-center">
              <div className="relative w-[290px] rounded-[2.5rem] border-[10px] border-[#111827] bg-black p-2 shadow-2xl">
                <div className="absolute left-1/2 top-2 h-5 w-28 -translate-x-1/2 rounded-full bg-[#111827]" />
                <div className="overflow-hidden rounded-[2rem] bg-white">
                  <img
                    src="/hero-phone.png"
                    alt="FridgeSmart app preview"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-8 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 lg:block">
              <p className="text-sm font-semibold text-[#111827]">Chef Lumi says</p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                &ldquo;You already have chicken, broccoli, rice, garlic, and soy
                sauce.&rdquo;
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                Try a quick stir-fry tonight instead of ordering out.
              </p>
            </div>

            <div className="absolute -right-2 bottom-8 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 lg:block">
              <p className="text-sm font-semibold text-[#111827]">
                Expiring soon
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                Milk, spinach, and strawberries may need attention soon.
              </p>
              <p className="mt-2 text-sm font-medium text-[#111827]">
                Use them before they get forgotten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm text-[#6b7280]">Built for real kitchens</p>
            <p className="text-base font-semibold text-[#111827]">
              Made for busy households
            </p>
          </div>
          <div>
            <p className="text-sm text-[#6b7280]">Smarter food decisions</p>
            <p className="text-base font-semibold text-[#111827]">
              Less waste, less guesswork
            </p>
          </div>
          <div>
            <p className="text-sm text-[#6b7280]">Helpful AI guidance</p>
            <p className="text-base font-semibold text-[#111827]">
              Recipes and restocking support
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b45309]">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            A simpler way to manage food, meals, and shopping
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4b5563]">
            Quickly see what you have so you stop guessing and start using food
            before it expires.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff7ed] text-lg font-bold text-[#b45309]">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REWARDS */}
      <section id="rewards" className="bg-[#fffaf2]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b45309]">
                Rewards
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                Get rewarded for shopping through FridgeSmart
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b5563]">
                You&apos;re simply shopping as you normally would. There&apos;s
                nothing extra to buy — just use FridgeSmart to plan your shopping
                and get rewarded for it.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-2xl font-bold text-[#111827]">3–5 days</p>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Claims reviewed within 3–5 business days
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-2xl font-bold text-[#111827]">47+</p>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Rewards already claimed
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-2xl font-bold text-[#111827]">Simple</p>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Submit proof by email and receive your reward digitally
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-[#fcd9a5] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827]">
                  Reward terms
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[#4b5563]">
                  <p>
                    Eligible purchases include items ordered through FridgeSmart
                    recommendations.
                  </p>
                  <p>
                    To claim a reward, email your order confirmation to{" "}
                    <a
                      href="mailto:support@fridgesmartapp.com"
                      className="font-semibold text-[#b45309] underline underline-offset-4"
                    >
                      support@fridgesmartapp.com
                    </a>
                    .
                  </p>
                  <p>
                    Please include the email used with your FridgeSmart account
                    so claims can be reviewed quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {rewardTiers.map((tier) => (
                <div
                  key={tier.orders}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#b45309]">
                      {tier.badge}
                    </span>
                    <p className="text-sm font-medium text-[#6b7280]">
                      {tier.orders}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[#111827]">
                    {tier.reward}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4b5563]">
                    {tier.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMAZON PICKS */}
      <section id="amazon-picks" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b45309]">
            Amazon Picks
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            Curated shopping ideas that match real kitchen needs
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4b5563]">
            Instead of dumping you into random search pages, FridgeSmart should
            feel more intentional. These curated shopping ideas are organized by
            purpose so users know exactly what they are clicking.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {amazonPicks.map((pick) => (
            <div
              key={pick.title}
              className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[#b45309]">
                {pick.subtitle}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#111827]">
                {pick.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#4b5563]">
                {pick.description}
              </p>
              <a
                href={pick.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {pick.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-[#d1d5db] bg-[#fcfcfc] p-4 text-sm leading-7 text-[#6b7280]">
          Replace these Amazon links with your final curated product links,
          storefront links, or hand-picked product pages whenever you are ready.
          The structure is already set up so you can swap the URLs later without
          redesigning the page.
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b45309]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Built with feedback from real households
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4b5563]">
              Real trust matters more than generic marketing language.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl bg-[#f9fafb] p-6 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-base leading-8 text-[#374151]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-[#111827]">{item.name}</p>
                  <p className="text-sm text-[#6b7280]">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#111827] px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                Download now
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Start scanning, planning, and saving with FridgeSmart
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                Use what you already have, catch what is expiring, explore meals
                from different cuisines, and restock with more confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="https://apps.apple.com/us/app/fridgesmart-app/id6755790933"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#111827] transition hover:bg-white/90"
              >
                Download on the App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-[#f7f4ee]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="FridgeSmart logo"
                className="h-10 w-10 rounded-xl object-contain"
              />
              <div>
                <p className="font-bold text-[#111827]">FridgeSmart</p>
                <p className="text-sm text-[#6b7280]">
                  Waste less. Save more. Decide faster.
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b7280]">
              FridgeSmart helps households see what they have, use food before it
              expires, and make better meal and shopping decisions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-[#111827]">Quick links</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[#6b7280]">
                <a href="#how-it-works" className="hover:text-[#111827]">
                  How it works
                </a>
                <a href="#rewards" className="hover:text-[#111827]">
                  Rewards
                </a>
                <a href="#amazon-picks" className="hover:text-[#111827]">
                  Amazon Picks
                </a>
                <a href="#download" className="hover:text-[#111827]">
                  Download
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#111827]">Support</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-[#6b7280]">
                <a
                  href="mailto:support@fridgesmartapp.com"
                  className="hover:text-[#111827]"
                >
                  support@fridgesmartapp.com
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111827]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111827]"
                >
                  TikTok
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111827]"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

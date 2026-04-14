"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Rewards", href: "#rewards" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Amazon Picks", href: "#amazon-picks" },
    { label: "Download", href: "#download" },
  ];

  const heroScreens = [
    {
      src: "/hero-main.png",
      label: "Home",
      alt: "FridgeSmart home screen",
    },
    {
      src: "/hero-scan.png",
      label: "Scan",
      alt: "FridgeSmart scan screen",
    },
    {
      src: "/hero-results.png",
      label: "Results",
      alt: "FridgeSmart results screen",
    },
    {
      src: "/hero-shopping.png",
      label: "Shopping",
      alt: "FridgeSmart shopping screen",
    },
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
      title: "Track freshness",
      description:
        "Get alerts for items that may expire soon so you can use food before it gets wasted.",
    },
    {
      step: "3",
      title: "Cook with Chef Lumi",
      description:
        "Get recipe ideas from different cuisines based on the ingredients already in your kitchen.",
    },
    {
      step: "4",
      title: "Restock smarter",
      description:
        "Plan shopping around what is missing, what is running low, and what you actually use.",
    },
  ];

  const rewardTiers = [
    {
      badge: "Start fast",
      orders: "1 qualifying order",
      reward: "$3 reward",
      note: "A low-friction first step that makes the first order easier.",
    },
    {
      badge: "Build the habit",
      orders: "5 qualifying orders",
      reward: "$10 reward",
      note: "A strong mid-tier reward to keep users coming back.",
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
      title: "Healthy Pantry Staples",
      subtitle: "Weekly restock idea",
      description:
        "A curated essentials direction for rice, oats, canned beans, olive oil, pasta, and shelf-stable basics.",
      href: "https://www.amazon.com/s?k=rice+oats+canned+beans+olive+oil+pasta&tag=fridgesmartap-20",
      cta: "Shop pantry picks",
    },
    {
      title: "Quick Breakfast Restock",
      subtitle: "Busy mornings",
      description:
        "A practical breakfast direction for cereal, oatmeal, peanut butter, granola bars, and healthy add-ons.",
      href: "https://www.amazon.com/s?k=cereal+oatmeal+peanut+butter+granola+bars&tag=fridgesmartap-20",
      cta: "Shop breakfast picks",
    },
    {
      title: "Easy Dinner Essentials",
      subtitle: "Fast meal planning",
      description:
        "A practical dinner direction for pasta, sauce, broth, seasonings, grains, and common weeknight staples.",
      href: "https://www.amazon.com/s?k=pasta+sauce+broth+seasonings+grains&tag=fridgesmartap-20",
      cta: "Shop dinner picks",
    },
  ];

  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % heroScreens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroScreens.length]);

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f2937]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="FridgeSmart logo"
              className="h-11 w-11 rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-bold tracking-tight text-[#111827]">
                FridgeSmart
              </p>
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
                className="text-sm font-medium text-[#4b5563] transition hover:text-[#111827]"
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-4 py-2 text-sm font-medium text-[#374151] shadow-sm">
              Your fridge isn&apos;t empty — you just don&apos;t know what&apos;s in it yet.
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[0.95] tracking-tight text-[#0f172a] sm:text-5xl lg:text-7xl">
              Scan your fridge.
              <br />
              Track expiration.
              <br />
              Cook from what you
              <br />
              already have.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4b5563]">
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
                <p className="text-sm text-[#6b7280]">Scan &amp; detect</p>
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

          <div className="relative flex items-center justify-center">
            <div className="relative mx-auto">
              <div className="relative h-[620px] w-[300px] rounded-[2.8rem] border-[10px] border-[#111827] bg-black p-2 shadow-2xl">
                <div className="absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-[#111827]" />

                <div className="relative h-full overflow-hidden rounded-[2.2rem] bg-white">
                  {heroScreens.map((screen, index) => (
                    <img
                      key={screen.src}
                      src={screen.src}
                      alt={screen.alt}
                      className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ${
                        index === activeScreen
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[1.02]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2">
                {heroScreens.map((screen, index) => (
                  <button
                    key={screen.label}
                    type="button"
                    aria-label={`Show ${screen.label} screen`}
                    onClick={() => setActiveScreen(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeScreen
                        ? "w-8 bg-[#111827]"
                        : "w-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-3 text-center text-sm font-medium text-[#6b7280]">
                {heroScreens[activeScreen].label}
              </div>
            </div>

            <div className="absolute left-0 top-24 hidden lg:block">
  <div className="flex items-start gap-3">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5">
      <img
        src="/chef-lumi.png"
        alt="Chef Lumi"
        className="h-12 w-12 rounded-full object-cover"
      />
    </div>

    <div className="relative max-w-[260px] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
      <div className="absolute -left-2 top-5 h-4 w-4 rotate-45 bg-white ring-l-1 ring-t-1 ring-black/5" />
      <p className="text-sm font-semibold text-[#111827]">Chef Lumi</p>
      <p className="mt-2 text-sm leading-6 text-[#4b5563]">
        <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#94a3b8] align-bottom animate-[typing_4.5s_steps(60,end)_infinite,blink_0.8s_step-end_infinite]">
          You already have chicken, broccoli, rice, garlic, and soy sauce. Try a quick stir-fry tonight instead of ordering out.
        </span>
      </p>
    </div>
  </div>
</div>

            <div className="absolute right-0 top-12 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 lg:block">
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

      {/* TRUST STRIP */}
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
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
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
              <h3 className="text-xl font-semibold text-[#111827]">
                {item.title}
              </h3>
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
                nothing extra to buy — just use FridgeSmart to plan your
                shopping and get rewarded for it.
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
                    Include the email used with your FridgeSmart account so
                    claims can be reviewed faster.
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
      <section
        id="amazon-picks"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b45309]">
            Amazon Picks
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            Curated shopping ideas for real kitchen needs
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4b5563]">
            Organize your shopping by purpose so users know what they are
            clicking instead of landing on vague, random search pages.
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
              Trust comes from real use, clear value, and repeatable results.
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
      <section
        id="download"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
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
              FridgeSmart helps households see what they have, use food before
              it expires, and make better meal and shopping decisions.
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
                <a href="#" className="hover:text-[#111827]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#111827]">
                  TikTok
                </a>
                <a href="#" className="hover:text-[#111827]">
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

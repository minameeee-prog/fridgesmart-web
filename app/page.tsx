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

  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % heroScreens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f2937]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-10 w-10" />
            <div>
              <p className="font-bold text-[#111827]">FridgeSmart</p>
              <p className="text-xs text-[#6b7280]">
                Waste less. Save more. Decide faster.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="bg-[#111827] text-white px-4 py-2 rounded-full">
            Download App
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 px-4 py-16 items-center">
        {/* LEFT */}
        <div>
          <div className="mb-4 bg-white px-4 py-2 rounded-full inline-block text-sm">
            Your fridge isn&apos;t empty — you just don&apos;t know what&apos;s in it yet.
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#0f172a]">
            Scan your fridge.
            <br />
            Track expiration.
            <br />
            Cook from what you
            <br />
            already have.
          </h1>

          <p className="mt-6 text-lg text-[#4b5563]">
            FridgeSmart helps you track what is in your fridge, catch items
            before they expire, and turn ingredients into real meals.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-[#111827] text-white px-6 py-3 rounded-full">
              Get FridgeSmart
            </button>
            <button className="border px-6 py-3 rounded-full">
              See how it works
            </button>
          </div>
        </div>

        {/* RIGHT - PHONE */}
        <div className="relative flex justify-center">
          <div className="relative h-[620px] w-[300px] rounded-[2.8rem] border-[10px] border-[#111827] bg-black p-2 shadow-2xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-28 bg-[#111827] rounded-full" />

            <div className="relative h-full overflow-hidden rounded-[2rem] bg-white">
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

          {/* DOTS */}
          <div className="absolute bottom-[-30px] flex gap-2">
            {heroScreens.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full ${
                  index === activeScreen
                    ? "w-6 bg-black"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

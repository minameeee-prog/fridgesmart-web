"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BellRing,
  Bot,
  CheckCircle2,
  ChefHat,
  Clock3,
  Loader2,
  ScanLine,
  Send,
  ShoppingCart,
  Sparkles,
  Star,
  Wallet,
  X,
} from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/fridgesmart-app/id6755790933";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart";
const API_ENDPOINT = "/api/chef-lumi-demo";

type Msg = { role: "user" | "assistant"; text: string };

type HeroSlide = {
  src: string;
  alt: string;
  ingredients: string;
  followup: string;
  freshness: string;
  savings: string;
};

const heroSlides: HeroSlide[] = [
  {
    src: "/hero-main.png",
    alt: "FridgeSmart main app screen",
    ingredients:
      "You already have chicken, broccoli, rice, garlic, and soy sauce.",
    followup:
      "Make a quick stir-fry tonight. Your spinach expires today, so add it now and save the chicken breast for tomorrow’s lunch bowl.",
    freshness: "84% freshness score",
    savings: "$84",
  },
  {
    src: "/hero-scan.png",
    alt: "FridgeSmart scan screen",
    ingredients:
      "I found eggs, spinach, mushrooms, tortillas, and cheese in your fridge.",
    followup:
      "You can turn that into a fast breakfast wrap and use your spinach before it gets forgotten.",
    freshness: "Scan complete",
    savings: "$52",
  },
  {
    src: "/hero-results.png",
    alt: "FridgeSmart results screen",
    ingredients:
      "These items need attention first: spinach, milk, and chicken breast.",
    followup:
      "Use those before buying more. Chef Lumi can build dinner from what should be used first.",
    freshness: "Items prioritized",
    savings: "$67",
  },
  {
    src: "/hero-shopping.png",
    alt: "FridgeSmart shopping screen",
    ingredients:
      "You’re low on eggs, milk, and spinach, but you already have enough for tonight.",
    followup:
      "FridgeSmart helps you fill only what is actually needed instead of shopping blindly.",
    freshness: "Smart shopping ready",
    savings: "$73",
  },
];

const howItWorks = [
  {
    icon: ScanLine,
    title: "Scan your fridge",
    description:
      "Quickly see what you already have so you stop guessing and start using food before it gets forgotten.",
  },
  {
    icon: BellRing,
    title: "Catch expiration early",
    description:
      "Get reminders before food goes bad so you waste less and save more every week.",
  },
  {
    icon: ChefHat,
    title: "Get meals instantly",
    description:
      "Chef Lumi suggests what to cook from your real ingredients and helps you decide faster.",
  },
];

const features = [
  {
    icon: Clock3,
    title: "Expiration alerts",
    description: "Know what should be used first and what can wait.",
  },
  {
    icon: Bot,
    title: "Chef Lumi help",
    description:
      "Get meal suggestions, cuisine options, and faster dinner decisions.",
  },
  {
    icon: ShoppingCart,
    title: "Smarter shopping",
    description:
      "Fill in what you actually need instead of buying blindly.",
  },
  {
    icon: Wallet,
    title: "Save more money",
    description:
      "Use what you already bought before spending on duplicates or takeout.",
  },
];

const testimonials = [
  {
    name: "Patel Dav",
    title: "Highly recommended app for Smart Grocery Management",
    date: "Feb 10",
    rating: 5,
    quote:
      "FridgeSmart has completely changed the way I manage my kitchen and groceries. The app is incredibly user-friendly and makes it so easy to track what’s in my fridge, monitor expiration dates, and reduce food waste. I love the reminder feature—it helps me use items before they expire, which saves both money and time. The interface is clean and intuitive, so adding and organizing items takes just a few seconds. The smart suggestions and notifications are especially helpful when planning meals or creating shopping lists. Overall, FridgeSmart is a must-have app for anyone who wants to stay organized, save money, and make smarter food decisions.",
  },
  {
    name: "Verenaa2",
    title: "Game changer!",
    date: "Feb 26",
    rating: 5,
    quote:
      "I’ve really been enjoying using FridgeSmart! It makes it so easy to keep track of what’s in my fridge and come up with meals using the ingredients I already have. I love that it helps reduce food waste and reminds me about expiration dates. The app is easy to use, organized, and makes meal planning much less stressful. I definitely recommend it if you’re trying to stay more organized with your groceries and cooking!",
  },
  {
    name: "EB Mike",
    title: "Phenomenal",
    date: "Apr 3",
    rating: 5,
    quote:
      "Such a great app. I’ve always had a problem with inventory, and this makes it so much easier. I can keep track of everything in one place, and it even captures expiration dates so I know what needs to be used first. The recipe options are awesome and very varied. And the best part—it’s free. Highly recommend.",
  },
  {
    name: "Dandouna987",
    title: "Saves me money",
    date: "Mar 1",
    rating: 5,
    quote:
      "Finally, an app that saves me money! The AI scanning is incredibly accurate—it identified my random produce immediately. The Chef Lumi recipes are a lifesaver for using up 'forgotten' ingredients, and the expiration alerts have stopped me from wasting a fortune on groceries. Super clean interface and easy to use. 10/10 recommend.",
  },
];

function AppStoreBadge() {
  return (
    <Link
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-w-[190px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          Download on the
        </div>
        <div className="text-base font-semibold text-slate-950">App Store</div>
      </div>
    </Link>
  );
}

function PlayStoreBadge() {
  return (
    <Link
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-w-[190px] items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-600 px-5 py-3 text-left text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg"
    >
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-emerald-100">
          Get it on
        </div>
        <div className="text-base font-semibold">Google Play</div>
      </div>
    </Link>
  );
}

function ChatBubble({ message }: { message: Msg }) {
  const isAssistant = message.role === "assistant";

  if (isAssistant) {
    return (
      <div className="flex items-end justify-start gap-2">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-emerald-50 ring-1 ring-emerald-100">
          <Image
            src="/chef-lumi.png"
            alt="Chef Lumi"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-[85%] rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm ring-1 ring-emerald-100">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl bg-emerald-600 px-4 py-3 text-sm leading-6 text-white shadow-sm">
        {message.text}
      </div>
    </div>
  );
}

function ChefChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [turns, setTurns] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = useMemo(
    () => [
      "I have chicken, rice, and broccoli",
      "Eggs, spinach, cheese, and tortillas",
      "Ground beef, pasta, garlic, and tomatoes",
    ],
    []
  );

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          text: "Hey 👋 I’m Chef Lumi. Tell me a few things in your fridge and I’ll suggest what you can make.",
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, showCTA]);

  async function send(text?: string) {
    const msg = (text || input).trim();
    if (!msg || loading || showCTA) return;

    const nextTurns = turns + 1;
    const newMessages = [...messages, { role: "user" as const, text: msg }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          messages: newMessages,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data?.reply ||
            "You can make something quick with that, and FridgeSmart can help you use what should be eaten first.",
        },
      ]);

      setTurns(nextTurns);

      if (nextTurns >= 3) {
        setTimeout(() => setShowCTA(true), 300);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            nextTurns >= 3
              ? "I can do this with your full fridge, expiration tracking, and smart shopping inside the app."
              : "You can make something quick with that, and FridgeSmart can help you use what should be eaten first.",
        },
      ]);
      setTurns(nextTurns);
      if (nextTurns >= 3) setShowCTA(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-slate-300 transition hover:scale-[1.02] hover:bg-slate-800"
        aria-label="Open Chef Lumi chat"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-emerald-50 ring-2 ring-white/10">
          <Image
            src="/chef-lumi.png"
            alt="Chef Lumi"
            fill
            className="object-cover"
          />
        </div>
        <span className="hidden pr-1 sm:inline">Ask Chef Lumi</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-[28px] border border-emerald-100 bg-[#f6faf6] shadow-2xl shadow-slate-300">
          <div className="flex items-center justify-between border-b border-emerald-100 bg-white px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                <Image
                  src="/chef-lumi.png"
                  alt="Chef Lumi"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-slate-950">Chef Lumi</div>
                <div className="text-xs text-slate-500">
                  Live demo · 3 free messages
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={listRef}
            className="max-h-[420px] space-y-3 overflow-y-auto p-4"
          >
            {messages.map((m, i) => (
              <ChatBubble key={i} message={m} />
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-slate-500 shadow-sm ring-1 ring-emerald-100">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}

            {showCTA && (
              <div className="rounded-3xl border border-emerald-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-950">
                  Get full access in the app
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Scan your full fridge, track expiration dates, get smarter
                  meal ideas, and build shopping help from what you actually
                  need.
                </p>
                <div className="mt-4 grid gap-3">
                  <Link
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Download on the App Store
                  </Link>
                  <Link
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    Get it on Google Play
                  </Link>
                </div>
              </div>
            )}
          </div>

          {!showCTA && (
            <div className="border-t border-emerald-100 bg-white p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => send(prompt)}
                    className="rounded-full border border-emerald-200 bg-[#f6faf6] px-3 py-2 text-xs font-medium text-emerald-700 transition hover:bg-emerald-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-[#f9fcf9] px-3 py-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder="Type ingredients..."
                  className="h-10 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  onClick={() => send()}
                  disabled={loading || !input.trim()}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default function Page() {
  const [activeHero, setActiveHero] = useState(0);
  const [typedIngredients, setTypedIngredients] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullText = heroSlides[activeHero].ingredients;
    setTypedIngredients("");
    let index = 0;

    const typer = window.setInterval(() => {
      index += 1;
      setTypedIngredients(fullText.slice(0, index));
      if (index >= fullText.length) {
        window.clearInterval(typer);
      }
    }, 22);

    return () => window.clearInterval(typer);
  }, [activeHero]);

  return (
    <>
      <main className="min-h-screen bg-[#f6faf6] text-slate-900">
        <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%),linear-gradient(180deg,#f7fcf8_0%,#eef8f0_100%)]">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-100/60 to-transparent" />

          <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
            <header className="mb-10 rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur md:px-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
                    <Image
                      src="/logo.png"
                      alt="FridgeSmart logo"
                      fill
                      className="object-contain p-1.5"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-base font-semibold tracking-tight">
                      FridgeSmart
                    </div>
                    <div className="text-xs text-slate-500">
                      Scan. Save. Cook smarter.
                    </div>
                  </div>
                </div>

                <nav className="hidden items-center gap-6 md:flex">
                  <a
                    href="#how-it-works"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    How it works
                  </a>
                  <a
                    href="#features"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Features
                  </a>
                  <a
                    href="#chef-lumi"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Chef Lumi
                  </a>
                  <a
                    href="#amazon-picks"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Amazon Picks
                  </a>
                </nav>

                <div className="flex items-center gap-3">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </header>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Your fridge isn’t empty — you just don’t know what’s in it
                  yet.
                </div>

                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Stop losing money to forgotten food.
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  FridgeSmart helps you scan your fridge, track expiration
                  dates, get reminders before food goes bad, and turn what you
                  already have into real meals from different cuisines.
                </p>

                <div className="mt-8 flex flex-wrap gap-4" id="download">
                  <AppStoreBadge />
                  <PlayStoreBadge />
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
                    <div className="text-2xl font-black tracking-tight text-slate-950">
                      $50–$100
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Potential monthly savings from using food before it
                      expires
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
                    <div className="text-2xl font-black tracking-tight text-slate-950">
                      120+
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Early users already organizing meals and reducing waste
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
                    <div className="text-2xl font-black tracking-tight text-slate-950">
                      ~10 sec
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      To start scanning and seeing what needs attention first
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <span>
                      Built for busy households that want to waste less and
                      decide faster
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-emerald-300/30 blur-3xl lg:block" />
                <div className="absolute -right-10 bottom-0 hidden h-40 w-40 rounded-full bg-lime-300/30 blur-3xl lg:block" />

                <div className="relative rounded-[32px] border border-white/70 bg-white/90 p-3 shadow-2xl shadow-emerald-100/80 backdrop-blur">
                  <div className="overflow-hidden rounded-[26px] border border-emerald-100 bg-[#f2faf4]">
                    <div className="flex items-center justify-between border-b border-emerald-100 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white ring-1 ring-emerald-100">
                          <Image
                            src="/logo.png"
                            alt="FridgeSmart"
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">
                            FridgeSmart
                          </div>
                          <div className="text-xs text-slate-500">
                            Live fridge snapshot
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {heroSlides[activeHero].freshness}
                      </div>
                    </div>

                    <div className="grid gap-4 p-4 sm:grid-cols-[0.92fr_1.08fr]">
                      <div className="space-y-4">
                        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                          <div className="mb-3 flex items-center justify-between">
                            <span className="text-sm font-semibold">
                              App preview
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                              {heroSlides[activeHero].alt
                                .replace("FridgeSmart ", "")
                                .replace(" screen", "")}
                            </span>
                          </div>

                          <div className="mx-auto w-[240px]">
                            <div className="relative h-[490px] w-[240px] rounded-[2.5rem] border-[8px] border-slate-950 bg-black p-2 shadow-xl">
                              <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
                              <div className="relative h-full overflow-hidden rounded-[2rem] bg-white">
                                {heroSlides.map((slide, index) => (
                                  <div
                                    key={slide.src}
                                    className={`absolute inset-0 transition-all duration-700 ${
                                      index === activeHero
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-[1.02]"
                                    }`}
                                  >
                                    <Image
                                      src={slide.src}
                                      alt={slide.alt}
                                      fill
                                      className="object-cover object-top"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4 flex items-center justify-center gap-2">
                              {heroSlides.map((slide, index) => (
                                <button
                                  key={slide.src}
                                  type="button"
                                  onClick={() => setActiveHero(index)}
                                  aria-label={`Show ${slide.alt}`}
                                  className={`h-2.5 rounded-full transition-all ${
                                    index === activeHero
                                      ? "w-8 bg-slate-950"
                                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl bg-slate-950 p-4 text-white shadow-sm">
                          <div className="text-xs uppercase tracking-[0.22em] text-emerald-300">
                            Estimated saved
                          </div>
                          <div className="mt-2 text-3xl font-black">
                            {heroSlides[activeHero].savings}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            This month from using what you already had before
                            shopping again.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4" id="chef-lumi">
                        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                              <Image
                                src="/chef-lumi.png"
                                alt="Chef Lumi"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">
                                Chef Lumi
                              </div>
                              <div className="text-xs text-slate-500">
                                AI kitchen assistant
                              </div>
                            </div>
                          </div>

                          <div className="rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-slate-700">
                            <p className="min-h-[84px] font-medium text-slate-900">
                              “{typedIngredients}”
                              <span className="animate-pulse">|</span>
                            </p>
                            <p className="mt-2">
                              {heroSlides[activeHero].followup}
                            </p>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-3">
                              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Cuisine
                              </div>
                              <div className="mt-1 font-semibold">
                                Global recipe ideas
                              </div>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-3">
                              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Smart shopping
                              </div>
                              <div className="mt-1 font-semibold">
                                Fill what is actually needed
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 text-white shadow-sm">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold">
                                Need a few ingredients?
                              </div>
                              <p className="mt-1 text-sm text-emerald-50/90">
                                Build a smarter shopping path from what is low
                                or missing.
                              </p>
                            </div>
                            <a
                              href="#amazon-picks"
                              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                            >
                              Amazon picks
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
          id="how-it-works"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A better system for what is already in your fridge.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              FridgeSmart is built for one outcome: helping you use your food
              before it expires, make meals faster, and shop with less waste.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm shadow-emerald-100/60"
                >
                  <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white" id="features">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Why people use it
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Less waste. Better meals. Smarter shopping.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  This is not another generic food app. It is a practical home
                  tool that helps you track what you have, catch what is
                  expiring, and decide what to cook without the stress.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "See what needs to be used first",
                    "Get reminded before food goes bad",
                    "Turn ingredients into real meals",
                    "Build shopping decisions from your actual kitchen",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-[#f6faf6] px-4 py-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-emerald-100 bg-[#f9fdf9] p-6 shadow-sm"
                    >
                      <div className="inline-flex rounded-2xl bg-white p-3 text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-slate-950">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-emerald-100 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Chef Lumi
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Your calm AI kitchen assistant.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Chef Lumi helps you decide what to make from the food you
                  already have, suggests ideas from different cuisines, and
                  helps reduce the stress of daily meal decisions.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-50"
                  >
                    Download FridgeSmart
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#amazon-picks"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    Explore Amazon Picks
                    <ShoppingCart className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white/10">
                    <Image
                      src="/chef-lumi.png"
                      alt="Chef Lumi avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Chef Lumi</div>
                    <div className="text-sm text-slate-400">
                      Live suggestion preview
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  <div className="rounded-2xl bg-white/5 p-4">
                    You have eggs, spinach, mushrooms, tortillas, and cheese.
                  </div>
                  <div className="rounded-2xl bg-emerald-500/15 p-4 text-emerald-100">
                    Make a breakfast wrap now. Your spinach should be used
                    first. You only need salsa if you want to complete the meal.
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    I can also give you a Mediterranean, Mexican, or
                    high-protein version.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Early feedback
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Built for real kitchens and real routines.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f6faf6] px-4 py-2 text-sm font-medium text-slate-700">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                Focused on saving food, time, and money
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-emerald-100 bg-[#f9fdf9] p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-950">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.date} · {item.name}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {item.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto my-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-yellow-50 shadow-sm">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div>
                <div className="inline-flex items-center rounded-full border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  FridgeSmart Rewards
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Earn up to a $25 Amazon Gift Card
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Complete shopping orders using FridgeSmart recommendations—any items,
                  not just groceries—and send proof of purchase to qualify for rewards.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  You’re simply shopping as you normally would. There’s nothing extra to buy—just
                  use FridgeSmart to plan your shopping and get rewarded for it.
                </p>

                <p className="mt-3 text-sm font-medium text-emerald-700">
                  No extra cost. Just smarter shopping.
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Qualifying orders should reflect normal purchases and not small or test transactions.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/70 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">1. Shop normally</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Use FridgeSmart recommendations for items you already plan to buy.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/70 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">2. Save proof</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Keep your order confirmations, receipts, or purchase screenshots.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/70 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">3. Claim rewards</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Send your proof after qualifying orders and we’ll review your submission.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:support@fridgesmartapp.com?subject=FridgeSmart%20Rewards%20Claim&body=Hi%20FridgeSmart%20team%2C%0A%0AI%E2%80%99d%20like%20to%20submit%20my%20reward%20claim.%0A%0AFridgeSmart%20account%20email%3A%20%0ANumber%20of%20orders%20completed%3A%20%0AOrder%20dates%3A%20%0A%0AI%E2%80%99ve%20attached%20my%20proof%20of%20purchase.%0A"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Claim by Email
                  </a>

                  <a
                    href="#reward-terms"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    View Terms
                  </a>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  Rewards are subject to review. Proof of purchase required. Limit one reward per tier progression. Terms apply.
                </p>
              </div>

              <div className="flex h-full items-center">
                <div className="w-full rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
                  <p className="text-sm font-medium text-emerald-300">Reward Levels</p>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm font-semibold">Starter</p>
                      <p className="mt-1 text-2xl font-bold">3 Orders</p>
                      <p className="mt-1 text-sm text-white/75">$5 Reward</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm font-semibold">Smart Shopper</p>
                      <p className="mt-1 text-2xl font-bold">5 Orders</p>
                      <p className="mt-1 text-sm text-white/75">$10 Reward</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm font-semibold">Power User</p>
                      <p className="mt-1 text-2xl font-bold">10 Orders</p>
                      <p className="mt-1 text-sm text-white/75">$25 Reward</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="reward-terms"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">Reward Terms</h3>

            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                Users may qualify for rewards by completing eligible shopping orders using
                FridgeSmart recommendations and submitting valid proof of purchase for review.
              </p>

              <p>
                Eligible purchases may include any qualifying items and are not limited to groceries.
              </p>

              <p>
                Proof of purchase may include order confirmations, receipts, screenshots,
                or similar documentation that clearly shows the order details.
              </p>

              <p>
                Qualifying orders must represent normal consumer purchases. Small, test,
                repeated, minimal, canceled, refunded, duplicate, or suspicious transactions
                may not be eligible.
              </p>

              <p>
                Limit one reward per tier progression per user. FridgeSmart reserves the right
                to review and approve all submissions.
              </p>

              <p>
                FridgeSmart may modify or end this offer at any time.
              </p>
            </div>
          </div>
        </section>

        <section
          id="amazon-picks"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Amazon Picks
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Smart shopping for what your kitchen actually needs.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              FridgeSmart helps you figure out what you already have, what is
              running low, and what makes sense to reorder instead of buying
              blindly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Kitchen staples",
                text: "Restock the basics you use often without overbuying.",
                query: "kitchen staples groceries",
              },
              {
                title: "Healthy meal add-ons",
                text: "Fill ingredient gaps to complete meals Chef Lumi suggests.",
                query: "healthy grocery essentials",
              },
              {
                title: "Quick dinner helpers",
                text: "Useful add-ons for fast meals on busy nights.",
                query: "quick dinner pantry items",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <Link
                  href={`https://www.amazon.com/s?k=${encodeURIComponent(
                    item.query
                  )}&tag=fridgesmartap-20`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  View Amazon picks
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white shadow-xl sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
                Ready to start?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Scan your fridge. Catch what is expiring. Decide on dinner faster.
              </h2>
              <p className="mt-4 text-lg leading-8 text-emerald-50/95">
                Download FridgeSmart and turn the food you already have into
                better meals, fewer wasted groceries, and smarter shopping
                decisions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>
          </div>
        </section>

        <footer className="border-t border-emerald-100 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-emerald-100 bg-[#f6faf6]">
                <Image
                  src="/logo.png"
                  alt="FridgeSmart logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <div className="font-semibold text-slate-950">FridgeSmart</div>
                <div className="text-sm text-slate-500">
                  Waste less. Save more. Decide faster.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <a href="#how-it-works" className="hover:text-slate-950">
                How it works
              </a>
              <a href="#features" className="hover:text-slate-950">
                Features
              </a>
              <a href="#amazon-picks" className="hover:text-slate-950">
                Amazon Picks
              </a>
              <Link
                href="mailto:support@fridgesmartapp.com"
                className="hover:text-slate-950"
              >
                support@fridgesmartapp.com
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <ChefChat />
    </>
  );
}

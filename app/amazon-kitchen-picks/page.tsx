import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const appStoreUrl = 'https://apps.apple.com/us/app/fridgesmart-app/id6755790933';
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart';

const amazonBaseTag = 'fridgesmartapp-20';

type ProductCard = {
  title: string;
  description: string;
  searchTerm: string;
  badge: string;
  tone: string;
};

const productGroups: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: ProductCard[];
}[] = [
  {
    id: 'food-storage',
    eyebrow: 'Food storage',
    title: 'Keep leftovers visible and easy to use',
    description:
      'These kitchen picks help households store food better, reduce waste, and make ingredients easier to find before they get forgotten.',
    products: [
      {
        title: 'Glass Meal Prep Containers',
        description:
          'A strong option for leftovers, portioned meals, and food visibility throughout the week.',
        searchTerm: 'glass meal prep containers',
        badge: 'Best for leftovers',
        tone: 'bg-[#EEF6E8]',
      },
      {
        title: 'Stackable Food Storage Sets',
        description:
          'Great for keeping fridge shelves cleaner and making ingredients easier to group together.',
        searchTerm: 'stackable food storage containers for refrigerator',
        badge: 'Space saver',
        tone: 'bg-[#FFF2E9]',
      },
      {
        title: 'Leakproof Lunch Containers',
        description:
          'Useful for meal prep, take-to-work lunches, and keeping cooked food organized.',
        searchTerm: 'leakproof lunch containers reusable',
        badge: 'Meal prep ready',
        tone: 'bg-[#EEF3FF]',
      },
    ],
  },
  {
    id: 'produce',
    eyebrow: 'Produce freshness',
    title: 'Help fruits and vegetables last longer',
    description:
      'Produce often gets wasted first. These picks help keep fresh items visible, organized, and easier to use in time.',
    products: [
      {
        title: 'Produce Saver Bins',
        description:
          'Helpful for separating produce types and keeping your fridge easier to manage.',
        searchTerm: 'produce saver bins refrigerator',
        badge: 'Freshness helper',
        tone: 'bg-[#EEF6E8]',
      },
      {
        title: 'Berry Storage Containers',
        description:
          'A simple way to keep delicate fruit organized and easier to see before it spoils.',
        searchTerm: 'berry storage containers for fridge',
        badge: 'Great for berries',
        tone: 'bg-[#FFF2E9]',
      },
      {
        title: 'Herb Keeper Containers',
        description:
          'Useful for households that buy fresh herbs but often forget to use them quickly.',
        searchTerm: 'herb keeper for refrigerator',
        badge: 'For fresh herbs',
        tone: 'bg-[#EEF3FF]',
      },
    ],
  },
  {
    id: 'organization',
    eyebrow: 'Kitchen organization',
    title: 'Make your fridge easier to understand at a glance',
    description:
      'The less guessing you do, the more likely you are to use what you already bought.',
    products: [
      {
        title: 'Reusable Food Labels',
        description:
          'Quick labeling helps households track opened food, leftovers, and prep dates.',
        searchTerm: 'reusable food labels for containers',
        badge: 'Easy labeling',
        tone: 'bg-[#EEF6E8]',
      },
      {
        title: 'Refrigerator Organizer Drawers',
        description:
          'Helpful for snacks, cheese, deli items, and anything that tends to disappear in the back.',
        searchTerm: 'refrigerator organizer drawers',
        badge: 'Visibility boost',
        tone: 'bg-[#FFF2E9]',
      },
      {
        title: 'Pantry Storage Containers',
        description:
          'A cleaner pantry makes it easier to track dry goods and avoid duplicate purchases.',
        searchTerm: 'pantry storage containers airtight',
        badge: 'Pantry control',
        tone: 'bg-[#EEF3FF]',
      },
    ],
  },
  {
    id: 'prep',
    eyebrow: 'Meal prep tools',
    title: 'Make faster food decisions during the week',
    description:
      'A few simple tools can make it much easier to prep ingredients, store them well, and actually use them.',
    products: [
      {
        title: 'Kitchen Scale',
        description:
          'Useful for meal prep, recipe accuracy, and portioning food more intentionally.',
        searchTerm: 'digital kitchen scale',
        badge: 'Precision tool',
        tone: 'bg-[#EEF6E8]',
      },
      {
        title: 'Salad Spinner',
        description:
          'Makes produce prep faster, which can help more fresh food actually get used.',
        searchTerm: 'salad spinner large',
        badge: 'Prep faster',
        tone: 'bg-[#FFF2E9]',
      },
      {
        title: 'Freezer Labels',
        description:
          'A smart way to track frozen meals, proteins, and leftovers before they get buried.',
        searchTerm: 'freezer labels removable',
        badge: 'Freezer friendly',
        tone: 'bg-[#EEF3FF]',
      },
    ],
  },
];

function amazonSearchUrl(searchTerm: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}&tag=${amazonBaseTag}`;
}

export const metadata: Metadata = {
  title: 'Amazon Kitchen Picks',
  description:
    'Shop FridgeSmart kitchen picks to keep food visible, reduce waste, organize your fridge, and make smarter grocery decisions.',
  alternates: {
    canonical: '/amazon-kitchen-picks',
  },
  openGraph: {
    title: 'FridgeSmart Amazon Kitchen Picks',
    description:
      'Kitchen tools and storage picks that help households waste less, stay organized, and shop smarter.',
    url: 'https://fridgesmartapp.com/amazon-kitchen-picks',
    type: 'website',
  },
};

export default function AmazonKitchenPicksPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are FridgeSmart kitchen picks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FridgeSmart kitchen picks are Amazon-linked storage, organization, and meal prep products chosen to help households reduce food waste and manage ingredients more easily.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do these products help reduce food waste?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Better storage, labeling, and visibility can make it easier to use food before it expires or gets forgotten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does FridgeSmart earn from these links?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. As an Amazon Associate, FridgeSmart earns from qualifying purchases.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#14213D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(20,33,61,0.08)]">
          <header className="flex flex-col gap-5 border-b border-[#14213D]/6 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-[#FFF2E9]">
                <Image
                  src="/assets/logo.png"
                  alt="FridgeSmart logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">FridgeSmart</div>
                <div className="text-sm text-[#14213D]/55">
                  Smarter food tracking for real households
                </div>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#14213D]/70">
              <Link href="/" className="transition hover:text-[#F08A5D]">
                Home
              </Link>
              <Link href="/#features" className="transition hover:text-[#F08A5D]">
                Features
              </Link>
              <Link href="/#how-it-works" className="transition hover:text-[#F08A5D]">
                How it works
              </Link>
              <Link href="/login" className="transition hover:text-[#F08A5D]">
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-xl bg-[#F08A5D] px-4 py-2 text-white transition hover:translate-y-[-1px]"
              >
                Get started
              </Link>
            </nav>
          </header>

          <section className="grid gap-10 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit rounded-full bg-[#FFF4EC] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#F08A5D]">
                Amazon kitchen picks
              </div>

              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
                Kitchen tools that help you
                <br />
                waste less
                <br />
                and use more.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#14213D]/72">
                Explore FridgeSmart’s favorite kitchen picks for food storage, produce freshness,
                labeling, and meal prep. These products support better visibility, smarter food
                decisions, and less waste at home.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#picks"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#F08A5D] px-6 py-4 text-base font-black text-white shadow-[0_10px_30px_rgba(240,138,93,0.22)]"
                >
                  Explore picks
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#14213D]/10 bg-white px-6 py-4 text-base font-black text-[#14213D]"
                >
                  Back to homepage
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#14213D]/58">
                As an Amazon Associate, FridgeSmart earns from qualifying purchases.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#FBFBF8] p-5">
              <div className="rounded-[1.8rem] bg-white p-5 shadow-[0_20px_50px_rgba(20,33,61,0.07)]">
                <div className="text-sm font-black uppercase tracking-[0.15em] text-[#7A9C2F]">
                  Why this page matters
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    'Keep food visible so it gets used in time',
                    'Reduce duplicate grocery purchases',
                    'Store produce and leftovers more effectively',
                    'Support better weekly meal decisions',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] bg-[#EEF6E8] p-5 text-base font-bold text-[#14213D]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] bg-[#FFF8F3] p-5">
                  <div className="text-xs font-black uppercase tracking-[0.16em] text-[#F08A5D]">
                    Best for
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#14213D]/72">
                    <li>• Families managing weekly groceries</li>
                    <li>• Busy people who forget what they bought</li>
                    <li>• Households trying to cut food waste</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="picks" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="space-y-6">
          {productGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(20,33,61,0.06)] lg:p-8"
            >
              <div className="max-w-3xl">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-[#7A9C2F]">
                  {group.eyebrow}
                </div>
                <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                  {group.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#14213D]/72">{group.description}</p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.products.map((product) => (
                  <a
                    key={product.title}
                    href={amazonSearchUrl(product.searchTerm)}
                    target="_blank"
                    rel="noreferrer"
                    className={`block rounded-[1.7rem] p-6 shadow-[0_10px_25px_rgba(20,33,61,0.04)] transition hover:translate-y-[-2px] hover:shadow-[0_18px_40px_rgba(20,33,61,0.08)] ${product.tone}`}
                  >
                    <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#F08A5D]">
                      {product.badge}
                    </div>

                    <h3 className="mt-5 text-xl font-black leading-tight text-[#14213D]">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#14213D]/70">
                      {product.description}
                    </p>

                    <div className="mt-5 text-sm font-black text-[#F08A5D]">
                      View on Amazon →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(20,33,61,0.06)]">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-[#F08A5D]">
              Why FridgeSmart recommends these
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Better storage leads to better food decisions
            </h2>
            <p className="mt-4 text-base leading-8 text-[#14213D]/72">
              Most households do not need more groceries. They need better visibility, easier food
              organization, and smarter ways to use what they already have. These kitchen tools
              support the same goal as FridgeSmart: less waste and more value from every grocery
              trip.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Store food more clearly</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Clear storage and labeling make it easier to see what needs to be used first.
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Shop more intentionally</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Better organization helps reduce duplicate buys and unnecessary grocery waste.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#FFF8F3] p-8 shadow-[0_20px_60px_rgba(20,33,61,0.05)]">
            <div className="rounded-[1.7rem] bg-white p-6 shadow-[0_15px_40px_rgba(20,33,61,0.06)]">
              <div className="relative h-56 overflow-hidden rounded-[1.5rem] bg-[#EEF6E8]">
                <Image
                  src="/assets/chef-lumi.png"
                  alt="Chef Lumi"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-[#7A9C2F]">
                Chef Lumi tip
              </div>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                The easier food is to see, the easier it is to use.
              </h3>
              <p className="mt-4 text-base leading-7 text-[#14213D]/72">
                Good kitchen systems reduce mental clutter. When food is visible, labeled, and
                organized, meal planning becomes faster and waste goes down naturally.
              </p>

              <div className="mt-6 rounded-[1.4rem] bg-[#EEF3FF] p-5">
                <div className="text-sm font-black uppercase tracking-[0.14em] text-[#14213D]">
                  FridgeSmart promise
                </div>
                <p className="mt-2 text-sm leading-7 text-[#14213D]/72">
                  Less guessing. Less waste. More value from the food you already bring home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(20,33,61,0.06)] lg:p-10">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-[#7A9C2F]">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            Amazon kitchen picks FAQ
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-black">What are FridgeSmart kitchen picks?</h3>
              <p className="mt-2 text-base leading-7 text-[#14213D]/72">
                These are curated Amazon product categories that support better food storage,
                visibility, kitchen organization, and meal prep.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Why link these products from FridgeSmart?</h3>
              <p className="mt-2 text-base leading-7 text-[#14213D]/72">
                They align with the same goal as the app: helping households waste less food, save
                money, and make faster decisions in the kitchen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black">Does FridgeSmart earn from purchases?</h3>
              <p className="mt-2 text-base leading-7 text-[#14213D]/72">
                Yes. As an Amazon Associate, FridgeSmart earns from qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-6 lg:px-10">
        <div className="rounded-[2.25rem] bg-white p-8 shadow-[0_20px_60px_rgba(20,33,61,0.07)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.18em] text-[#7A9C2F]">
                Download FridgeSmart
              </div>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                Use the app that makes these kitchen picks even more useful
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#14213D]/72">
                Track inventory, catch expiring items, and get recipe ideas from what is already in
                your kitchen.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={appStoreUrl} target="_blank" rel="noreferrer" className="inline-flex">
                <Image
                  src="/assets/app-store-badge.png"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-auto w-[180px]"
                />
              </a>

              <a href={playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex">
                <Image
                  src="/assets/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={203}
                  height={60}
                  className="h-auto w-[203px]"
                />
              </a>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-4 border-t border-[#14213D]/8 pt-6 text-sm text-[#14213D]/62 lg:flex-row lg:items-center lg:justify-between">
            <div>© 2026 FridgeSmart. Smarter food tracking for real households.</div>
            <div className="flex flex-wrap items-center gap-5 font-semibold">
              <Link href="/" className="hover:text-[#F08A5D]">
                Home
              </Link>
              <Link href="/login" className="hover:text-[#F08A5D]">
                Log in
              </Link>
              <Link href="/signup" className="hover:text-[#F08A5D]">
                Sign up
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
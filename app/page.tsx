import Image from 'next/image';
import Link from 'next/link';

const appStoreUrl = 'https://apps.apple.com/us/app/fridgesmart-app/id6755790933';
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.minafakhri.fridgesmart';
const amazonUrl = 'https://www.amazon.com/s?k=glass+meal+prep+containers+produce+saver+bins+reusable+food+labels&tag=fridgesmartap-20';

const stats = [
  { value: '42', label: 'Items tracked', tone: 'bg-[#EEF6E8]' },
  { value: '7', label: 'Expiring soon', tone: 'bg-[#FFF2E9]' },
  { value: '18', label: 'Recipes ready', tone: 'bg-[#EEF3FF]' },
  { value: '$84', label: 'Estimated saved', tone: 'bg-[#F2EAFE]' },
];

const features = [
  {
    title: 'Smart inventory tracking',
    text: 'Keep groceries, leftovers, and pantry staples organized in one place so you always know what you already have.',
  },
  {
    title: 'Expiration alerts',
    text: 'Catch what needs to be used soon before it turns into wasted food and wasted money.',
  },
  {
    title: 'AI recipe suggestions',
    text: 'Get meal ideas from the ingredients already in your kitchen instead of guessing what to cook.',
  },
  {
    title: 'Built for real households',
    text: 'Perfect for busy families, working professionals, and anyone trying to waste less and save more.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Add what is in your kitchen',
    text: 'Track fridge, freezer, and pantry items so your home inventory finally lives in one place.',
  },
  {
    step: '02',
    title: 'See what needs attention',
    text: 'FridgeSmart highlights what is expiring soon so you can use it before it goes bad.',
  },
  {
    step: '03',
    title: 'Cook from what you already own',
    text: 'Chef Lumi helps turn real ingredients into practical meal ideas fast.',
  },
];

const trustPoints = [
  'Cut down on wasted groceries',
  'Make meal decisions faster',
  'Use more of what you buy',
  'Keep your kitchen more organized',
];

const shopCards = [
  {
    title: 'Glass Meal Prep Containers',
    text: 'Keep leftovers visible and easy to reuse throughout the week.',
    tone: 'bg-[#EEF6E8]',
  },
  {
    title: 'Produce Saver Bins',
    text: 'Help fruits and vegetables stay fresh longer and easier to track.',
    tone: 'bg-[#FFF2E9]',
  },
  {
    title: 'Reusable Food Labels',
    text: 'Date food fast so nothing gets forgotten in the fridge.',
    tone: 'bg-[#EEF3FF]',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#14213D]">
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
              <a href="#features" className="transition hover:text-[#F08A5D]">
                Features
              </a>
              <a href="#how-it-works" className="transition hover:text-[#F08A5D]">
                How it works
              </a>
              <a href="#shop" className="transition hover:text-[#F08A5D]">
                Shop
              </a>
              <a href="#download" className="transition hover:text-[#F08A5D]">
                Download
              </a>
              <Link
                href="/login"
                className="rounded-xl border border-[#14213D]/10 px-4 py-2 transition hover:border-[#F08A5D] hover:text-[#F08A5D]"
              >
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

          <section className="grid gap-10 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit rounded-full bg-[#FFF4EC] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#F08A5D]">
                Built for busy households
              </div>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
                Waste less.
                <br />
                Save more.
                <br />
                Decide faster.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#14213D]/72">
                FridgeSmart helps you track what is in your fridge, catch expiring items before
                they go bad, and turn ingredients you already have into real meals.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <a href={appStoreUrl} target="_blank" rel="noreferrer" className="inline-flex">
    <Image
      src="/assets/app-store-badge.jpg"
      alt="Download on the App Store"
      width={203}
      height={60}
      className="h-auto w-[180px]"
    />
  </a>

                 <a href={playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex">
    <Image
      src="/assets/google-play-badge.jpg"
      alt="Get it on Google Play"
      width={203}
      height={60}
      className="h-auto w-[203px]"
    />
  </a>
</div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] bg-[#FAFAF7] px-4 py-4 text-sm font-bold text-[#7A9C2F] shadow-[0_10px_25px_rgba(20,33,61,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.6rem] bg-[#FAFAF7] p-4 shadow-[0_12px_25px_rgba(20,33,61,0.04)]">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-[#FFF2E9]">
                    <Image
                      src="/assets/owner-avatar.png"
                      alt="FridgeSmart founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#F08A5D]">
                    Founder-led
                  </div>
                  <div className="mt-2 text-lg font-black">Built for real families</div>
                  <p className="mt-2 text-sm leading-7 text-[#14213D]/70">
                    FridgeSmart was built to solve everyday kitchen chaos with something practical,
                    useful, and easy to trust.
                  </p>
                </div>

                <div className="rounded-[1.6rem] bg-[#FAFAF7] p-4 shadow-[0_12px_25px_rgba(20,33,61,0.04)]">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-[#EEF6E8]">
                    <Image
                      src="/assets/chef-lumi.png"
                      alt="Chef Lumi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#7A9C2F]">
                    Chef Lumi
                  </div>
                  <div className="mt-2 text-lg font-black">Your AI kitchen assistant</div>
                  <p className="mt-2 text-sm leading-7 text-[#14213D]/70">
                    Chef Lumi helps you figure out what to cook with what you already have before
                    it goes to waste.
                  </p>
                </div>

                <div className="rounded-[1.6rem] bg-[#FAFAF7] p-4 shadow-[0_12px_25px_rgba(20,33,61,0.04)]">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-[#EEF3FF]">
                    <Image
                      src="/assets/female-avatar.png"
                      alt="FridgeSmart user"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#14213D]">
                    Everyday user
                  </div>
                  <div className="mt-2 text-lg font-black">Made for busy lives</div>
                  <p className="mt-2 text-sm leading-7 text-[#14213D]/70">
                    Perfect for people who want less guessing, less waste, and faster meal
                    decisions every week.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#FBFBF8] p-5">
              <div className="rounded-[1.8rem] bg-white p-5 shadow-[0_20px_50px_rgba(20,33,61,0.07)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-black uppercase tracking-[0.15em] text-[#7A9C2F]">
                      What FridgeSmart helps you do
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[#14213D]/65">
                      A better way to track food, avoid waste, and make meals from what is already
                      in your kitchen.
                    </div>
                  </div>
                  <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2E9] text-2xl lg:flex">
                    🧊
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className={`rounded-[1.4rem] p-5 ${stat.tone}`}>
                      <div className="text-4xl font-black text-[#14213D]">{stat.value}</div>
                      <div className="mt-1 text-sm font-semibold text-[#14213D]/68">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] bg-[#FFF8F3] p-5">
                  <div className="text-xs font-black uppercase tracking-[0.16em] text-[#F08A5D]">
                    Perfect for
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#14213D]/72">
                    <li>• Families managing weekly groceries</li>
                    <li>• Busy professionals who forget what they bought</li>
                    <li>• Anyone trying to save money and reduce food waste</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(20,33,61,0.06)] lg:p-8">
          <div className="max-w-3xl">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-[#7A9C2F]">
              Why people use FridgeSmart
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              The easiest way to make your kitchen feel organized again
            </h2>
            <p className="mt-4 text-base leading-8 text-[#14213D]/72">
              FridgeSmart is designed to help you waste less food, shop smarter, and make better
              meal decisions without overthinking what is in your fridge.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.7rem] bg-[#FAFAF7] p-6 shadow-[0_10px_25px_rgba(20,33,61,0.04)]"
              >
                <div className="h-11 w-11 rounded-2xl bg-[#FFF2E9]" />
                <h3 className="mt-5 text-xl font-black leading-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#14213D]/70">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#EEF6E8] p-8 shadow-[0_20px_50px_rgba(20,33,61,0.05)]">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-[#7A9C2F]">
              How it works
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Three simple steps from food clutter to food clarity
            </h2>
            <p className="mt-4 text-base leading-8 text-[#14213D]/72">
              FridgeSmart keeps things practical. Add what you have, see what needs attention, and
              get help figuring out what to cook next.
            </p>
          </div>

          <div className="space-y-5">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(20,33,61,0.06)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF2E9] text-lg font-black text-[#F08A5D]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-black leading-tight">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#14213D]/72">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(20,33,61,0.06)]">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-[#F08A5D]">
              Meet Chef Lumi
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Your kitchen assistant for faster meal decisions
            </h2>
            <p className="mt-4 text-base leading-8 text-[#14213D]/72">
              Chef Lumi helps you turn ingredients already sitting in your kitchen into practical
              meal ideas. That means fewer last-minute takeout decisions and more value from what
              you already bought.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Cook from what you have</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Get recipe direction from real ingredients instead of starting from scratch.
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Reduce waste naturally</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Use expiring ingredients first and make smarter food choices every week.
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
                Why it matters
              </div>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                Most households do not need more groceries. They need more visibility.
              </h3>
              <p className="mt-4 text-base leading-7 text-[#14213D]/72">
                FridgeSmart helps you see what is already there, use it in time, and shop more
                intentionally. That is how you save money without feeling like you are trying
                harder.
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

      <section id="shop" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(20,33,61,0.06)]">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-[#F08A5D]">
              Shop smarter
            </div>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Buy what you actually need, not what you forgot you already had
            </h2>
            <p className="mt-4 text-base leading-8 text-[#14213D]/72">
              FridgeSmart helps households see what is already in the kitchen, catch what is
              running low, and make smarter shopping decisions. That means fewer duplicate
              purchases and more useful restocks.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Restock essentials</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Refill what you truly need instead of guessing at the store.
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Kitchen organization</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Discover products that help keep food visible, labeled, and easy to use.
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#FAFAF7] p-5">
                <div className="text-lg font-black">Less waste, more value</div>
                <div className="mt-2 text-sm leading-7 text-[#14213D]/70">
                  Make every grocery trip work harder by using more of what you buy.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.6rem] bg-[#FFF8F3] p-5">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/assets/female-avatar.png"
                    alt="FridgeSmart shopper"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.14em] text-[#F08A5D]">
                    Real-life value
                  </div>
                  <div className="mt-1 text-base font-bold text-[#14213D]">
                    Shop with confidence, not guesswork
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#14213D]/72">
                FridgeSmart makes it easier to know what to restock, what to skip, and which
                kitchen tools help keep food fresher and easier to manage.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#FFF8F3] p-8 shadow-[0_20px_60px_rgba(20,33,61,0.05)]">
            <div className="rounded-[1.7rem] bg-white p-6 shadow-[0_15px_40px_rgba(20,33,61,0.06)]">
              <div className="text-sm font-black uppercase tracking-[0.16em] text-[#7A9C2F]">
                FridgeSmart kitchen picks
              </div>

              <div className="mt-5 space-y-4">
                {shopCards.map((card) => (
                  <div key={card.title} className={`rounded-[1.25rem] p-4 ${card.tone}`}>
                    <div className="text-base font-black text-[#14213D]">{card.title}</div>
                    <div className="mt-1 text-sm leading-7 text-[#14213D]/70">{card.text}</div>
                  </div>
                ))}
              </div>

              <a
                href={amazonUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#F08A5D] px-6 py-4 text-base font-black text-white shadow-[0_10px_30px_rgba(240,138,93,0.22)]"
              >
                Shop on Amazon
              </a>

              <p className="mt-4 text-xs leading-6 text-[#14213D]/55">
                As an Amazon Associate, FridgeSmart may earn from qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-7xl px-6 pb-14 pt-6 lg:px-10">
        <div className="rounded-[2.25rem] bg-white p-8 shadow-[0_20px_60px_rgba(20,33,61,0.07)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.18em] text-[#7A9C2F]">
                Download FridgeSmart
              </div>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                Start making better food decisions today
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#14213D]/72">
                Track inventory, catch expiring items, and get recipe ideas from what is already in
                your kitchen.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
               <a href={appStoreUrl} target="_blank" rel="noreferrer" className="inline-flex">
    <Image
      src="/assets/app-store-badge.jpg"
      alt="Download on the App Store"
      width={180}
      height={60}
      className="h-auto w-[180px]"
    />
  </a>
            <a href={playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex">
    <Image
      src="/assets/google-play-badge.jpg"
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
              <Link href="/login" className="hover:text-[#F08A5D]">
                Log in
              </Link>
              <Link href="/signup" className="hover:text-[#F08A5D]">
                Sign up
              </Link>
              <Link href="/forgot-password" className="hover:text-[#F08A5D]">
                Forgot password
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

<<<<<<< HEAD
export const fridgeStats = [
  { label: 'Items in your fridge', value: '42', tone: 'bg-brand-softMint' },
  { label: 'Expiring this week', value: '7', tone: 'bg-[#FFF1E8]' },
  { label: 'Recipes ready now', value: '18', tone: 'bg-brand-softBlue' },
  { label: 'Estimated saved', value: '$84', tone: 'bg-brand-softLilac' },
];

export const dealProducts = [
  {
    title: 'Glass Meal Prep Containers',
    description: 'Keep leftovers visible, organized, and easy to use before they expire.',
    badge: 'Amazon Pick',
    href: 'https://www.amazon.com/s?k=glass+meal+prep+containers',
    emoji: '🥗',
  },
  {
    title: 'Produce Saver Bins',
    description: 'Help fruits and vegetables stay fresh longer in your fridge.',
    badge: "Today's Deal",
    href: 'https://www.amazon.com/s?k=produce+saver+bins',
    emoji: '🥬',
  },
  {
    title: 'Pantry Organizer Set',
    description: 'Make ingredients easier to see, track, and restock.',
    badge: 'Kitchen Favorite',
    href: 'https://www.amazon.com/s?k=pantry+organizer+set',
    emoji: '🫙',
  },
  {
    title: 'Vacuum Sealer',
    description: 'Stretch the life of meats, leftovers, and meal prep staples.',
    badge: 'Chef Lumi Pick',
    href: 'https://www.amazon.com/s?k=vacuum+sealer',
    emoji: '🍗',
  },
  {
    title: 'Fridge Thermometer',
    description: 'Keep your fridge at a safe temperature and reduce spoilage risk.',
    badge: 'Smart Storage',
    href: 'https://www.amazon.com/s?k=fridge+thermometer',
    emoji: '🌡️',
  },
  {
    title: 'Reusable Food Labels',
    description: 'Date leftovers fast so you know what to use next.',
    badge: 'Budget Saver',
    href: 'https://www.amazon.com/s?k=reusable+food+labels',
    emoji: '🏷️',
  },
];

export const expiringItems = [
  { name: 'Spinach', window: '1 day left', qty: '1 bag' },
  { name: 'Greek Yogurt', window: '2 days left', qty: '2 cups' },
  { name: 'Chicken Breast', window: '2 days left', qty: '1 pack' },
  { name: 'Strawberries', window: '3 days left', qty: '1 box' },
];

export const recipeCards = [
  { title: 'Creamy Garlic Pasta', ready: '18 min', uses: 'Spinach, yogurt, parmesan' },
  { title: 'Pan Sheet Chicken Bowl', ready: '24 min', uses: 'Chicken, peppers, rice' },
  { title: 'Berry Yogurt Breakfast Cups', ready: '6 min', uses: 'Strawberries, yogurt, granola' },
];
=======
import AuthCard from '@/components/auth/auth-card';

const bullets = [
  {
    title: 'Save money on groceries',
    text: 'Use more of what you buy before it expires.',
  },
  {
    title: 'Make meal decisions faster',
    text: 'Stop guessing and start cooking from real ingredients.',
  },
  {
    title: 'Build better kitchen habits',
    text: 'Track what you have and waste less over time.',
  },
];

export default function SignupPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] bg-brand-softBlue p-8 shadow-soft">
        <div className="max-w-2xl">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">
            Start free
          </div>

          <h1 className="mt-3 text-4xl font-black leading-tight text-brand-ink">
            Create your account and make your kitchen smarter
          </h1>

          <p className="mt-4 text-base leading-7 text-brand-ink/75">
            FridgeSmart helps you track food, reduce waste, and turn ingredients you already have
            into real meal ideas.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {bullets.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/80 p-4 shadow-card">
                <div className="text-sm font-black text-brand-ink">{item.title}</div>
                <div className="mt-1 text-sm text-brand-ink/70">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthCard mode="signup" />
    </div>
  );
}
>>>>>>> aee9070 (Update homepage, auth pages, Android link, and favicon)

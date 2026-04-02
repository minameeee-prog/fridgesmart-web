const recipes = [
  ['Creamy Garlic Pasta', '18 min', 'Spinach, yogurt, parmesan'],
  ['Chicken Pepper Rice Bowl', '24 min', 'Chicken, peppers, rice'],
  ['Breakfast Yogurt Cups', '6 min', 'Yogurt, berries, granola'],
  ['Veggie Omelet Wrap', '10 min', 'Eggs, peppers, spinach']
];

export default function RecipesPage() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">Recipes</div>
      <h1 className="mt-2 text-4xl font-black text-brand-ink">Cook from what you already have</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {recipes.map(([title, time, uses]) => (
          <div key={title} className="rounded-[1.75rem] bg-brand-softBlue p-6 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xl font-black text-brand-ink">{title}</div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-brand-olive">{time}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-brand-ink/70">Uses {uses}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

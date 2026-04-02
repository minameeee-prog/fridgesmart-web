const shopping = [
  ['Olive oil', 'Running low', 'Restock'],
  ['Pasta', 'Needed for recipes', 'Add'],
  ['Granola', 'Breakfast refill', 'Add'],
  ['Storage containers', 'Chef Lumi pick', 'View deal']
];

export default function ShoppingListPage() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">Shopping List</div>
      <h1 className="mt-2 text-4xl font-black text-brand-ink">Smart restock planning</h1>
      <div className="mt-8 space-y-4">
        {shopping.map(([name, note, action]) => (
          <div key={name} className="flex flex-col gap-4 rounded-[1.75rem] bg-brand-cream p-5 shadow-card md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-black text-brand-ink">{name}</div>
              <div className="mt-1 text-sm text-brand-ink/70">{note}</div>
            </div>
            <button className="rounded-full bg-brand-olive px-5 py-3 text-sm font-black text-white">{action}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

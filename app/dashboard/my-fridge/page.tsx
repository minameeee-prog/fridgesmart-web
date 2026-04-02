const items = [
  ['Spinach', 'Produce', '1 bag', 'Use first'],
  ['Greek Yogurt', 'Dairy', '2 cups', 'Fresh'],
  ['Chicken Breast', 'Protein', '1 pack', 'Cook soon'],
  ['Bell Peppers', 'Produce', '4', 'Fresh'],
  ['Parmesan', 'Dairy', '1 block', 'Fresh'],
  ['Rice', 'Pantry', '1 bag', 'Stocked']
];

export default function MyFridgePage() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-olive">My Fridge</div>
          <h1 className="mt-2 text-4xl font-black text-brand-ink">Inventory overview</h1>
        </div>
        <div className="rounded-full bg-brand-softMint px-4 py-2 text-sm font-black text-brand-olive">Ready to wire to real fridge_items</div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-black/5">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] bg-brand-cream px-5 py-4 text-sm font-black text-brand-ink/75">
          <div>Item</div>
          <div>Category</div>
          <div>Quantity</div>
          <div>Status</div>
        </div>
        {items.map(([name, category, qty, status]) => (
          <div key={name} className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-t border-black/5 px-5 py-4 text-sm text-brand-ink">
            <div className="font-black">{name}</div>
            <div>{category}</div>
            <div>{qty}</div>
            <div>{status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

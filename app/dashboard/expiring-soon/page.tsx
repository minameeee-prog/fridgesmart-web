import { expiringItems } from '@/lib/site-data';

export default function ExpiringSoonPage() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-peach">Expiring Soon</div>
      <h1 className="mt-2 text-4xl font-black text-brand-ink">What to use first</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {expiringItems.map((item) => (
          <div key={item.name} className="rounded-[1.75rem] bg-[#FFF6EF] p-6 shadow-card">
            <div className="text-xl font-black text-brand-ink">{item.name}</div>
            <div className="mt-2 text-sm text-brand-ink/70">{item.qty}</div>
            <div className="mt-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-brand-peach">{item.window}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Refrigerator, ChefHat, ShoppingCart, Clock3, LogOut } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

const items = [
  { href: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { href: '/dashboard/my-fridge', label: 'My Fridge', icon: Refrigerator },
  { href: '/dashboard/recipes', label: 'Recipes', icon: ChefHat },
  { href: '/dashboard/shopping-list', label: 'Shopping List', icon: ShoppingCart },
  { href: '/dashboard/expiring-soon', label: 'Expiring Soon', icon: Clock3 }
];

export default function AppSidebar() {
  const pathname = usePathname();

  async function handleLogout() {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  return (
    <aside className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-5 shadow-card">
      <div>
        <BrandLogo />
        <div className="mt-8 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${active ? 'bg-brand-softMint text-brand-olive' : 'text-brand-ink/70 hover:bg-brand-cream hover:text-brand-ink'}`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <button onClick={handleLogout} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-brand-ink/70 transition hover:bg-[#FFF0EA] hover:text-[#B45309]">
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </aside>
  );
}

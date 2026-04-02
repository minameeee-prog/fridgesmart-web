import DashboardShell from '@/components/DashboardShell';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto max-w-7xl">
        <DashboardShell>{children}</DashboardShell>
      </div>
    </main>
  );
}

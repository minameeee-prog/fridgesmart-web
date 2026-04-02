import AppSidebar from '@/components/AppSidebar';
import AuthGate from '@/components/AuthGate';

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthGate>
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <AppSidebar />
        <div className="min-w-0">{children}</div>
      </div>
    </AuthGate>
  );
}

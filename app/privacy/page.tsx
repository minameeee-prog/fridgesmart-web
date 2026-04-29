import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f6faf6] px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
        <Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">
          ← Back to FridgeSmart
        </Link>

        <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-7 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-950">Overview</h2>
            <p className="mt-2">
              FridgeSmart helps users scan food items, track expiration dates,
              receive reminders, generate recipe ideas, and access smart
              shopping suggestions. This Privacy Policy explains how we collect,
              use, and protect information when you use FridgeSmart.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Information We Collect</h2>
            <p className="mt-2">
              We may collect account information such as your name and email
              address, app usage information, food inventory data, scan results,
              expiration dates, recipe preferences, shopping interactions, and
              support messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">How We Use Information</h2>
            <p className="mt-2">
              We use information to provide FridgeSmart features, improve app
              performance, personalize recipe and shopping suggestions, send
              reminders, provide customer support, protect our service, and
              understand how users engage with the app and website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">AI Features</h2>
            <p className="mt-2">
              FridgeSmart may use AI-powered tools to analyze scans, estimate
              food items, suggest recipes, and generate food-related
              recommendations. AI results may not always be complete or
              accurate. Users should review all results before relying on them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Notifications and Reminders</h2>
            <p className="mt-2">
              If enabled, FridgeSmart may send expiration alerts, food reminders,
              and app-related notifications. You can manage notification
              permissions through your device settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Affiliate Links and Shopping</h2>
            <p className="mt-2">
              FridgeSmart may include third-party shopping links, including
              Amazon affiliate links. As an Amazon Associate, FridgeSmart earns
              from qualifying purchases at no extra cost to users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Sharing Information</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share limited
              information with service providers that help us operate the app
              and website, such as hosting, authentication, analytics, AI
              processing, communications, and customer support providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Data Security</h2>
            <p className="mt-2">
              We use reasonable administrative, technical, and organizational
              safeguards designed to protect user information. No method of
              transmission or storage is completely secure, so we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Your Choices</h2>
            <p className="mt-2">
              You may update certain account information in the app, adjust
              notification settings on your device, or contact us to request
              help with privacy-related questions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Account Deletion</h2>
            <p className="mt-2">
              Users may request account deletion by visiting our{" "}
              <Link href="/delete-account" className="font-semibold text-emerald-700 hover:text-emerald-600">
                Delete Account page
              </Link>{" "}
              or by contacting support@fridgesmartapp.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Children’s Privacy</h2>
            <p className="mt-2">
              FridgeSmart is not intended for children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Contact</h2>
            <p className="mt-2">
              For privacy questions, contact us at{" "}
              <a href="mailto:support@fridgesmartapp.com" className="font-semibold text-emerald-700 hover:text-emerald-600">
                support@fridgesmartapp.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f6faf6] px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
        <Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">
          ← Back to FridgeSmart
        </Link>

        <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-7 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-950">Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using FridgeSmart, including the mobile app,
              website, AI features, shopping suggestions, and related services,
              you agree to these Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Use of Service</h2>
            <p className="mt-2">
              FridgeSmart helps users manage food inventory, expiration
              tracking, reminders, recipe suggestions, and shopping assistance.
              You agree to use FridgeSmart lawfully and responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Account Responsibility</h2>
            <p className="mt-2">
              You are responsible for maintaining the confidentiality of your
              account credentials and for activity that occurs under your
              account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">No Medical, Health, Allergy, or Food Safety Advice</h2>
            <p className="mt-2">
              FridgeSmart provides food organization, recipe, and shopping
              assistance only. It does not provide medical, dietary, allergy,
              nutrition, food safety, or professional advice. You are
              responsible for checking food safety, allergens, ingredients,
              expiration dates, and dietary suitability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">AI Results</h2>
            <p className="mt-2">
              AI-generated scan results, expiration estimates, recipe ideas, and
              shopping suggestions may be inaccurate, incomplete, or unsuitable.
              Users should review and verify all suggestions before relying on
              them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Third-Party Links and Affiliate Disclosure</h2>
            <p className="mt-2">
              FridgeSmart may include third-party links, including Amazon
              affiliate links. As an Amazon Associate, FridgeSmart earns from
              qualifying purchases. We are not responsible for third-party
              websites, products, pricing, availability, shipping, returns, or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Rewards and Promotions</h2>
            <p className="mt-2">
              FridgeSmart Rewards, if offered, are promotional and subject to
              eligibility, availability, verification, and change or termination
              at any time. We reserve the right to review, approve, deny, or
              modify reward submissions at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Service Availability</h2>
            <p className="mt-2">
              We strive to keep FridgeSmart available and useful, but we do not
              guarantee uninterrupted access, error-free operation, or specific
              results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, FridgeSmart is not liable
              for indirect, incidental, consequential, special, or punitive
              damages arising from use of the app, website, AI features,
              shopping links, or recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Account Deletion</h2>
            <p className="mt-2">
              You may request account deletion through our{" "}
              <Link href="/delete-account" className="font-semibold text-emerald-700 hover:text-emerald-600">
                Delete Account page
              </Link>{" "}
              or by emailing support@fridgesmartapp.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Changes to Terms</h2>
            <p className="mt-2">
              We may update these Terms & Conditions from time to time. Updates
              will be posted on this page with a revised “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Contact</h2>
            <p className="mt-2">
              Questions about these Terms & Conditions may be sent to{" "}
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

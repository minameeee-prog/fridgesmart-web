import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#f6faf6] px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
        <Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">
          ← Back to FridgeSmart
        </Link>

        <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
          Delete Your FridgeSmart Account
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-7 text-base leading-8 text-slate-700">
          <p>
            You may request deletion of your FridgeSmart account and associated
            personal data at any time. This page explains how to submit a
            deletion request and what may happen after your request is received.
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-950">How to Request Account Deletion</h2>
            <p className="mt-2">
              Email us at support@fridgesmartapp.com with the subject line
              “Delete My FridgeSmart Account” and include the email address
              associated with your FridgeSmart account.
            </p>

            <a
              href="mailto:support@fridgesmartapp.com?subject=Delete%20My%20FridgeSmart%20Account&body=Hi%20FridgeSmart%20team%2C%0A%0AI%20would%20like%20to%20delete%20my%20FridgeSmart%20account.%0A%0AAccount%20email%3A%20%0A%0AThank%20you."
              className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request Account Deletion
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Information to Include</h2>
            <p className="mt-2">
              Please include the email address used for your FridgeSmart
              account. We may ask for additional verification to confirm account
              ownership before deleting account data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">What May Be Deleted</h2>
            <p className="mt-2">
              Account information, food inventory records, saved fridge items,
              scan-related data, preferences, and related personal data may be
              deleted, subject to legal, security, fraud-prevention, dispute
              resolution, accounting, and operational retention requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">What May Be Retained</h2>
            <p className="mt-2">
              We may retain limited information when required for legal,
              security, accounting, fraud-prevention, compliance, dispute
              resolution, or backup purposes. Retained information will be
              limited to what is reasonably necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Processing Time</h2>
            <p className="mt-2">
              We aim to process account deletion requests within a reasonable
              timeframe after verifying account ownership. You may receive an
              email confirmation when the request has been reviewed or completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Effect of Deletion</h2>
            <p className="mt-2">
              Deleting your account may permanently remove access to saved
              fridge items, expiration tracking, preferences, and related app
              data. This action may not be reversible once completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">Contact</h2>
            <p className="mt-2">
              For account deletion questions, contact{" "}
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

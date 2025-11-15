import React from "react";

// FreakFitHub Privacy Policy Page
// Dark-theme, single-scroll React component styled with Tailwind CSS
// Usage: drop into your React app (e.g. src/components/PrivacyPolicy.jsx)

export default function PrivacyPolicyPage() {
  const brand = { orange: "#9AAEDA", navy: "#E9A3C7" };

  return (
    <div className="min-h-screen bg-[#05070c] text-gray-200 py-12">
      <div className="max-w-5xl mx-auto px-4 leading-relaxed">
        <header className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          <div className="p-10" style={{ background: `linear-gradient(135deg, ${brand.orange}, ${brand.navy})` }}>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">🔒 FreakFitHub – Privacy Policy</h1>
            <p className="mt-3 text-white/90 text-sm md:text-base max-w-2xl">
              Protecting your privacy while you get fit anywhere. This policy explains how we collect, use, store and protect your personal data.
            </p>
          </div>
        </header>

        <section className="space-y-6 text-sm md:text-base">
          <p>
            At FreakFitHub, your privacy and personal data protection are our highest priorities. This Privacy Policy explains how we collect, use, store, and protect your personal
            information when you join our Online Virtual Exclusive women fitness program (women-only, live-from-home sessions on Zoom).
          </p>

          <h2 className="text-xl font-semibold">1. Legal Framework</h2>
          <p>
            This policy complies with relevant Indian laws including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the Consumer Protection (E-Commerce)
            Rules, 2020. We aim to handle personal data responsibly, transparently, and securely.
          </p>

          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Personal Details:</strong> Full name, age, gender (for eligibility), email and phone number.
            </li>
            <li>
              <strong>Account Information:</strong> Login identifiers, user IDs, and payment references.
            </li>
            <li>
              <strong>Payment Information:</strong> Transaction metadata (we do not store full card details; payments are handled by PCI-DSS–compliant gateways).
            </li>
            <li>
              <strong>Program Participation Data:</strong> Zoom attendance logs, progress reports, and activity metrics.
            </li>
            <li>
              <strong>Device & Technical Info:</strong> Browser, OS, connection details (automatic for session quality).
            </li>
          </ul>

          <h2 className="text-xl font-semibold">3. Purpose of Data Collection</h2>
          <p>We collect data for legitimate business purposes including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enabling access to live programs and secure payments.</li>
            <li>Personalizing your experience and monitoring progress.</li>
            <li>Verifying attendance and refund eligibility.</li>
            <li>Sending updates, reminders, and service notices.</li>
            <li>Meeting legal, accounting, and taxation obligations.</li>
          </ul>
          <p className="text-sm text-gray-400">We never sell or rent your personal data for third-party marketing unrelated to FreakFitHub.</p>

          <h2 className="text-xl font-semibold">4. Data Storage and Security</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We use industry-standard encryption and secure servers to store data.</li>
            <li>Sensitive fields are encrypted at rest and in transit.</li>
            <li>Access to personal data is limited to authorized staff on a need-to-know basis.</li>
            <li>We conduct regular audits and have policies for data breach response.</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Sharing of Information</h2>
          <p>
            Your information may be shared only in limited circumstances: with payment gateways (Razorpay, UPI, Paytm, PhonePe, GPay, banks), with trainers for progress tracking, or with legal
            authorities when required by law. We do not transfer personal data outside India without explicit disclosure and appropriate safeguards.
          </p>

          <h2 className="text-xl font-semibold">6. Your Rights Under Indian Law</h2>
          <p>Under the Digital Personal Data Protection Act, 2023, you have rights including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access:</strong> Request a copy of personal data we hold about you.</li>
            <li><strong>Correction:</strong> Ask us to rectify inaccurate or incomplete data.</li>
            <li><strong>Withdrawal:</strong> Withdraw consent for non-essential communications.</li>
            <li><strong>Deletion:</strong> Request erasure of personal data after program completion, subject to legal retention rules.</li>
            <li><strong>Grievance Redressal:</strong> File a complaint if you believe data has been mishandled.</li>
          </ul>
          <p className="mt-2">To exercise any of these rights, email: <a className="text-orange-400 underline" href="mailto:privacy@freakfithub.in">privacy@freakfithub.in</a>.</p>

          <h2 className="text-xl font-semibold">7. Data Retention</h2>
          <p>
            We keep data only as long as necessary: attendance and performance data for up to 6 months after program completion (for audits and refunds); financial records for up to 5 years
            for tax compliance. After the retention period data is securely anonymized or deleted.
          </p>

          <h2 className="text-xl font-semibold">8. Third-Party Links & Services</h2>
          <p>
            Our site and programs may include links to third-party services such as Zoom and payment gateways. FreakFitHub is not responsible for the privacy practices of external sites — please
            review their privacy policies separately.
          </p>

          <h2 className="text-xl font-semibold">9. Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The latest version will always be available at <a className="text-orange-400 underline" href="https://www.freakfithub.in">www.freakfithub.in</a> with the revision date.
          </p>

          <h2 className="text-xl font-semibold">10. Jurisdiction & Dispute Resolution</h2>
          <p>
            Any disputes arising from data handling or privacy matters are governed by Indian law, with exclusive jurisdiction vested in the courts of New Delhi.
          </p>

          <p className="mt-6 text-gray-400 text-xs">Last updated: <strong>{new Date().getFullYear()} — replace with official revision date</strong></p>
        </section>

      </div>
    </div>
  );
}

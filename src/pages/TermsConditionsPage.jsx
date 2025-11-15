import React from "react";

// FreakFitHub Terms & Conditions Page (Dark Theme)
// Single-scroll, no accordion, full-page layout
// Drop into your React app as TermsConditions.jsx

export default function TermsConditionsPage() {
  const brand = {
    orange: "#9AAEDA",
    navy: "#E9A3C7",
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-gray-200 py-12">
      <div className="max-w-5xl mx-auto px-4 leading-relaxed">
        <header className="mb-10 rounded-2xl overflow-hidden shadow-xl">
          <div
            className="p-10"
            style={{ background: `linear-gradient(135deg, ${brand.orange}, ${brand.navy})` }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">FreakFitHub – Terms & Conditions</h1>
            <p className="mt-3 text-white/90 text-sm md:text-base max-w-2xl">
              Empowering women to get fit anywhere with confidence, commitment, and clarity.
            </p>
          </div>
        </header>

        <section className="space-y-8 text-sm md:text-base">
          <p>
            Welcome to FreakFitHub, an Online Virtual Exclusive women fitness program created only for
            women who wish to join from home and enjoy a truly energetic, motivated, and supportive
            fitness journey. Our live-from-home Zumba and home-based fitness sessions are conducted via
            Zoom and designed to help you get fit anywhere while maintaining flexibility, privacy, and comfort.
          </p>

          <p>
            By enrolling, accessing, or participating in any program or service provided by FreakFitHub,
            you acknowledge that you have read, understood, and agreed to abide by the following Terms
            and Conditions.
          </p>

          <h2 className="text-xl font-semibold">1. General Terms</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>FreakFitHub operates as a registered digital fitness brand headquartered in New Delhi, India.</li>
            <li>These Terms form a legally binding agreement between you (the “Participant”) and FreakFitHub (the “Company”).</li>
            <li>Participation in any session implies acceptance of these Terms, along with Refund, Privacy, and Fulfillment Policies.</li>
            <li>The Company may update these Terms at any time; new versions become effective immediately upon publication.</li>
          </ul>

          <h2 className="text-xl font-semibold">2. Program Access and Eligibility</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Programs are only for women aged 18 or above. Minors require written guardian consent.</li>
            <li>All sessions are online via Zoom or approved platforms and require an active internet connection.</li>
            <li>Enrollment is non-transferable. Sharing login links or accounts will result in termination without refund.</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Payments and Billing</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Payments must be completed in full at the time of registration via Razorpay, UPI, Paytm, GPay, or bank transfer.</li>
            <li>All prices include applicable Indian taxes unless otherwise stated.</li>
            <li>Payment failure may result in suspension or removal from ongoing sessions.</li>
            <li>Billing disputes will follow RBI digital transaction norms and payment gateway policies.</li>
          </ul>

          <h2 className="text-xl font-semibold">4. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Participants must inform trainers of any medical concerns before attending sessions.</li>
            <li>Recording, distributing, or reselling class material is strictly prohibited.</li>
            <li>Participants must behave respectfully in all FreakFitHub communities and live sessions.</li>
            <li>Violation of rules may result in removal without refund.</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Health Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>By joining, you confirm you are physically fit to participate or have received medical clearance.</li>
            <li>Trainers are not medical professionals; participation is at your own risk.</li>
            <li>FreakFitHub is not liable for injury due to negligence or improper form.</li>
          </ul>

          <h2 className="text-xl font-semibold">6. Intellectual Property Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All session content, brand elements, and materials belong exclusively to FreakFitHub.</li>
            <li>Unauthorized copying or redistribution is punishable under the Copyright Act, 1957.</li>
          </ul>

          <h2 className="text-xl font-semibold">7. Termination of Services</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We may terminate access due to misconduct, violation, payment disputes, or material sharing.</li>
            <li>No refund will be issued unless explicitly approved by management.</li>
          </ul>

          <h2 className="text-xl font-semibold">8. Refund & Cancellations</h2>
          <p>
            Refunds follow the official Refund & Cancellation Policy published on our website. Requests
            outside the stated criteria will not be processed.
          </p>

          <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
          <p>
            FreakFitHub is not liable for indirect damages, technical issues, or participant limitations.
            Any liability shall not exceed the total amount paid for the enrolled program.
          </p>

          <h2 className="text-xl font-semibold">10. Governing Law & Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India, with exclusive jurisdiction granted to the
            courts of New Delhi.
          </p>

          <h2 className="text-xl font-semibold">Disclaimer</h2>
          <p>
            By enrolling in any FreakFitHub Online Virtual Exclusive women fitness program, you acknowledge
            full acceptance of these Terms & Conditions. Continued use of services implies ongoing consent
            to the latest version available on our website.
          </p>

          <p className="mt-6 text-gray-400 text-xs">
            Last updated: <strong>{new Date().getFullYear()} — Replace with official revision date</strong>
          </p>
        </section>

      </div>
    </div>
  );
}

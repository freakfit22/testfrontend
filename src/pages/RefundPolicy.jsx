import React, { useState } from "react";

// FreakFitHub Refund & Cancellation Policy Page
// Single-file React component styled with Tailwind CSS
// Usage: drop this file into your React app (e.g. src/components/RefundPolicy.jsx)
// Make sure TailwindCSS is configured in your project.

export default function RefundPolicyPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  const brand = {
    orange: "#9AAEDA",
    navy: "#E9A3C7",
  };


  const policySummary = `FreakFitHub provides refunds only under strict, performance-based conditions. To be eligible you must attend at least 95% of live classes and provide verifiable before/after evidence showing no measurable progress. Refund requests must be submitted within 7 days of program completion and will be reviewed by certified experts. Refunds are issued to the original payment method if approved.`;

  const sections = [
    {
      id: 1,
      title: "1. Refund Eligibility",
      content: (
        <div>
          <p className="mb-2">
            Refunds are provided only under specific, performance-based conditions to
            maintain integrity for trainers and participants.
          </p>

          <h4 className="font-semibold mt-4">(a) 95% Attendance Compliance</h4>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Attendance must be at least <strong>95%</strong> of scheduled live-from-home
              classes.
            </li>
            <li>
              Attendance tracking is recorded automatically via the Zoom meeting app.
            </li>
            <li>
              Up to <strong>two excused absences</strong> per program may be considered if
              reported within 24 hours to <a className="text-orange-600 underline" href="mailto:support@freakfithub.in">support@freakfithub.in</a> with valid proof.
            </li>
          </ul>

          <h4 className="font-semibold mt-4">(b) No Noticeable Results Despite Full Participation</h4>
          <p className="mt-2">If you have shown no measurable progress despite full commitment, you may qualify.</p>
          <p className="mt-2">Required Evidence:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Before and after dated photos</li>
            <li>Measured body stats (waist, hips, arms, etc.)</li>
            <li>Brief activity/diet log aligned with program instructions</li>
          </ul>
          <p className="text-sm mt-2 text-white">All evidence will be reviewed by FreakFitHub’s certified fitness experts; their decision is final. Forged evidence will disqualify the request.</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "2. Refund Process",
      content: (
        <div>
          <p>To request a refund (if eligible), follow these steps within <strong>7 days</strong> of program completion:</p>
          <ol className="list-decimal pl-6 mt-2">
            <li>Email: <a className="text-orange-600 underline" href="mailto:support@freakfithub.in">support@freakfithub.in</a></li>
            <li>Include: full name, registered email, program name, enrollment date, explanation and supporting documentation.</li>
          </ol>

          <h5 className="mt-3 font-semibold">Review & Processing</h5>
          <ul className="list-disc pl-6 mt-2">
            <li>Verification time: <strong>7–10 business days</strong> after receipt of a complete request.</li>
            <li>Notification will be sent by official email with the final decision.</li>
            <li>Approved refunds are issued to the original payment method within <strong>5–7 business days</strong>, subject to payment provider/bank processing.</li>
            <li>Refunds are one-time only per user.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "3. Non-Refundable Cases",
      content: (
        <div>
          <ul className="list-disc pl-6 mt-2">
            <li>Attendance below 95% or unreported absences.</li>
            <li>Incomplete or falsified documentation.</li>
            <li>Requests beyond the 7-day post-program period.</li>
            <li>Personal reasons (loss of motivation, schedule changes, disinterest).</li>
            <li>Dislike of class format, instructor, or online setup.</li>
            <li>Technical issues on participant’s end (internet/device problems).</li>
            <li>Programs marked “Non-Refundable” at purchase.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      title: "4. Program Cancellations or Changes",
      content: (
        <div>
          <p>
            If FreakFitHub cancels, postpones, or significantly alters a program which
            affects results, participants will receive either a full refund or a prorated
            refund based on participation to date.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "5. Dispute Resolution",
      content: (
        <div>
          <p>
            Disputes will be settled through binding arbitration per the Consumer
            Protection Act, 2019 and the Arbitration & Conciliation Act, 1996. Legal
            jurisdiction is the courts of New Delhi, India.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Disclaimer & Updates",
      content: (
        <div>
          <p>
            This policy may be revised without prior notice; the latest version will be
            available on the official website. By enrolling, you acknowledge that you
            have read and agreed to this policy.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070c] text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="rounded-2xl overflow-hidden shadow-md mb-8">
          <div className="p-8" style={{ background: `linear-gradient(135deg, ${brand.orange}, ${brand.navy})` }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white">FreakFitHub</h1>
                <p className="mt-2 text-white/90 max-w-2xl">Your Path to Fitness, Transparency, and Trust — Refund & Cancellation Policy</p>
              </div>
            </div>

            <div className="mt-6 bg-white/10 p-4 rounded-md">
              <p className="text-sm text-white/90">Live online Zumba and home-based fitness sessions on Zoom — women-only, energetic, supported, and results-driven.</p>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column: Summary and quick actions */}
          <aside className="md:col-span-1 bg-[#05070c] text-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Quick Summary</h3>
            <p className="mt-3 text-sm text-white">{policySummary}</p>

            <div className="mt-6">
              <h4 className="font-semibold">Need help?</h4>
              <p className="text-sm text-white mt-2">Email us at <a className="text-orange-600 underline" href="mailto:support@freakfithub.in">support@freakfithub.in</a> with your documents and we’ll review your case.</p>
            </div>
          </aside>

          {/* Right column: Full policy with accordions */}
          <section className="md:col-span-2 bg-[#05070c] rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-white mb-4">FreakFitHub Refund & Cancellation Policy</h2>
            <p className="text-sm text-white mb-6">Below is the full policy. Click each section to expand for details.</p>

            <div className="space-y-4">
              {sections.map((s) => (
                <div key={s.id} className="border border-white rounded-lg">
                  <button
                    onClick={() => toggle(s.id)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-white">{s.title}</h3>
                    </div>
                    <div className="text-white">{openSection === s.id ? "▲" : "▼"}</div>
                  </button>

                  <div className={`${openSection === s.id ? "block" : "hidden"} px-4 pb-4 text-sm text-white`}>{s.content}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-white">
              <p className="mb-2">Last updated: <strong>Document-ready (replace with your official last update date)</strong></p>
              <p>By enrolling in any FreakFitHub Online Virtual women-only program, participants acknowledge that they have read and agreed to this policy.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

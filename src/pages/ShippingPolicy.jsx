import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Shipping Policy – FreakFitHub (New Delhi)
        </h1>

        {/* <p className="text-gray-300 text-lg text-center mb-10">
          Last Updated: {{DATE_HERE}}
        </p> */}

        <div className="space-y-8 leading-relaxed text-gray-300 text-[17px]">
          <p>
            At FreakFitHub, we specialize in Online Virtual <strong>Only for Women</strong> fitness
            services, offering an <strong>Exclusive Women Fitness Program</strong> that allows
            participants to <strong>Join from Home Only</strong> through the Zoom Meeting App.
            Our programs are fully <strong>Live Online Zumba</strong> and
            <strong> Home Based Fitness Programs</strong>, ensuring every woman can
            <strong> Get Fit Anywhere</strong> — safely and conveniently from home.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Nature of Service</h2>
          <p>
            As FreakFitHub provides digital fitness training and wellness services, no
            physical goods are shipped to customers. Instead, all sessions, schedules, and
            training materials are delivered electronically via:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Email communication</li>
            <li>WhatsApp or SMS (where applicable)</li>
            <li>Zoom Meeting App links for Live from Home classes</li>
          </ul>
          <p>
            Therefore, traditional “shipping” in the physical sense does not apply to our
            business. However, we ensure instant and seamless digital delivery of all service
            access credentials post-payment confirmation.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Delivery Timelines</h2>
          <p>
            Upon successful payment through Razorpay, UPI, Paytm, PhonePe, GPay, Credit
            Card, or Online Bank Transfer, customers receive their joining details within:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>1–12 hours for standard enrollments; or</li>
            <li>Immediately, in case of automated batches.</li>
          </ul>
          <p>
            In the rare event of a delay due to system or technical errors, customers may
            contact our support team at <strong>support@freakfithub.com</strong> for quick
            resolution.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Access and Service Activation</h2>
          <p>All registered participants receive:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Official confirmation via email or WhatsApp</li>
            <li>Unique batch details and joining link for Live Online Zumba sessions</li>
            <li>Access credentials valid only for the enrolled participant</li>
          </ul>
          <p>
            The service is non-transferable and exclusive to the individual registrant to
            maintain security and authenticity.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Digital Resource Delivery</h2>
          <p>
            Where applicable, supporting materials such as recorded classes, nutrition guides,
            or training PDFs are shared digitally. Delivery is considered complete once sent to
            the customer’s registered email or WhatsApp account.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Non-Delivery or Access Issues</h2>
          <p>
            If a participant faces issues accessing their Live from Home class or digital
            material due to a technical or operational error on FreakFitHub’s part, we will
            take full responsibility to restore access promptly or offer a replacement batch at
            no extra cost.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Disclaimer</h2>
          <p>
            As an Online Virtual Only for Women platform, FreakFitHub does not engage in
            physical shipping or courier dispatch. All users agree to ensure the accuracy of
            their contact information to facilitate timely digital delivery.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Governing Law</h2>
          <p>
            This Shipping Policy shall be governed in accordance with the laws of India.
            Any disputes shall fall under the jurisdiction of courts located in New Delhi,
            India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;

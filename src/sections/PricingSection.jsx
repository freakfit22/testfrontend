import pricingPlans from "../data/pricingPlans.json";

export default function PricingSection() {
  return (
    <section className="min-h-screen px-4 pb-30 text-white font-sans">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 uppercase">
        Simple, Transparent Pricing
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-15 md:gap-10">
        {pricingPlans.map((plan, i) => (
          <div
            key={i}
        className={`rounded-2xl p-6 w-80 md:w-[280px] ${
    plan.highlight
      ? "bg-gradient-to-b from-[#B08DC1] to-[#A3CBEC] text-white  md:w-[280px] md:h-[510px]"
      : "border border-gray-500"
  }`}
          >
           <h3 className="text-lg font-semibold uppercase  pb-4 border-b-1 border-white w-40  mb-4">
  {plan.title}
</h3>
            <p className={`text-3xl md:text-5xl font-bold `}>
              {plan.price}{" "}
              {/* <span
                className={`${
                  plan.highlight ? "text-white" : "text-[#FD4C00]"
               } text-[25px] align-super ml-1`}
              >
                {plan.duration}
              </span> */}
            </p>
            <p
              className={`text-xs mt-2 mb-6 ${
                plan.highlight ? "text-white" : "text-gray-300"
              }`}
            >
              {plan.description}
            </p>

            <ul className="text-sm space-y-2 text-left mb-6">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  {feature}
                </li>
              ))}
            </ul>

           <a
              href="https://wa.me/919528625403?text=Hi%20I%20am%20interested%20in%20your%20online%20zumba%20classes.%20Share%20me%20payment%20detail%20and%20program%20detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`px-4 py-2 ${
                  plan.highlight
                    ? "bg-[#B08DC1] hover:bg-white cursor-pointer hover:text-black"
                    : "border-2 border-[#B08DC1] hover:bg-[#B08DC1] cursor-pointer"
                } text-white transition`}
              >
                Learn More
              </button>
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

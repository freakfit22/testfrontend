

import React from "react";
import Heading from "../components/subComponents/Heading";
import Section from "../components/subComponents/Section";
import useRazorpayPayment from "../components/useRazorpayPayment";


const Benefits = ({ benefits, profile, isAuthenticated, openLoginModal }) => {
  const { handlePayment, loading } = useRazorpayPayment();

  const handleBuyNow = async (item) => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }

    try {
      await handlePayment(
        item.amount - (item.amount * (item.discount / 100)),
        item.id,
        profile
      );
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <Section id="features" className="gradient-background">
      <div className="container relative z-2">

        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Get Fit, Have Fun: Join Our Zumba Classes Today!"
        />

        <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mb-10 justify-center">
          {benefits.map((item) => {
            // const discountedAmount = item.amount - (item.amount * (item.discount / 100));

            return (
              <div
                className="relative w-full h-full max-w-[310px] sm:max-w-[340px] mx-auto transform transition duration-300 hover:scale-105"
                key={item.id}
              >
                <img
                  src={item.backgroundUrl}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg z-0"
                />

                <div className="relative z-10 flex flex-col min-h-[11rem] sm:min-h-[20rem] p-[1.6rem] sm:p-[1.5rem] pb-6 mb-3 rounded-lg bg-opacity-50">

                  {/* TITLE */}
                  <h5 className="h5 mb-2 sm:mb-4 text-md sm:text-lg text-white text-center uppercase tracking-wide">
                    {item.title}
                  </h5>

                  {/* PRICE SECTION */}
                  <div className="flex flex-col mb-2 sm:mb-4">
                    <p className="text-2xl sm:text-3xl font-semibold text-center" style={{ color: "#E6AFFC" }}>
                       ₹{item.amount}
                    </p>
                    {/* <p className="text-sm sm:text-base font-medium text-center" style={{ color: "#FFDE59" }}>
                      Discount: {item.discount}%
                    </p> */}
                    {/* <p className="text-sm sm:text-base font-medium text-center line-through" style={{ color: "#E6AFFC" }}>
                      ₹{item.amount} */}
                    {/* </p> */}
                    {/* <p className="text-sm sm:text-base font-medium text-gray-300 text-center">
                      Duration: {item.duration} days
                    </p> */}
                  </div>

                  {/* FEATURES LIST (DYNAMIC) */}
                  <ul className="mt-3 space-y-1 text-gray-200 text-sm sm:text-base flex flex-col items-center">
                    {item.features?.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 justify-center">
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>


                  {/* BOTTOM SECTION (ICON + BUY NOW) */}
                  <div className="flex items-center mt-auto pt-4">
                    <a href="https://wa.me/9528625403?text=hii%20how%20are%20you%20bro">
                      <img
                        src={item.iconUrl}
                        width={32}
                        height={32}
                        alt={item.title}
                        className="rounded-full shadow-lg"
                      />
                    </a>

                    <button
                      onClick={() => handleBuyNow(item)}
                      disabled={loading}
                      style={{ backgroundColor: "#3C184B" }}
                      className="ml-auto py-1 px-3 sm:px-5 rounded-md font-medium text-white transition-all duration-300 hover:shadow-neon focus:ring disabled:opacity-50"
                    >
                      {loading ? "Processing..." : "Buy Now"}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

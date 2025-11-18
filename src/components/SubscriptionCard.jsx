


// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const SubscriptionCard = ({ benefits, isAuthenticated, openLoginModal }) => {

//   // Function to handle "Buy Now" action
//   const handleBuyNow = (item) => {
//     if (!isAuthenticated) {
//       openLoginModal();  // Open login modal if not authenticated
//       return;
//     }

//     // Store the selected benefit in localStorage
//     localStorage.setItem("selectedBenefit", JSON.stringify(item)); 

//     // Redirect to the benefit URL
//     window.location.href = item.text;  
//   };

//   return (  
//     <div className="py-10">
//       <div className="container relative z-2 flex flex-col items-center">

//         {/* Swiper Slider */}
//         <Swiper 
//           modules={[Pagination]} 
//           spaceBetween={20} 
//           slidesPerView={1} 
//           pagination={{ clickable: true }} 
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 }
//           }}
//           className="w-full max-w-2xl"
//         >
//           {benefits.map((item) => {
//             const discountedAmount = item.amount - (item.amount * (item.discount / 100));

//             return (
//               <SwiperSlide key={item.id}>
//                 {/* Card Container */}
//                 <div className="relative w-full max-w-[250px] sm:max-w-[280px] transform transition duration-300 hover:scale-105 mx-auto border-2 border-purple-500 rounded-lg">

//                   {/* Card Content */}
//                   <div className="relative z-10 flex flex-col min-h-[11rem] sm:min-h-[20rem] p-[1.6rem] sm:p-[1.5rem] pb-6 mb-3 rounded-lg bg-opacity-50">

//                     {/* Title */}
//                     <h5 className="h5 mb-2 sm:mb-4 text-md sm:text-lg text-white text-center uppercase tracking-wide">
//                       {item.title}
//                     </h5>

//                     {/* Pricing & Discount Section */}
//                     <div className="flex flex-col items-center mb-2 sm:mb-4">
//                       <p className="text-2xl sm:text-3xl font-semibold text-purple-400">
//                         ₹{discountedAmount.toFixed(2)}
//                       </p>
//                       <p className="text-sm sm:text-base font-medium text-green-500">
//                         Discount: {item.discount}%
//                       </p>
//                       <p className="text-sm sm:text-base font-medium line-through text-purple-400">
//                         ₹{item.amount}
//                       </p>
//                       <p className="text-sm sm:text-base font-medium text-gray-300">
//                         Duration: {item.duration} days
//                       </p>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col items-center mt-auto gap-3">

//                       {/* WhatsApp Icon */}
//                       <a href={`https://wa.me/9084252037?text=Hi%20I'm%20interested%20in%20${item.title}`}>
//                         <img
//                           src={item.iconUrl}
//                           width={32}
//                           height={32}
//                           alt={item.title}
//                           className="rounded-full shadow-lg"
//                         />
//                       </a>

//                       {/* Buy Now Button */}
//                       <button
//                         onClick={() => handleBuyNow(item)} 
//                         className="py-2 px-5 rounded-md font-medium text-white transition-all duration-300 bg-purple-600 hover:bg-purple-800 hover:shadow-neon focus:ring focus:ring-purple-500"
//                       >
//                         Buy Now
//                       </button>

//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionCard;



import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Info } from "lucide-react";
import useRazorpayPayment from "../components/useRazorpayPayment";

const SubscriptionCard = ({ benefits, profile, isAuthenticated, openLoginModal }) => {
  const { handlePayment, loading } = useRazorpayPayment();
  const [expandedCard, setExpandedCard] = useState(null);

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

  const toggleDetails = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-6">
        Choose Your Plan
      </h2>

      <div className="container relative z-2 flex flex-col items-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full max-w-2xl"
        >
          {benefits.map((item) => {
            const isExpanded = expandedCard === item.id;

            return (
              <SwiperSlide key={item.id}>
                <div className="relative w-full max-w-[300px] mx-auto transform transition duration-300 hover:scale-105">

                  {/* Background image */}
                  <img
                    src={item.backgroundUrl}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full rounded-lg z-0"
                  />

                  {/* Card Body */}
                  <div className="relative z-10 flex flex-col min-h-[20rem] p-[1.6rem] pb-6 mb-3 rounded-lg bg-opacity-50">

                    {/* Title */}
                    <h5 className="text-xl text-white font-semibold text-center uppercase tracking-wide mb-2">
                      {item.title}
                    </h5>

                    {/* Price */}
                    <p className="text-3xl font-semibold text-center mb-3" style={{ color: "#E6AFFC" }}>
                      ₹{item.amount}
                    </p>

                    {/* DEFAULT VIEW — Features list */}
                    {!isExpanded && (
                      <ul className="text-gray-200 text-sm space-y-2 flex-1 flex flex-col items-center">
                        <li>Zumba + Other Activities</li>
                        <li>Weekend Yoga Sessions</li>
                        <li>Doubt Sessions</li>
                        <li>Personalized Diet Plan</li>
                        <li>Weekly Consultation</li>
                        <li>Recordings of Live Classes</li>
                        <li>Miss Day Extensions</li>
                        <li>Flexible Time-Slots</li>
                      </ul>
                    )}

                    {/* EXPANDED VIEW — Detailed Info */}
                    {isExpanded && (
                      <div className="text-gray-200 text-sm space-y-2 leading-relaxed">

                        <p className="font-semibold text-white text-center">Join Any Time Slot:</p>
                        <p className="text-center">6AM, 7AM, 8AM, 9AM, 10AM</p>
                        <p className="text-center">5PM, 6PM, 7PM, 8PM</p>

                        <p className="font-semibold text-white mt-3">
                          After Registration — Next Steps:
                        </p>

                        <ul className="list-disc list-inside space-y-1">
                          <li>✔ Select Your Preferred Class Slot</li>
                          <li>📩 Join Women-Only WhatsApp Group</li>
                          <li>📝 Fill Your Diet Form</li>
                          <li>📞 Diet Consultation Call</li>
                          <li>🎯 Set Your Fitness Goals</li>
                          <li>🔗 Daily class links on WhatsApp</li>
                        </ul>
                      </div>
                    )}

                    {/* Buttons Section */}
                    <div className="flex items-center mt-auto pt-4">

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/919368537150?text=${encodeURIComponent(
                          `Hi! I’d like to know more about your Zumba classes. Please share details about: ${item.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.iconUrl}
                          width={32}
                          height={32}
                          alt={item.title}
                          className="rounded-full shadow-lg"
                        />
                      </a>

                      {/* Info toggle */}
                      <button
                        onClick={() => toggleDetails(item.id)}
                        style={{ backgroundColor: "#3C184B" }}
                        className="text-white hover:bg-[#522066] p-2 ml-2 rounded-full transition"
                      >
                        <Info size={18} />
                      </button>

                      {/* Buy Now */}
                      <button
                        onClick={() => handleBuyNow(item)}
                        disabled={loading}
                        style={{ backgroundColor: "#3C184B" }}
                        className="ml-auto py-2 px-5 rounded-md font-medium text-white transition-all hover:shadow-neon disabled:opacity-50"
                      >
                        {loading ? "Processing..." : "Buy Now"}
                      </button>

                    </div>

                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SubscriptionCard;

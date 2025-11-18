

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SubscriptionCard = ({ benefits, isAuthenticated, openLoginModal }) => {

  const handleBuyNow = (item) => {
    if (!isAuthenticated) {
      openLoginModal();  // Open login modal if not authenticated
      return;
    }

    // Store the selected benefit in localStorage
    localStorage.setItem("selectedBenefit", JSON.stringify(item)); 

    // Redirect to the benefit URL
    window.location.href = item.text;  
  };

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-6">Choose Your Plan</h2>
      
      <div className="container relative z-2 flex flex-col items-center">

        {/* Swiper Slider */}
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
            const discountedAmount = item.amount - (item.amount * (item.discount / 100));

            return (
              <SwiperSlide key={item.id}>
                {/* Card Container */}
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] transform transition duration-300 hover:scale-105 mx-auto border-2 border-purple-500 rounded-lg bg-gray-900 bg-opacity-90">
                  
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col min-h-[20rem] p-[1.6rem] pb-6 mb-3 rounded-lg bg-opacity-50">

                  {/* TITLE + INFO BUTTON */}
                  <div className="flex justify-center items-center mb-3">
                    <h5 className="h5 text-lg text-white uppercase tracking-wide">
                      {item.title}
                    </h5>


                  </div>

                  {/* PRICE */}
                  <p className="text-3xl font-semibold text-center mb-3" style={{ color: "#E6AFFC" }}>
                    ₹{item.amount}
                  </p>

                  {/* -------------------------------------------
                      VIEW 1: DEFAULT FEATURES LIST
                  -------------------------------------------- */}
                  {!isExpanded && (
                    <ul className="text-gray-200 text-sm space-y-2 justify-center flex-1 flex flex-col  items-center">
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

                  {/* -------------------------------------------
                      VIEW 2: DETAILED DESCRIPTION ON CLICK
                  -------------------------------------------- */}
                  {isExpanded && (
                    <div className="text-gray-200 text-sm leading-relaxed space-y-2">

                      <p className="font-semibold text-white text-center">
                        Join Any Time Slot as per your Convenience:
                      </p>
                      <p className="text-center">6AM, 7AM, 8AM, 9AM, 10AM</p>
                      <p className="text-center">5PM, 6PM, 7PM, 8PM</p>

                      <p className="font-semibold text-white mt-3">
                        After Registration — What Happens Next:
                      </p>

                      <ul className="list-disc list-inside space-y-1">
                        <li>✔ Select Your Preferred Class Slot</li>
                        <li>📩 Join Our Exclusive Women-Only WhatsApp Group</li>
                        <li>📝 Fill Your Diet Form</li>
                        <li>📞 Personalized Diet Consultation Call</li>
                        <li>🎯 Set Your Fitness Goals</li>
                        <li>🔗 Session Links shared daily in WhatsApp group</li>
                      </ul>

                    </div>
                  )}

                  {/* --- BUY NOW + WHATSAPP --- */}
                  <div className="flex items-center mt-auto pt-4">

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
                    <button
                      onClick={() => toggleDetails(item.id)}
                      style={{ backgroundColor: "#3C184B" }}
                      className="text-white hover:bg-[#522066] p-2 ml-2 rounded-full transition"
                    >
                      <Info size={18} />
                    </button>


                    <button
                      onClick={() => handleBuyNow(item)}
                      disabled={loading}
                      style={{ backgroundColor: "#3C184B" }}
                      className="ml-auto py-2 px-5 rounded-md font-medium text-white transition-all duration-300 hover:shadow-neon disabled:opacity-50"
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

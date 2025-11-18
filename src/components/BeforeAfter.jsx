

  // import { Swiper, SwiperSlide } from "swiper/react";
  // import Button from "./subComponents/Button";
  // import "swiper/css";
  // import "swiper/css/pagination";
  // import "swiper/css/free-mode";
  // import { FreeMode, Pagination } from "swiper/modules";
  // import { Link } from "react-router-dom"; // Import Link for navigation
  // import Section from "./subComponents/Section";

  // const BeforeAfter = ({testimonials}) => {
  //   return (
  //     <Section>
  //     <div>
  //       <h2 className="text-center text-4xl font-bold mb-15">Transformation</h2>

  //       <div className="flex items-center justify-center flex-col h-auto">
  //         <Swiper
  //           breakpoints={{
  //             // Show 1 slide for phone view (below 640px)
  //             0: {
  //               slidesPerView: 1,
  //               spaceBetween: 15,
  //             },
  //             // Show 2 slides for devices wider than 640px
  //             640: {
  //               slidesPerView: 2,
  //               spaceBetween: 15,
  //             },
  //             // Show 3 slides for devices wider than 1024px
  //             1024: {
  //               slidesPerView: 3,
  //               spaceBetween: 15,
  //             },
  //           }}
  //           freeMode={true}
  //           pagination={{
  //             clickable: true,
  //           }}
  //           modules={[FreeMode, Pagination]}
  //           className="max-w-[90%] lg:max-w-[80%]"
  //         >
  //           {testimonials.map((item) => (
  //             <SwiperSlide key={item.title}>
  //               <div className="relative shadow-lg text-white overflow-hidden cursor-pointer">
  //                 {/* Apply aspect ratio */}
  //                 <div className="aspect-[1/1]">
  //                 <img
  //               src={item.image}
  //               alt={item.title} 
  //                 className=" inset-0 bg-cover bg-center"
  //               />
  //                   <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
  //                   <div className="relative flex flex-col gap-3 px-4 py-6"></div>
  //                 </div>
  //               </div>
  //             </SwiperSlide>
  //           ))}
  //         </Swiper>

  //         {/* View More button */}
  //         <div className="mt-6">
  //           <Link to="/before&after">
  //             <Button className="px-6 py-3 text-white rounded-lg transition duration-300">
  //               View More
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //     </Section>
  //   );
  // };

  // export default BeforeAfter;





//   import { Swiper, SwiperSlide } from "swiper/react";
// import Button from "./subComponents/Button";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import { FreeMode, Pagination, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
// import Section from "./subComponents/Section";

// const BeforeAfter = ({ testimonials }) => {
//   return (
//     <Section>
//       <div>
//         <h2 className="text-center text-4xl font-bold mb-15">Transformation</h2>

//         <div className="flex items-center justify-center flex-col h-auto">
//           <Swiper
//             breakpoints={{
//               0: { slidesPerView: 1, spaceBetween: 15 },
//               640: { slidesPerView: 2, spaceBetween: 15 },
//               1024: { slidesPerView: 3, spaceBetween: 15 },
//             }}
            
//             // ✅ AUTO-SLIDE SETTINGS
//             autoplay={{
//               delay: 2500,        // time before slide moves
//               disableOnInteraction: false,
//             }}

//             freeMode={true}
//             pagination={{ clickable: true }}
//             modules={[FreeMode, Pagination, Autoplay]} // ✅ Add Autoplay here
//             className="max-w-[90%] lg:max-w-[80%]"
//           >
//             {testimonials.map((item) => (
//               <SwiperSlide key={item.title}>
//                 <div className="relative shadow-lg text-white overflow-hidden cursor-pointer">
//                   <div className="aspect-[1/1]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//   className="w-full h-full object-cover rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
//                     <div className="relative flex flex-col gap-3 px-4 py-6"></div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="mt-6">
//             <Link to="/before&after">
//               <Button className="px-6 py-3 text-white rounded-lg transition duration-300">
//                 View More
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default BeforeAfter;




import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./subComponents/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Section from "./subComponents/Section";

const BeforeAfter = ({ testimonials }) => {
  return (
    <Section>
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">
          Transformation
        </h2>

        <div className="flex items-center justify-center flex-col h-auto">
          <Swiper
          loop={true}

            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 15 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="relative shadow-lg text-white overflow-hidden cursor-pointer group rounded-lg">
                  
                  {/* Image */}
                  <div className="aspect-[1/1]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg" />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View More Button */}
          <div className="mt-6">
            <Link to="/before&after">
              <Button className="px-6 py-3 text-white bg-[#3C184B] hover:bg-[#2A1236] rounded-lg transition-all duration-300">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfter;

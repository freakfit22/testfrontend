
// import Image from "../../assets/hero/hero.jpeg";

// const AboutHero = () => {
//   return (
//     <div className="relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[800px] overflow-hidden">
//       {/* Image */}
//       <img
//         src={Image}
//         alt="Hero Background"
//         className="w-full h-full object-cover"
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-black/100 via-transparent to-transparent"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex flex-col items-start justify-end text-left text-white px-4 sm:px-8 md:px-20 pb-6 sm:pb-8 md:pb-10">
//         <h1 className="text-[3.052rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.441rem] font-bold mb-10">
//           Our Mission
//         </h1>
//         <p className="text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem] max-w-md">
//           Helping Women Become the Healthiest Version of Themselves.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;



import Image from "../../assets/hero/hero.jpeg";

const AboutHero = () => {
  return (
    <div className="relative w-full 
        h-[280px] 
        sm:h-[380px] 
        md:h-[500px] 
        lg:h-[800px] 
        overflow-hidden">

      {/* Image */}
      <img
        src={Image}
        alt="Hero Background"
        className="
          w-full h-full
          
          /* MOBILE — show full image */
          object-contain
          
          /* TABLET & DESKTOP — fill space nicely */
          sm:object-cover 
          sm:object-center
        "
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-start justify-end text-left text-white 
                      px-4 sm:px-8 md:px-20 
                      pb-4 sm:pb-8 md:pb-10">
        <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] font-bold mb-6  ">
          Our Mission
        </h1>
        <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] max-w-md">
          Helping Women Become the Healthiest Version of Themselves.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;

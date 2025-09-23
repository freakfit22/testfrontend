import { FaDumbbell, FaRunning, FaHeart, FaUserAlt, FaMusic, FaHeartbeat, FaSpa } from "react-icons/fa";

const programs = [
  {
    icon: <FaMusic className="text-[#B08DC1] text-3xl" />,
    title: "Zumba Fitness & Cardio Dance",
    description:
      "High-energy dance workouts set to upbeat music, designed to burn calories, boost mood, and improve endurance through fun, high-intensity routines.",
  },
  {
    icon: <FaHeart className="text-[#B08DC1] text-3xl" />,
    title: "Health & Nutrition",
    description:
      "Balanced nutrition plans designed to fuel your body with essential vitamins, proteins, and minerals for long-term wellness.",
  },
  {
    icon: <FaSpa className="text-[#B08DC1] text-3xl" />,
    title: "Yoga & Face Yoga",
    description:
      "Enhance your well-being with yoga and face yoga sessions focused on flexibility, relaxation, and natural rejuvenation.",
  },
  {
    icon: <FaRunning className="text-[#B08DC1] text-3xl" />,
    title: "Aerobics & Core Workouts",
    description:
      "Dynamic aerobic routines combined with core-strengthening exercises to improve cardiovascular fitness, stability, balance, and overall strength.",
  },
];

const ProgramSection = () => {
  return (
    <section className=" text-white py-20  px-6 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 lg:mb-30">
        PROGRAM
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-8xl md:mx-20">
        {programs.map((prog, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 p-6 rounded-md hover:shadow-lg transition-shadow h-full min-h-[260px] flex flex-col"
          >
            <div className="lg:mb-8 mb-2">{prog.icon}</div>
            <h3 className="text-start sm:text-3xl font-semibold mb-2 lg:mb-6">
              {prog.title}
            </h3>
            <p className="text-sm text-start sm:text-2xl text-gray-400 mb-6 flex-1">
              {prog.description}
            </p>
            <a
              href="https://wa.me/919528625403?text=Hi%20I%20am%20interested%20in%20your%20Zumba%20classes!"
              className="text-xm sm:text-xl font-semibold inline-flex items-center text-white hover:text-[#FD4C00]"
            >
              Join Now <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>

      <p className="text-gray-400 lg:mt-18 mt-6 max-w-md sm:max-w-2xl mx-auto text-xs sm:text-xl leading-relaxed">
        Discover the joy of movement with our Zumba and fitness programs! Whether you're a beginner or a seasoned dancer, our classes are designed to help you burn calories, boost your energy, and have fun. Join our community and start your fitness journey today!
      </p>
    </section>
  );
};

export default ProgramSection;

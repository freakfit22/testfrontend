export default function PersonalTrainer() {
  return (
    <div className="min-h-screen px-4 lg:py-20 py-10 bg-transparent text-white font-sans">
      {/* Title */}
      {/* <div className="text-center md:py-20 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">PERSONAL TRAINER</h1>
      </div> */}

      {/* Content Row */}
      <div className="flex flex-col md:flex-row lg:gap-8 items-start pl-10 md:pl-0 md:items-start">
        {/* Left Image Box with image inside */}
        {/* <div className="hidden md:block md:w-[600px] md:h-[600px] bg-transparent border border-white relative overflow-hidden">
          <img
            src="src/assets/Gym.jpg" // Replace with your actual image
            alt="Personal Trainer"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Strength Training Card */}
        {/* <div className="w-60 md:w-[420px] h-auto md:h-[600px] bg-transparent border border-white flex flex-col justify-end relative overflow-hidden"> */}
          {/* <img
            src="src/assets/Gym.jpg"
            alt="Gym"
            className="object-cover w-full h-full"
          /> */}

          {/* Bottom Gradient Label */}
          {/* <div className="bg-gradient-to-tr from-purple-500 to-blue-400 text-white text-center p-4">
            <h2 className="font-bold text-lg">Strength Training</h2>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div> */}
        {/* </div> */}

        <div className="w-full flex justify-center items-center mt-20 md:mt-20">
          <div className="md:w-[750px] md:text-justify text-center md:pl-0">
            <h2 className="text-5xl md:text-[80px] font-bold md:mb-12 mb-4">
              ABOUT US
            </h2>
            {/* <button className="my-4 w-[100px] md:w-[200px] h-[40px] md:h-[63px] text-xs md:text-2xl md:px-6 md:py-2 border border-[#FD4C00] text-white hover:bg-[#FD4C00] transition cursor-pointer">
              Learn More
            </button> */}
            <p className="text-base py-5 pr-0 text-justify md:text-2xl text-gray-300">
              FreakFit is a trusted online fitness platform helping 5,000+ clients achieve real results through structured programs in Zumba, Dance Fitness, Strength Training, Yoga, and Face Yoga. Guided by certified trainers, we focus on safe, effective, and enjoyable sessions—empowering individuals to lose weight, build strength, and sustain a healthier lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-40 md:border-t md:border-gray-600 w-full md:w-[1100px] mx-auto " />
    </div>
  );
}

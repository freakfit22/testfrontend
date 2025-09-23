import weekimg from "../assets/weeklySchedule.jpg";
const LevelUp = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen text-white">
      <div className="md:w-1/2 lg:pl-30 bg-gradient-to-b from-[#B08DC1] via-[#A3CBEC] to-[#F4753F_0%] p-15 md:p-12 lg:p-20 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-7xl font-extrabold mb-6 leading-tight">
          READY TO <br /> LEVEL UP <br /> YOUR BODY
        </h1>
        {/* <button className="border-2 border-white lg:text-2xl text-white md:w-50 md:h-20 lg:my-10 font-semibold hover:bg-[#FD4C00] hover:text-black transition h-[40px] text-xs w-[90px] cursor-pointer">
          Learn More
        </button> */}
        <p className="mt-6 md:text-2xl text-white/90 text-left">
          <span className="font-bold">Your Weekly Workout Planner:</span> <br />
          <span className="block mt-2">
            <span className="font-semibold">Monday:</span> Zumba &nbsp;|&nbsp;
            <span className="font-semibold">Tuesday:</span> HIIT &nbsp;|&nbsp;
            <span className="font-semibold">Wednesday:</span> Tabata &nbsp;|&nbsp;
            <span className="font-semibold">Thursday:</span> Strength Training
            &nbsp;|&nbsp;
            <span className="font-semibold">Friday:</span> Cardio &nbsp;|&nbsp;
            <span className="font-semibold">Weekend:</span> Yoga
          </span>
          <br />
          <span className="block mt-4">
            <span className="font-bold text-[#FD4C00]">Unlimited Access:</span>{" "}
            Join any number of sessions as often as you like while your plan is
            active!
          </span>
        </p>
      </div>

      <div className="lg:w-1/2 p-6 lg:pl-30 md:p-30  flex flex-col justify-center md:bg-[radial-gradient(circle_at_center,_#B08DC1_20%,_#1f252b_75%)]">
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">
          PROGRAM
        </h2> */}

        <div className="relative w-full  max-w-[400px] md:max-w-[500px] lg:max-w-[650px] aspect-square flex items-center justify-center ">
          <div className="relative w-full h-full bg-white z-10 " />

          <img
            src={weekimg}
            alt="ZUMBA"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LevelUp;

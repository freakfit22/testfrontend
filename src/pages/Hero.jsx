import { useState } from "react";
import Heroimg from "../assets/heroimg.png";
import VideoFrame from "../components/VideoFrame";
import ZumbaVideo from "../assets/introclip.mp4"; // Make sure this path is correct

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative  md:min-h-screen font-sans text-white overflow-hidden  z-10">
      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 md:h-[828px] w-150 h-201 bg-[radial-gradient(circle_at_top_left,_#672723_-5%,_#1f252b_70%)] md:bg-gradient-to-b md:from-[#a885b9] md:via-[#3b4758] md:to-[#1f252b_70%] md:z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-0 pt-10 md:pt-0">
        {/* Left Section */}
        <div className="md:w-1/2 md:ml-20 space-y-6 md:mt-50 mt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-left">
            GET FIT WITH <br/> <span className="text-[#9ec0f5]">ZUMBA</span>
          </h1>
          <p className="text-xs md:text-2xl mr-18 md:mr-0 md:mt-10 text-gray-300  max-w- mx-auto  text-justify md:text-justify">
Be the best version of YOU with FreakFit Online Zumba Classes—anytime, anywhere! Perfect for busy moms, working women, or anyone wanting to lose weight, our live sessions with flexible timings and diet plans make fitness fun, energetic, and effective. Burn calories, boost confidence, and dance your way to health!          </p>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row sm:space-x-16  space-x-4 sm:space-y-0  text-xl md:mt-10 md:justify-start">
            <a
              href="https://wa.me/919528625403?text=Hi%20I%20am%20interested%20in%20your%20Zumba%20classes!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#B08DC1] to-[#A3CBEC] text-white md:text-xl font-semibold text-xs md:cursor-pointer md:py-0 md:px-0 px-2 shadow-md w-25 md:h-15 md:w-40 flex items-center justify-center"
            >
              Join Now
            </a>
            <button
              className="bg-gradient-to-b from-[#B08DC1] to-[#A3CBEC] text-white md:text-xl font-semibold text-xs md:cursor-pointer md:py-0 md:px-0 px-2 shadow-md w-25 md:h-15 md:w-40 flex items-center justify-center"
              onClick={() => setShowVideo(true)}
            >
              More Info
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:mt-30  mt-10  md:mr-20 flex justify-center">
          {/* Image box */}
          <div className="w-[450px] h-[340px] md:w-[800px] md:h-[645px] md:mt-15 bg-white overflow-hidden -ml-6 md:ml-60 relative">
            <img
              src={Heroimg}
              alt="Gym"
              className="object-cover w-full h-full"
            />
            {/* Badge */}
          </div>
        </div>
      </div>

      {/* Video Frame Modal */}
      {showVideo && (
        <VideoFrame src={ZumbaVideo} onClose={() => setShowVideo(false)} />
      )}
    </div>
  );
}

export default Hero;
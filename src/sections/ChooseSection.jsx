// eslint-disable-next-line no-unused-vars
import { Check } from "lucide-react";
import review1 from "../assets/Website/review1.jpg";
import review2 from "../assets/Website/review2.jpg";
import review3 from "../assets/Website/review3.jpg";



const MemberUsSection = () => {
  return (
    <section className="relative w-full text-white py-20 md:py-40 overflow-hidden">
      {/* 🔽 BACKGROUND DIV placed behind content */}
      <div
        className="absolute top-0 mt-125 right-0 w-full h-[500px] md:h-[338px] z-[10] 
        bg-[radial-gradient(circle_at_top_left,_#672723_-5%,_#1f252b_70%)] 
        md:bg-gradient-to-l md:from-[#a885b9] md:via-[] md:to-[#A3CBEC_0%]"
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-2 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-60 items-center">
        {/* LEFT IMAGE GRID */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4">
          <div className="w-full h-60 rounded-md overflow-hidden">
            <img
              src={review3}
              alt="Placeholder 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[500px] row-span-2 rounded-md overflow-hidden">
            <img
              src={review1}
              alt="Placeholder 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-60 rounded-md overflow-hidden">
            <img
              src={review2}
              alt="Placeholder 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-7xl font-extrabold leading-snug md:leading-tight mb-10">
            WHY CHOOSE <br className="hidden md:block" /> US ?
          </h2>

          <ul className="space-y-6 text-sm mb-10 md:text-base">
            {[
               "ZUMBA + OTHER ACTIVITIES",
                "WEEKEND YOGA SESSIONS",
                "PERSONALIZED DIET PLAN",
                "WEEKLY DIET CONSULTATION",
                "TOTALLY LIVE SESSION",
                "RECORDINGS OF LIVE CLASSES (AS NEEDED)",
                "MISS DAY EXTENSIONS",
                "FLEXIBLE TIME-SLOTS",
                "User Satisfaction",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center gap-4 ml-10 text-xs justify-start"
              >
                {/* Custom tick icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A3CBEC"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="w-6 h-6 shrink-0"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M7 12l3 3 7-7" />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MemberUsSection;

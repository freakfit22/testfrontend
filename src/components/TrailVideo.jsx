
// import React from "react";
// import YouTubeCard from "./YouTubeCard";

// const TrailVideo = (videos) => {


//   return (
//     <div className="min-h-screen bg-black">
//       <h1 className="text-3xl font-bold text-center py-8">Trail Videos</h1>
//       <YouTubeCard videos={videos} />
//     </div>
//   );
// };

// export default TrailVideo;


import React from "react";
import YouTubeCard from "./YouTubeCard";

const TrailVideo = ({ videos }) => {  // ✅ Destructure the `videos` prop

  return (
    <div className="min-h-screen bg-black">
<h1 className="text-center font-bold py-8 leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl">
  Watch the Moves, Feel the Magic.
</h1>

      <p className="text-center text-gray-300 text-sm pb-6 leading-snug sm:text-base">
  <span className="block sm:inline">
    Follow expert-led Zumba, Yoga &
  </span>
  <span className="block sm:inline">
    Workout sessions anytime.
  </span>
</p>

      <YouTubeCard videos={videos} />  {/* ✅ Pass the videos array properly */}
    </div>
  );
};

export default TrailVideo;

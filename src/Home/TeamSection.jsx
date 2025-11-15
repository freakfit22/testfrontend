

import React, { useState, useRef } from "react";
import Section from "../components/subComponents/Section";
import CardContent from "./CardContent";
import FullScreenVideo from "./FullScreenVideo";
import { FaVideo } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const TeamSection = ({ tutorProfiles }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const swiperRef = useRef(null); // ⭐ added swiper reference

  const handleCardClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // ⭐ Stop slider autoplay
    }
  };

  const resumeAutoplay = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // ⭐ Resume slider autoplay
    }
  };

  const openVideo = (videoLink) => {
    handleCardClick(); // Stop slider when video opens
    setSelectedVideo(videoLink);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    resumeAutoplay(); // Resume slider when video closes
  };

  return (
    <Section>
      <div>
        <h2 className="text-center text-2xl font-bold mb-6">OUR FITNESS COACH</h2>

        {tutorProfiles && tutorProfiles.length > 0 ? (
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="max-w-[95%] mx-auto"
            onSwiper={(swiper) => (swiperRef.current = swiper)}  // ⭐ Save swiper object
          >
            {tutorProfiles.map((member, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative flex justify-center items-center w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all ease-in-out duration-500 mx-auto"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={handleCardClick}  // ⭐ Stop autoplay when card clicked
                >
                  {/* Blurred Image Background */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border-4 border-black shadow-2xl">
                    <img
                      src={member.image || "fallback-image.jpg"}
                      alt={`${member.first_name || ""} ${member.last_name || ""}`}
                      className="w-full h-full object-cover filter blur-2xl rounded-xl"
                    />
                  </div>

                  {/* Main Image */}
                  <img
                    src={member.image || "fallback-image.jpg"}
                    alt={`${member.first_name || ""} ${member.last_name || ""}`}
                    className="relative block w-[80%] h-auto rounded-xl mx-auto my-2"
                  />

                  {/* Video Icon */}
                  {member.video_link && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openVideo(member.video_link);
                      }}
                      className="absolute top-2 left-2 z-50 bg-black bg-opacity-30 p-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
                    >
                      <FaVideo className="text-white text-2xl" />
                    </button>
                  )}

                  <CardContent
                    member={member}
                    isExpanded={hoveredIndex === index}
                    closeExpandedCard={() => {
                      setHoveredIndex(null);
                      resumeAutoplay(); // ⭐ Resume autoplay after collapse
                    }}
                    formatDescription={(desc) => desc}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">
            No team members available at the moment.
          </p>
        )}

        {selectedVideo && (
          <FullScreenVideo videoLink={selectedVideo} onClose={closeVideo} />
        )}
      </div>
    </Section>
  );
};

export default TeamSection;

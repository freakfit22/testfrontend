


import { useEffect, useState } from "react";
import { curve } from "../assets";
import Button from "../components/subComponents/Button";
import Section from "../components/subComponents/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/design/Hero";

const Hero = ({ imageUrl = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgSlide, setBgSlide] = useState(0);   // 🔥 background slide (prevents flash)
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (imageUrl.length === 0) return;

    const slideInterval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentSlide((prev) => {
          const next = prev === imageUrl.length - 1 ? 0 : prev + 1;

          // 🔥 Delay background update so foreground fade completes first
          setTimeout(() => setBgSlide(next), 300);

          return next;
        });

        setIsTransitioning(false);
      }, 500); // match transition duration
    }, 4500);

    return () => clearInterval(slideInterval);
  }, [imageUrl]);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[90rem] mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h2 mb-6">
            Invest in Your Health Today for a Stronger Tomorrow <br></br>With {' '}
            <span className="inline-block relative text-7xl">
            FreakFitHub{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-1"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Join our Zumba community and transform your fitness journey enthusiastically
          </p>

          <p className="body-1 max-w-3xl text-xl lg:text-2xl mx-auto mb-6 text-n-2 lg:mb-8">
            Certified trainers | Online sessions | Easy diet | Flexible timings |
            Weekly consultation | Separate doubt sessions
          </p>
        </div>

        <div className="relative text-center text-white max-w-[30rem] mx-auto md:max-w-[100rem] xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient mb-10 shadow-[0_0_15px_5px_rgba(0,0,0,0.5)]">
            <div className="relative rounded-[1rem]">
              <div className="aspect-[12/6] rounded-b-[0.9rem] rounded-t-[0.9rem]  overflow-hidden bg-black">
              <div
                className={`aspect-[12/6] rounded-b-[0.9rem]  overflow-hidden transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
               >
                {imageUrl.length > 0 ? (
                  <img
                    src={imageUrl[currentSlide]}
                    className="w-full h-full object-cover"
                    alt="Slide"
                  />
                ) : (
                  <p>Loading banner...</p>
                )}
              </div>
              </div>
            </div>
            <Gradient />
          </div>

          {/* CTA Button */}
          <Button href="#benefit">Join Now</Button>

          {/* 🔥 Blurred Background Image — Now Smooth, No Flash */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {imageUrl.length > 0 && (
              <img
                src={imageUrl[bgSlide]} // background image is delayed
                className="w-full h-full object-cover blur-3xl transition-opacity duration-700"
                width={5000}
                height={5800}
                alt="Hero background"
              />
            )}
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;


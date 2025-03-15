import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      {/* Dark Overlay */}

      <div
        className="relative h-screen "
        style={{
          backgroundImage: `url("/images/banner/agriculture-training-banner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        {/* Content */}
        <div className="relative flex flex-col items-start justify-center h-full gap-4 px-4 section-wrapper">
          <h1 className="lg:leading-[68px] leading-10 text-white uppercase archivo-expanded b-heading lg:text-[80px]">
            FARM DRONE PILOT
            <br />
            IN JUST 5 DAYS
          </h1>
          <h3 className="text-base font-semibold text-white archivo-expanded md:text-xl">
            Whoever you are, wherever your fields stretch, you deserve the tools
            to thrive. <br /> Enroll in our Agriculture Drone Pilot Program and
            watch your harvest—and your future—take flight.
          </h3>

          {/* ✅ Scroll Indicator */}
          <div className="absolute -translate-x-1/2 bottom-8 animate-bounce left-1/2">
            <Image
              src="/images/icons/bannerScroller.png"
              alt="🔻"
              width={36}
              height={77}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

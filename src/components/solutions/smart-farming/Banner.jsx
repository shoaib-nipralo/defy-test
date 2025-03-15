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
          backgroundImage: `url("/images/banner/smart-farming-banner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        {/* Content */}
        <div className="relative flex flex-col items-start justify-center h-full gap-4 px-4 lg:gap-8 section-wrapper">
          <h1 className="lg:leading-[88px] leading-10 text-white uppercase archivo-expanded b-heading lg:text-[88px]">
            SMART FARMING
            <br />
            STRONGER{" "}
            <span className="text-outline-white-2 text-outline-harvest-fallback archivo-expanded">
              HARVEST
            </span>
          </h1>
          <h3 className="text-base text-white body-text md:text-2xl">
            GIVE YOUR FIELDS A TECH UPGRADE
            <br />
            BIGGER HARVESTS, FEWER PESTICIDES, CLIMATE RESILIENCE, SECURE FUTURE
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

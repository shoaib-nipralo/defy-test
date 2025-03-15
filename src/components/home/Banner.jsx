"use client";

import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className='relative w-full h-[500px] md:h-screen overflow-hidden'>
      {/* ✅ Scroll Indicator */}
      <div className='absolute bottom-8 left-[49.1%] animate-bounce z-20'>
        <Image
          src='/images/icons/bannerScroller.png'
          alt='🔻'
          width={0}
          height={0}
          className='h-16 md:h-20 w-auto'
        />
      </div>
      {/* Centered Text */}
      {/* <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-10'>
        <h1 className='font-bold text-center b-heading w-max text-white'>
          <span className='text-[#F3B664] archivo-expanded'>DRONES FOR </span>
          <span
            className='text-outline-harvest text-outline-harvest-fallback archivo-expanded'
            style={{
              WebkitTextStroke: "2px #f7be68",
              color: "transparent",
            }}
          >
            <br className='sm:hidden' />
            HUMANITY
          </span>
        </h1>
      </div> */}

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source
          src='https://www.w3schools.com/html/mov_bbb.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* <div className='absolute inset-0 bg-black/40'></div> */}
    </div>
  );
}

export default Banner;

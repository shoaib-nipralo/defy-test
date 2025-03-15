"use client";

import React from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "@/data/about/data";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-10'>
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
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {bannerData.images.map((image, index) => (
          <div
            key={index}
            className='relative w-full h-[500px] md:h-screen overflow-hidden'
          >
            {/* Image Instead of Background */}
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className='w-full h-[500px] md:h-full object-cover'
              style={{ filter: "none" }}
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/40'></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;

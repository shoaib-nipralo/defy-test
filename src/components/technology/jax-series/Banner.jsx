import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className='relative'>
      {/* Background Image */}
      {/* Dark Overlay */}

      <div
        className='relative h-screen '
        style={{
          backgroundImage: `url("/images/technology/jaxseriesbanner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "10% 40% ",
        }}
      >
        {/* <div className='absolute inset-0 w-full h-full bg-black/50'></div> */}
        {/* Content */}
        <div className='relative flex flex-col items-center justify-center h-full gap-8 px-4 section-wrapper'>
          <h1 className=' text-white uppercase archivo-expanded s-heading'>
            next-gen multirotors
          </h1>
          <h3 className='font-semibold text-white archivo-expanded 2xl:text-[96px]'>
            DEFY’S{" "}
            <span className='text-outline-white archivo-expanded'>
              JAX SERIES
            </span>
          </h3>

          {/* ✅ Scroll Indicator */}
          <div className='absolute -translate-x-1/2 bottom-8 animate-bounce left-1/2'>
            <Image
              src='/images/icons/bannerScroller.png'
              alt='🔻'
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

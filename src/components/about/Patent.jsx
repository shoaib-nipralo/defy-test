import React from "react";
import Image from "next/image";

const Patent = () => {
  return (
    <div className='relative w-full h-auto'>
      <div className='absolute archivo-expanded top-7 left-6 md:left-20'>
        <span className='text-[14px] leading-[33px] font-semibold archivo-expanded'>
          BIRDY FW - LONG RANGE LOGISTICS DRONE
        </span>
        <Image
          src='/images/about/patenticon.png'
          width={0}
          height={0}
          className='h-[80px] w-auto -ml-6 -mt-2'
          alt='Patent Logo'
        />
      </div>
      <Image
        src='/images/about/patent.png'
        alt='Patent'
        width={0}
        height={0}
        className='w-full h-[320px] md:h-[480px] object-cover object-left-top md:object-left'
      />
    </div>
  );
};

export default Patent;

import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <section>
      <div className='section-wrapper'>
        <div className='max-w-[300px]'>
          <h2 className='archivo-expanded s-heading '>
            <span className='text-[#345F72] archivo-expanded'>MEET OUR </span>
            <span
              className='archivo-expanded text-outline-catina-blue'
              style={{ WebkitTextStroke: "2px #345f72" }}
            >
              FOUNDERS
            </span>
          </h2>
          <div className='my-6 w-full h-[1px] bg-[#DBAD65]'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-y-10 text-center md:gap-5 md:mt-10'>
          <div className='flex flex-col items-center'>
            <Image
              src='/images/about/samriddhi.jpg'
              height={0}
              width={0}
              className='h-[335px] w-auto'
              alt='SAMRIDDHI PANDEY'
            />
            <h3 className='text-[24px] md:text-[32px] text-[#DBAD65] font-bold archivo-expanded mt-4'>
              SAMRIDDHI PANDEY
            </h3>
            <h4 className='text-[18px] md:text-[21px] font-bold archivo-expanded text-[#0F182C]'>
              FOUNDER & CEO
            </h4>
            <p className='w-4/5 mt-4 mb-3'>
              Samriddhi drives groundbreaking innovation and strategic growth,
              transforming bold ideas into impactful realities while shaping the
              future of drone technology with her unwavering vision and
              leadership.
            </p>
            <Image
              src='/images/icons/linkedin.svg'
              width={0}
              height={0}
              className='h-[47px] w-auto'
              alt='LinkedIn'
            />
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/images/about/nehaal.png'
              height={0}
              width={0}
              className='h-[335px] w-auto'
              alt='NEHAAL AGARWAL'
            />
            <h3 className='text-[24px] md:text-[32px] text-[#DBAD65] font-bold archivo-expanded mt-4'>
              NEHAAL AGARWAL
            </h3>
            <h4 className='text-[18px] md:text-[21px] font-bold archivo-expanded text-[#0F182C]'>
              CO - FOUNDER & CSO
            </h4>
            <p className='w-4/5 mt-4 mb-3'>
              Nehaal is the driving force behind flawless operations and
              impactful strategies at Defy - combining his vision and expertise
              to elevate services and create value at every level.
            </p>
            <Image
              src='/images/icons/linkedin.svg'
              width={0}
              height={0}
              className='h-[47px] w-auto'
              alt='LinkedIn'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

import Image from "next/image";
import React from "react";

const statsData = [
  { id: 1, title: "DGCA", desc: "Approved", logo: "/images/home/dgca.png" },
  { id: 2, title: 3, desc: "Patents" },
  { id: 3, title: 500, desc: "Trained People" },
  {
    id: 4,
    title: "AWARD",
    desc: "Best Tech Company of the year",
    logo: "/images/home/yourhistory.png",
  },
];
const statsData2 = [
  { id: 1, title: "DGCA", desc: "Approved", logo: "/images/home/dgca.png" },
  {
    id: 2,
    title: "AWARD",
    desc: "Best Tech Company of the year",
    logo: "/images/home/yourhistory.png",
  },
  { id: 3, title: 3, desc: "Patents" },
  { id: 4, title: 500, desc: "Trained People" },
];

const Stats = () => {
  return (
    <section className='bg-[#1F3A540D]/5'>
      <div className='section-wrapper py-10'>
        <div className='hidden lg:grid grid-cols-4 items-center gap-10'>
          <div className='text-center mx-auto flex flex-col items-center justify-center'>
            <Image
              src='/images/home/dgca.png'
              height={64}
              width={64}
              alt='DGCA'
              className='h-16 w-auto mix-blend-multiply'
            />
            <h3 className='archivo-expanded font-semibold text-[50px] text-[#0F182C]'>
              DGCA
            </h3>
            <p className='text-[34px]'>
              Approved <span className='invisible'>aefugfuyewg</span>
            </p>
          </div>

          <div className='text-center mx-auto flex flex-col items-center justify-center'>
            <h3 className='archivo-expanded font-semibold text-[50px] text-[#0F182C]'>
              3
            </h3>
            <p className='text-[34px]'>Patents</p>
          </div>

          <div className='text-center mx-auto flex flex-col items-center justify-center'>
            <h3 className='archivo-expanded font-semibold text-[50px] text-[#0F182C]'>
              500+
            </h3>
            <p className='text-[34px]'>Trained People</p>
          </div>

          <div className='text-center mx-auto flex flex-col items-center justify-center'>
            <Image
              src='/images/home/yourhistory.png'
              height={64}
              width={64}
              alt='AWARD'
              className='h-16 w-auto mix-blend-multiply'
            />
            <h3 className='archivo-expanded font-semibold text-[50px] text-[#0F182C]'>
              AWARD
            </h3>
            <p className='text-[34px]'>Best Tech Company of the year</p>
          </div>
        </div>
        <div className='grid lg:hidden grid-cols-2 items-start gap-10'>
          {statsData2.map((item, index) => (
            <div
              className='text-center mx-auto flex flex-col items-center justify-center'
              key={index}
            >
              {/* Conditionally render the image */}
              {item.logo && (
                <Image
                  src={item.logo}
                  height={64}
                  width={64}
                  alt={item.title}
                  className='max-h-16 w-auto mix-blend-multiply'
                />
              )}
              <h3 className='archivo-expanded font-semibold text-[30px] md:text-[40px] 2xl:text-[50px] text-[#0F182C]'>
                {index === 0 || index === 1 || index === 3 ? item.title : ""}
                {index === 2 ? item.title + "+" : ""}
              </h3>
              <p className='text-[20px] md:text-[28px] 2xl:text-[34px]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

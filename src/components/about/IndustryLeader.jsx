"use client";

import Image from "next/image";

const industryLeaders = [
  { id: 1, logo: "/images/about/1.png", alt: "Sheth - Ashwin Sheth Group" },
  { id: 2, logo: "/images/about/2.png", alt: "Government of Maharashtra" },
  { id: 3, logo: "/images/about/3.png", alt: "NITI Aayog" },
  { id: 4, logo: "/images/about/4.png", alt: "Atal Innovation Mission" },
  { id: 5, logo: "/images/about/5.png", alt: "Thanos" },
  { id: 6, logo: "/images/about/6.png", alt: "DST Nidhi Prayas" },
  { id: 7, logo: "/images/about/7.png", alt: "The Art of Living - SSRDP" },
  { id: 8, logo: "/images/about/8.png", alt: "Startup India" },
  { id: 9, logo: "/images/about/9.png", alt: "JSS STEP" },
  { id: 10, logo: "/images/about/10.png", alt: "TATA Power" },
  { id: 11, logo: "/images/about/11.png", alt: "SBI Foundation" },
  { id: 12, logo: "/images/about/12.png", alt: "SolidWorks" },
];

export default function IndustryLeader() {
  return (
    <section className='bg-[#F2F2F7]'>
      <div className='section-wrapper'>
        <div className=''>
          <h2 className='archivo-expanded s-heading'>
            <span className='text-[#345F72] archivo-expanded'>TRUSTED BY</span>
            <br />
            <span
              className='archivo-expanded text-outline-catina-blue'
              style={{ WebkitTextStroke: "2px #345f72" }}
            >
              INDUSTRY LEADERS
            </span>
          </h2>
          <div className='my-6 max-w-[600px] h-[1px] bg-[#DBAD65]'></div>
        </div>
        <div className='bg-white p-5 sm:p-10 cus-shadow'>
          {/* Section Title */}
          <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 justify-items-center'>
            {industryLeaders.map((leader) => (
              <div key={leader.id} className='flex justify-center items-center'>
                <Image
                  src={leader.logo}
                  alt={leader.alt}
                  width={150}
                  height={90}
                  className='object-contain'
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

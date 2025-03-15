import Image from "next/image";
import React from "react";

const Humanity = () => {
  return (
    <section>
      <div className='section-wrapper'>
        <div className='grid md:grid-cols-12 gap-8 md:gap-14'>
          <div className='col-span-6 lg:col-span-4'>
            <h2 className='archivo-expanded s-heading '>
              <span className='text-[#345F72] archivo-expanded'>
                DRONES FOR
              </span>{" "}
              <span className='text-[#DBAD65] archivo-expanded'>HUMANITY</span>
            </h2>
            <div className='my-6 max-w-[690px] h-[1px] bg-[#DBAD65]'></div>
            <div className='md:text-[18px]'>
              <p>
                By bridging the gap between sustainability and efficiency, we
                continue to evolve under one guiding principle: when technology
                and conscientious thinking come together, we can enrich lives
                and protect our planet for generations to come.
              </p>
              <p>
                Our story is about more than innovation; it’s about enabling
                communities to thrive.
              </p>
            </div>
          </div>
          <div className='col-span-8 hidden lg:block'>
            <Image
              src='/images/about/humanity.png'
              height={0}
              width={0}
              className='h-auto w-full'
              alt='Humanity Images'
            />
          </div>
          <div className='col-span-6 lg:hidden'>
            <Image
              src='/images/about/humanity2.png'
              height={0}
              width={0}
              className='md:max-h-[550px] w-full md:w-auto'
              alt='Humanity Images'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanity;

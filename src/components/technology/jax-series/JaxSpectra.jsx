import Image from "next/image";
import React from "react";

const JaxSpectra = () => {
  return (
    <section className='-mt-80 relative z-40'>
      <div className='section-wrapper'>
        <div className='text-center'>
          <h2 className='archivo-expanded font-bold text-[#48655D] text-[64px] mb-2'>
            JAX SPECTRA V1
          </h2>
          <h3 className='archivo-expanded font-bold text-[#48655D] text-[32px] -mt-4'>
            THE ALLY TO OUT FARMERS
          </h3>
        </div>
        <div className='flex items-center gap-20'>
          <div>
            <Image
              src='/images/technology/jaxspectra.png'
              width={0}
              height={0}
              className='w-[820px] h-auto'
            />
          </div>
          <div className='flex flex-col  items-center text-center mt-20'>
            <div className='border-b-2 border-dashed border-black w-full pb-5'>
              <h4 className='archivo-expanded text-[#0F182C] text-[32px] font-bold'>
                MULTISPECTRAL
              </h4>
              <span className='text-[24px]'>Playload</span>
            </div>
            <div className='border-b-2 border-dashed border-black w-full py-5'>
              <h4 className='archivo-expanded text-[#0F182C] text-[32px] font-bold'>
                3KM
              </h4>
              <span className='text-[24px]'>Range</span>
            </div>
            <div className='border-b-2 border-dashed border-black w-full py-5'>
              <h4 className='archivo-expanded text-[#0F182C] text-[32px] font-bold'>
                25 MINS
              </h4>
              <span className='text-[24px]'>Air Time</span>
            </div>
            <div className=' w-full pt-5'>
              <h4 className='archivo-expanded text-[#0F182C] text-[32px] font-bold'>
                36 KMPH
              </h4>
              <span className='text-[24px]'>Speed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JaxSpectra;

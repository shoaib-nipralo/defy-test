import Image from "next/image";

const WhatsJax = () => {
  return (
    <div className='relative w-full text-white h-[800px] px-6'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/technology/jaxbg.png'
          alt='JAX Background'
          layout='fill'
          quality={100}
          className='h-[100vh]'
          priority
        />
      </div>

      {/* Gradient Overlay */}
      {/* <div className='absolute inset-0 bg-gradient-to-b from-[#073642] to-white opacity-80'></div> */}

      {/* Content */}
      <div className='relative z-10 section-wrapper !pt-44'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-sm font-semibold uppercase archivo-expanded'>
              What's
            </h3>
            <h2 className='text-[100px] font-bold archivo-expanded'>JAX</h2>
          </div>
          <div>
            <p className='mt-2 text-[24px] max-w-[670px]'>
              When the stakes are high, a single card can turn the tide. JAX is
              that decisive factor—merging innovative technology with agile
              performance to transform every flight into a game-changing move.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsJax;

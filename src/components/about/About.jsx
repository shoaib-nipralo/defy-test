export default function About() {
  return (
    <section className='bg-midnight text-white'>
      <div className='section-wrapper'>
        <div className='mb-8 md:mb-12'>
          <h2 className='font-bold s-heading'>
            WE BUILD BRIDGES
            <br />
            BETWEEN{" "}
            <span className='text-[#DBAD65] archivo-expanded'>
              TECHNOLOGIES
            </span>
            <br />
            AND{" "}
            <span className='text-[#DBAD65] archivo-expanded'>COMMUNITIES</span>
          </h2>
          <div className='mt-8 md:mt-12 max-w-[690px] h-[1px] bg-[#DBAD65]'></div>
        </div>

        <div className='grid gap-8 md:grid-cols-2 md:gap-12 items-center'>
          <div>
            <h2
              className='h2 font-bold uppercase archivo-expanded s-heading'
              style={{ fontFamily: "700" }}
            >
              <span className=' text-outline-white text-outline-white-fallback archivo-expanded'>
                AGRICULTURE
              </span>
              <br />
              AND
              <br />
              <span className=' text-outline-white text-outline-white-fallback archivo-expanded'>
                LOGISTICS
              </span>
            </h2>
          </div>
          <div className='space-y-6 body-text'>
            {/* First paragraph */}
            <p className='text-sm md:text-base leading-snug max-w-[600px]'>
              We started with a simple yet{" "}
              <span className='text-[#DBAD65]'>
                ambitious vision: to tackle real-world inefficiencies in
                agriculture and logistics while championing environmental
                sustainability.
              </span>
            </p>
            {/* Second paragraph */}
            <p className='text-sm md:text-base leading-snug '>
              Observing how traditional farming often overutilized resources and
              how cargo delivery stalled in traffic and rough terrains, we knew
              there had to be a better way. Driven by our passion for
              problem-solving, we turned to drone technology, recognising its
              transformative potential in both sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

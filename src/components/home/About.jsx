import React from "react";

const About = () => {
  return (
    <section>
      <div className='section-wrapper'>
        <div>
          <div>
            <h1 className='archivo-expanded b-heading -tracking-[3px] text-[#0F182C]'>
              WE ARE THE{" "}
              <span
                className='archivo-expanded text-outline-midnight-express text-outline-fallback mr-1 sm:mr-0'
                style={{ WebkitTextStroke: "2px #0F182C" }}
              >
                DRONE ALLY{" "}
              </span>
              <br className='hidden sm:block' /> TO{" "}
              <span
                className='archivo-expanded text-outline-midnight-express text-outline-fallback'
                style={{ WebkitTextStroke: "2px #0F182C" }}
              >
                COMMUNITIES
              </span>{" "}
              AND <br className='hidden sm:block' /> BUSINESS
            </h1>
          </div>
          <div className='flex items-end justify-end ml-auto mt-10 md:mt-20'>
            <p className='archivo md:text-[24px]'>
              We understand the uncertain nature of new technologies <br /> for
              the community and businesses. Change can feel <br />
              uncomfortable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

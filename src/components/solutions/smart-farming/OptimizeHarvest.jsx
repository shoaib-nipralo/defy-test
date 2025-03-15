import React from "react";
import Image from "next/image";

const OptimizeHarvest = () => {
  return (
    <section>
      <div className="section-wrapper">
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-body text-[#345F72] md:text-[22px] font-bold">
              DISCOVER PROBLEMS BEFORE IT HURTS
            </p>
            <h1 className="archivo-expanded b-heading -tracking-[3px] text-[#48655D] uppercase">
              analyze
              <br />
              <span
                className="mr-1 uppercase archivo-expanded text-outline-midnight-express text-outline-fallback sm:mr-0"
                style={{ WebkitTextStroke: "2px #48655D" }}
              >
                &
              </span>{" "}
              optimize
              <span
                className="mr-1 uppercase archivo-expanded text-outline-midnight-express text-outline-fallback sm:mr-0"
                style={{ WebkitTextStroke: "2px #48655D" }}
              >
                {" "}
                HARVEST
              </span>{" "}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:ml-auto md:mt-16 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-8 body-text text-lg lg:text-[22px] lg:leading-8 w-full md:w-1/2">
              <p>Don't let unseen problems ruin your harvest.</p>
              <p>
                Our smart farming technology helps you detect pests, dry soil,
                and diseases early which will help you take action on time and
                grow more with less effort.
              </p>
            </div>
            <div className="flex   flex-col sm:flex-row items-center gap-12 lg:w-[50%] body-text md:text-[26px] text-lg font-semibold text-center leading-7 mt-10 md:mt-0">
              <div className="flex flex-col items-center gap-4 max-w-[70%]">
                <Image
                  src="/images/icons/ph_farm.svg"
                  alt="Farm"
                  width={54}
                  height={54}
                />
                <p className="archivo text-[20px] font-semibold">
                  Protect your farm and your harvest
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 max-w-[70%]">
                <Image
                  src="/images/icons/replay.svg"
                  alt="🔁"
                  width={40}
                  height={38}
                />
                <p className="archivo text-[20px] font-semibold">
                  Quick discovery and fix of pests
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 max-w-[70%]">
                <Image
                  src="/images/icons/search.svg"
                  alt="🔍"
                  width={42}
                  height={42}
                />
                <p className="archivo text-[20px] font-semibold">
                  Monitor health of your crops and soil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizeHarvest;

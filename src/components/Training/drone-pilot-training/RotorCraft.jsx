import Image from "next/image";
import React from "react";

const RotorCraft = () => {
  return (
    <section className="">
      <div className="section-wrapper">
        <div className="flex flex-col-reverse gap-8 md:px-8 md:flex-row xl:gap-0">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/drone-training/Training-rotor-image.png"
              width={515}
              height={583}
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h1 className="text-[#345F72] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
                <span className="text-outline-catalina text-outline-harvest-fallback archivo-expanded">
                  Small
                </span>
                <br />
                And{" "}
                <span className="text-outline-catalina text-outline-harvest-fallback archivo-expanded">
                  Medium
                </span>
                <br />
                rotorcraft
              </h1>
              <div className="flex flex-col gap-y-2 lg:gap-y-8 text-[#1F3A54] body-text lg:text-xl leading-4 lg:leading-8 my-3 lg:my-8">
                <p className="archivo text-[#1F3A54] body-text lg:text-xl leading-4 lg:leading-8">
                  Designed for small and medium category drones. The five - day
                  course includes both theory and flying lessons from
                  DGCA-approved Defy Aerospace Instructors.
                </p>
                <p className="archivo text-[#1F3A54] body-text lg:text-xl leading-4 lg:leading-8">
                  Upon successful completion of the course, Defy Aerospace will
                  award candidates with DGCA approved “Remote Pilot Certificate”
                  for small/medium class rotorcraft.
                </p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="py-2 border-2 border-[#F7BE68] rounded-full  hover:bg-[#F7BE68] text-lg font-semibold archivo-expanded transition-all duration-300 mt-2 md:mt-4 px-12 uppercase text-nowrap"
              >
                get started today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotorCraft;

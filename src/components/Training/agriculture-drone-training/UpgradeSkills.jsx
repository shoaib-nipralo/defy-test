import React from "react";
import Image from "next/image";

const UpgradeSkills = () => {
  return (
    <section className="">
      <div className="section-wrapper">
        <div className="flex flex-col-reverse gap-8 md:px-8 md:flex-row xl:gap-0">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/agriculture-training/upgrade-skills.png"
              width={515}
              height={583}
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h1 className="text-[#A8A53D] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
                Upgrade your
                <span className="text-outline-brass text-outline-harvest-fallback archivo-expanded">
                  Skills
                </span>
              </h1>
              <div className="flex flex-col my-3 leading-4 gap-y-2 lg:gap-y-4 body-text lg:text-xl lg:leading-8 lg:my-16">
                <p className="text-[#48655D] text-xl font-bold">
                  For MEDIUM CLASS CERTIFIED PILOTS
                </p>
                <p className="text-2xl font-medium leading-4 lg:leading-8 text-[#0F182C]">
                  Join our Agriculture Drone Training Course, designed
                  specifically for medium-certified drone pilots.
                </p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="py-2 border-2 border-[#F7BE68] rounded-full  hover:bg-[#F7BE68] text-lg font-semibold archivo-expanded transition-all duration-300 mt-2 md:mt-4 px-12 uppercase text-nowrap"
              >
                enquire now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeSkills;

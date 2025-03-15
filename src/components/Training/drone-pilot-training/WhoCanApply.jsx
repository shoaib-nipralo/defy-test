import Image from "next/image";
import React from "react";

const WhoCanApply = () => {
  const list = [
    "Aspiring drone pilots",
    "Student and Tech enthusiasts",
    "Agriculture and infrastructure professionals",
    "Surveyors, logistics and mapping experts",
    "Filmmakers and photographers",
  ];

  return (
    <section>
      <div className="pb-6 section-wrapper md:px-8">
        <div className="bg-[#345F72] rounded-2xl p-8 lg:p-16 lg:py-20 flex flex-col md:flex-row">
          <div className="flex flex-col justify-between w-full md:w-1/2 md:pr-16">
            <h1 className="text-[#F6BC67] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
              WHO CAN
              <br />
              <span className="text-outline-harvest text-outline-harvest-fallback archivo-expanded">
                Apply?
              </span>
            </h1>
            <div>
              <button
                type="submit"
                className="py-2 border-2 border-[#F7BE68] rounded-full hover:bg-[#F7BE68] text-sm lg:text-lg font-semibold archivo-expanded transition-all duration-300 mt-2 md:mt-4 px-6 lg:px-12 uppercase text-nowrap text-white"
              >
                see if you qualify
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="mt-4 lg:space-y-8 md:space-y-4">
              {list.map((content, index) => (
                <li
                  className="flex items-start text-white capitalize font-satoshi text-start font-body md:text-xl"
                  key={index}
                >
                  <span className="mt-1 mr-2">
                    <Image
                      src="/images/icons/tick.svg"
                      alt="-"
                      width={16}
                      height={16}
                    />
                  </span>
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;

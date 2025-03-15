import Image from "next/image";
import React from "react";

const ForFarmers = () => {
  return (
    <section>
      <div className="flex flex-col gap-16 section-wrapper">
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/solutions/for-farmers.png"
              alt="for-farmers"
              width={632}
              height={528}
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="space-y-1 lg:space-y-8">
              <h3 className="s-heading uppercase text-[#345F72] font-bold archivo-expanded">
                For FARMERS
              </h3>
              <div className="flex flex-col gap-4 body-text text-lg lg:text-[22px] lg:leading-8">
                <p>
                  Boost efficiency with drone cargo delivery, ensuring faster
                  and safer transport of fresh produce. Reduce spoilage, lower
                  costs, and reach markets quicker without relying on congested
                  roads.
                </p>
                <p>Deliver smarter, fresher, and faster.</p>
              </div>
            </div>
            <div className="my-4 flex items-center lg:gap-8 body-text xl:text-[26px] lg:text-[18px] lg:font-semibold text-center lg:leading-7 sm:justify-center md:justify-between justify-between sm:gap-8 md:gap-0">
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/speed.svg"
                  alt="speed"
                  width={38}
                  height={30}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>Speed & Efficiency</p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/disaster.svg"
                  alt="disaster"
                  width={36}
                  height={35}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>Quick Disaster Response</p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/tree2.svg"
                  alt="🌴"
                  width={43}
                  height={40}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>Access to remote areas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="space-y-1 lg:space-y-8">
              <h3 className="s-heading uppercase text-[#345F72] font-bold archivo-expanded max-md:leading-10">
                Last-mile logistics suppliers
              </h3>
              <div className="flex flex-col gap-4 body-text text-lg lg:text-[22px] lg:leading-8">
                <p>
                  Streamline agri-produce transportation with drones that cut
                  delays and optimize supply chains.
                </p>
                <p>
                  Achieve cost-effective, high-speed deliveries to distributors,
                  retailers, and processing units, enhancing reliability and
                  reducing transit risks.
                </p>
              </div>
            </div>
            <div className="my-4 flex items-center lg:gap-8 body-text xl:text-[26px] lg:text-[18px] lg:font-semibold text-center lg:leading-7 sm:justify-center md:justify-between justify-between sm:gap-8 md:gap-0">
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/edit.svg"
                  alt="✏"
                  width={38}
                  height={30}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>Customisable Solutions</p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/building2.svg"
                  alt="🏢"
                  width={36}
                  height={35}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>scalability for businesses</p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/lock.svg"
                  alt="🔒"
                  width={43}
                  height={40}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>Enhanced Security</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/solutions/last-mile-logistics.png"
              alt="last-mile-logistics"
              width={632}
              height={528}
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFarmers;

import React from "react";
import Image from "next/image";

const FarmersAndAgri = () => {
  return (
    <section>
      <div className="flex flex-col gap-16 section-wrapper">
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/solutions/Farmer.png"
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
                  Farming isn’t easy, and problems like pests, dry soil, or weak
                  crops can hurt your harvest. Our smart technology helps
                  you see issues early, so you know when to water, add
                  fertilizer, or protect your crops before it’s too late.
                </p>
                <p>
                  This means lesser waste, lower costs, and a better harvest
                  with minimum effort.
                </p>
              </div>
            </div>
            <div className="my-4 flex items-center lg:gap-8 body-text xl:text-[26px] lg:text-[18px] lg:font-semibold text-center lg:leading-7 sm:justify-center md:justify-between justify-between sm:gap-8 md:gap-0">
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/drop.svg"
                  alt="save water"
                  width={28}
                  height={34}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>
                  Save <br /> Water
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/grass.svg"
                  alt="🌿"
                  width={40}
                  height={30}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>
                  Increase <br /> Yield
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/tree2.svg"
                  alt="🌴"
                  width={28}
                  height={28}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>
                  Reduce <br /> Pesticides
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="space-y-1 lg:space-y-8">
              <h3 className="s-heading uppercase text-[#345F72] font-bold archivo-expanded max-md:leading-10">
                agri businesses
              </h3>
              <div className="flex flex-col gap-4 body-text text-lg lg:text-[22px] lg:leading-8">
                <p>
                  Managing large farms can be challenging, but our technology
                  makes it easier. Drones and AI track crop health, soil
                  moisture, and pest problems in real-time, helping businesses
                  make faster, smarter decisions.
                </p>
                <p>
                  This means saving money, reducing manual work, and improving
                  yields, all while making farming more efficient and
                  sustainable.
                </p>
              </div>
            </div>
            <div className="my-4 flex items-center lg:gap-8 body-text xl:text-[26px] lg:text-[18px] lg:font-semibold text-center lg:leading-7 sm:justify-center md:justify-between justify-between sm:gap-8 md:gap-0">
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/wave.svg"
                  alt="🌊"
                  width={38}
                  height={30}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>
                  Increase <br /> Efficiency
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/watch2.svg"
                  alt="⌚"
                  width={36}
                  height={35}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>
                  Harvest on <br /> Time
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:w-32 lg:h-32 xl:w-[192px] xl:h-[192px] w-24 h-24 justify-center rounded-lg solution-shadow">
                <Image
                  src="/images/icons/leaf2.svg"
                  alt="🍃"
                  width={43}
                  height={40}
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
                <p>
                  Eco <br /> Friendly
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/solutions/Agri-business.png"
              alt="Agri-business"
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

export default FarmersAndAgri;

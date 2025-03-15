import Image from "next/image";
import React from "react";

const UnlockPotential = () => {
  return (
    <section>
      <div className="pb-6 section-wrapper md:px-8">
        <h1 className="text-[#345F72] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
          unlock your
          <br />
          <span className="text-outline-catalina text-outline-harvest-fallback archivo-expanded">
            potential
          </span>
        </h1>
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="flex flex-col justify-between gap-4 py-8 text-center section-wrapper md:px-8 md:flex-row">
          <div className="w-full md:w-[30%] max-w-[520px] mx-auto md:mx-0">
            <Image
              src="/images/drone-training/Agriculture-applications.png"
              alt="Agriculture Applications"
              width={100}
              height={100}
              className="w-full mb-2"
            />
            <p className="font-bold text-center uppercase font-satoshi ">
              Agriculture Applications
            </p>
          </div>
          <div className="w-full max-w-[520px] md:w-[30%] mx-auto md:mx-0">
            <Image
              src="/images/drone-training/Infra-inspection.png"
              alt="INFRASTRUCTURE INSPECTION"
              width={100}
              height={100}
              className="w-full mb-2"
            />
            <p className="font-bold text-center uppercase font-satoshi ">
              INFRASTRUCTURE INSPECTION
            </p>
          </div>
          <div className="w-full max-w-[520px] md:w-[30%] mx-auto md:mx-0">
            <Image
              src="/images/drone-training/delivery-serivices.png"
              alt="DELIVERY SERVICES"
              width={100}
              height={100}
              className="w-full mb-2"
            />
            <p className="font-bold text-center uppercase font-satoshi ">
              DELIVERY SERVICES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotential;

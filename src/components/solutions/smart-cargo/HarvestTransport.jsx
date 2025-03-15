import Image from "next/image";
import React from "react";

const HarvestTransport = () => {
  return (
    <section>
      <div className="section-wrapper">
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-body text-[#345F72] md:text-[22px] font-bold">
              REDEFINING SPEED, EFFICIENCY AND REACH IN HARVEST LOGISTICS
            </p>
            <h1 className="archivo-expanded b-heading -tracking-[3px] text-[#345F72]">
              HARVEST TRANSPORT <br />
              <span
                className="mr-1 archivo-expanded text-outline-midnight-express text-outline-fallback sm:mr-0"
                style={{ WebkitTextStroke: "2px #345f72" }}
              >
                USING
              </span>{" "}
              DRONES
            </h1>
            <p className="w-full lg:w-[45%] body-text md:text-[22px] md:leading-8">
              Streamline your harvest deliveries with fast, affordable, and
              eco-friendly drone transport—reaching even the most remote
              locations.
            </p>
          </div>
          <div className="flex items-end justify-center md:justify-end md:ml-auto ">
            <div className="mt-8 flex flex-col md:flex-row items-center gap-8 lg:w-[70%] xl:w-[50%] body-text md:text-[26px] text-lg font-semibold text-center leading-7">
              <div className="flex flex-col items-center gap-6">
                <Image
                  src="/images/icons/watch.svg"
                  alt="⌚"
                  width={40}
                  height={40}
                />
                <p>Avoid traffic and cut delivery times.</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src="/images/icons/leaf.svg"
                  alt="🍃"
                  width={37}
                  height={37}
                />
                <p>Save on fuel and labor.</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src="/images/icons/tree.svg"
                  alt="🌴"
                  width={44}
                  height={44}
                />
                <p>Deliver to remote areas easily.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HarvestTransport;

import Image from "next/image";
import React from "react";

const DeliveryFuture = () => {
  return (
    <section className="bg-[#345F72] ">
      <div className="section-wrapper">
        <div>
          <h1 className="archivo-expanded b-heading -tracking-[3px] text-[#F7BE68] uppercase">
            <span
              className="mr-1 archivo-expanded text-outline-midnight-express text-outline-fallback sm:mr-0"
              style={{ WebkitTextStroke: "2px #F7BE68" }}
            >
              future
            </span>{" "}
            of <br />
            delivery is is here
          </h1>

          <div className="flex items-end justify-center md:justify-end md:ml-auto ">
            <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-8 lg:w-[70%] xl:w-[50%] leading-7">
              <div className="flex flex-col items-center gap-3 md:w-[25%]">
                <p className="b-heading text-[#F7BE67]">
                  1 <span className="text-[34px]">MINS</span>
                </p>
                <p
                  className="text-lg text-white"
                  style={{ fontFamily: "archivo" }}
                >
                  Uphill by drone takes 1 hour by truck
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 md:w-[25%]">
                <p className="b-heading text-[#F7BE67]">0%</p>
                <p
                  className="text-lg text-white"
                  style={{ fontFamily: "archivo" }}
                >
                  Emissions by electric drones
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 md:w-[40%]">
                <p
                  className="text-xl font-semibold text-center text-white md:text-start"
                  style={{ fontFamily: "archivo" }}
                >
                  Experience a greener and more reliable solution for
                  transporting goods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFuture;

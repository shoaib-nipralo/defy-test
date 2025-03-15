import React from "react";

const FutureFarming = () => {
  return (
    <section className="bg-[#48655D]">
      <div className="section-wrapper">
        <div>
          <h1 className="archivo-expanded b-heading -tracking-[3px] text-[#F7BE68] uppercase">
            discover the <br />
            <span
              className="mr-1 archivo-expanded text-outline-midnight-express text-outline-fallback sm:mr-0"
              style={{ WebkitTextStroke: "2px #F7BE68" }}
            >
              future of farming
            </span>{" "}
            & <br />
            food security
          </h1>

          <div className="flex flex-col justify-between mt-10 md:items-end md:flex-row">
            <p className="text-[25px] archivo font-medium text-white">
              PRECISION FARMING WITH DRONES{" "}
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:w-[70%] xl:w-[40%] leading-7">
              <div className="flex flex-col  gap-3 md:w-[50%]">
                <p className="text-[50px] text-[#F7BE67] archivo-expanded font-bold leading-[72px]">
                  UPTO <br />
                  <span className="text-[100px] font-bold">50%</span>
                </p>
                <p
                  className="text-[22px] text-white w-[70%] text-start"
                  style={{ fontFamily: "archivo" }}
                >
                  Savings on pesticides
                </p>
              </div>
              <div className="flex flex-col gap-3 md:w-[50%]">
                <p className="text-[50px] text-[#F7BE67] archivo-expanded font-bold leading-[72px]">
                  UPTO <br />
                  <span className="text-[100px] font-bold">20%</span>
                </p>
                <p
                  className="text-[22px] text-white md:w-[70%] text-start"
                  style={{ fontFamily: "archivo" }}
                >
                  Increase in yield of the harvest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureFarming;

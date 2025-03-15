import Image from "next/image";
import React from "react";

const OurProcess = () => {
  const steps = [
    {
      title: "Planning",
      description:
        "We’ll create a tailored, phase-wise plan for quick implementation.",
    },
    {
      title: "Assessment",
      description:
        "We’ll assess your area, develop a plan, and provide a live demo upon approval.",
    },
    {
      title: "Project Approval",
      description:
        "Once the plan is finalised and approved, we will begin the ground work.",
    },
    {
      title: "Launch",
      description:
        "Once the area test is proven successful, we will commence full-scale operations for You.",
    },
  ];
  return (
    <section>
      <div className="section-wrapper">
        <h1 className="text-[#345F72] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
          Our
          <br />
          <span
            className="text-outline-catalina text-outline-harvest-fallback archivo-expanded"
            style={{ WebkitTextStroke: "2px #345F72" }}
          >
            process
          </span>
        </h1>
        <div className="grid items-start justify-center grid-cols-2 gap-6 p-4 mt-8 xl:mt-16 lg:grid-cols-4 xl:gap-8 md:gap-12 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 flex justify-center items-center rounded-full border-4 xl:border-[14px] border-[#EBEEED] bg-[#345F72] text-white text-center text-sm sm:text-xl md:text-xl lg:md:text-2xl xl:leading-8 leading-4 lg:mb-4 mb-1 relative lg:p-4">
                {step.title}
                {index !== steps.length - 1 && (
                  <Image
                    src="/images/icons/Arrow.svg"
                    alt="---->"
                    width={90}
                    height={1}
                    className="lg:w-[40px] xl:w-24 absolute xl:right-[-130px] hidden lg:block lg:right-[-40px] translate-y-[-50%] top-[50%]"
                  />
                )}
              </div>
              {/* Description */}
              <p className="mt-2 text-xs sm:text-lg font-normal xl:leading-7 leading-5 text-center md:text-xl xl:max-w-[270px] max-w-[144px] lg:max-w-[185px] sm:max-w-[210px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

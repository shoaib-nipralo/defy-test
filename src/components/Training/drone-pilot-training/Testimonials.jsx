import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="pb-6 section-wrapper md:px-8">
        <h1 className="text-[#345F72] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
          STUDENT
          <br />
          <span className="text-outline-catalina text-outline-harvest-fallback archivo-expanded">
            TESTIMONIALS
          </span>
        </h1>
      </div>
      <div>
        <div className="relative flex flex-col justify-center gap-8 py-8 pb-8 text-center lg:py-12 lg:gap-20 md:py-0 section-wrapper md:px-8 md:flex-row">
          <div className="flex flex-col gap-8">
            <Image
              src="/images/drone-training/training-review-1.png"
              alt=""
              width={576}
              height={133}
              className="rounded-lg"
            />
            <Image
              src="/images/drone-training/training-review-3.png"
              alt=""
              width={587}
              height={104}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-8">
            <Image
              src="/images/drone-training/training-review-2.png"
              alt=""
              width={573}
              height={115}
              className="rounded-lg"
            />
            <Image
              src="/images/drone-training/training-review-4.png"
              alt=""
              width={248}
              height={102}
              className="rounded-lg"
            />
          </div>
          <Image
            src="/images/icons/quote.svg"
            alt="''"
            width={48}
            height={48}
            className="absolute w-8 h-8 lg:w-12 lg:h-12 -top-4 -left-2 lg:-left-2 xl:top-0 xl:left-4"
          />
          <Image
            src="/images/icons/quote.svg"
            alt="''"
            width={48}
            height={48}
            className="absolute bottom-0 right-0 w-8 h-8 rotate-180 lg:bottom-12 lg:right-12 lg:w-12 lg:h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import Image from "next/image";
import React from "react";

const CourseStructure = () => {
  const cards = [
    {
      noOfDays: "Day 1 & 2",
      content: [
        "Introduction to medium class drones",
        "Basic flying orientation and controls.",
        "Practical flying session with medium drones",
        "Feedback on flying techniques.",
      ],
    },
    {
      noOfDays: "Day 3 ",
      content: [
        "Overview of flying software and calibration",
        "Utilise  flying software for optimal droneperformance.",
        "Implement safety protocols during night flying operations.",
      ],
    },
    {
      noOfDays: "Day 4 & 5",
      content: [
        "Apply standardized practices for drone-based fertilizer application.",
        "Practical session on application techniques.",
        "Final practical flying session with payload.",
        "Certification assessment",
      ],
    },
  ];

  return (
    <section>
      <div className="pb-6 section-wrapper md:px-8">
        <h1 className="text-[#A8A53D] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
          course
          <br />
          <span className="text-outline-brass text-outline-harvest-fallback archivo-expanded">
            structure
          </span>
        </h1>
      </div>
      <div>
        <div className="flex flex-col justify-between gap-4 py-0 pb-8 text-center md:py-8 section-wrapper md:px-8 md:flex-row">
          {/* cards */}
          {cards.map((box, index) => (
            <div
              className="bg-white w-full md:w-[30%] max-w-[520px] mx-auto md:mx-0 rounded-[22px] overflow-hidden course-card-shadow"
              key={index}
            >
              <div className="bg-[#48655D] text-white text-center font-semibold text-lg p-3 uppercase archivo-expanded">
                {box.noOfDays}
              </div>
              <div className="px-6 py-4">
                <ul className="mt-4 lg:space-y-8 md:space-y-4">
                  {box.content.map((content, index) => (
                    <li
                      className="flex items-start font-satoshi text-start"
                      key={index}
                    >
                      <span className="mr-2 mt-1 min-w-4 min-h-4 w-4 h-4 rounded-full bg-[#48655D] flex items-center justify-center">
                        <Image
                          src="/images/icons/right-arrow.svg"
                          alt="-"
                          width={8}
                          height={7}
                        />
                      </span>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;

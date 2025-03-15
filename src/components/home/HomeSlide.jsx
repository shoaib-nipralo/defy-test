"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const sections = [
  {
    name: "AGRICULTURE",
    image:
      "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "HUMANITARIAN RELIEF",
    image:
      "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
  },
  {
    name: "ENVIRONMENTAL SERVICES",
    image:
      "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "SKILL DEVELOPMENT",
    image:
      "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
  },
];

const HomeSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[80vh] sm:h-screen overflow-hidden">
      <div className="absolute z-20 top-[2%] md:top-[22%] left-[5%]">
        <h2 className="archivo-expanded b-heading -tracking-[3px] text-[#F7BE68]">
          BUILT FOR DIVERSE <br />
          <span
            className="archivo-expanded text-outline-harvest text-outline-fallback"
            style={{ WebkitTextStroke: "2px #F7BE68" }}
          >
            INDUSTRIES
          </span>
        </h2>
      </div>

      {/* Background Image with Transition */}
      <div className="absolute inset-0 w-full h-screen overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${section.image})` }}
          ></div>
        ))}
      </div>

      {/* Dark Overlay */}
      {/* <div className='absolute inset-0 bg-black/50'></div> */}

      {/* Hover Sections */}
      <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-4 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex items-end md:items-end justify-end md:justify-start  text-white p-8 cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "bg-black/50" : "hover:bg-white/20"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flex items-center gap-6 -mb-6 md:items-start md:flex-col md:mb-0">
              <h2 className="md:text-[20px] font-semibold archivo-expanded">
                {section.name}
              </h2>
              <Link
                href="/"
                className="bg-[#F7BE68] hover:bg-[#f4b350] transition-colors duration-300 text-[#0F182C] w-max rounded-full p-2"
              >
                <FaArrowRightLong className="md:text-[18px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlide;

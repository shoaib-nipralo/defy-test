"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { truncate } from "@/helper/help";
// Import required modules

const events = [
  {
    id: 1,
    title: "Center Of Excellence Launch By SSU",
    d1: "Defy Aerospace, in collaboration with Sri Sri University, proudly inaugurated the Sri Sri Center of Excellence for Advanced Drone Research, with Gurudev Sri Sri Ravi Shankar gracing the occasion.",
    d2: "This milestone marks a step forward in revolutionizing drone technology and education, fostering innovation, and inspiring the next generation of leaders",
    image: "/images/event/coe.png",
  },
  {
    id: 2,
    title: "Mou Signing With SSU",
    d1: "Defy Aerospace, in collaboration with Sri Sri University, proudly inaugurated the Sri Sri Center of Excellence for Advanced Drone Research, with Gurudev Sri Sri Ravi Shankar gracing the occasion. ",
    d2: "This milestone marks a step forward in revolutionizing drone technology and education, fostering innovation, and inspiring the next generation of leaders",
    image: "/images/event/coe.png",
  },
  {
    id: 3,
    title: "London Tech Week",
    d1: "Defy Aerospace, in collaboration with Sri Sri University, proudly inaugurated the Sri Sri Center of Excellence for Advanced Drone Research, with Gurudev Sri Sri Ravi Shankar gracing the occasion. ",
    d2: "This milestone marks a step forward in revolutionizing drone technology and education, fostering innovation, and inspiring the next generation of leaders",
    image: "/images/event/coe.png",
  },
  {
    id: 4,
    title: "Hospital Tech Event",
    d1: "Samriddhi, our founder, joined a CII Western Region panel discussion on integrating emerging technologies in healthcare.",
    d2: "She shared insights on the transformative role of drones in delivering critical medical supplies, supporting first responders, and extending healthcare access to remote areas, driving innovation for better healthcare access.",
    image: "/images/event/coe.png",
  },
  {
    id: 5,
    title: "Gitex Dubai",
    d1: "Defy Aerospace proudly represented India at GITEX Dubai 2023 as one of 10 women-led startups selected by the Department of Science and Technology under JSSSTEP, Noida.",
    d2: "Showcasing our proprietary products, we took a significant step in expanding our presence in the UAE market.",
    image: "/images/event/coe.png",
  },
  {
    id: 6,
    title: "Drone Training Center Launch",
    d1: "Defy Aerospace, in collaboration with Sri Sri University, proudly inaugurated the Sri Sri Center of Excellence for Advanced Drone Research, with Gurudev Sri Sri Ravi Shankar gracing the occasion. ",
    d2: "This milestone marks a step forward in revolutionizing drone technology and education, fostering innovation, and inspiring the next generation of leaders",
    image: "/images/event/coe.png",
  },
  {
    id: 7,
    title: "Aero India",
    d1: "At Aero India 2023, our founder, Samriddhi Pandey, was honored to be a distinguished panel speaker on the topic of drone usage for Indian defense. ",
    d2: "The panel featured industry leaders, including Raksha Mantri Rajnath Singh and Amber Dubey, former Joint Secretary, MoCA, highlighting the pivotal role of drones in national security.",
    image: "/images/event/coe.png",
  },
  {
    id: 8,
    title: "Dronex  London",
    d1: "Defy Aerospace proudly represented India at DroneX London 2022, showcasing long-range logistics and first responder drones for defense and civil applications. ",
    d2: "Our innovations captured the interest of the Royal Air Force and UK CAA, marking a significant milestone in global recognition",
    image: "/images/event/coe.png",
  },
  {
    id: 9,
    title: "Techsparks",
    d1: "Defy Aerospace was recognized as one of India’s top Tech50 startups by YourStory in 2021 for pioneering drone solutions in emergency healthcare.",
    d2: "With a focus on delivering critical medical supplies to remote areas, Defy Aerospace is revolutionizing healthcare logistics while championing the ‘Make in India’ initiative.",
    image: "/images/event/coe.png",
  },
];

export default function EventSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleEventClick = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  // Dynamically show only 3 event names based on the active index
  const visibleEvents = events.slice(
    Math.max(0, activeIndex - 1),
    Math.min(events.length, activeIndex + 2)
  );

  return (
    <section className="bg-[#F2F2F7] mx-auto ">
      <div className="section-wrapper">
        {/* Section Title */}
        <div className="max-w-[300px]">
          <h2 className="archivo-expanded s-heading ">
            <span className="text-[#345F72] archivo-expanded">EVENTS </span>
          </h2>
          <div className="my-6 w-full h-[1px] bg-[#DBAD65]"></div>
        </div>

        <div className="bg-white md:px-6 md:py-6 cus-shadow">
          {/* Main Event Slider */}
          <div className="relative gap-10 p-6 overflow-hidden rounded-lg md:flex">
            {/* Left - Image */}
            <div className="mb-4 md:w-1/2 md:mb-0">
              <Swiper
                spaceBetween={10}
                navigation={false}
                modules={[FreeMode, Navigation, Autoplay]}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperRef}
                className="mySwiper2"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
              >
                {events.map((event) => (
                  <SwiperSlide key={event.id}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full max-h-[365px] object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right - Content (Auto Update) */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h3 className="text-lg font-bold text-gray-900">
                {events[activeIndex].title}
              </h3>
              <p className="mt-4 text-gray-600">{events[activeIndex].d1}</p>
              <p className="mt-4 text-gray-600">{events[activeIndex].d2}</p>
            </div>
          </div>

          {/* Event Name Navigation (Shows 3 at a time, Clickable) */}
          <div className="w-[100%] lg:w-[45%] xl:w-[40%] flex justify-center sm:hidden">
            {visibleEvents.map((event) => (
              <span
                key={event.id}
                onClick={() => handleEventClick(events.indexOf(event))}
                className={`archivo text-sm px-2 py-2 transition-all ${
                  event.id === events[activeIndex].id
                    ? "font-bold text-[#1F3A54] "
                    : "text-[#949494] hover:text-[#1F3A54]"
                }`}
              >
                {truncate(event.title, 14)}
              </span>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center pb-2 sm:pb-0 sm:mt-6">
            <button
              className="p-2 rounded-full prev-btn"
              onClick={() => swiperRef?.slidePrev()}
            >
              <ChevronLeft size={28} className="text-[#1F3A54]" />
            </button>

            {/* Event Name Navigation (Shows 3 at a time, Clickable) */}
            <div className="w-[100%] lg:w-[45%] xl:w-[40%] flex justify-center gap-4 hidden sm:flex">
              {visibleEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => handleEventClick(events.indexOf(event))}
                  className={`archivo text-sm px-2 py-2 transition-all ${
                    event.id === events[activeIndex].id
                      ? "font-bold text-[#1F3A54] "
                      : "text-[#949494] hover:text-[#1F3A54]"
                  }`}
                >
                  {truncate(event.title, 22)}
                </button>
              ))}
            </div>

            <button
              className="p-2 rounded-full next-btn"
              onClick={() => swiperRef?.slideNext()}
            >
              <ChevronRight size={28} className="text-[#1F3A54]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const newsMediaItems = [
  {
    image: "/images/home/newsmedia1.png",
    title: "MAVERICKS",
    description: "Dell Technologies presents Mavericks - A YourStory Product",
  },
  {
    image: "/images/home/newsmedia2.png",
    title: "IN CONVERSATION WITH SAMRIDDHI",
    description:
      "Bridging Communication & Innovation - Interactive Conversation",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full'
    onClick={onClick}
  >
    <IoIosArrowBack size={30} className='text-[#F7BE68]' />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full'
    onClick={onClick}
  >
    <IoIosArrowForward size={30} className='text-[#F7BE68]' />
  </button>
);

const NewsMedia = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='overflow-hidden relative'>
      <div className='section-wrapper'>
        <div className='mb-4 md:mb-16'>
          <h2 className='archivo-expanded b-heading -tracking-[3px] text-[#0F182C]'>
            NEWS{" "}
            <span
              className='archivo-expanded text-outline-midnight-express text-outline-fallback'
              style={{ WebkitTextStroke: "2px #0F182C" }}
            >
              AND
            </span>{" "}
            MEDIA
          </h2>
        </div>
        <Slider {...settings}>
          {newsMediaItems.map((item, index) => (
            <div key={index} className='px-3'>
              <div className='w-full max-w-[600px] mx-auto bg-[#F8F8FB] p-6 my-2 shadow-md flex justify-center rounded-lg overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={293}
                  className='w-full h-auto object-contain'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsMedia;

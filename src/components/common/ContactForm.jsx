"use client";
import React, { useState } from "react";
import Image from "next/image";
import CallIcons from "./CustomIcons/CallIcons";
import BuildingIcon from "./CustomIcons/BuildingIcon";
import TrainingIcon from "./CustomIcons/TrainingIcon";

const ContactForm = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <section
      className="bg-[#f7be68] group hover:bg-[#0F182C] transition-all duration-300"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-col-reverse gap-10 py-8 mx-auto section-wrapper md:py-16 lg:flex-row md:items-end lg:gap-0">
        {/* Left side with contact information */}
        <div className="relative w-full md:w-1/2 lg:pb-16 md:pr-16 lg:mt-20 group-hover:text-white">
          <div className="absolute left-[5px] bg-black group-hover:bg-white w-[2px]  h-[calc(100%-65px)] lg:h-[calc(100%-100px)]"></div>
          <div className="relative pl-10">
            {/* Head Office */}
            <div className="relative pb-5 mb-6">
              <div className="absolute -left-[49px] bg-[#F7BE68] group-hover:bg-[#0F182C] pb-2">
                <BuildingIcon fill={isHover ? "white" : "black"} />
              </div>
              <h3 className="text-[24px] font-bold uppercase h3">
                HEAD OFFICE
              </h3>
              <p className="mt-2 text-lg font-satoshi">
                C-20, G Block Rd, G Block BKC,
                <br /> Bandra Kurla Complex, Bandra East, Mumbai,
                <br /> Maharashtra 400051
              </p>
            </div>

            {/* Drone Training Academy */}
            <div className="relative pb-5 mb-6">
              <div className="absolute -left-[49px] bg-[#F7BE68] group-hover:bg-[#0F182C] pb-2 pt-1">
                <TrainingIcon fill={isHover ? "white" : "black"} />
              </div>
              <h3 className="text-[24px] font-bold uppercase h3">
                OUR DRONE TRAINING ACADEMY
              </h3>
              <p className="mt-2 text-lg font-satoshi">
                Sri sri rural development programm skill centre,
                <br />
                Kanakapura Main Rd, near VKR quarters,
                <br />
                Udayapura, Bengaluru, Karnataka 560082
              </p>
            </div>

            {/* Center of Excellence */}
            <div className="relative pb-5 mb-6">
              <div className="absolute -left-[49px] bg-[#F7BE68] group-hover:bg-[#0F182C] pb-2 pt-1">
                <TrainingIcon fill={isHover ? "white" : "black"} />
              </div>
              <h3 className="text-[24px] font-bold uppercase h3">
                CENTER OF EXCELLENCE FOR
                <br />
                ADVANCED DRONE RESEARCH
              </h3>
              <p className="mt-2 text-lg font-satoshi">
                Sri Sri University, Cuttack, Odisha.
              </p>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <div className="absolute -left-[49px] bg-[#F7BE68] group-hover:bg-[#0F182C] pb-2 pt-1">
                <CallIcons fill={isHover ? "white" : "black"} />
              </div>
              <h3 className="text-[24px] font-bold uppercase h3">
                CONTACT NUMBER
              </h3>
              <p className="mt-2 text-lg font-satoshi">+91 93720-27820</p>
            </div>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -left-16 bg-[#00000036] w-[1px]  h-full group-hover:bg-transparent"></div>
          <h2 className="mb-2 md:mb-6 s-heading archivo-expanded group-hover:text-white">
            CONTACT US
          </h2>
          <form className="space-y-3 md:space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15 bg-[#E5B163] group-hover:bg-[#475D73]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15 bg-[#E5B163] group-hover:bg-[#475D73]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md outline-none appearance-none placeholder-black/40 focus:outline-none border-black/15 bg-[#E5B163] group-hover:bg-[#475D73]"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15 bg-[#E5B163] group-hover:bg-[#475D73]"
            />

            {/* Purpose Dropdown */}
            <select className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15 bg-[#E5B163] group-hover:bg-[#475D73]">
              <option value="" disabled selected>
                Purpose
              </option>
              <option value="inquiry">General Inquiry</option>
              <option value="training">Training Information</option>
              <option value="research">Research Collaboration</option>
              <option value="other">Other</option>
            </select>

            {/* <input
              type="text"
              placeholder="Purpose"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15"
            /> */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15 bg-[#E5B163] group-hover:bg-[#475D73]"
            />
            <textarea
              placeholder="Message"
              className="w-full  appearance-none outline-none focus:outline-none  placeholder-black/40 p-3  min-h-[140px] border border-black/15 rounded-md resize-none bg-[#E5B163] group-hover:bg-[#475D73]"
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-36 py-2 border-2 border-[#1f3a54] rounded-full hover:text-white hover:bg-[#1f3a54] text-xl font-bold archivo-expanded transition-all duration-300 mt-2 md:mt-4 group-hover:text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

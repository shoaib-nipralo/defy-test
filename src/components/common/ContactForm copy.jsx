import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section>
      <div className="flex flex-col-reverse gap-10 py-8 mx-auto section-wrapper md:py-16 md:flex-row md:items-end md:gap-4 lg:gap-0">
        {/* Left side with contact information */}
        <div className="relative w-full md:w-1/2 lg:pb-16 md:pr-16">
          <div className="absolute left-[12px] bg-[#F7BE68] w-[2px]  h-[calc(100%-65px)] lg:h-[calc(100%-100px)]"></div>
          <div className="relative pl-10">
            {/* Head Office */}
            <div className="relative mb-6">
              <div className="absolute -left-[42px] bg-white pb-2">
                <Image
                  src="/images/icons/building.svg"
                  alt="Building"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-lg font-bold uppercase h3">HEAD OFFICE</h3>
              <p className="pl-4 mt-1 text-lg font-satoshi">
                C-20, G Block Rd, G Block BKC,
                <br /> Bandra Kurla Complex, Bandra East, Mumbai,
                <br /> Maharashtra 400051
              </p>
            </div>

            {/* Drone Training Academy */}
            <div className="relative mb-6">
              <div className="absolute -left-[42px] bg-white pb-2 pt-1">
                <Image
                  src="/images/icons/training.svg"
                  alt="Training"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-lg font-bold uppercase h3">
                OUR DRONE TRAINING ACADEMY
              </h3>
              <p className="pl-4 mt-1 text-lg font-satoshi">
                Sri sri rural development programm skill centre,
                <br />
                Kanakapura Main Rd, near VKR quarters,
                <br />
                Udayapura, Bengaluru, Karnataka 560082
              </p>
            </div>

            {/* Center of Excellence */}
            <div className="relative mb-6">
              <div className="absolute -left-[42px] bg-white pb-2 pt-1">
                <Image
                  src="/images/icons/training.svg"
                  alt="Training"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-lg font-bold uppercase h3">
                CENTER OF EXCELLENCE FOR
                <br />
                ADVANCED DRONE RESEARCH
              </h3>
              <p className="pl-4 mt-1 text-lg font-satoshi">
                Sri Sri University, Cuttack, Odisha.
              </p>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <div className="absolute -left-[42px] bg-white pb-2 pt-1">
                <Image
                  src="/images/icons/call.svg"
                  alt="Call"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-lg font-bold uppercase h3">CONTACT NUMBER</h3>
              <p className="pl-4 mt-1 text-lg font-satoshi">+91 93720-27820</p>
            </div>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-2 md:mb-6 s-heading archivo-expanded">
            CONTACT US
          </h2>
          <form className="space-y-3 md:space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md outline-none appearance-none placeholder-black/40 focus:outline-none border-black/15"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15"
            />

            {/* Purpose Dropdown */}
            <select className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15">
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
              className="w-full p-3 border rounded-md outline-none appearance-none focus:outline-none placeholder-black/40 border-black/15"
            />
            <textarea
              placeholder="Message"
              className="w-full  appearance-none outline-none focus:outline-none  placeholder-black/40 p-3  min-h-[140px] border border-black/15 rounded-md resize-none"
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-36 py-2 border-2 border-[#1f3a54] rounded-full hover:text-white hover:bg-[#1f3a54] text-xl font-bold archivo-expanded transition-all duration-300 mt-2 md:mt-4"
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

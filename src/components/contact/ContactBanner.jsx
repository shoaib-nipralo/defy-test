import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="relative">
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("/images/banner/Contact-us-page.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full gap-2 px-4 lg:gap-4">
          <h1 className="leading-10 text-center uppercase text-outline-white text-outline-white-fallback archivo-expanded b-heading">
            GOT QUESTIONS?
          </h1>
          <h3 className="text-center text-white h3">
            Reach out to us and we'll get back as soon as possible
          </h3>

          {/* ✅ Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <Image
              src="/images/icons/bannerScroller.png"
              alt="🔻"
              width={36}
              height={77}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;

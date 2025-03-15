import React from "react";

const RelatedCourses = () => {
  return (
    <section>
      <div className="pb-6 section-wrapper md:px-8">
        <h1 className="text-[#345F72] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
          related
          <br />
          <span className="text-outline-catalina text-outline-harvest-fallback archivo-expanded">
            courses
          </span>
        </h1>
      </div>
      <div className="pt-6 section-wrapper md:px-8">
        <div className="bg-[#d9d9d9] rounded-2xl p-8 lg:p-16 lg:py-20 flex flex-col md:flex-row h-[400px]"></div>
      </div>
    </section>
  );
};

export default RelatedCourses;

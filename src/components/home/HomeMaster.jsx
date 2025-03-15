import React from "react";
import Banner from "./Banner";
import About from "./About";
import HomeSlide from "./HomeSlide";
import Certified from "./Certified";
import Stats from "./Stats";
import NewsMedia from "./NewsMedia";
import ContactForm from "../common/ContactForm";

const HomeMaster = () => {
  return (
    <>
      <Banner />
      <About />
      <HomeSlide />
      <Certified />
      <Stats />
      <NewsMedia />
      <ContactForm />
    </>
  );
};

export default HomeMaster;

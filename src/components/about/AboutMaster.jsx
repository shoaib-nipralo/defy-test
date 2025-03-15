import React from "react";
import Banner from "./Banner";
import About from "./About";
import Patent from "./Patent";
import Contact from "../common/Contact";
import Humanity from "./Humanity";
import ContactForm from "../common/ContactForm";
import Founder from "./Founder";
import Event from "./Event";
import IndustryLeader from "./IndustryLeader";

const AboutMaster = () => {
  return (
    <main>
      <Banner />
      <About />
      <Patent />
      <Humanity />
      <Founder />
      <Event />
      <IndustryLeader />
      <ContactForm />
    </main>
  );
};
export default AboutMaster;

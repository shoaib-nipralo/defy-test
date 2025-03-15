import React from "react";
import Banner from "./Banner";
import DronePilotHeading from "./DronePilotHeading";
import RotorCraft from "./RotorCraft";
import UnlockPotential from "./UnlockPotential";
import CourseStructure from "./CourseStructure";
import WhoCanApply from "./WhoCanApply";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import RelatedCourses from "./RelatedCourses";
import ContactForm from "@/components/common/ContactForm";

const DronePilotMaster = () => {
  return (
    <>
      <Banner />
      <DronePilotHeading />
      <RotorCraft />
      <UnlockPotential />
      <CourseStructure />
      <WhoCanApply />
      <Testimonials />
      <Faq />
      <RelatedCourses />
      <ContactForm />
    </>
  );
};

export default DronePilotMaster;

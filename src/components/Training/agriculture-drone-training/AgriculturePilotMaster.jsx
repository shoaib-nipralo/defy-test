import React from "react";
import Banner from "./Banner";
import AgriculturePilotHeading from "./AgriculturePilotHeading";
import UpgradeSkills from "./UpgradeSkills";
import UnlockPotential from "./UnlockPotential";
import CourseStructure from "./CourseStructure";
import WhoCanApply from "./WhoCanApply";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import RelatedCourses from "./RelatedCourses";
import ContactForm from "@/components/common/ContactForm";

const AgriculturePilotMaster = () => {
  return (
    <>
      <Banner />
      <AgriculturePilotHeading />
      <UpgradeSkills />
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

export default AgriculturePilotMaster;

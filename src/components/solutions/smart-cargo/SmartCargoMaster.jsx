import React from "react";
import Banner from "./Banner";
import HarvestTransport from "./HarvestTransport";
import DeliveryFuture from "./DeliveryFuture";
import ForFarmers from "./ForFarmers";
import OurProcess from "./OurProcess";
import ContactForm from "@/components/common/ContactForm";

const SmartCargoMaster = () => {
  return (
    <>
      <Banner />
      <HarvestTransport />
      <DeliveryFuture />
      <ForFarmers />
      <OurProcess />
      <ContactForm />
    </>
  );
};

export default SmartCargoMaster;

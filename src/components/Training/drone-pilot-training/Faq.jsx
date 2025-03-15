"use client";
import Image from "next/image";
import React, { useState } from "react";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is DGCA RPC certification, and why is it important?",
      answer: [
        "The DGCA Remote Pilot Certificate is a certification issued by the DirectorateGeneral of Civil Aviation in India, which validates that an individual has undergone the necessary training and met the requirements to operate drones for commercial purposes in compliance with aviation regulations.",

        "Having a DGCA Remote Pilot Certificate is important as it is a legal requirement for operating drones commercially in India and ensures safety, compliance, industry recognition, and expanded job opportunities.",
      ],
    },
    {
      question: "Do you provide placements?",
      answer: [
        "Yes, we do give post-training support for placement and resume building. There is a one-day session for the same. However, we do not assure a job placement as it depends on the candidate’s performance in the interview",
      ],
    },
    {
      question: "What are the daily class timings?",
      answer: [""],
    },
    {
      question: "What does the training program cover?",
      answer: [
        "The training program typically covers topics such as drone regulations and compliance, flight planning, safety procedures, emergency protocols, navigation, aerial photography, and data analysis. It provides a balanced combination of theoretical and practical training",
      ],
    },
    {
      question:
        "Are there any post-training support or placement assistance services?",
      answer: [
        "Yes, we do give post-training support for placement and resume building. There is a one-day session for the same. However, we do not assure a job placement as it depends on the candidate’s performance in the interview",
      ],
    },
    {
      question: "What is the policy for a refund of the fee?",
      answer: [
        "We do not have a refund policy if the candidate fails to join the course for any reason. However, the candidate can be transferred to the next available batch of his/her choice.",
      ],
    },
  ];
  return (
    <section>
      <div
        className="pb-6 section-wrapper md:px-8"
        style={{ paddingBottom: "24px" }}
      >
        <h1 className="text-[#345F72] uppercase m-heading lg:leading-10 xl:leading-[58px] leading-7">
          FAQ'S
        </h1>
      </div>
      <div>
        <div
          className="relative flex flex-col justify-center gap-20 py-0 pb-8 text-center md:py-8 section-wrapper md:px-8 md:flex-row"
          style={{ paddingBottom: "32px" }}
        >
          <div className="grid min-w-full grid-cols-1 gap-4 lg:grid-cols-2 md:gap-x-12 md:gap-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`overflow-hidden border border-[#1F3A54] rounded-xl font-body ${
                  openIndex !== index ? "max-h-fit" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center text-[#1F3A54] justify-between w-full gap-2 p-4 py-5 font-semibold text-left transition duration-300 bg-white hover:bg-gray-100"
                >
                  {faq.question}
                  <Image
                    src="/images/icons/plus.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                  />
                </button>
                <div
                  className={`overflow-hidden text-left transition-all duration-300 ${
                    openIndex === index ? "max-h-fit p-4" : "max-h-0 p-0"
                  }`}
                >
                  <div className="p-4 px-6 text-sm bg-[#F9F9F9] rounded-2xl flex flex-col gap-4">
                    {openIndex === index &&
                      faq.answer.map((ans, i) => <p key={i}>{ans}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

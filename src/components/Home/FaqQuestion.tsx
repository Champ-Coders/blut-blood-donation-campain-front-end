import React from "react";
import Faq from "../Faq/Faq";
import { useFaqsQuery } from "@/redux/Api/faqsApi";

// async function getData() {
//   const res = await fetch(`${config.apiBaseUrl}/faqs`);
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
const FaqQuestion = async () => {
  // const faqs = await getData();
  const { data: faqs } = useFaqsQuery(undefined);

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12  ">
      <div className="container mx-auto common">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color ">
                Where you can find answers to the most common questions about
                our products and services.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
          {faqs?.data.map((faq: any, i: number) => (
            <Faq key={i} header={faq.title} text={faq.description} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="red" stopOpacity="0.36" />
              <stop offset="1" stopColor="#ea062b" stopOpacity="0" />
              <stop offset="1" stopColor="#ea062b" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FaqQuestion;

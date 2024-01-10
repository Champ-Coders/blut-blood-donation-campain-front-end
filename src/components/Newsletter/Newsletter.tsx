import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";

type NewsletterProps = {};

const Newsletter: React.FC<NewsletterProps> = () => {
  return (
    <section className="absolute  -translate-y-[77%] top-0 md:-translate-y-[50%] left-0 right-0">
      <div className=" p-5 lg:py-10 common bg-[#ea062b] rounded-xl">
        <div className="flex flex-col lg:flex-row lg:p-[20px] gap-10 items-center">
          <div className="w-full">
            <h3 className="text-3xl text-white font-playfair ">
              Join To Get Our Newsletter
            </h3>
            <p className="text-white mt-5 font-roboto">
              Our newsletter is sent once a month. We do not spam but send
              useful information relevant to your business.
            </p>
          </div>
          <div className="w-full">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;

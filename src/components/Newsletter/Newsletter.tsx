import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";

type NewsletterProps = {};

const Newsletter: React.FC<NewsletterProps> = () => {
  return (
    <section className="absolute  top-0 -translate-y-[50%] left-0 right-0">
      <div className="py-10 common bg-[#ea062b] rounded-xl">
        <div className="flex flex-col lg:flex-row p-[20px] gap-10 items-center">
          <div className="w-full">
            <h3 className="text-3xl text-white ">Join To Get Our Newsletter</h3>
            <p className="text-white mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
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
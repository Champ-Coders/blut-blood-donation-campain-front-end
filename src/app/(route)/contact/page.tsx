import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import GetInTouch from "@/components/contact/GetInTouch";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <section className="my-20">
      <BannerBreadcrumb
        items={[
          {
            label: "Contact Us",
          },
        ]}
        title="Contact Us"
        image="/assets/blood-donor-bg.png"
      />
      <div>
        <GetInTouch />
      </div>
    </section>
  );
};
export default page;

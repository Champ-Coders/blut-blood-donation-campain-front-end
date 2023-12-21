import EventDetails from "@/components/EventDetails/EventDetails";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import GetInTouch from "@/components/contact/GetInTouch";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <section >
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
      <div>
        <iframe
          className="w-full h-[400px] mt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396725783!2d90.25487754014735!3d23.780753031632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1703050128533!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
export default page;

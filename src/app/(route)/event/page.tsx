import Events from "@/components/Event/Events";
import JoinUs from "@/components/Event/JoinUs";
import Testimonials from "@/components/Home/Testimonials";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className="pb-48">
      <section>
        <BannerBreadcrumb
          items={[
            {
              label: "Event",
            },
          ]}
          title="Event"
          image="/assets/blood-donor-bg.png"
        />
      </section>
      <Events />
      <Testimonials />
      <JoinUs />
    </main>
  );
};
export default page;

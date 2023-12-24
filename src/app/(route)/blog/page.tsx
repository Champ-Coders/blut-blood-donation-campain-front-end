import JoinUs from "@/components/Event/JoinUs";
import Testimonials from "@/components/Home/Testimonials";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import AllBlog from "@/components/blog/AllBlog";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className="">
      <section>
        <BannerBreadcrumb
          items={[
            {
              label: "Blog",
            },
          ]}
          title="blog"
          image="/assets/blood-donor-bg.png"
        />
      </section>
      <AllBlog />
      <Testimonials />
      <JoinUs />
    </main>
  );
};
export default page;

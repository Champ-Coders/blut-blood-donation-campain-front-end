import React from "react";
import image from "../../../../../public/assets/our-news/activity.png";
import Image from "next/image";
import Breadcrumb from "@/components/UI/BreadCrumb";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import Button from "@/components/Button/Button";

type ServiceDetailProps = {};

const ServiceDetail: React.FC<ServiceDetailProps> = () => {
  const data = {
    title: "Know More Us of Our Blood Donate Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: image,
  };
  return (
    <main>
      <section>
        <BannerBreadcrumb
          items={[
            {
              label: "Service",
            },
          ]}
          title="Service"
          image="/assets/blood-donor-bg.png"
        />
      </section>
      <section>
        <div className="common">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-10">
            <div className="grid-cols-1 md:col-span-3 lg:col-span-8">
              <div>
                <h2 className="text-5xl text-[#111] font-bold mb-7">
                  {data.title}
                </h2>
                <p className="text-base text-[#666] leading-7 mb-5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p className="text-base text-[#666] leading-7 mb-5">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam,
                </p>
                <div className="h-[400px] overflow-hidden mt-5 mb-10">
                  <Image
                    width={839}
                    height={438}
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <p className="text-base text-[#666] leading-7">
                  {data.description}
                </p>
              </div>
            </div>
            <div className="grid-cols-1 md:col-span-3 lg:col-span-4">
              <div className="bg-primary p-5 text-white">
                <h5 className="text-3xl font-semibold mb-5">
                  Blood Excellence
                </h5>
                <h3 className="text-4xl font-semibold mb-5">
                  Expanded Blood Donate Services Here
                </h3>
                <p className="mb-5">
                  There are many variations of passages Lorem Ipsum available,
                  but the majority suffered of alteration in some form,
                </p>
                <Button
                  type="button"
                  className="bg-[#111] text-white hover:bg-primary "
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ServiceDetail;

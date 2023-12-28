import React from "react";
import Title1 from "../UI/Title1";
import SubTitle from "../UI/SubTitle";
import ServiceHeroUI from "../UI/ServiceHeroUI";
import { useServicesQuery } from "@/redux/Api/serviceApi";

const Services = () => {
  const { data: services } = useServicesQuery(undefined);

  return (
    <div className="py-10 sm:pt-16 sm:pb-8 container mx-auto max-w-7xl">
      <section className="text-center">
        <Title1 data={{ title: "What We Do" }} />
        <SubTitle data={{ subTitle: "Our Service", css: "mx-auto mt-5" }} />
        {/*! imported from reusable component */}
      </section>
      <section className="mt-12">
        {services?.data?.map((service: any, index: number) => {
          return (
            <ServiceHeroUI
              key={index}
              data={{
                no: index + 1,
                title: service.title,
                description: service.description,
                link: `/services/${service.id}`,
                align:
                  index % 2 !== 0
                    ? "lg:flex-row-reverse text-start lg:text-end"
                    : "text-start",
                banner: service.image,
              }}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Services;

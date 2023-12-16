import React from "react";
import Title1 from "../UI/Title1";
import SubTitle from "../UI/SubTitle";
import ServiceHeroUI from "../UI/ServiceHeroUI";

const Services = () => {
  const homeServicesData = [
    {
      id: "01",
      img: "https://croptheme.com/blut/blut-ltr/assets/images/services/blood-donation.png", // Replace with the actual path to your image
      title: "Blood Donation",
      description:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      detailsLink: "details_link_01",
    },
    {
      id: "02",
      img: "https://croptheme.com/blut/blut-ltr/assets/images/services/blood-donation.png", // Replace with the actual path to your image
      title: "Health Check",
      description:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      detailsLink: "details_link_02",
      additionalLinks: ["Health Check", "Blood Bank"],
    },
    {
      id: "03",
      img: "https://croptheme.com/blut/blut-ltr/assets/images/services/blood-donation.png", // Replace with the actual path to your image
      title: "Blood Bank",
      description:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      detailsLink: "details_link_03",
    },
  ];

  // console.log(homeServicesData);

  return (
    <div className="mt-7 container mx-auto ">
      <section className="text-center  ">
        <Title1 data={{ title: "What We Do" }} />
        <SubTitle data={{ subTitle: "Our Service", css: "mx-auto mt-5" }} />
        {/*! imported from reusable component */}
      </section>
      <section className="mt-12">
        {homeServicesData.map((service: any, index: number) => {
          return (
            <ServiceHeroUI
              key={index}
              data={{
                no: service.id,
                title: service.title,
                description: service.description,
                link: service.detailsLink,
                align:
                  index % 2 !== 0
                    ? "lg:flex-row-reverse text-start lg:text-end gap-2 lg:gap-[8rem]"
                    : " text-start",
                banner: service.img,
              }}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Services;

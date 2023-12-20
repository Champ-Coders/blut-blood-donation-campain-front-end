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
        "Blood donation is a voluntary procedure that can help save the lives of others. There are several types of blood donation, which help meet different medical needs. The most common types of donation are whole blood, platelet, and double red cell donation.",
      detailsLink: "details_link_01",
    },
    {
      id: "02",
      img: "https://i.ibb.co/R2CjppR/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-fe.jpg", // Replace with the actual path to your image
      title: "Health Check",
      description:
        "Health checks are a way of finding out if you are at risk of health problems. They can also help find problems early, when your chances for treatment and cure are better. By getting the right health services, screenings, and treatments, you are taking steps that help your chances for living a longer, healthier life. Your age, health and family history, lifestyle choices (i.e. what you eat, how active you are, whether you smoke), and other important factors impact what and how often you need healthcare.",
      detailsLink: "details_link_02",
      additionalLinks: ["Health Check", "Blood Bank"],
    },
    {
      id: "03",
      img: "https://croptheme.com/blut/blut-ltr/assets/images/services/blood-donation.png", // Replace with the actual path to your image
      title: "Blood Bank",
      description:
        "Blood Bank is a place where blood is collected from donors, typed, separated into components, stored, and prepared for transfusion to recipients. A blood bank may be a separate free-standing facility or part of a larger laboratory in a hospital. Separation of blood Typically, each donated unit of blood (whole blood) is separated into multiple components, such as red blood cells, plasma and platelets. Each component is generally transfused to a different individual, each with different needs. One unit of donated blood (450 ml) can be separated into the following components: 1. Red blood cells (RBCs) 2. Platelets 3. Plasma 4. Cryoprecipitate",
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

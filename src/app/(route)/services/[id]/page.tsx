"use client";
import React from "react";
import Image from "next/image";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import Button from "@/components/Button/Button";
import { useServiceQuery } from "@/redux/Api/serviceApi";

interface IProps {
  params: {
    id: string;
  };
}
const ServiceDetail = (props: IProps) => {
  const { data: service } = useServiceQuery(props.params.id);

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
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-8">
            <div className="grid-cols-1 md:col-span-3 lg:col-span-8">
              <div>
                <h2 className="text-5xl text-[#111] font-bold mb-7">
                  {service?.data?.title}
                </h2>
                <div className=" lg:h-[400px] overflow-hidden mt-5 mb-10">
                  <Image
                    className="w-full h-full"
                    width={839}
                    height={600}
                    src={service?.data?.image}
                    alt={service?.data?.title}
                  />
                </div>
                ,
                <p className="text-base text-[#666] leading-7 mb-5">
                  {service?.data?.description
                    .split("\n\n")
                    .map((paragraph: any) => (
                      <p key={paragraph}>
                        {paragraph
                          .split("\n")
                          .reduce((total: any, line: any) => [
                            total,
                            <br key={paragraph} />,
                            line,
                          ])}
                      </p>
                    ))}
                </p>
              </div>
            </div>
            <div className="grid-cols-1 mt-5 md:mt-[77px] md:col-span-3 lg:col-span-4">
              <div className="bg-primary p-5 text-white">
                <h5 className="text-xl md:text-3xl font-semibold mb-5">
                  Blood Excellence
                </h5>
                <h3 className="text-2xl md:text-4xl font-semibold mb-5">
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

  )}

export default ServiceDetail;

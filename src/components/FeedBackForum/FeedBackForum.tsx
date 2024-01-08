"use client";
import React from "react";
import { Button, Modal, Rate, message } from "antd";
const { confirm } = Modal;
import { ExclamationCircleFilled } from "@ant-design/icons";

import { useRouter } from "next/navigation";

import { useAddReviewMutation } from "@/redux/Api/reviewApi";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { useServicesQuery } from "@/redux/Api/serviceApi";
import { useForm } from "react-hook-form";

import TextAreaField from "../TextAreaField/TextAreaField";
import MultiSelect from "../MultiSelector/MultiSelector";

const FeedBackForum = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    setValue,
    reset,

    formState: { errors },
  } = useForm();

  const [addReview, { isLoading }] = useAddReviewMutation();
  const { data: userLoggedIn } = useUserProfileQuery(undefined);
  const { data: services } = useServicesQuery(undefined);
  const serviceOptions = services?.data?.map((service: any) => ({
    value: service.id,
    label: service.title,
  }));
  const handleSubmitData = async (data: any) => {
    if (!data.service) {
      message.error("Please select a service");
      return;
    } else if (!data.rating) {
      message.error("Please select a rating");
      return;
    }
    if (!userLoggedIn) {
      confirm({
        title: "Please Login First",
        icon: <ExclamationCircleFilled />,
        content:
          "You need to login first to give feedback. Do you want to login?",
        onOk() {
          return router.push("/login");
        },
        onCancel() {},
      });

      return;
    } else {
      try {
        const newReview = {
          review: data.review,
          rating: Number(data.rating),
          service: data.service.id,
          user: userLoggedIn.data._id,
        };
        const res = await addReview(newReview).unwrap();

        if (res?.success) {
          message.success("Feedback Submitted Successfully");
          reset();
        }
      } catch (error: any) {
        console.error(error?.data?.message || "Some thing was wrong");
        message.error(error?.data?.message || "Some thing was wrong");
      }
    }
  };

  return (
    <section className="text-gray-600 body-font relative ">
      <div className="absolute inset-0 bg-gray-100  ">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187905555!2d90.33728821510793!3d23.780975728070462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1697518047346!5m2!1sbn!2sbd"
          className=" filter grayscale-100 contrast-100 opacity-50"
        ></iframe>
      </div>

      <form
        data-aos="zoom-out-down"
        data-aos-duration="400"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="container px-5 py-24 mx-auto flex justify-end">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-[14px]">
              Blut Need your feedback to improve our service. Please give us
            </p>

            <div>
              <label className="text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize flex items-center gap-2">
                Rate Us
                <span className="text-rose-500">*</span>
              </label>

              <Rate allowHalf={true} onChange={(e) => setValue("rating", e)} />
            </div>

            <MultiSelect
              label="Select Service"
              name="service"
              options={serviceOptions}
              isMulti={false}
              required={true}
              setValue={setValue}
            />

            <TextAreaField
              name="review"
              register={register}
              errors={errors}
              rows={5}
              label="Review"
              placeholder="Write your review here"
              required
            />

            <Button
              htmlType="submit"
              type="primary"
              loading={isLoading}
              className="text-white  bg-primary border-0  px-6 focus:outline-none hover:bg-black rounded text-[12px]"
            >
              Button
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              Blut Provide the best service for you. Please give us feedback to
              improve our service.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FeedBackForum;

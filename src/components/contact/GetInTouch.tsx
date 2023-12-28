"use client";
import React from "react";
import TextAreaField from "../TextAreaField/TextAreaField";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { FaClock, FaPhoneAlt } from "react-icons/fa";

type GetInTouchProps = {};

const GetInTouch: React.FC<GetInTouchProps> = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("Form Data:", data);
  };
  return (
    <div className="common">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10  p-5 md:p-8 lg:p-16 shadow-[0px_9px_52px_0_rgba(0,0,0,.07)] rounded-lg">
        <div className="md:col-span-1 lg:col-span-7">
          <h3 className="mb-6 lg:text-3xl font-semibold text-xl text-[#111] font-playfair">
            Get In Touch
          </h3>
          <p className=" text-[#666] mb-7 text-[14px]">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and righteous indignation and
            dislike men by the charms
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-grow mb-4 w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <InputField
                  placeholder="First Name"
                  name={"first_name"}
                  type="text"
                  register={register}
                  required
                  errors={errors}
                />
                <InputField
                  placeholder="Last Name"
                  name={"last_name"}
                  type="text"
                  required
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex-grow mb-4 w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <InputField
                  placeholder="Email"
                  name={"email"}
                  type="email"
                  register={register}
                  required
                  errors={errors}
                />
                <InputField
                  placeholder="Subject"
                  name={"subject"}
                  type="text"
                  required
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <TextAreaField
                  rows={6}
                  register={register}
                  placeholder="Case Description"
                  name="message"
                />
              </div>
            </div>
            <button
              type="submit"
              className="py-[15px] px-5 border group bg-primary  hover:bg-black text-white transition-all ease-out duration-300 w-full flex justify-between"
            >
              <span className="relative">Submit Request</span>
              <FaArrowRightLong />
            </button>
          </form>
        </div>
        <div className="md:col-span-1 lg:col-span-5">
          <div className="bg-[#ea062b] px-[30px] py-[60px] text-white">
            <p className="font-semibold lg:text-lg mb-[23px]">
              Blood Excellence!
            </p>
            <h4 className="text-lg lg:text-3xl font-semibold leading-normal mb-5 font-playfair">
              Expanded Blood Donate Services Here
            </h4>
            <p className="text-[14px] leading-normal ">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms{" "}
            </p>
            <div className="mt-[55px] flex flex-col gap-5 text-[14px] leading-normal font-medium">
              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                Emergency Line: (002)
              </p>
              <p className="flex items-center gap-3">
                <FaLocationDot />
                Location: Street 68, Mahattan, New York
              </p>
              <p className="flex items-center gap-3">
                <FaClock />
                Mon - Fri: 8:00 am - 7:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;

'use client'
import React from "react";
import TextAreaField from "../TextAreaField/TextAreaField";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7">
          <h3 className="mb-6 lg:text-3xl font-semibold text-xl text-[#111]">
            Get In Touch
          </h3>
          <p className="text-lg text-[#666] mb-7">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and righteous indignation and
            dislike men by the charms
          </p>

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
                placeholder="Address"
                name={"address"}
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
        </div>
        <div className="col-span-5">
          <div className="bg-[#ea062b] px-[30px] py-[60px] "></div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;

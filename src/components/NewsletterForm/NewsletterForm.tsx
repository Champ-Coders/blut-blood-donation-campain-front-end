"use client";
import React from "react";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";

type NewsletterFormProps = {};

const NewsletterForm: React.FC<NewsletterFormProps> = () => {
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
    <form className="w-full flex  gap-[27px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[25px] w-full">
        <InputField
          customClass="text-[#313131] w-full bg-white rounded-[5px] py-[15px] px-[20px] w-full"
          name={"email"}
          placeholder="Your Email Address"
          type="email"
          register={register}
          errors={errors}
        />
      </div>

      <button
        className="bg-[#000000]  transition duration-500 ease-in-out  text-white hover:text-black hover:bg-white rounded-[5px] py-4 px-[25px] inline-block h-[55px] text-base"
        type="submit"
      >
        subscribe
      </button>
    </form>
  );
};
export default NewsletterForm;

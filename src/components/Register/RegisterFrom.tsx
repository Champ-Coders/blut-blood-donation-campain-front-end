"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import MultiSelect from "../MultiSelector/MultiSelector";
import { blood_groups } from "@/constants/Register";

type RegisterFormProps = {};

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  console.log(errors)
  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("Form Data:", data);
  };

  return (
    <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[165px] font-semibold text-lg">
          Full Name *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              label="First Name"
              name={"first_name"}
              type="text"
              register={register}
              required
              errors={errors}
            />
            <InputField
              label="Last Name"
              name={"last_name"}
              type="text"
              required
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
      {/* Date Of Birth */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[165px] font-semibold text-lg">
          Date Of Birth *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              label="Date Of Birth"
              name={"date_of_birth"}
              type="date"
              required
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
      {/* Blood Group */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[165px] font-semibold text-lg">
          Blood Group *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <MultiSelect
              label="Blood Group"
              name={"blood_group"}
              options={blood_groups}
              isMulti={false}
              required={true}
              setData={setValue}
            />
          </div>
        </div>
      </div>
      {/* Last Donate Date */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[165px] font-semibold text-lg">
          Last Donate Date *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              label="Last Done Date"
              name={"last_done_date"}
              type="date"
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-2 min-w-[165px] font-semibold text-lg">
          Address *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              label="State Address"
              name={"state_address"}
              type="text"
              required
              register={register}
              errors={errors}
            />
            <InputField
              label="City"
              name={"city"}
              type="text"
              required
              register={register}
              errors={errors}
            />
            <InputField
              label="State / Province"
              name={"state"}
              type="text"
              required
              register={register}
              errors={errors}
            />

            <button type="submit" className="relative w-full rounded px-5 py-2 overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[550px] ease"></span>
              <span className="relative">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default RegisterForm;

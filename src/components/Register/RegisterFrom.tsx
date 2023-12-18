"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import MultiSelect from "../MultiSelector/MultiSelector";
import TextAreaField from "../TextAreaField/TextAreaField";
import Button from "../Button/Button";
import { months } from "@/constants/Register";

type RegisterFormProps = {};

const RegisterForm: React.FC<RegisterFormProps> = () => {
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
    <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>


      {/* Name */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[160px] font-semibold text-lg">
          Full Name *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              label="First Name"
              name={"first_name"}
              type="text"
              register={register}
              errors={errors}
            />
            <InputField
              label="Last Name"
              name={"last_name"}
              type="text"
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
      {/* Date Of Birth */}
      <div className="flex justify-between flex-col md:flex-row items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[160px] font-semibold text-lg">
          Date Of Birth *
        </p>

        <div className="flex-grow w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              label="Date Of Birth"
              name={"date_of_birth"}
              type="date"
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
export default RegisterForm;

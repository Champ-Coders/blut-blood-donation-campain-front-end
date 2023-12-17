"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import MultiSelect from "../MultiSelector/MultiSelector";
import TextAreaField from "../TextAreaField/TextAreaField";
import Button from "../Button/Button";

type AppointmentFormProps = {};

interface IFormSelector {
  value: string;
  label: string;
}
[];

const options: IFormSelector[] = [
  {
    value: "Donation Type",
    label: "Donation Type",

  },
  {
    value: "Free Donation",
    label: "Free Donation",

  },
  {
    value: "Health Checkup",
    label: "Health Checkup",
  },
  {
    value: "Blood Donation",
    label: "Blood Donation",
  },
  {
    value: "Free Donation",
    label: "Free Donation",
  },
  {
    value: "Health Checkup",
    label: "Health Checkup",
  },
  {
    value: "Blood Donation",
    label: "Blood Donation",
  },
  {
    value: "Free Donation",
    label: "Free Donation",
  },
  {
    value: "Health Checkup",
    label: "Health Checkup",
  },
  {
    value: "Paid Donation",
    label: "Paid Donation",
  },
];

const AppointmentForm: React.FC<AppointmentFormProps> = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("Form Data:", data);
  };

  return (
    <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row gap-[25px] mb-[25px]">
        <InputField
          customClass="px-5 py-[14px] bg-[#f5f5f5] 
        text-lg text-[#666] w-full
        "
          name={"name"}
          placeholder="Your Name"
          type="text"
          register={register}
        />
        <InputField
          customClass="px-5 py-[14px] bg-[#f5f5f5] 
        text-lg text-[#666] w-full
        "
          name={"number"}
          placeholder="Your Number"
          type="number"
          register={register}
        />
      </div>
      <div className="mb-[25px]">
        <InputField
          customClass="px-5 py-[14px] bg-[#f5f5f5] 
        text-lg text-[#666] w-full
        "
          name={"email"}
          placeholder="Your Email"
          type="email"
          register={register}
        />
      </div>
      <div className="mb-[25px]">
        <MultiSelect
          name={"donationType"}
          options={options}
          isMulti={false}
          required={true}
        />
      </div>
      <div className="mb-[25px]">
        <TextAreaField
          customClass="px-5 py-[14px] bg-[#f5f5f5] 
          text-lg text-[#666] w-full h-[150px]"
          placeholder="Your Message"
          name="message"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default AppointmentForm;

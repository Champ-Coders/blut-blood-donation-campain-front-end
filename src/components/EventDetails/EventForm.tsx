"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import MultiSelect from "../MultiSelector/MultiSelector";
import TextAreaField from "../TextAreaField/TextAreaField";
import Button from "../Button/Button";

type EventFormProps = {};

interface IFormSelector {
  value: string;
  label: string;
}
[];

const options: IFormSelector[] = [
  {
    value: "Blood Donation",
    label: "Blood Donation",
  },
  {
    value: "Money Donation",
    label: "Money Donation",
  },
  {
    value: "Prelove Donation",
    label: "Prelove Donation",
  },
];

const EventForm: React.FC<EventFormProps> = () => {
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
      <div className="flex flex-col lg:flex-row gap-[25px] mb-[25px]">
        <InputField
          name={"name"}
          placeholder="Your Name"
          type="text"
          register={register}
          errors={errors}
        />
        <InputField
          name={"number"}
          placeholder="Your Number"
          type="number"
          register={register}
          errors={errors}
        />
      </div>
      <div className="mb-[25px]">
        <InputField
          name={"email"}
          placeholder="Your Email"
          type="email"
          register={register}
          errors={errors}
        />
      </div>
      <div className="mb-[25px]">
        <MultiSelect
          name={"donationType"}
          options={options}
          isMulti={false}
          required={true}
          setValue={setValue}
        />
      </div>
      <div className="mb-[25px]">
        <TextAreaField placeholder="Your Message" name="message" />
      </div>
      <Button className="" type="submit">
        Donate Now
      </Button>
    </form>
  );
};
export default EventForm;

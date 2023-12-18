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
];

const AppointmentForm: React.FC<AppointmentFormProps> = () => {
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
      <div className="flex justify-between items-start gap-5">
        <p className="mt-4 -mb-1 min-w-[160px] font-semibold text-lg">
          Full Name *
        </p>

        <div className="flex-grow">
          <div className="flex justify-between items-center gap-6">
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

      <Button type="submit">Submit</Button>
    </form>
  );
};
export default AppointmentForm;

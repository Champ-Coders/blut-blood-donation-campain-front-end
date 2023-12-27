"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import MultiSelect from "../MultiSelector/MultiSelector";
import { blood_groups } from "@/constants/Register";
import TextAreaField from "../TextAreaField/TextAreaField";
import { useRequestForDonateMutation } from "@/redux/Api/donationApi/DonationApi";
import { useRouter } from "next/navigation";
import { message } from "antd";

type DonationFormProps = {};

const DonationForm: React.FC<DonationFormProps> = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [donate] = useRequestForDonateMutation(undefined);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    data.bag = parseInt(data.bag);
    data.bloodGroup = data.bloodGroup.name;
    const res: any = await donate({ data });
    try {
      if (res?.data?.success) {
        message.success(res?.data.message);
        router.push("/");
      } else {
        message.error(res?.error?.data?.message);
      }
    } catch (error: any) {
      // message.error(error?.data?.message);
    }
  };

  return (
    <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
      {/* Blood Group */}
      <div className="p-5 mb-6 sm:mb-10 sm:p-5 md:p-8 border border-gray-300">
        <p className="mb-4 min-w-[165px] text-lg font-semibold sm:text-xl">
          Your Blood Donation
        </p>

        <div className="w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <MultiSelect
              placeholder="Enter Your Blood Group"
              name={"bloodGroup"}
              options={blood_groups}
              isMulti={false}
              required={true}
              setValue={setValue}
            />
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="p-5 sm:p-5 md:p-8 border border-gray-300">
        <p className="mb-4 min-w-[165px] text-lg font-semibold sm:text-xl">
          Details
        </p>

        <div className="flex-grow mb-4 w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              placeholder="Full Name"
              name={"name"}
              type="text"
              register={register}
              required
              errors={errors}
            />
            <InputField
              placeholder="Total Bag"
              name={"bag"}
              type="number"
              required
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex-grow mb-4 w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              placeholder="Phone Number"
              name={"phoneNumber"}
              type="text"
              register={register}
              required
              errors={errors}
            />
            <InputField
              placeholder="Your Location"
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
              name="details"
            />
          </div>
        </div>
        <button
          type="submit"
          className="relative max-w-md rounded px-5 py-2 overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Donate Now</span>
        </button>
      </div>
    </form>
  );
};
export default DonationForm;

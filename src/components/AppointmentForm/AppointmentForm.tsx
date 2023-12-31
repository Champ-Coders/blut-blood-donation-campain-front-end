"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import MultiSelect from "../MultiSelector/MultiSelector";
import TextAreaField from "../TextAreaField/TextAreaField";

import { useRouter } from "next/navigation";
import { useRequestForBloodMutation } from "@/redux/Api/donationApi/DonationApi";
import { Button, message } from "antd";

const AppointmentForm = ({ availableDonor }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const [requestForBlood, { isLoading }] =
    useRequestForBloodMutation(undefined);
  const router = useRouter();

  const onSubmit = async (datas: any) => {
    const data = {
      bag: parseInt(datas.bag),
      donnerId: datas?.bloodGroup?.id,
      bloodGroup: datas?.bloodGroup?.name?.split("(")[0]?.trim(),
      expectedDate: datas?.expectedDate?.toString(),
      patientDetails: datas?.patientDetails,
    };
    const res: any = await requestForBlood({ data });
    try {
      if (res?.data?.success) {
        message.success(res?.data.message);
        reset();
      } else {
        message.error(res?.error?.data?.message);
        // router.push("/");
      }
    } catch (error) {
      router.push("/");
    }
    router.push("/");
  };

  return (
    <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
      {/* Details */}
      <div>
        <div className="flex-grow mb-4 w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <MultiSelect
              placeholder="Blood Group"
              name={"bloodGroup"}
              options={availableDonor?.map((blood: any) => {
                return {
                  value: blood?._id,
                  label: blood?.bloodGroup + " (" + blood?.name + ")",
                };
              })}
              isMulti={false}
              required={true}
              setValue={setValue}
              label="Blood Group"
            />
            <InputField
              placeholder="Total Bag"
              name={"bag"}
              type="number"
              required
              register={register}
              errors={errors}
              label="Need bag (1 - 2)"
              validation={{
                validate: (value: number) => value == 1 || value == 2,
              }}
            />
          </div>
        </div>
        <div className="flex-grow mb-4 sm:w-1/2 w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              placeholder="Expected Date"
              label="Expected Date"
              name={"expectedDate"}
              type="date"
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
            <TextAreaField
              rows={6}
              register={register}
              placeholder="Patient Description"
              name="patientDetails"
              required
              errors={errors}
            />
          </div>
        </div>
        <Button
          htmlType="submit"
          loading={isLoading}
          className="relative max-w-md rounded px-5  overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Request</span>
        </Button>
      </div>
    </form>
  );
};
export default AppointmentForm;


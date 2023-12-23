"use client";
import InputField from "@/components/InputField/InputField";
import { useChangePasswordMutation } from "@/redux/Api/authApi/AuthApi";
import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";

const ChangePasswordPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    // console.log("Form Data:", data);\

    try {
      const response = (await changePassword(data).unwrap()) as any;

      // console.log(response, "resssssss");
      if (response?.success) {
        // console.log(response);
        message.success(response.message);
        router.push("/profile");
      } else {
        message.error(response?.message);
      }
    } catch (error: any) {
      console.log(error, "login error");
      message.error(error?.data?.message);
    }
  };
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center shadow-sm shadow-[rgba(0,0,0,0.1)]  p-4 lg:p-8">
      <form
        className="w-full lg:w-[36vw] p-9 shadow-md mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-lg mb-4 font-bold text-primary">Change Your  Password</p>
        {/* Email */}
        <div className="w-full mb-3 sm:mb-6">
          <InputField
            placeholder="Enter Old Password"
            name={"oldPassword"}
            label="Old Password "
            type="text"
            register={register}
            required
            errors={errors}
          />
        </div>
        {/* Password */}
        <div className="w-full mb-3 sm:mb-6">
          <InputField
            placeholder="Enter Your New Password"
            label="Your New Password"
            name={"newPassword"}
            type="text"
            register={register}
            required
            errors={errors}
          />

      
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="relative w-full rounded px-5 py-2 overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[550px] ease"></span>
            <span className="relative">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;

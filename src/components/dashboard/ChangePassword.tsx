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
    reset,
    formState: { errors },
  } = useForm();

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    console.log("Form Data:", data);
    if (data.newPassword !== data.confirmPassword) {
      message.error("Please confirm your password");
      return;
    }

    // console.log(data);
    const changePasswordData = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    console.log(changePasswordData);

    try {
      const response = (await changePassword(
        changePasswordData
      ).unwrap()) as any;

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
      if (error?.data?.errorMessages) {
        message.error(error?.data?.errorMessages[0].message);
      } else {
        message.error(error?.data?.message);
      }
    }
  };
  return (
    <div className="w-full  py-9 px-2 shadow-md mx-auto ">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-xl mb-4 font-bold text-slate-700">
          Change Your Password
        </p>
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
        {/* retype */}
        <div className="w-full mb-3 sm:mb-6">
          <InputField
            placeholder="Confirm New Password"
            label="Confirm New Password"
            name={"confirmPassword"}
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

      <section className="mt-7 px-2 ">
        <h2 className="text-xl mb-4 font-bold text-slate-700">
          Password Requirement
        </h2>

        <p className="text-[#8690A5] text-[16px]">
          Please follow this guide for a strong password:
        </p>
        <ol  className="mt-3 text-[14px] text-[#8690A5] flex flex-col gap-3">
          <li>1. One special characters</li>
          <li>2. Min 6 characters</li>
          <li>3. One number (2 are recommend)</li>
          <li>4. Change it often</li>
        </ol>
      </section>
    </div>
  );
};

export default ChangePasswordPage;

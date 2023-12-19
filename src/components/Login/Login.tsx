"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("Form Data:", data);
  };
  return (
    <div className="py-10 px-10 sm:px-24 sm:py-16">
      <div className="container mx-auto py-6 sm:py-14 px-0 sm:px-7 md:px-16 max-w-6xl flex justify-between lg:flex-row items-center gap-5 sm:gap-12 flex-col-reverse">

        <div className="lg:w-1/2 w-full shadow-sm shadow-[rgba(0,0,0,0.1)] bg-white p-4 lg:p-8">
          <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="w-full mb-3 sm:mb-6">
              <InputField
                placeholder="Enter Your Email"
                name={"email"}
                type="email"
                register={register}
                required
                errors={errors}
              />
            </div>
            {/* Password */}
            <div className="w-full mb-3 sm:mb-6">
              <InputField
                placeholder="Enter Your Password"
                name={"password"}
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

        <div className="lg:w-1/2 lg:text-start text-center w-full">
          <p className="text-lg mb-4 font-bold text-primary">LogIn</p>
          <h2 className="text-3xl font-bold font-poppins">Your Donation Can Make Someone’s Life Better</h2>

          <div className="mt-2">
            <h4 className="text-base font-bold">Opening Hours</h4>

            <div className="flex py-1 my-2 border-y justify-between text-gray-400 text-sm items-start">
                <p>Sunday - Friday</p>
                <p>9.00 AM - 3.00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

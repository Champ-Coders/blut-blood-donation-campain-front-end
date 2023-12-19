"use client";
import React from "react";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import Link from "next/link";
import MultiSelect from "../MultiSelector/MultiSelector";
import { blood_groups } from "@/constants/Register";

const Register = () => {
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
    <div className="py-10 px-10 sm:px-24 mb-48">
      <div className="container mx-auto py-6 sm:py-12 px-0 sm:px-7 md:px-16 max-w-6xl flex justify-between lg:flex-row items-center gap-5 sm:gap-12 flex-col-reverse">
        <div className="lg:w-1/2 w-full shadow-sm shadow-[rgba(0,0,0,0.1)] bg-white p-4 lg:p-8">
          <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
              <InputField
                placeholder="First Name"
                name={"first_name"}
                type="text"
                register={register}
                required
                errors={errors}
              />
              <InputField
                placeholder="Last Name"
                name={"last_name"}
                type="text"
                required
                register={register}
                errors={errors}
              />
            </div>
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
            {/* Blood Group */}

            <div className="flex-grow w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <MultiSelect
                  placeholder="Blood Group"
                  name={"blood_group"}
                  options={blood_groups}
                  isMulti={false}
                  required={true}
                  setValue={setValue}
                />
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="relative w-full rounded px-5 py-2 overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[550px] ease"></span>
                <span className="relative">Submit</span>
              </button>

              <p className="text-gray-400 text-sm pt-4 text-center">
                Already have an account?
                <span className="text-primary">
                  <Link href={"/login"}>Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>

        <div className="lg:w-1/2 lg:text-start text-center w-full">
          <p className="text-lg mb-4 font-bold text-primary">Register</p>
          <h2 className="text-3xl font-bold font-poppins">
            {" "}
            Join Us, Save Lives. Connecting Communities through Blood Donation.
          </h2>
          <p className="py-2">
            Every drop of blood is a lifeline waiting to be extended. By
            donating blood, you become a beacon of hope, a silent hero, and a
            lifeline for those in need.{" "}
          </p>
          <div className="mt-2">
            <h4 className="text-base font-bold">Opening Hours</h4>

            <div className="flex py-1 my-2 border-y justify-between text-gray-400 text-sm items-start">
              <p>Sunday - Friday</p>
              <p>9.00 AM - 3.00 AM</p>
            </div>

            <div className="flex py-1 sm:flex-row flex-col my-4 justify-between text-gray-400 text-sm items-start">
              <div className="flex mb-2 flex-col items-start">
                <h2 className="text-xl font-bold text-gray-700  mb-5">
                  Kakrail, Dhaka
                </h2>
                <div className="flex justify-center mb-3 items-center gap-3">
                  <span className="text-sm text-primary">
                    <FaLocationDot />
                  </span>
                  <p className="text-gray-400">Shantinagar, Dhaka 1012</p>
                </div>
                <div className="flex justify-center mb-3 items-center gap-3">
                  <span className="text-sm text-primary">
                    <FaPhone />
                  </span>
                  <p className="text-gray-400">(+880) 123456789</p>
                </div>
                <div className="flex justify-center mb-3 items-center gap-3">
                  <span className="text-sm text-primary">
                    <FaEnvelope />
                  </span>
                  <p className="text-gray-400">donate@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold text-gray-700  mb-5">
                  Dhanmondi, Dhaka
                </h2>
                <div className="flex justify-center mb-3 items-center gap-3">
                  <span className="text-sm text-primary">
                    <FaLocationDot />
                  </span>
                  <p className="text-gray-400">Shantinagar, Dhaka 1012</p>
                </div>
                <div className="flex justify-center mb-3 items-center gap-3">
                  <span className="text-sm text-primary">
                    <FaPhone />
                  </span>
                  <p className="text-gray-400">(+880) 123456789</p>
                </div>
                <div className="flex justify-center mb-3 items-center gap-3">
                  <span className="text-sm text-primary">
                    <FaEnvelope />
                  </span>
                  <p className="text-gray-400">donate@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;

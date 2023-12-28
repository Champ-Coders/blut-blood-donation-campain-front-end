"use client";
import React from "react";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import Link from "next/link";
import MultiSelect from "../MultiSelector/MultiSelector";
import {
  bangladeshDistricts,
  blood_groups,
  divisions,
} from "@/constants/Register";
import { useUserRegisterMutation } from "@/redux/Api/authApi/AuthApi";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import UploaderImage from "../Uploader/UploaderImage";

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [userRegister, { isLoading }] = useUserRegisterMutation();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    const registrationData = {
      imgUrl: data?.imgUrl,
      name: data?.name,
      email: data?.email,
      phoneNumber: data?.phoneNumber,
      password: data?.password,
      bloodGroup: data?.bloodGroup?.name,
      dateOfBirth: data?.dateOfBirth,
      address: data?.address,
    };
    registrationData.address.division = data?.division?.name;
    registrationData.address.district = data?.district?.name;

    try {
      const response = await userRegister(registrationData).unwrap();

      if (response?.success) {
        message.success(response.message);
        reset();
        router.push("/profile");
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      // console.log(error);

      if (error?.data?.errorMessages) {
        message.error(error?.data?.errorMessages[0]?.message);
      } else if (error?.data?.message) {
        message.error(error?.data?.message);
      }
    }
  };
  return (
    <div className="container py-10 px-10 sm:px-24 mb-48 mx-auto sm:py-12  md:px-16 max-w-6xl flex justify-between lg:flex-row items-start gap-5 sm:gap-12 flex-col-reverse ">
      <div className="lg:w-1/2 w-full shadow-sm shadow-[rgba(0,0,0,0.1)] bg-white p-4 lg:p-8 border rounded-lg  ">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-[10px] md:max-w-md mx-0">
            <UploaderImage name="imgUrl" setValue={setValue} />
          </div>
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              placeholder="Your Name"
              label="Your Name"
              name={"name"}
              type="text"
              register={register}
              required
              errors={errors}
            />
          </div>
          {/* Email */}
          <div className="w-full mb-3 sm:mb-6">
            <InputField
              placeholder="Enter Your Email"
              label="Your Email Address"
              name={"email"}
              type="email"
              register={register}
              required
              errors={errors}
            />
          </div>
          {/* Phone */}
          <div className="w-full mb-3 sm:mb-6">
            <InputField
              placeholder="Enter Your Phone Number"
              name={"phoneNumber"}
              label="Your Phone Number"
              type="text"
              register={register}
              required
              errors={errors}
            />
          </div>
          {/* Password */}
          <div className="w-full mb-3 sm:mb-6">
            <InputField
              placeholder="Enter Your Password"
              label="Your Password"
              name={"password"}
              type="text"
              register={register}
              required
              errors={errors}
            />
          </div>
          {/* Date of Birth*/}
          <div className="flex-grow w-full mb-4">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <InputField
                placeholder="Enter Your Date Of Birth"
                label="Your Date Of Birth"
                name={"dateOfBirth"}
                type="date"
                register={register}
                required
                errors={errors}
              />
            </div>
          </div>
          {/*address*/}
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <InputField
                placeholder="Enter Your Village"
                label="Your Village"
                name={"address.village"}
                type="text"
                register={register}
                required
                errors={errors}
              />
            </div>
          </div>
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <InputField
                placeholder="Enter Your Post Office"
                label="Your Post Office"
                name={"address.postOffice"}
                type="text"
                register={register}
                required
                errors={errors}
              />
            </div>
          </div>
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <InputField
                placeholder="Enter Your Thana"
                label="Your Thana"
                name={"address.thana"}
                type="text"
                register={register}
                required
                errors={errors}
              />
            </div>
          </div>
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <MultiSelect
                placeholder="Enter Your District"
                label="Your District"
                name={"district"}
                options={bangladeshDistricts}
                isMulti={false}
                required={true}
                setValue={setValue}
              />
            </div>
          </div>
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <MultiSelect
                placeholder="Enter Your Division"
                label="Your Division"
                name={"division"}
                options={divisions}
                isMulti={false}
                required={true}
                setValue={setValue}
              />
            </div>
          </div>
          {/* Blood Group */}
          <div className="flex-grow w-full">
            <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
              <MultiSelect
                placeholder="Blood Group"
                label="Select Your Blood Group"
                name={"bloodGroup"}
                options={blood_groups}
                isMulti={false}
                required={true}
                setValue={setValue}
              />
            </div>
          </div>
          <div className="w-full">
            <Button
              htmlType="submit"
              loading={isLoading}
              className="relative w-full rounded px-5  overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[550px] ease"></span>
              <span className="relative">Sign Up</span>
            </Button>

            <p className="text-gray-400 text-sm pt-4 text-center">
              Already have an account?
              <span className="text-primary">
                <Link href={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 lg:text-start text-center w-full lg:sticky lg:top-28">
        <p className="text-lg mb-4 font-bold text-primary">Register</p>
        <h2 className="text-3xl font-bold font-playfair">
          {" "}
          Join Us, Save Lives. Connecting Communities through Blood Donation.
        </h2>
        <p className="py-2 text-gray-500 text-[14px]">
          Every drop of blood is a lifeline waiting to be extended. By donating
          blood, you become a beacon of hope, a silent hero, and a lifeline for
          those in need.{" "}
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
  );
};
export default Register;

"use client";
import React, { useEffect, useState } from "react";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/Api/authApi/AuthApi";
import { useRouter } from "next/navigation";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space, message } from "antd";

import { FaRegUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import ForgetPasswordForm from "./ForgetPasswordForm";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  // prevent hydration error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const onSubmit = async (data: any) => {
    try {
      const response = await userLogin(data).unwrap();
      console.log(response);
      if (response?.success) {
        // console.log(response);
        message.success(response.message);
        router.push("/");
      } else {
        console.log(response);
        message.error(response?.message);
      }
    } catch (error: any) {
      console.log(error, "login error");
      message.error(error?.data?.message);
    }
  };

  const handleSubmitAdmin = async () => {
    const data = {
      email: "admin@admin.com",
      password: "admin",
    };

    try {
      const response = await userLogin(data).unwrap();
      console.log(response);
      if (response?.success) {
        // console.log(response);
        message.success(response.message);
        router.push("/");
      } else {
        console.log(response);
        message.error(response?.message);
      }
    } catch (error: any) {
      console.log(error, "login error");
      message.error(error?.data?.message);
    }
  };

  const handleSubmitUser = async () => {
    const data = {
      email: "masudhossainmbs129@gmail.com",
      password: "mf123456789",
    };

    try {
      const response = await userLogin(data).unwrap();
      console.log(response);
      if (response?.success) {
        // console.log(response);
        message.success(response.message);
        router.push("/");
      } else {
        console.log(response);
        message.error(response?.message);
      }
    } catch (error: any) {
      console.log(error, "login error");
      message.error(error?.data?.message);
    }
  };

  const handleAutoFill = [
    {
      id: 1,
      name: "Login-(Admin)",
      handleButtonClick: handleSubmitAdmin,
      svg: GrUserAdmin,
    },
    {
      id: 2,
      name: "Login-(User)",
      handleButtonClick: handleSubmitUser,
      svg: FaRegUser,
    },
  ];

  const toggleModal = (idx: number, target: boolean) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  return (
    <div className="py-10 px-10 sm:px-24 mb-48">
      <div className="container mx-auto py-6 sm:py-12 px-0 sm:px-7 md:px-16 max-w-6xl flex justify-between lg:flex-row items-center gap-5 sm:gap-12 flex-col-reverse">
        <div className="lg:w-1/2 w-full shadow-sm shadow-[rgba(0,0,0,0.1)] bg-white p-4 lg:p-8 border rounded">
          <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="w-full mb-3 sm:mb-6">
              <InputField
                placeholder="Enter Your Email"
                name={"email"}
                label="Your Email Address"
                type="email"
                register={register}
                defaultValue={"admin@admin.com"}
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
                defaultValue={"admin"}
                required
                errors={errors}
              />

              <p
                onClick={() => toggleModal(0, true)}
                className="text-sm text-end pt-2 cursor-pointer"
              >
                Forget Password
              </p>
            </div>

            <div className="w-full">
              <Button
                htmlType="submit"
                loading={isLoading}
                className="relative w-full rounded px-5  overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[550px] ease"></span>
                <span className="relative">Submit</span>
              </Button>

              <p className="text-gray-400 text-sm pt-4 text-center">
                Do You have any account?
                <span className="text-primary">
                  <Link href={"/register"}>Register</Link>
                </span>
              </p>
            </div>
          </form>
          <ForgetPasswordForm
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="w-1/2">
              <span className="border-b border-gray-300 block w-full"></span>
            </div>
            <p className="text-gray-400 text-sm">Or</p>
            <div className="w-1/2">
              <span className="border-b border-gray-300 block w-full"></span>
            </div>
          </div>

          {/* AutoFill Button */}
          <div className="flex justify-between flex-col md:flex-row gap-3 items-center mt-4">
            {handleAutoFill?.map((item) => (
              <Button
                key={item.id}
                onClick={item.handleButtonClick}
                loading={isLoading}
                className="

                w-full
                flex 
                gap-3 
                cursor-pointer 
                text-white  
                bg-gradient-to-r 
                from-primary
                to-red-300
               
                rounded-full 
                border 
                border-primary/70
                hover:scale-105 
                duration-300 
                hover:text-white 
                hover:border-primary/70 
                hover:from-primary
                hover:to-primary/40"
              >
                <item.svg className="w-[20px] h-[20px]" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 lg:text-start text-center w-full">
          <p className="text-lg mb-4 font-bold text-primary">Log In</p>
          <h2 className="text-3xl font-bold  font-playfair">
            Surging Together for Life. Donate Blood, Transform Futures
          </h2>
          <p className="py-2 text-[14px] text-gray-500">
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
                <h2 className="text-xl text-gray-700 font-bold mb-5">
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
export default Login;

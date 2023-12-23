"use client";
import InputField from "@/components/InputField/InputField";
import ChangePasswordPage from "@/components/dashboard/ChangePassword";
import { useChangePasswordMutation } from "@/redux/Api/authApi/AuthApi";
import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
 
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center shadow-sm shadow-[rgba(0,0,0,0.1)]  p-4 lg:p-8">
      <ChangePasswordPage />
    </div>
  );
};

export default ChangePassword;

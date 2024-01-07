"use client";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { useForgetPasswordMutation } from "@/redux/Api/AuthApi";

type ForgetPasswordFormProps = {
  isModalOpen: boolean[];
  toggleModal: (index: number, value: boolean) => void;
};

const ForgetPasswordForm: React.FC<ForgetPasswordFormProps> = ({
  isModalOpen,
  toggleModal,
}) => {
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    await forgetPassword({ email: data.forgetEmail });
    toggleModal(0, false);
  };

  return (
    <Modal
      title="Forget Password"
      centered
      open={isModalOpen[0]}
      onOk={() => toggleModal(0, false)}
      onCancel={() => toggleModal(0, false)}
      footer={null}
    >
      <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="w-full mb-3 sm:mb-6">
          <InputField
            placeholder="Enter Your Email"
            name={"forgetEmail"}
            label="Your Email Address"
            type="email"
            register={register}
            required
            errors={errors}
          />
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
        </div>
      </form>
    </Modal>
  );
};
export default ForgetPasswordForm;

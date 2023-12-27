"use client";
import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";

import { Button, Modal, message } from "antd";
import TextAreaField from "../TextAreaField/TextAreaField";
import { uploadImageBB } from "@/hooks/ImgbbUploader";
import UploaderImage from "../Uploader/UploaderImage";
import ReactQuillText from "../ReactQuill/ReactQuill";
import { useUserUpdateProfileMutation } from "@/redux/Api/authApi/AuthApi";
import MultiSelect from "../MultiSelector/MultiSelector";
import { blood_groups } from "@/constants/Register";

const ProfileUpdateModalUI = ({
  modalId,
  isModalOpen,
  setIsModalOpen,
  editUser,
  setEditUser,
}: {
  modalId: string;
  isModalOpen: any;
  setIsModalOpen: any;
  editUser: any;
  setEditUser: any;
}) => {
//   console.log(editUser);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const [description, setDescription] = useState("");

  // console.log(editUser);

  useEffect(() => {
    if (isModalOpen) {
      reset(editUser);
    }
  }, [editUser, isModalOpen, reset]);

  const [userUpdateProfile] = useUserUpdateProfileMutation();

  const onSubmit = async (data: any) => {
    const updateData = {
      ...data,
    };

    console.log(updateData,"updateData");

    message.loading("Updating User.....");
    // try {
    //   const res = await userUpdateProfile(updateData).unwrap();
    //   if (res?.success) {
    //     message.success("User updated successfully");
    //     setIsModalOpen(false);
    //   } else if (res?.error?.data) {
    //     message.error(res?.error?.data?.message);
    //   } else {
    //     message.error("Could not update the User");
    //   }
    // } catch (err: any) {
    //   console.log(err);

    //   if (err?.data?.errorMessages) {
    //     message.error(err?.data?.errorMessages[0]?.message);
    //   } else if (err?.data?.message) {
    //     message.error(err?.data.message);
    //   } else {
    //     message.error("Could not update the User");
    //   }
    // }
    // reset();
  };

//   console.log(editUser);

  return (
    <Modal
      title="Edit User"
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      centered
    >
      <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="flex w-full sm:flex-row flex-col mb-4 justify-between items-center gap-3 sm:gap-6">
            <InputField
              placeholder="Your Name"
              label="Your Name"
              name={"name"}
              type="text"
              register={register}
              defaultValue={editUser?.name}
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
              defaultValue={editUser?.email}
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
              defaultValue={editUser?.phoneNumber}
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
                defaultValue={editUser?.dateOfBirth}
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
                placeholder="Enter Your Address"
                label="Your Address"
                name={"address"}
                type="text"
                register={register}
                required
                defaultValue={editUser?.address}
                errors={errors}
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
                defaultValue={editUser?.bloodGroup}
                isMulti={false}
                required={true}
                setValue={setValue}
              />
            </div>
          </div>
        </div>

        <Button className="mt-2" type="primary" htmlType="submit">
          Update Profile
        </Button>
      </form>
    </Modal>
  );
};

export default ProfileUpdateModalUI;

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

  const [userUpdateProfile] = useUserUpdateProfileMutation()

  const onSubmit = async (data: any) => {


    const updateData = {
      title: data?.title || editUser?.title,
      description: description || editUser?.description,
      image: data?.image || editUser?.image,
      banner: data?.banner || editUser?.banner,
      User_time: data?.User_time || editUser?.User_time,
      User_date: data?.User_date || editUser?.User_date,
      location: data?.location || editUser?.location,
      
    };

    // console.log(updateData);

    message.loading("Updating User.....");
    try {
      const res = await userUpdateProfile(updateData).unwrap();
      if (res?.success) {
        message.success("User updated successfully");
        setIsModalOpen(false);
      } else if (res?.error?.data) {
        message.error(res?.error?.data?.message);
      } else {
        message.error("Could not update the User");
      }
    } catch (err: any) {
      console.log(err);

      if (err?.data?.errorMessages) {
        message.error(err?.data?.errorMessages[0]?.message);
      } else if (err?.data?.message) {
        message.error(err?.data.message);
      } else {
        message.error("Could not update the User");
      }
    }
    // reset();
  };

  console.log(editUser);

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
          <div className="my-[10px]  md:max-w-md mx-0">
            <InputField
              name="title"
              label="Title"
              type="text"
              register={register}
              defaultValue={editUser?.title}
              errors={errors}
              // required
            />
          </div>
          <div className="my-[10px]  md:max-w-md mx-0">
            <InputField
              name="location"
              label="Location"
              defaultValue={editUser?.location}
              type="text"
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="my-[10px] md:max-w-md mx-0">
            <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
              Upload User Image
            </label>
            <UploaderImage
              name="image"
              // register={register}

              setValue={setValue}
              defaultValue={editUser?.image}
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
              Upload User Banner
            </label>
            <UploaderImage
              name="banner"
              // defaultValue
              // register={register}
              defaultValue={editUser?.banner}
              setValue={setValue}
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <InputField
              name="User_time"
              label="User Time"
              type="time"
              register={register}
              // defaultValue={editUser?.User_time}
              errors={errors}
              // required
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <InputField
              name="User_date"
              label="User Date"
              type="date"
              register={register}
              defaultValue={editUser?.User_date}
              errors={errors}
              // required
            />
          </div>

          <div className="my-[10px] md:max-w-3xl mx-0">
            <ReactQuillText
              label="Description"
              required
              setValue={setDescription}
              value={description}
            />
          </div>
        </div>
        <Button className="mt-2" type="primary" htmlType="submit">
          Update User
        </Button>
      </form>
    </Modal>
  );
};

export default ProfileUpdateModalUI;

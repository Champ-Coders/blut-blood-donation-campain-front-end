"use client";

import InputField from "@/components/InputField/InputField";
import ReactQuillText from "@/components/ReactQuill/ReactQuill";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import UploaderImage from "@/components/Uploader/UploaderImage";
import config from "@/config/config";
import { useAddServiceMutation } from "@/redux/Api/serviceApi";
import { getUserDataFromLC } from "@/utils/local-storage";
import { Button, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateService = () => {
  const userData = getUserDataFromLC() as any;
  const [addService] = useAddServiceMutation();

  const [description, setDescription] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data: any) => {
    const serviceData = {
      title: data.title,
      description,
      image: data?.image,
      user: userData?.id,
    };

    message.loading("Creating Service.....");
    try {
      const res = await addService(serviceData).unwrap();
      if (res) {
        message.success("Service Create successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };

  return (
    <div className="text-start">
      <Breadcrumb
        items={[
          { label: `admin`, link: `/admin` },
          { label: "Services", link: `/admin/Services` },
        ]}
      />
      {/* <h1 className="text-xl font-bold my-1">Create Service</h1> */}

      <ActionBar title="Create Service">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                register={register}
                errors={errors}
                required
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
            <div className="my-[10px] md:max-w-md mx-0">
              <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
                Upload Image
              </label>
              <UploaderImage name="image" setValue={setValue} />
            </div>
          </div>

          <Button className="mt-2" type="primary" htmlType="submit">
            Create Service
          </Button>
        </form>
      </ActionBar>
    </div>
  );
};

export default CreateService;

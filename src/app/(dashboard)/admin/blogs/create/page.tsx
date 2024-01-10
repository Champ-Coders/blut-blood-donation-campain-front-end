"use client";
import InputField from "@/components/InputField/InputField";
import dynamic from "next/dynamic";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import UploaderImage from "@/components/Uploader/UploaderImage";
import { useAddBlogMutation } from "@/redux/Api/blogApi";

import { Button, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";

const ReactQuillText = dynamic(
  () => import("@/components/ReactQuill/ReactQuill"),
  {
    ssr: false,
  }
);

const CreateBlog = () => {
  const { data:user } = useUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const userData = user?.data
  const [description, setDescription] = useState("");

  const [addBlog, { isLoading }] = useAddBlogMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data: any) => {
    message.loading("Creating Blog.....");

    const newBlog = {
      title: data.title,
      description: description,
      image: data?.image,
      user: userData?.id,
    };
    console.log(newBlog);
    try {
      const res = await addBlog(newBlog).unwrap();
      if (res?.success) {
        message.success("Blog Create successfully");
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
          { label: "blogs", link: `/admin/blogs` },
        ]}
      />
      {/* <h1 className="text-xl font-bold my-1">Create Blog</h1> */}

      <ActionBar title="Create Blog">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[16px] md:max-w-3xl mx-0">
              <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
                Upload Image
              </label>
              <UploaderImage name="image" setValue={setValue} />
            </div>
            <div className="my-[10px]  md:max-w-3xl mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                placeholder="Enter Title"
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
          </div>

          <Button
            className="mt-2"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Create Blog
          </Button>
        </form>
      </ActionBar>
    </div>
  );
};

export default CreateBlog;

"use client";

import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import Breadcrumb from "@/components/UI/BreadCrumb";
import config from "@/config/config";
import { useAddBlogMutation } from "@/redux/Api/blogApi";
import { getUserDataFromLC } from "@/utils/local-storage";
import { Button, message } from "antd";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
  const userData = getUserDataFromLC() as any;
  const [addBlog] = useAddBlogMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = config.imageBbKey;

    const imgFetch = await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const newBlog = {
            title: data.title,
            description: data.description,
            image: imageData?.data?.url,
            user: userData?.id,
          };
          return newBlog;
        }
      });

      message.loading("Creating Blog.....");
    try {
      const res = await addBlog(imgFetch).unwrap();
      if (res) {
        message.success("Blog Create successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };


  
  return (
    <div className="text-start commonAdmin">
      <Breadcrumb
        items={[
          { label: `admin`, link: `/admin` },
          { label: "blogs", link: `/admin/blogs` },
        ]}
      />
      <h1 className="text-xl font-bold my-1">Create Blog</h1>
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
          <div className="my-[10px] md:max-w-md mx-0">
            <TextAreaField
              name="description"
              register={register}
              errors={errors}
              label="Description"
              required
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <InputField
              name="image"
              label="Image"
              type="file"
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>


        
        <Button className="mt-2" type="primary" htmlType="submit">
          Create  Blog
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;

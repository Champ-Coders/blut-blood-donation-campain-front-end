"use client";

import InputField from "@/components/InputField/InputField";
import MultiSelect from "@/components/MultiSelector/MultiSelector";
import dynamic from "next/dynamic";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { useAddReviewMutation } from "@/redux/Api/reviewApi";
import { useServicesQuery } from "@/redux/Api/serviceApi";
import { Button, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ReactQuillText = dynamic(
  () => import("@/components/ReactQuill/ReactQuill"),
  {
    ssr: false,
  }
);

const CreateReview = () => {
  const { data: userData } = useUserProfileQuery({});
  const { data: services } = useServicesQuery(undefined);
  const [addReview] = useAddReviewMutation();
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [description, setDescription] = useState("");

  // console.log(userData?.data?._id,"userData");

  const serviceOptions = services?.data?.map((service: any) => ({
    value: service.id,
    label: service.title,
  }));

  const onSubmit = async (data: any) => {
    const newReview = {
      review: description,
      rating: Number(data.rating),
      service: data.service.id,
      user: userData?.data?._id,
    };
    message.loading("Creating Review.....");
    try {
      const res = await addReview(newReview).unwrap();
      if (res) {
        message.success("Review Create successfully");
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
          { label: "review", link: `/admin/review` },
        ]}
      />
      {/* <h1 className="text-xl font-bold my-1">Create Blog</h1> */}

      <ActionBar title="Create Review">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="rating"
                label="Rating"
                type="number"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <MultiSelect
                label="Select Service"
                name="service"
                options={serviceOptions}
                isMulti={false}
                required={true}
                setValue={setValue}
              />
            </div>
            <div className="my-[10px] md:max-w-3xl mx-0">
              <ReactQuillText
                label="Review"
                required
                setValue={setDescription}
                value={description}
              />
            </div>
          </div>

          <Button className="mt-2" type="primary" htmlType="submit">
            Create Review
          </Button>
        </form>
      </ActionBar>
    </div>
  );
};

export default CreateReview;

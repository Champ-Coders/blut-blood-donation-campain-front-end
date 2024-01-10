"use client";

import InputField from "@/components/InputField/InputField";
import dynamic from "next/dynamic";
import ActionBar from "@/components/UI/ActionBar";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import { useCreateFaqMutation } from "@/redux/Api/faqsApi";
import { Button, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ReactQuillText = dynamic(
  () => import("@/components/ReactQuill/ReactQuill"),
  {
    ssr: false,
  }
);

const CreateServicePage = () => {
  const [createFaq, { isLoading }] = useCreateFaqMutation();
  const [description, setDescription] = useState("");
  const { data: userData } = useUserProfileQuery({});
  console.log(userData?.data?._id);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (faqData: any) => {
    // Handle form submission logic here
    const data = {
      ...faqData,
      user: userData?.data?._id,
      description,
    };
    console.log("Form Data:", data);
    try {
      const res = await createFaq(data);
      console.log("🚀 ~ file: page.tsx:28 ~ onSubmit ~ res:", res);
      if ("data" in res && res.data?.success) {
        message.success("Faq added successfully");
        reset();
      }
    } catch (err: any) {
      message.error(err);
    }
  };

  return (
    <ActionBar title="Create Faqs">
      <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="my-[10px]  md:max-w-md mx-0">
            <InputField
              name="title"
              label="Faqs Question"
              type="text"
              register={register}
              errors={errors}
              required
              placeholder="Faqs Question"
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
        <Button loading={isLoading} type="primary" htmlType="submit">
          Add
        </Button>
      </form>
    </ActionBar>
  );
};

export default CreateServicePage;

"use client";

import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import { useCreateFaqMutation } from "@/redux/Api/faqsApi";
import { Button, message } from "antd";
import { useForm } from "react-hook-form";

const CreateServicePage = () => {
  const [createFaq, { isLoading }] = useCreateFaqMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (faqData: any) => {
    // Handle form submission logic here
    const data = {
      ...faqData,
      user: "65816e02a2ae4b2e43381dc1",
    };
    // console.log("Form Data:", data);
    try {
      const res = await createFaq(data);
      console.log("🚀 ~ file: page.tsx:28 ~ onSubmit ~ res:", res)
      if ("data" in res && res.data?.success) {
        message.success("Faq added successfully");
        reset();
      }
    } catch (err: any) {
      message.error(err);
    }
  };

  return (
    <div className="commonAdmin">
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
          <div className="my-[10px] md:max-w-md mx-0">
            <TextAreaField
              name="description"
              register={register}
              errors={errors}
              label="Description of Faqs"
              required
              placeholder="Description of Faqs"
            />
          </div>
        </div>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreateServicePage;

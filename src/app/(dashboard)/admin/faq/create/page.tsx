"use client";

import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import { useCreateFaqMutation } from "@/redux/Api/faqsApi";
import { Button, message } from "antd";
import { useForm } from "react-hook-form";

const CreateServicePage = () => {
  const [createFaq] = useCreateFaqMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // Handle form submission logic here
    const paylod = {
      ...data,
      user: "65816e02a2ae4b2e43381dc1",
    };
    console.log("Form Data:", paylod);
    try {
      const res = await createFaq(paylod);
      console.log(res);
      if (res) {
        message.success("Faq added successfully");
        reset();
      }
    } catch (err: any) {
      message.error(err);
    }
  };

  return (
    <div className="commonAdmin">
      {/* <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <InputField
              name="question"
              label="Faqs Question"
              type="text"
              placeholder="Faqs Question"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <InputField
              name="question"
              label="Faqs Question"
              type="text"
              placeholder="Faqs Question"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form> */}

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
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <TextAreaField
              name="description"
              register={register}
              errors={errors}
              label="Description of Faqs"
              required
            />
          </div>
        </div>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreateServicePage;

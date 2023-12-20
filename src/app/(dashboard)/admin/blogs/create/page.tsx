"use client";

import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import Breadcrumb from "@/components/UI/BreadCrumb";
import { Button, Col, Row } from "antd";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("Form Data:", data);
  };
  return (
    <div className="text-start">
      <Breadcrumb
        items={[
          { label: `admin`, link: `/admin` },
          { label: "blogs", link: `/admin/blogs` },
        ]}
      />
      <h1 className="text-xl font-bold my-1">Create Course</h1>
      <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div className="my-[10px] mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="description"
                register={register}
                errors={errors}
                label="Description"
                required
              />
            </div>
            <div className="my-[10px] mx-0">
              <InputField
                name="image"
                type="text"
                register={register}
                errors={errors}
                label="Image URL"
                required
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;

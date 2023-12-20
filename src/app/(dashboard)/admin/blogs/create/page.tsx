"use client";

import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import Breadcrumb from "@/components/UI/BreadCrumb";
import { Button, Col, Row, message } from "antd";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
    const {
        register,
        handleSubmit,
        setValue,
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
      <h1>Create Course</h1>
      <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div className="my-[10px] mx-0" >
              <InputField name="title" label="Title" />
            </div>
            <div className="my-[10px] mx-0" >
              <TextAreaField name="description" label="Description" />
            </div>
            <div className="my-[10px] mx-0" >
              <InputField name="image" label="Image URL" />
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
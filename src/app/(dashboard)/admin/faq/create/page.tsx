"use client";

import InputField from "@/components/InputField/InputField";
import Form from "@/components/form/form";
import { useCreateFaqMutation } from "@/redux/Api/faqsApi";
import { Button, Col, Row, message } from "antd";

const CreateServicePage = () => {
  const [createFaq] = useCreateFaqMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await createFaq(data).unwrap();

      if (res?.success) {
        message.success("Faq added successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <Form submitHandler={onSubmit}>
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
      </Form>
    </div>
  );
};

export default CreateServicePage;

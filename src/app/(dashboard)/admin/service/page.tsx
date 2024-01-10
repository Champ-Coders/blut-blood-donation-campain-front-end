"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import config from "@/config/config";
import {
  useDeleteServiceMutation,
  useServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/Api/serviceApi";

const AllService = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [serviceId, setServiceId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editService, setEditService] = useState({
    title: "",
    description: "",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // query and mutation
  const [updateService] = useUpdateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();
  const { data: service } = useServicesQuery(undefined);

  // filter Service by name and title
  const filteredServiceData = service?.data?.filter((service: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      service?.title?.toLowerCase().includes(lowercaseSearchText) ||
      service?.user?.name?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Delete Service
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteService(id);
      if (res) {
        message.success("Service Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // Service Edit function
  const onSubmit = async (data: any) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = config.imageBbKey;

    const updateData = await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          return {
            title: data.title,
            description: data.description,
            image: imageData?.data?.url,
          };
        } else {
          return {
            title: data.title,
            description: data.description,
          };
        }
      });

    message.loading("Update Service.....");
    try {
      const res = await updateService({
        id: serviceId,
        body: { ...updateData },
      }).unwrap();
      if (res) {
        message.success("Service Update successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };

  const columns: any[] = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Author",
      dataIndex: ["user", "name"],
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        const selectedService = filteredServiceData.find(
          (service: any) => service.id === data.id
        );
        return (
          <>
            <Button
              className="mr-[6px]"
              onClick={() => {
                setServiceId(selectedService.id);
                setEditService({
                  title: selectedService?.title,
                  description: selectedService?.description,
                });
                setIsModalOpen(true);
              }}
              type="default"
            >
              <EditOutlined />
            </Button>

            <Popconfirm
              placement="topLeft"
              title="Delete the Service"
              description="Are you sure to delete this Service?"
              onConfirm={() => deleteHandler(data?.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />

      <ActionBar title="Service List">
        <Input
          type="text"
          allowClear
          size="middle"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="max-w-sm mr-4"
        />
        <div>
          <Link href="/admin/service/create">
            <Button type="default">Create</Button>
          </Link>
        </div>
      </ActionBar>
      <Table columns={columns} dataSource={filteredServiceData} />

      {/* Edit Modal */}
      <Modal
        title="Edit Service"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px] mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                defaultValue={editService?.title}
                register={register}
                errors={errors}
              />
            </div>
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="description"
                register={register}
                errors={errors}
                defaultValue={editService?.description}
                label="Description"
                rows={4}
              />
            </div>
            <div className="my-[10px] mx-0">
              <InputField
                name="image"
                label="Image"
                type="file"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <Button className="mt-2" type="primary" htmlType="submit">
            Update Service
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default AllService;

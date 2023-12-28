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

import MultiSelect from "@/components/MultiSelector/MultiSelector";
import { useServicesQuery } from "@/redux/Api/serviceApi";
import { useContactsQuery, useDeleteContactMutation, useUpdateContactMutation } from "@/redux/Api/contactApi";

const AllContact = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [ContactId, setContactId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editContact, setEditContact] = useState({
    rating: 0,
    Contact: "",
    user: "",
    service: "",
  });
  const { data: services } = useServicesQuery(undefined);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  //   service option
  const serviceOptions = services?.data?.map((service: any) => ({
    value: service.id,
    label: service.title,
  }));

  // query and mutation
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const { data: Contacts } = useContactsQuery(undefined);

  // filter Contact by Contact, service titlee, user name
  const filteredContactData = Contacts?.data?.filter((Contact: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      Contact?.Contact?.toLowerCase().includes(lowercaseSearchText) ||
      Contact?.user?.name?.toLowerCase().includes(lowercaseSearchText) ||
      Contact?.service?.title?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Delete Contact
  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteContact(id);
      if (res) {
        message.success("Contact Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // Contact Edit function
  const onSubmit = async (data: any) => {
    const updateData = {
      Contact: data.Contact,
      rating: Number(data.rating),
      service: data.service.id,
    };
    message.loading("Update Contact.....");
    try {
      const res = await updateContact({
        id: ContactId,
        body: { ...updateData },
      }).unwrap();
      if (res) {
        message.success("Contact Update successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };

  const columns: any[] = [
    {
      title: "Contact",
      dataIndex: "Contact",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Service",
      dataIndex: ["service", "title"],
    },
    {
      title: "User",
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
        const selectedContact = filteredContactData.find(
          (blog: any) => blog.id === data.id
        );
        return (
          <>
            <Button
              className="mr-[6px]"
              onClick={() => {
                setContactId(selectedContact.id);
                setEditContact({
                  rating: selectedContact?.rating,
                  Contact: selectedContact?.Contact,
                  user: selectedContact?.user,
                  service: selectedContact?.service?.title,
                });
                setIsModalOpen(true);
              }}
              type="default"
            >
              <EditOutlined />
            </Button>

            <Popconfirm
              placement="topLeft"
              title="Delete the Contact"
              description="Are you sure to delete this Contact?"
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
          {
            label: "contact",
            link: "/admin/contact",
          },
        ]}
      />

      <ActionBar title="Contact List">
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
          <Link href="/admin/Contact/create">
            <Button type="default">Create</Button>
          </Link>
        </div>
      </ActionBar>
      <Table columns={columns} dataSource={filteredContactData} />

      {/* Edit Modal */}
      <Modal
        title="Edit Contact"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="Contact"
                register={register}
                errors={errors}
                defaultValue={editContact?.Contact}
                label="Contact"
                rows={4}
              />
            </div>
            <div className="my-[10px] mx-0">
              <InputField
                name="rating"
                label="Rating"
                type="text"
                defaultValue={editContact?.rating}
                register={register}
                errors={errors}
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <MultiSelect
                label="Select Service"
                name="service"
                options={serviceOptions}
                isMulti={false}
                defaultValue={editContact.service}
                required={false}
                setValue={setValue}
              />
            </div>
          </div>
          <Button className="mt-2" type="primary" htmlType="submit">
            Update Contact
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default AllContact;

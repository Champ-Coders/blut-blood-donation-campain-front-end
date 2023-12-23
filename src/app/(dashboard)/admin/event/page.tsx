"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { getUserDataFromLC } from "@/utils/local-storage";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import config from "@/config/config";
import { useDeleteEventMutation, useEventsQuery, useUpdateEventMutation } from "@/redux/Api/eventApi";

const AllEvents = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [EventId, setEventId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState({ title: "", description: "" });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // query and mutation
  const [updateEvent] = useUpdateEventMutation();
  const [deleteEvent] = useDeleteEventMutation();
  const { data: Events } = useEventsQuery(undefined);

  // filter Event by name and title
  const filteredEventData = Events?.data?.filter((Event: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      Event?.title?.toLowerCase().includes(lowercaseSearchText) ||
      Event?.user?.name?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Delete Event
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteEvent(id);
      if (res) {
        message.success("Event Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // Event Edit function
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

    message.loading("Update Event.....");
    try {
      const res = await updateEvent({
        id: EventId,
        body: { ...updateData },
      }).unwrap();
      if (res) {
        message.success("Event Update successfully");
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
      title: "Event Time",
      dataIndex:"event_time",
    },
    {
      title: "Event Date",
      dataIndex:"event_date",
    },
    {
      title: "Location",
      dataIndex:"location",
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
        const selectedEvent = filteredEventData.find(
          (Event: any) => Event.id === data.id
        );
        return (
          <>
            <Button
              className="mr-[6px]"
              onClick={() => {
                setEventId(selectedEvent.id);
                setEditEvent({
                  title: selectedEvent?.title,
                  description: selectedEvent?.description,
                });
                setIsModalOpen(true);
              }}
              type="default"
            >
              <EditOutlined />
            </Button>

            <Popconfirm
              placement="topLeft"
              title="Delete the Event"
              description="Are you sure to delete this Event?"
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

      <ActionBar title="Events List">
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
          <Link href="/admin/event/create">
            <Button type="default">Create</Button>
          </Link>
        </div>
      </ActionBar>
      <Table columns={columns} dataSource={filteredEventData} />

      {/* Edit Modal */}
      <Modal
        title="Edit Event"
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
                defaultValue={editEvent?.title}
                register={register}
                errors={errors}
              />
            </div>
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="description"
                register={register}
                errors={errors}
                defaultValue={editEvent?.description}
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
            Update Event
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default AllEvents;

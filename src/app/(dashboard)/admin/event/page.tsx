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
import {
  useDeleteEventMutation,
  useEventsQuery,
  useUpdateEventMutation,
} from "@/redux/Api/eventApi";
import { uploadImageBB } from "@/hooks/ImgbbUploader";

const AllEvents = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [EventId, setEventId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState({
    title: "",
    description: "",
    banner: "",
    image: "",
    event_time: "",
    event_date: "",
    location: "",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // query and mutation
  const [updateEvent] = useUpdateEventMutation();
  const [deleteEvent] = useDeleteEventMutation();
  const { data: Events, isLoading } = useEventsQuery(undefined);

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
    // console.log(id);
    message.loading("Deleting.....");
    try {
      const res = await deleteEvent(id);
      // console.log(res);
      if (res) {
        message.success("Event Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  console.log(editEvent);
  // Event Edit function
  const onSubmit = async (data: any) => {
    const { image, banner, ...others } = data;
    // const image = data.image[0];
    console.log(data);

    // if (typeof image !== "string") {
    //   image = await uploadImageBB(image[0]);
    // }

    // if (typeof banner !== "string") {
    //   banner = await uploadImageBB(banner[0]);
    // }

    // console.log(imageUrl,bannerUrl);

    const updateData = {
      title: data?.title || editEvent?.title,
      description: data?.description || editEvent?.description,
      image: data?.image || editEvent?.image,
      event_time: data?.event_time || editEvent?.event_time,
      event_date: data?.event_date || editEvent?.event_date,
      location: data?.location || editEvent?.location,
    };
    console.log(updateData);

    message.loading("Update Event.....");
    try {
      const res = await updateEvent({
        id: EventId,
        body: { ...updateData },
      }).unwrap();
      console.log(res);
      if (res) {
        message.success("Event Update successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      // message.error(err.message);
    }
    // reset();
  };

  const columns: any[] = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Event Time",
      dataIndex: "event_time",
    },
    {
      title: "Event Date",
      dataIndex: "event_date",
    },
    {
      title: "Location",
      dataIndex: "location",
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
        console.log(selectedEvent);
        return (
          <>
            <Button
              className="mr-[6px]"
              onClick={() => {
                setEventId(selectedEvent._id);
                setEditEvent({
                  title: selectedEvent?.title,
                  description: selectedEvent?.description,

                  banner: selectedEvent?.banner,
                  image: selectedEvent?.image,
                  event_time: selectedEvent?.event_time,
                  event_date: selectedEvent?.event_date,
                  location: selectedEvent?.location,
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
              onConfirm={() => deleteHandler(data?._id)}
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
      <Table
        columns={columns}
        dataSource={filteredEventData}
        loading={isLoading ? true : false}
      />

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
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                register={register}
                defaultValue={editEvent?.title}
                errors={errors}
                // required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="location"
                label="Location"
                defaultValue={editEvent?.location}
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>

            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="image"
                label="Event Image"
                type="file"
                register={register}
                // defaultValue={editEvent?.image}
                errors={errors}
                // required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="banner"
                label="Event Banner"
                type="file"
                register={register}
                errors={errors}
                // required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="event_time"
                label="Event Time"
                type="time"
                register={register}
                // defaultValue={editEvent?.event_time}
                errors={errors}
                // required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="event_date"
                label="Event Date"
                type="date"
                register={register}
                defaultValue={editEvent?.event_date}
                errors={errors}
                // required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <TextAreaField
                name="description"
                register={register}
                defaultValue={editEvent?.description}
                errors={errors}
                label="Description"
                // required
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

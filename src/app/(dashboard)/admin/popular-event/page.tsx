"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Image, Input, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  useDeleteEventMutation,
  useEventsQuery,
  useUpdateEventMutation,
} from "@/redux/Api/eventApi";
import dynamic from "next/dynamic";

const EventModalUI = dynamic(
  () => import("@/components/ModalUI/EventModalUI"),
  {
    ssr: false,
  }
);

const AllPopularEvents = () => {
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
  const [updateEvent] = useUpdateEventMutation();

  const [deleteEvent] = useDeleteEventMutation();
  const { data: Events, isLoading } = useEventsQuery(undefined);

  // filter Event by name and title
  const filteredEventData = Events?.data?.filter((Event: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      (Event?.is_popular &&
        Event?.title?.toLowerCase().includes(lowercaseSearchText)) ||
      Event?.user?.name?.toLowerCase().includes(lowercaseSearchText) ||
      Event?.user?.location?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  //   console.log(filteredEventData);

  // Delete Event
  const deleteHandler = async (id: string) => {
    // console.log(id);
    message.loading("Deleting.....");
    try {
      const res = await deleteEvent(id).unwrap();
      // console.log(res);

      if (res?.success) {
        message.success("Event Deleted successfully");
      } else if (res?.error?.data) {
        message.error(res?.error?.data?.message);
      } else {
        message.error("Could not delete the event");
      }
    } catch (err: any) {
      // console.log(err);

      if (err?.data?.errorMessages) {
        message.error(err?.data?.errorMessages[0]?.message);
      } else if (err?.data?.message) {
        message.error(err?.data.message);
      } else {
        message.error("Could not delete the event");
      }
    }
  };

  const columns: any[] = [
    {
      title: "Image",
      render: function (data: any) {
        return (
          <>
            {
              <Image
                src={data?.image}
                style={{ height: "50px", width: "80px" }}
                width={50}
                height={50}
                alt="dd"
              />
            }
          </>
        );
      },
      width: 100,
    },
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
      title: "Action",
      render: function (data: any) {
        const selectedEvent = filteredEventData.find(
          (Event: any) => Event.id === data.id
        );
        // console.log(selectedEvent);
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
              style={{
                padding: "2rem",
              }}
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
      <EventModalUI
        modalId={EventId}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        editEvent={editEvent}
        setEditEvent={setEditEvent}
      ></EventModalUI>
    </div>
  );
};
export default AllPopularEvents;

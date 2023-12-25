"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Image, Input, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  useDeleteEventMutation,
  useEventsQuery,
  useUpdateEventMutation,
} from "@/redux/Api/eventApi";
import EventModalUI from "@/components/ModalUI/EventModalUI";
import { BsCalendarCheck } from "react-icons/bs";

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
  const [updateEvent] = useUpdateEventMutation();

  const [deleteEvent] = useDeleteEventMutation();
  const { data: Events, isLoading } = useEventsQuery(undefined);

  // filter Event by name and title
  const filteredEventData = Events?.data?.filter((Event: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      Event?.title?.toLowerCase().includes(lowercaseSearchText) ||
      Event?.user?.name?.toLowerCase().includes(lowercaseSearchText) ||
      Event?.user?.location?.toLowerCase().includes(lowercaseSearchText)
    );
  });

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

  // console.log(editEvent);
  // Event Edit function

  const updatePopularityHandler = async (id: string) => {
    try {
      const res = await updateEvent({
        id: id,
        body: { is_popular: true },
      }).unwrap();
      if (res?.success) {
        message.success("popularity Event updated successfully");
        setIsModalOpen(false);
      } else if (res?.error?.data) {
        message.error(res?.error?.data?.message);
      } else {
        message.error("Could not update the popularity event");
      }
    } catch (err: any) {
      // console.log(err);

      if (err?.data?.errorMessages) {
        message.error(err?.data?.errorMessages[0]?.message);
      } else if (err?.data?.message) {
        message.error(err?.data.message);
      } else {
        message.error("Could not update the popularity event");
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
      title: "Popularity",
      // dataIndex: "is_popular",
      render: function (data: any) {
        console.log(data);
        return (
          <div className="flex gap-2">
            {data?.is_popular ? (
              <span className="text-green-600 bg-green-300  font-bold rounded-md p-1">
                Popular
              </span>
            ) : (
              <>
                <span className="text-primary bg-primary/20 rounded-md p-1">
                  Not Popular
                </span>
              </>
            )}
          </div>
        );
      },
    },

    {
      title: "Action",
      render: function (data: any) {
        const selectedEvent = filteredEventData.find(
          (Event: any) => Event.id === data.id
        );
        // console.log(selectedEvent);
        return (
          <div className="flex gap-2 items-center w-[150px] justify-end">
            {!data?.is_popular && (
              <Popconfirm
                title="Are you sure?"
                onConfirm={() => updatePopularityHandler(data?.id)}
                okText="Yes"
                cancelText="No"
              >
                <button className="text-green-600 font-semibold rounded-md  hover:bg-white border hover:text-green-600 hover:border-green-600 text-[20px]  p-2">
                  <BsCalendarCheck />
                </button>
              </Popconfirm>
            )}

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
          </div>
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
export default AllEvents;

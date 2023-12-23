"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useDeleteVolunteerMutation, useVolunteersQuery } from "@/redux/Api/volunteerApi";

const AllVolunteers = () => {
  const [searchText, setSearchText] = useState<string>("");

  // query and mutation
  const [deleteVolunteer] = useDeleteVolunteerMutation();
  const { data: volunteers } = useVolunteersQuery(undefined);

  // filter Blog by name and title
  const filteredVolunteerData = volunteers?.data?.filter((volunteer: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
        volunteer?.name?.toLowerCase().includes(lowercaseSearchText) ||
        volunteer?.designation?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Delete Volunteer
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteVolunteer(id);
      if (res) {
        message.success("Volunteer Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };


  const columns: any[] = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
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
        return (
          <>
            <Popconfirm
              placement="topLeft"
              title="Delete the Volunteer"
              description="Are you sure to delete this volunteer?"
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

      <ActionBar title="Volunteers List">
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
          <Link href="/admin/volunteers/create">
            <Button type="default">Create</Button>
          </Link>
        </div>
      </ActionBar>
      <Table columns={columns} dataSource={filteredVolunteerData} />
    </div>
  );
};
export default AllVolunteers;

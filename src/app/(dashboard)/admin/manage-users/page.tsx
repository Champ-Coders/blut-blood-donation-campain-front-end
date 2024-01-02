"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";

import { Input, Popconfirm, message } from "antd";
import { useState } from "react";
import {
  useChangeRoleByAdminMutation,
  useGetAllUsersQuery,
} from "@/redux/Api/authApi/AuthApi";
import { useDebounced } from "@/redux/app/hook";

const AllUsers = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query: Record<string, any> = {};

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 400,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  // query and mutation
  const [changeRoleByAdmin] = useChangeRoleByAdminMutation(undefined);
  const { data: users, isLoading } = useGetAllUsersQuery({ ...query });
  const meta = users?.data?.meta;

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const changeRole = async (id: string) => {
    const res: any = await changeRoleByAdmin(id);
    if (res?.data?.statusCode == 200) {
      message.success(
        `${res?.data?.data?.name} is now ${res?.data?.data?.role}.`
      );
    } else {
      message.error(res?.error?.data?.message);
    }
  };

  const columns: any[] = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      sorter: (a: any, b: any) => a.bloodGroup - b.bloodGroup,
    },
    {
      title: "Role",
      dataIndex: "role",
      onFilter: (value: string, record: any) =>
        record.name.indexOf(value) === 0,
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: function (data: any) {
        if (data == "admin") {
          return (
            <p className="text-primary  bg-primary/20 rounded-xl text-center">
              Admin
            </p>
          );
        } else
          return (
            <p className="text-gray-900 bg-gray-300 rounded-xl text-center">
              Donor
            </p>
          );
      },
    },
    {
      title: "Birth Date",
      dataIndex: "dateOfBirth",
      sorter: (a: any, b: any) => a.dateOfBirth - b.dateOfBirth,

      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
    },
    {
      title: "Total Donation",
      dataIndex: "totalDonation",
      sorter: (a: any, b: any) => a.totalDonation - b.totalDonation,
    },
    {
      title: "Last Donation Date",
      dataIndex: "lastDonation",
      sorter: (a: any, b: any) => a.lastDonation - b.lastDonation,
      render: function (data: any) {
        if (data) {
          return dayjs(data).format("MMM D, YYYY");
        }
        return "Not Donate Yet";
      },
    },
    {
      title: "Available",
      dataIndex: "available",
      sorter: (a: any, b: any) => a.available - b.available,
      render: function (data: any) {
        if (data) {
          return "Yes";
        }
        return "No";
      },
    },
    {
      title: "Total Received",
      dataIndex: "totalReceived",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: function (data: any) {
        return (
          <Popconfirm
            title="Change role"
            description="Are you sure to change the role?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => changeRole(data)}
            onCancel={() => message.error("Cancel change...")}
          >
            <button className="w-full rounded-md bg-primary px-2 py-1 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary  hover:bg-white hover:text-primary transition duration-300 ease-in-out">
              Change Role
            </button>
          </Popconfirm>
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

      <ActionBar title="All Users">
        <Input
          type="text"
          allowClear
          size="middle"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="max-w-sm mr-4"
        />
      </ActionBar>
      <Table
        columns={columns}
        dataSource={users?.data?.data}
        loading={isLoading}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};
export default AllUsers;

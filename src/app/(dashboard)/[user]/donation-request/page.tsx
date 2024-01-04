"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";

import { Button, Input, Popconfirm, message } from "antd";
import { useState } from "react";
import { useDebounced } from "@/redux/app/hook";
import { useGetAllDonationInfoQuery } from "@/redux/Api/AuthApi";
import {
  useAcceptRequestByAdminMutation,
  useAcceptRequestMutation,
  useGetAllRequestQuery,
} from "@/redux/Api/donationApi/DonationApi";

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
  query.status = "pending";
  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 400,
  });
  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  // query and mutation
  const { data: donation, isLoading } = useGetAllRequestQuery(undefined);
  const [acceptRequest, { isLoading: acceptLoading }] =
    useAcceptRequestMutation(undefined);

  const meta = donation?.meta;

  // filter Blog by name and title
  const filteredBlogData = donation?.data?.filter((blood: any) => {
    const lowercaseSearchText = searchTerm.toLowerCase();
    return (
      blood?.userId?.name?.toLowerCase().includes(lowercaseSearchText) ||
      blood?.bloodGroup?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const accept = async (id: string) => {
    const res: any = await acceptRequest(id);
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
      title: "Donor Name",
      dataIndex: "donnerId",
      render: function (data: any) {
        return data?.name;
      },
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      sorter: (a: any, b: any) => a.bloodGroup - b.bloodGroup,
    },
    {
      title: "Last Donation Date",
      dataIndex: "donnerId",
      render: function (data: any) {
        if (data) {
          return dayjs(data?.lastDonation).format("MMM D, YYYY");
        }
        return "Not Donate Yet";
      },
    },
    {
      title: "Total Donation",
      dataIndex: "donnerId",
      render: function (data: any) {
        return data?.totalDonation;
      },
    },
    {
      title: "Expect Date",
      dataIndex: "expectedDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
    },
    {
      title: "Requestor",
      dataIndex: "userId",
      render: function (data: any) {
        return data?.name;
      },
    },
    {
      title: "Received by Requestor",
      dataIndex: "userId",
      render: function (data: any) {
        return data?.totalReceived;
      },
    },
    {
      title: "Details",
      dataIndex: "patientDetails",
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a: any, b: any) => a.status - b.status,
      render: function (data: any) {
        if (data === "pending") {
          return (
            <p className="bg-blue-300 text-blue-600 rounded-xl text-center">
              Pending
            </p>
          );
        } else if (data === "accept") {
          return (
            <p className="bg-green-300 text-green-600 rounded-xl text-center">
              Accept
            </p>
          );
        }
        return (
          <p>
            <p className=" bg-red-300 text-red-600 rounded-xl text-center">
              Canceled
            </p>
          </p>
        );
      },
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
            onConfirm={() => accept(data)}
            onCancel={() => message.error("Cancel request...")}
          >
            <Button
              loading={acceptLoading}
              className="w-full rounded-md bg-primary hover:bg-black px-2 py-1 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary   hover:text-white transition duration-300 ease-in-out"
            >
              Accept
            </Button>
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
            label: "user",
            link: "/user",
          },
        ]}
      />

      <ActionBar title="Pending Donation Request">
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
        dataSource={filteredBlogData}
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

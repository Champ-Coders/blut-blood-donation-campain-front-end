"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";

import { Input } from "antd";
import { useState } from "react";
import { useDebounced } from "@/redux/app/hook";
import { useGetAllRequestHistoryQuery } from "@/redux/Api/donationApi/DonationApi";

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
  const { data: donation, isLoading } = useGetAllRequestHistoryQuery(undefined);
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

      <ActionBar title="My Donation">
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

"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";

import { Input } from "antd";
import { useState } from "react";
import { useDebounced } from "@/redux/app/hook";
import { useGetAllDonationInfoQuery } from "@/redux/Api/AuthApi";

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
  const { data: donation, isLoading } = useGetAllDonationInfoQuery({
    ...query,
  });
  const meta = donation?.meta;

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
        return data.name;
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
        return data.totalDonation;
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
        return data.name;
      },
    },
    {
      title: "Received by Requestor",
      dataIndex: "userId",
      render: function (data: any) {
        return data.totalReceived;
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

      <ActionBar title="All Donors">
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
        dataSource={donation?.data}
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

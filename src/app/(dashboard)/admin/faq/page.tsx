"use client";

import ActionBar from "@/components/UI/ActionBar";
import BDTable from "@/components/UI/BDTable";
import { useDeleteFaqMutation, useFaqsQuery } from "@/redux/Api/faqsApi";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const FaqsPage = () => {
  const [deleteFaq] = useDeleteFaqMutation();
  const query: Record<string, any> = {};

  const [sige, setSige] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["page"] = page;
  query["limit"] = sige;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["search"] = searchTerm;

  const role = "admin";

  //   const debouncedTerm = useDebounced({
  //     searchQuery: searchTerm,
  //     delay: 600,
  //   });

  //   if (!!debouncedTerm) {
  //     query["search"] = debouncedTerm;
  //   }

  const { data, isLoading, refetch } = useFaqsQuery(searchTerm);

  const faqs = data?.data;

  // const meta = data?.meta;

  const deleteHandler = async (id: { id: string }) => {
    message.loading("Deleting Blog...");
    try {
      const res = await deleteFaq(id).unwrap();
      if (res?.success) {
        message.success("Blog deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Question",
      dataIndex: "title",
    },
    {
      title: "Answer",
      dataIndex: "description",
      render: function (data: any) {
        return data?.slice(0, 40);
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div
            style={{
              width: "150px",
            }}
          >
            <Button onClick={() => deleteHandler(data?.id)} danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSige(pageSize);
  };
  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    // console.log(pagination, "pagination");
    // console.log(filters, "filters");
    // console.log(field, "field" + " " + order, "order");

    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <ActionBar title="Manage Faqs">
        <Input
          type="text"
          size="large"
          placeholder="Search ..."
          style={{
            width: "300px",
            marginRight: "20px",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <div>
          <Link href={`/${role}/faq/create`}>
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || searchTerm) && (
            <Button
              onClick={resetFilter}
              style={{
                margin: "0 5px",
              }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <BDTable
        loading={isLoading}
        columns={columns}
        dataSource={faqs}
        // pageSize={sige}
        // totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default FaqsPage;

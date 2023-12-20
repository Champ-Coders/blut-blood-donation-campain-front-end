'use client'
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table"
import { useBlogsQuery, useDeleteBlogMutation } from "@/redux/Api/blogApi";
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
  } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";

const AllBlogs = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [deleteBlog] = useDeleteBlogMutation()
    const {data:blogs} = useBlogsQuery(undefined)

  // filter Employee by name phone ID number
  const filteredBlogData = blogs?.data?.filter((blog:any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
        blog?.title?.toLowerCase().includes(lowercaseSearchText)
    );
  });
    
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteBlog(id);
      if (res) {
        message.success("Blog Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };
    const columns:any[] = [
        {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "User",
            dataIndex: "user",
          },
          {
            title: "Action",
            render: function (data: any) {
              return (
                <>
                    <Button
                      style={{
                        margin: "0px 5px",
                      }}
                      onClick={() => console.log(data)}
                      type="default"
                    >
                      <EditOutlined />
                    </Button>
                  <Button
                    onClick={() => deleteHandler(data?.id)}
                    type="primary"
                    danger
                  >
                    <DeleteOutlined />
                  </Button>
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
   
   <ActionBar title="Blogs List">
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
          <Link href="/admin/blogs/create">
            <Button type="default">Create</Button>
          </Link>
        </div>
      </ActionBar>
      <Table
        columns={columns}
        dataSource={filteredBlogData}
      />
    </div>
  )
}
export default AllBlogs
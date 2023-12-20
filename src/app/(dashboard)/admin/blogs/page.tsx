'use client'
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table"
import { useBlogsQuery } from "@/redux/Api/blogApi";
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
  } from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

const AllBlogs = () => {
    const [searchText, setSearchText] = useState<string>("");
    const {data:blogs} = useBlogsQuery(undefined)

  // filter Employee by name phone ID number
  const filteredBlogData = blogs?.data?.filter((blog:any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
        blog?.title?.toLowerCase().includes(lowercaseSearchText)
    );
  });
    
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
            // render: function () {
            //   return (
            //     <>
            //       <Link href={`/admin/course/edit/`}>
            //         <Button
            //           style={{
            //             margin: "0px 5px",
            //           }}
                   
            //           type="primary"
            //         >
            //           <EditOutlined />
            //         </Button>
            //       </Link>
            //       <Button
            //         type="primary"
            //         danger
            //       >
            //         <DeleteOutlined />
            //       </Button>
            //     </>
            //   );
            // },
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
          size="large"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          style={{
            width: "40%",
          }}
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
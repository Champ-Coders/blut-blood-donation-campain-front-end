'use client'
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table"
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
  } from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";

const AllBlogs = () => {


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
          size="large"
          placeholder="Search..."
          style={{
            width: "20%",
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
        dataSource={[]}
      />
    </div>
  )
}
export default AllBlogs
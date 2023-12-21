"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import {
  useBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from "@/redux/Api/blogApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { getUserDataFromLC } from "@/utils/local-storage";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import config from "@/config/config";

const AllBlogs = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [blogId, setBlogId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState({ title: "", description: "" });
  const userData = getUserDataFromLC() as any;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // query and mutation
  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();
  const { data: blogs } = useBlogsQuery(undefined);

  // filter Employee by name phone ID number
  const filteredBlogData = blogs?.data?.filter((blog: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      blog?.title?.toLowerCase().includes(lowercaseSearchText) ||
      blog?.user?.name?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Delete Blog
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteBlog(id);
      if (res) {
        message.success("Blog Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // Blog Edit function

  const onSubmit = async (data: any) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = config.imageBbKey;

    const updateData = await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          return {
            title: data.title,
            description: data.description,
            image: imageData?.data?.url,
          };
        } else {
          return {
            title: data.title,
            description: data.description,
          };
        }
      });

    message.loading("Update Blog.....");
    try {
      const res = await updateBlog({
        id: blogId,
        body: { ...updateData },
      }).unwrap();
      if (res) {
        message.success("Blog Update successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };

  const columns: any[] = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Author",
      dataIndex: ["user", "name"],
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
        const selectedBlog = filteredBlogData.find(
          (blog: any) => blog.id === data.id
        );
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                setBlogId(selectedBlog.id);
                setEditBlog({
                  title: selectedBlog?.title,
                  description: selectedBlog?.description,
                });
                setIsModalOpen(true);
              }}
              type="default"
            >
              <EditOutlined />
            </Button>

            <Popconfirm
              placement="topLeft"
              title="Delete the blog"
              description="Are you sure to delete this blog?"
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
    <div className="commonAdmin">
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
      <Table columns={columns} dataSource={filteredBlogData} />

      {/* Edit Modal */}
      <Modal
        title="Edit Blog"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px] mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                defaultValue={editBlog?.title}
                register={register}
                errors={errors}
              />
            </div>
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="description"
                register={register}
                errors={errors}
                defaultValue={editBlog?.description}
                label="Description"
                rows={4}
              />
            </div>
            <div className="my-[10px] mx-0">
              <InputField
                name="image"
                label="Image"
                type="file"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <Button className="mt-2" type="primary" htmlType="submit">
            Update Blog
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default AllBlogs;

"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, message } from "antd";

import { useState } from "react";
import { useForm } from "react-hook-form";
import TextAreaField from "@/components/TextAreaField/TextAreaField";

import {
  useDeleteBlogCommentMutation,
  useGetCommentsByUserIdQuery,
  useUpdateBlogCommentMutation,
} from "@/redux/Api/blogCommentApi/blogCommentApi";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";

const UserReview = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [reviewId, setReviewId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editReview, setEditReview] = useState({
    comments: "",
  });

  const {
    handleSubmit,
    register,

    reset,
    formState: { errors },
  } = useForm();

  // query and mutation


  const { data:userInfo, } = useUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const user = userInfo?.data

  const [updateBlogComment, { isLoading: updateLoading }] =
    useUpdateBlogCommentMutation();
  // delete comments
  const [deleteBlogComment, { isLoading: deleteLoading }] =
    useDeleteBlogCommentMutation();

  // get review by user id
  const { data: comments, isLoading } = useGetCommentsByUserIdQuery(
    user?.id as string
  );

  // filter review by review, service titlee, user name
  const filteredCommentsData = comments?.data?.filter((review: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      review?.comments?.toLowerCase().includes(lowercaseSearchText) ||
      review?.userId?.name?.toLowerCase().includes(lowercaseSearchText) ||
      review?.blogId?.title?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Delete comments
  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteBlogComment(id);
      if (res) {
        message.success("Comments Deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // Review Edit function
  const onSubmit = async (data: any) => {
    message.loading("Update Comments.....");

    const updateData = {
      id: reviewId,
      comments: data.comments,
    };

    try {
      const res = await updateBlogComment(updateData).unwrap();
      if (res) {
        message.success("Comments Update successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };

  const columns: any[] = [
    {
      title: "Comments",
      dataIndex: "comments",
    },
    {
      title: "Blog",
      dataIndex: ["blogId", "title"],
    },
    {
      title: "User",
      dataIndex: ["userId", "name"],
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
        const selectedReview = filteredCommentsData.find(
          (blog: any) => blog.id === data.id
        );
        return (
          <>
            <Button
              loading={updateLoading}
              className="mr-[6px]"
              onClick={() => {
                setReviewId(selectedReview.id);
                setEditReview({
                  comments: selectedReview?.comments,
                });
                setIsModalOpen(true);
              }}
              type="default"
            >
              <EditOutlined />
            </Button>

            <Popconfirm
              placement="topLeft"
              title="Delete the Comments"
              description="Are you sure to delete this Comments?"
              onConfirm={() => deleteHandler(data?.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button loading={deleteLoading} danger>
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
            label: "user",
            link: "/user",
          },
        ]}
      />

      <ActionBar title="My Comments">
        <Input
          type="text"
          allowClear
          size="middle"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="max-w-sm mr-4"
        />
      </ActionBar>
      <Table
        columns={columns}
        dataSource={filteredCommentsData}
        loading={isLoading}
      />

      {/* Edit Modal */}
      <Modal
        title="Edit Comments"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="comments"
                register={register}
                errors={errors}
                defaultValue={editReview?.comments}
                label="Comments"
                rows={4}
              />
            </div>
          </div>
          <Button
            loading={updateLoading}
            className="mt-2"
            type="primary"
            htmlType="submit"
          >
            Update Blogs
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default UserReview;

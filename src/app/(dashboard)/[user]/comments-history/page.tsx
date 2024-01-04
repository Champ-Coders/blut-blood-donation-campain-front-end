"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, Rate, message } from "antd";

import { useState } from "react";
import { useForm } from "react-hook-form";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import {
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} from "@/redux/Api/reviewApi";
import MultiSelect from "@/components/MultiSelector/MultiSelector";
import { useServicesQuery } from "@/redux/Api/serviceApi";
import { getUserDataFromLC } from "@/utils/local-storage";
import {
  useDeleteBlogCommentMutation,
  useGetCommentsByUserIdQuery,
} from "@/redux/Api/blogCommentApi/blogCommentApi";

const UserReview = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [reviewId, setReviewId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editReview, setEditReview] = useState({
    rating: 0,
    review: "",
    user: "",
    service: { label: "", value: "" },
  });

  const { data: services } = useServicesQuery(undefined);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  //   service option
  const serviceOptions = services?.data?.map((service: any) => ({
    value: service.id,
    label: service.title,
  }));

  // query and mutation
  const user = getUserDataFromLC();
  const [updateReview, { isLoading: updateLoading }] =
    useUpdateReviewMutation();
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
    const updateData = {
      review: data.review,
      rating: Number(data.rating),
      service: data.service.id,
    };
    message.loading("Update Review.....");
    try {
      const res = await updateReview({
        id: reviewId,
        body: { ...updateData },
      }).unwrap();
      if (res) {
        message.success("Review Update successfully");
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
                  rating: selectedReview?.rating,
                  review: selectedReview?.review,
                  user: selectedReview?.user,
                  service: {
                    value: selectedReview?.service?.id,
                    label: selectedReview?.service?.title,
                  },
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
        title="Edit Review"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            {/* <div className="my-[10px] mx-0">
              <InputField
                name="rating"
                label="Rating"
                type="text"
                defaultValue={editReview?.rating}
                register={register}
                errors={errors}
              />
            </div> */}
            <div>
              <label className="text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize flex items-center gap-2">
                Rating
                <span className="text-rose-500">*</span>
              </label>

              <Rate
                allowHalf={true}
                onChange={(e) => setValue("rating", e)}
                defaultValue={editReview?.rating}
              />
            </div>

            <div className="my-[10px]  md:max-w-md mx-0">
              <MultiSelect
                label="Select Service"
                name="service"
                options={serviceOptions}
                isMulti={false}
                defaultValue={editReview.service}
                required={false}
                setValue={setValue}
              />
            </div>
            <div className="my-[10px] mx-0">
              <TextAreaField
                name="review"
                register={register}
                errors={errors}
                defaultValue={editReview?.review}
                label="Review"
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
            Update Review
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default UserReview;

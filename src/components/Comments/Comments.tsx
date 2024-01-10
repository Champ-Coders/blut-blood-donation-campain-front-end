"use client";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import Image from "next/image";
import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Button, Popconfirm, message } from "antd";

import UserIcon from "../../../public/assets/icon/userIcon.png";
import Empty from "../Empty/Empty";
import { IComments } from "@/interfaces/common";
import Link from "next/link";
import {
  useCreateBlogCommentMutation,
  useDeleteBlogCommentMutation,
} from "@/redux/Api/blogCommentApi/blogCommentApi";
import { formatDistanceToNowStrict } from "date-fns";

const Comments = ({ id, comment }: { id: string; comment: IComments[] }) => {
  const [createBlogComment, { isLoading }] = useCreateBlogCommentMutation();
  const [deleteBlogComment] = useDeleteBlogCommentMutation();

  const { data } = useUserProfileQuery(null);
  const userInfo = data?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {
    if (!userInfo) {
      message.error("Please login first");
      return;
    }

    const newComment = {
      userId: userInfo._id,
      comments: data.comment,
      blogId: id,
    };

    try {
      const res = await createBlogComment(newComment).unwrap();

      if (res.status === 200) {
        message.success("Comment added successfully");
        reset();
      }
    } catch (error) {
      console.log("🚀 ~ file: Comments.tsx:43 ~ onSubmit ~ error:", error);
      message.error("Something went wrong");
    }
  };

  const HandleDelete = async (id: string) => {
    try {
      const res = await deleteBlogComment(id).unwrap();
      if (res.status === 200) {
        message.success("Comment deleted successfully");
      }
    } catch (error) {
      console.log("🚀 ~ file: Comments.tsx:43 ~ onSubmit ~ error:", error);
      message.error("Something went wrong");
    }
  };

  return (
    <div>
      <p className="font-playfair text-3xl font-semibold my-[20px]">
        Comments - ({comment?.length})
      </p>

      <div className="flow-root  md:w-4/6">
        <ul role="list" className="-mb-8">
          {comment?.length === 0 ? (
            <div className="mb-[20px]">
              <Empty title="Comment" />
            </div>
          ) : (
            comment?.map((singleComment, index) => (
              <li key={singleComment._id}>
                <div className="relative pb-8">
                  {index !== comment?.length - 1 ? (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <>
                      <div className="relative">
                        <Image
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                          src={singleComment?.userId?.imgUrl ?? UserIcon.src}
                          alt=""
                          width={40}
                          height={40}
                        />

                        <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                          <IoChatbubbleEllipses
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                        {/* delete */}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <Link
                              href={`/donate-list/${singleComment?.userId?._id}`}
                            >
                              {singleComment?.userId?.name}
                            </Link>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Commented{" "}
                            {formatDistanceToNowStrict(
                              new Date(singleComment.createdAt)
                            )}{" "}
                            ago -{" "}
                            <span
                              className={
                                singleComment?.userId?._id !== userInfo?._id
                                  ? "hidden"
                                  : "inline"
                              }
                            >
                              <Popconfirm
                                title="Delete this comment"
                                description="Are you sure to delete this Comment?"
                                onConfirm={() => {
                                  HandleDelete(singleComment._id);
                                }}
                                onCancel={() => {
                                  message.error("Comment not deleted");
                                }}
                                okText="Yes"
                                cancelText="No"
                              >
                                <button className="text-red-400 ml-2">
                                  Delete
                                </button>
                              </Popconfirm>
                            </span>
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>{singleComment?.comments}</p>
                        </div>
                      </div>
                    </>
                    {/* {activityItem.type === "comment" ? (
                      
                    ) : activityItem.type === "assignment" ? (
                      <>
                        <div>
                          <div className="relative px-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                              <FaRegUserCircle
                                className="h-5 w-5 text-gray-500"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 py-1.5">
                          <div className="text-sm text-gray-500">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.person.name}
                            </a>{" "}
                            assigned{" "}
                            <span className="whitespace-nowrap">
                              {activityItem.date}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : activityItem.type === "tags" ? (
                      <>
                        <div>
                          <div className="relative px-1">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                              <BsFillTagFill
                                className="h-5 w-5 text-gray-500"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 py-0">
                          <div className="text-sm leading-8 text-gray-500">
                            <span className="mr-0.5">
                              <a
                                href={activityItem.person.href}
                                className="font-medium text-gray-900"
                              >
                                {activityItem.person.name}
                              </a>{" "}
                              added tags
                            </span>{" "}
                            <span className="whitespace-nowrap">
                              {activityItem.date}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : null} */}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>

        {/* New comment form */}
        <div className="mt-6 flex gap-x-3">
          {/* Avatar */}

          <Image
            className="flex-none h-10 w-10 rounded-full bg-gray-50"
            src={userInfo?.imgUrl ?? UserIcon.src}
            alt=""
            width={40}
            height={40}
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex-auto"
          >
            <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-primary/30">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={2}
                id="comment"
                className={`block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 p-3 focus:outline-none`}
                placeholder="Add your comment..."
                defaultValue={""}
                {...register("comment", { required: true })}
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
              <div className="flex items-center space-x-5">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                  >
                    <FaPaperclip className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Attach a file</span>
                  </button>
                </div>
              </div>
              <Button
                loading={isLoading}
                htmlType="submit"
                className="rounded-md bg-primary  text-sm font-semibold text-white  hover:bg-black "
              >
                Comment
              </Button>
            </div>
          </form>
        </div>
        {errors.comment && (
          <span className="text-red-400 text-[14px] ml-14">
            Comment is required
          </span>
        )}
      </div>
    </div>
  );
};

export default Comments;

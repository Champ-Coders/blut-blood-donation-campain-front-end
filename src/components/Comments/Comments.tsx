"use client";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import Image from "next/image";
import React from "react";
import { BsFillTagFill } from "react-icons/bs";
import { FaPaperclip, FaRegUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Empty, message } from "antd";

import UserIcon from "../../../public/assets/icon/userIcon.png";

type IActivity = {
  id?: number;
  type: string;
  person: { name: string; href: string };
  imageUrl?: string;
  comment?: string;
  date: string;
};

const activity: IActivity[] = [];

const Comments = ({ id }: { id: string }) => {
  /*! my code start code hasan rifat*/
  /* 

// get comment from backend
   const { data: commentData } = useGetAllCommentQuery({}, {});
   // create comment
   const [createBlogComment] = useCreateBlogCommentMutation(); 
   
   // form
   const onSubmit = async (data: any) => {
    if (!userInfo) {
      message.error("Please login first");
      return;
    }
    // create comment
    await createBlogComment({
      blogId: id,
      userId: userInfo._id,
      comments: data.comment,
    });


    // set LocalStorage
    const localComment = localStorage.getItem("comment");

    // reset comment
    data.comment = "";
    reset();
  };


  end my code hasan rifat */
  const [comment, setComment] = React.useState(activity);

  // get comment from local storage
  React.useEffect(() => {
    const localComment = localStorage.getItem("comment");
    if (localComment) {
      const localCommentParse = JSON.parse(localComment);
      setComment(localCommentParse);
    }
  }, []);

  const { data } = useUserProfileQuery(null);
  const userInfo = data?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    if (!userInfo) {
      message.error("Please login first");
      return;
    }

    const newComment = {
      id: comment.length + 1,
      type: "comment",
      person: {
        name: userInfo?.name,
        href: "#",
      },
      imageUrl: userInfo?.imgUrl ?? UserIcon,
      comment: data.comment,
      date: new Date().toLocaleDateString(),
    };

    setComment([...comment, newComment]);
    // set LocalStorage
    const localComment = localStorage.getItem("comment");
    if (localComment) {
      const localCommentParse = JSON.parse(localComment);
      localStorage.setItem(
        "comment",
        JSON.stringify([...localCommentParse, newComment])
      );
    } else {
      localStorage.setItem("comment", JSON.stringify([newComment]));
    }

    // reset comment
    data.comment = "";
    reset();
  };

  return (
    <div>
      <p className="font-playfair text-3xl font-semibold my-[20px]">
        Reviews - ({comment?.length})
      </p>

      <div className="flow-root  md:w-4/6">
        <ul role="list" className="-mb-8">
          {comment.length === 0 ? (
            <div className="mb-[20px]">
              <Empty description="No comment" />
            </div>
          ) : (
            comment?.map((activityItem, activityItemIdx) => (
              <li key={activityItem.id}>
                <div className="relative pb-8">
                  {activityItemIdx !== comment.length - 1 ? (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    {activityItem.type === "comment" ? (
                      <>
                        <div className="relative">
                          <Image
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                            src={activityItem.imageUrl!}
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
                              <a
                                href={activityItem.person.href}
                                className="font-medium text-gray-900"
                              >
                                {activityItem.person.name}
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Commented {activityItem.date} {}
                              <span>
                                <button
                                  className="text-red-400 ml-2"
                                  onClick={() => {
                                    const newComment = comment.filter(
                                      (item) => item.id !== activityItem.id
                                    );
                                    setComment(newComment);
                                    localStorage.setItem(
                                      "comment",
                                      JSON.stringify(newComment)
                                    );
                                  }}
                                >
                                  Delete
                                </button>
                              </span>
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-700">
                            <p>{activityItem.comment}</p>
                          </div>
                        </div>
                      </>
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
                    ) : null}
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
              <button
                type="submit"
                className="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white  hover:bg-black "
              >
                Comment
              </button>
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

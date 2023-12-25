"use client";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";
import Image from "next/image";
import React from "react";
import { BsFillTagFill } from "react-icons/bs";
import { FaPaperclip, FaRegUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useForm } from "react-hook-form";

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];

const Comments = () => {
  const { data } = useUserProfileQuery(null);
  const userInfo = data?.data;
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

 
  return (
    <div>
      <p className="font-playfair text-3xl font-semibold my-[20px]">
        Reviews - ({activity?.length})
      </p>

      <div className="flow-root  md:w-4/6">
        <ul role="list" className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
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
                            Commented {activityItem.date}
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
          ))}
        </ul>

        {/* New comment form */}
        <div className="mt-6 flex gap-x-3">
          {/* Avatar */}

          <Image
            className="flex-none h-10 w-10 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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

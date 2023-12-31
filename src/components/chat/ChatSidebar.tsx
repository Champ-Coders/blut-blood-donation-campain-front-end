"use client";
import { useChatUsersQuery } from "@/redux/Api/chatApi";
import { Skeleton } from "antd";
import Link from "next/link";
import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import {
  formatDistanceToNowStrict,
  format,
  formatRelative,
  subDays,
} from "date-fns";
import userIcon from "../../../public/assets/icon/userIcon.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ChatSidebar() {
  const { data, isLoading } = useChatUsersQuery({});
  // console.log("🚀 ~ file: ChatSidebar.tsx:7 ~ ChatSidebar ~ data:", data);

  const userData = data?.data;
  const searchParams = useSearchParams();

  const ActiveName = searchParams.get("name");
  console.log(
    "🚀 ~ file: ChatSidebar.tsx:25 ~ ChatSidebar ~ ActiveName:",
    ActiveName
  );

  return (
    <div className="w-full bg-white border-r border-gray-300">
      <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-slate-600 text-white">
        <h1 className="text-2xl font-semibold">Chat Users</h1>
        <div className="relative">
          <button id="menuButton" className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
            </svg>
          </button>

          {/* <div
            id="menuDropdown"
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
          >
            <ul className="py-2 px-3">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                >
                  Option 2
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </header>

      <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
        {isLoading && <Skeleton avatar paragraph={{ rows: 1 }} />}
        {userData?.map((user: any, index: number) => {
          return (
            <Link
              href={`/chat/${user?._id}?name=${user?.name}`}
              key={index}
              className={`${
                ActiveName === user?.name &&
                "bg-primary text-white font-semibold"
              } relative flex items-start space-x-3   space-y-4 my-3 rounded-md`}
            >
              <div className="relative">
                <Image
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                  src={user?.imgUrl || userIcon}
                  alt=""
                  width={40}
                  height={40}
                />

                <span className="absolute -bottom-0.5 -right-1 rounded-tl  px-0.5 py-px">
                  <div className="max-h-[2px] max-w-[2px] bg-[#4EAB5F] text-[#4EAB5F] rounded-[100%] p-2"></div>
                </span>
                {/* delete */}
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <h1 className="text-lg">{user?.name}</h1>
                  <p
                    className={`mt-0.5 text-sm  ${
                      ActiveName === user?.name
                        ? "text-gray-100"
                        : "text-gray-500 "
                    }`}
                  >
                    Messaged{" "}
                    {/* {formatDistanceToNowStrict(new Date(user?.chatTime))}
                    ago */}
                    {formatRelative(
                      subDays(new Date(user?.chatTime), 3),
                      new Date(user?.chatTime)
                    )}
                  </p>
                </div>
                <div
                  className={`mt-1 text-sm  ${
                    ActiveName === user?.name
                      ? "text-gray-200"
                      : "text-gray-500 "
                  }`}
                >
                  <p>Any one available now to chat?</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

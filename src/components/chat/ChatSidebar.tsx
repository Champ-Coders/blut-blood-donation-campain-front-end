"use client";
import { useChatUsersQuery } from "@/redux/Api/chatApi";
import { Image, Skeleton } from "antd";
import Link from "next/link";
import React from "react";

export default function ChatSidebar() {
  const { data, isLoading } = useChatUsersQuery({});
  console.log("🚀 ~ file: ChatSidebar.tsx:7 ~ ChatSidebar ~ data:", data);

  const userData = data?.data;
  // address: 'Noakhali Sadar',
  // _id: '6582be8e3e41d51f5948ff5b',
  // name: 'Sarwar Hossain',
  // phoneNumber: '+8801602819932',
  // email: 'sarwarasik2@gmail.com',
  // role: 'user',
  // bloodGroup: 'AB+',
  // dateOfBirth: '2023-11-30T00:00:00.000Z',
  // totalDonation: 0,
  // totalReceived: 0,
  return (
    <div className=" w-auto bg-white border-r border-gray-300">
      <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
        <h1 className="text-2xl font-semibold">Chat Web</h1>
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
            <div key={index}>
              <Link
                href={`/chat/${user?._id}?name=${user?.name}`}
                className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              >
                <div className="flex justify-end items-baseline gap-0 bg-gray-30 rounded-full mr-3">
                  <Image
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                    }}
                    // className="w-12 h-12 rounded-full"
                  />
                  <div className="max-h-[2px] max-w-[2px] bg-[#4EAB5F] text-[#4EAB5F] rounded-[100%] p-2"></div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{user?.name}</h2>
                  <p className="text-gray-600">Any One Available!!</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

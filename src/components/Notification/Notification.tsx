"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Popovers from "../Popover/Popover";
import { INotification } from "@/constants/INotification";
import Link from "next/link";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { Badge } from "antd";
import { FaRegBell } from "react-icons/fa";

const Notification = () => {
  const [isOpenNotification, setIsOpenNotification] = React.useState(false);
  return (
    <Popovers
      body={
        <div className="flex flex-col gap-2 px-1 ">
          {INotification.map((item, i) => (
            <Link
              key={i}
              href="#"
              className=" rounded-lg hover:bg-gray-100 grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 text-[inherit] no-underline outline-none focus-visible:ring-2 ring-pink-800 border-b-2 border hover:border-primary p-4"
            >
              <img
                src={item?.user?.imgUrl}
                className="rounded-full w-5 h-5 row-span-3"
                alt="user"
              />
              <div className="text-gray-800 font-semibold leading-5">
                {item?.user?.name}
              </div>
              <div className="text-gray-400">
                <IoChatboxEllipsesSharp className="text-xl" />
              </div>
              <div className="text-sm text-gray-500 col-span-2">
                Commented {new Date(item?.date).toLocaleDateString()} ago
              </div>
              <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 mt-1 mb-0 col-span-2">
                {item?.description}
              </p>
            </Link>
          ))}
        </div>
      }
      title={"Notification"}
      trigger="click"
      open={isOpenNotification}
      setOpen={setIsOpenNotification}
      placement="bottom"
    >
      <Badge count={INotification?.length}>
        <button
          type="button"
          className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <FaRegBell className="h-6 w-6" aria-hidden="true" />
        </button>
      </Badge>
    </Popovers>
  );
};

export default Notification;

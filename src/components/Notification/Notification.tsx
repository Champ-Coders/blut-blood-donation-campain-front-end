"use client";
/* eslint-disable @next/next/no-img-element */

import { useNotificationsQuery } from "@/redux/Api/notificationApi";

import { Badge } from "antd";
import Link from "next/link";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import Popovers from "../Popover/Popover";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";

const Notification = () => {
  // const {userId} =

  const { data:user, } = useUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const userInfo = user?.data

  const [isOpenNotification, setIsOpenNotification] = React.useState(false);
  const { data, isLoading } = useNotificationsQuery({});

  const notification: any = data?.data?.filter(
    (item: any) => item?.user?._id === userInfo?.id
  );

  const notificationLength = notification?.filter(
    (item: any) => item?.hasNotification === true
  ).length;

  console.log(notification);

  if (isLoading) return <div>...</div>;
  return (
    <Popovers
      body={
        <div className="flex flex-col gap-2 px-1 ">
          {notification?.slice(0, 5).map((item: any, i: number) => (
            <Link
              key={i}
              href="#"
              className=" rounded-lg hover:bg-gray-100  gap-x-2 text-[inherit] no-underline outline-none focus-visible:ring-2 ring-pink-800 border-b-2 border hover:border-primary p-4"
            >
              {/* <img
                src={item?.user?.imgUrl}
                className="rounded-full w-5 h-5 row-span-3"
                alt="user"
              /> */}
              <p className="text-gray-800 font-semibold ">
                {item?.notificationTitle}
              </p>
              {/* <div className="text-gray-400">
                <IoChatboxEllipsesSharp className="text-xl" />
              </div> */}
              <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 mt-1 mb-0 col-span-2">
                {item?.notificationBody}
              </p>
              <p className="text-xs text-gray-500 col-span-2 py-2">
                {new Date(item?.createdAt).toLocaleTimeString()} ago
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
      <Badge count={notificationLength}>
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

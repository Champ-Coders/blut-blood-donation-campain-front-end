"use client";
import React, { Fragment } from "react";
import Logo from "../../../../public/assets/logo-light.png";
import userIcon from "../../../../public/assets/icon/blood_user.jpg";
import Image from "next/image";
import { NavList } from "@/constants/NavList";
import Dropdown from "@/components/Dropdown/Dropdown";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Drawers from "@/components/Drawer/Drawer";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { logout } from "@/utils/local-storage";
import { message } from "antd";
import { useRouter } from "next/navigation";

const MainHeader = () => {
  const [open, setOpen] = React.useState(false);

  const { data } = useUserProfileQuery(null);
  const userInfo = data?.data;

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  // console.log(userInfo);

  //! SignOut  section
  const router = useRouter();

  const SignOutHandler = () => {
    logout();
    message.error("Successfully Sign Out");
    // window.location.reload();
    router.push("/");
  };

  return (
    <div className=" items-center grid md:grid-cols-5 grid-cols-3 shadow justify-between bg-white">
      <Link
        href={"/"}
        className="col-span-1 bg-primary flex justify-center py-4 px-2 "
      >
        <Image
          src={Logo}
          alt="logo"
          width={600}
          height={500}
          className=" w-[127px] "
        />
      </Link>

      <div className="lg:flex items-center gap-5 md:col-span-2 justify-around hidden">
        {NavList.map((item, i) => (
          <Dropdown key={i} item={item} />
        ))}
      </div>

      {/* search and Login  */}
      <div className="flex  items-center gap-5 ml-auto col-span-2 w-full justify-center">
        <button className="">
          <SearchOutlined className="text-[18px] p-4" />
        </button>

        {/* login button  */}
        {userInfo?.email ? (
          <Menu as="div" className="relative ml-4 flex-shrink-0">
            <div>
              <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={SignOutHandler}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-white  mb-0"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <Link href={"/login"}>
            <button className="bg-primary text-white px-5 py-2 rounded-lg border-2 border-primary hover:bg-white hover:text-primary">
              <span className="ml-2">Login</span>
            </button>
          </Link>
        )}

        <button onClick={() => setOpen(true)} className="lg:hidden">
          <MenuOutlined className="text-[24px]" />
        </button>

        <Drawers open={open} placement="right" setOpen={setOpen} title="Menu">
          <div className="flex flex-col gap-5 items-start text-black">
            {NavList.map((item, i) => (
              <Dropdown key={i} item={item} />
            ))}
          </div>
        </Drawers>
      </div>
    </div>
  );
};

export default MainHeader;

"use client";
import React from "react";
import Logo from "../../../../public/assets/logo-light.png";
import userIcon from "../../../../public/assets/icon/userIcon.png";
import Image from "next/image";
import { NavList } from "@/constants/NavList";
import Dropdown from "@/components/Dropdown/Dropdown";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Drawers from "@/components/Drawer/Drawer";
import { useUserProfileQuery } from "@/redux/Api/authApi/AuthApi";

const MainHeader = () => {
  const [open, setOpen] = React.useState(false);;

  const {data} = useUserProfileQuery(null)
  const userInfo = data?.data
  // console.log(userInfo);

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
          <Link href="/dashboard" className=" px-5 py-2 ">
            {/* <UserOutlined   className="text-[2rem] p-4" />
             */}
             <Image src={userIcon} height={40} width={40} alt="userIcon" />
          </Link>
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

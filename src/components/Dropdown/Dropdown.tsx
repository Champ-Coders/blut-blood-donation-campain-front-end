"use client";
import Link from "next/link";
import React from "react";
import { UpOutlined } from "@ant-design/icons";
import { INav } from "@/interfaces/INav";

const Dropdown = ({ item }: { item: INav }) => {
  const [open, setOpen] = React.useState(false);

  console.log(item);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative inline-block text-left font-inter font-medium  text-black hover:text-primary transition-all duration-500 ease-in-out"
    >
      <Link href={item.path} className="flex items-center gap-1">
        {item?.name}
        <UpOutlined
          className={`
        text-[12px] 
        ${open ? "" : "rotate-180"}
         transition-all
        duration-500
        ease-in-out
        font-semibold
        ${item?.children?.length === 0 ? "hidden" : ""}

          `}
        />
      </Link>

      <div
        className={` ${
          open && item?.children?.length !== 0
            ? "origin-top-right absolute right-0 pt-2 w-56 rounded-md shadow-lg bg-white   z-50"
            : "hidden"
        }`}
      >
        <div className=" border-t-8 border-primary rounded-t-lg ">
          {item?.children?.map((child, i) => (
            <Link href={child.path} key={i}>
              <p
                className="block px-4 py-2 text-sm text-black hover:bg-primary hover:text-white rounded-lg"
                role="menuitem"
              >
                {child?.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

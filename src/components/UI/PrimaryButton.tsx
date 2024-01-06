import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  data: { text, link },
}: {
  data: { text: string; link: string };
}) => {
  return (
    <Link className="no-underline" href={link}>
      <button
        className="relative rounded sm:px-5 py-2 sm:py-3  px-3 overflow-hidden group bg-primary text-lg sm:text-xl  hover:bg-black text-white transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[450px] ease"></span>
        <span className="relative">{text}</span>
      </button>
    </Link>
  );
};

export default PrimaryButton;

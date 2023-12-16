import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  data: { text, link },
}: {
  data: { text: string; link: string };
}) => {
  return (
    <Link
      className="bg-primary text-center text-xl text-white p-3 h-[56px] w-[188px] hover:bg-black hover:text-white border-2 hover:border-primary"
      href={link}
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;

import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      className={`${className} px-[50px] py-[10px] bg-[#ea062b] transition-all
      duration-500 
      ease-in-out hover:bg-[#111] text-white border-none text-lg rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

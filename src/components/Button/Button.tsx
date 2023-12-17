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
      className={`${className} px-[50px] py-[10px] bg-[#ea062b] text-white border-none text-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

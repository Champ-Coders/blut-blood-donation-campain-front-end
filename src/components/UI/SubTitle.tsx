import React from "react";

const SubTitle = ({ data: { subTitle ,css} }: { data: { subTitle: string,css?:string } }) => {
  return (
    <h1 className={`text-black font-[800] text-5xl  max-w-[80%] ${css}`}>
      {subTitle}
    </h1>
  );
};

export default SubTitle;

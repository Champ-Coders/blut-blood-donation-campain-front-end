import React from "react";

const SubTitle = ({ data: { subTitle } }: { data: { subTitle: string } }) => {
  return (
    <h1 className="text-black font-[800] text-5xl  max-w-[80%] ">{subTitle}</h1>
  );
};

export default SubTitle;

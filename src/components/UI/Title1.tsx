import React from "react";

const Title1 = ({ data: { title } }: { data: { title: string } }) => {
  return <h3 className="text-xl text-primary uppercase">{title}</h3>;
};

export default Title1;

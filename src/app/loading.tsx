import React from "react";
import LoadingImage from "../../public/assets/preloader.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Image src={LoadingImage} alt="Loading" width={300} height={300} />
    </div>
  );
};

export default LoadingPage;

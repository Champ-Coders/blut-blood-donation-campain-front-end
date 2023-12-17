import React from "react";
import LoadingImage from "../../public/assets/preloader.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Image src={LoadingImage} alt="Loading" width={500} height={500} />
    </div>
  );
};

export default LoadingPage;

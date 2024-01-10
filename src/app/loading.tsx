import React from "react";
import LoadingImage from "../../public/assets/preloader.gif";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className=" bg-white shadow-2xl p-5 rounded-full border">
        <Image src={LoadingImage} alt="Loading" width={300} height={300} className="rounded-full"/>
      </div>
    </main>
  );
};

export default LoadingPage;

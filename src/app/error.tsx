"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center ">
        <div className="bg-white  rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center ">
            <Image
              src="https://i.ibb.co/fGS7CyV/error-page.webp"
              className="px-4 hidden md:block"
              loading="lazy"
              alt="404"
              width={400}
              height={400}
            />
            <Image
              src="https://i.ibb.co/fGS7CyV/error-page.webp"
              className="md:hidden"
              alt="404"
              width={300}
              height={300}
            />

            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS! <span className="text-red-600">404</span>
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              <span className="text-red-600">
                <i className="fas fa-map-signs"></i>
                Not Found
              </span>{" "}
              <br />
              <br />
              No signal here! we cannot find the page you are looking for{" "}
            </p>
            <Link href="/">
              <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-primary hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

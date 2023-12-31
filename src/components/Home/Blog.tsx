import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-100 pt-48 sm:pt-24 pb-10">
      <div className="flex sm:flex-row w-full mx-auto md:w-5/6 flex-col justify-between gap-8">
        <div className="bg-white text-center w-full relative">
          <Image
            alt="blog-img"
            src="/assets/banner/blood.png"
            className="p-4 hover:scale-105 duration-300"
            width={700}
            height={500}
          />
          <h1 className="text-black text-2xl font-serif mt-2 font-extrabold">
            Become a Donor
          </h1>
          <p className="text-slate-500 mx-2 mt-5 mb-24">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give pleasure
          </p>
          <Link href="/blog" className="absolute bottom-0 left-0 w-full">
            <button className="btn bg-black hover:bg-primary text-white text-lg w-full py-3 font-bold">
              Read More
            </button>
          </Link>
        </div>
        <div className="bg-white text-center w-full relative">
          <Image
            alt="blog-img"
            src="/assets/banner/donor.png"
            className="p-4 hover:scale-105 duration-300"
            width={700}
            height={500}
          />
          <h1 className="text-black text-2xl font-serif mt-2 font-extrabold">
            Why Give Blood?
          </h1>
          <p className="text-slate-500 mx-2 mt-5 mb-24">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give pleasure
          </p>
          <Link href="/blog" className="absolute bottom-0 left-0 w-full">
            <button className="btn bg-black hover:bg-primary text-white text-lg w-full py-3 font-bold">
              Read More
            </button>
          </Link>
        </div>
        <div className="bg-white text-center w-full relative">
          <Image
            alt="blog-img"
            src="/assets/banner/donations.png"
            className="p-4 hover:scale-105 duration-300"
            width={700}
            height={500}
          />
          <h1 className="text-black text-2xl font-serif mt-2 font-extrabold">
            How Donations Helps
          </h1>
          <p className="text-slate-500 mx-2 mt-5 mb-24">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give pleasure
          </p>
          <Link href="/blog" className="absolute bottom-0 left-0 w-full">
            <button className="btn bg-black hover:bg-primary text-white text-lg w-full py-3 font-bold">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

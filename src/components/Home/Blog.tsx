import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="flex sm:flex-row flex-col mx-2 mt-2 py-10 px-2 gap-8 bg-slate-100">
      <div className="bg-white text-center sm:h-[585px] h-[575px] w-full">
        <Image
          alt="blog-img"
          src="/assets/banner/blood.png"
          className="p-4 hover:scale-105 duration-300"
          width={500}
          height={500}
        />
        <h1 className="text-black text-2xl mt-2 font-bold">Become a Donor</h1>
        <p className="text-slate-500 mx-2 mt-5">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give pleasure
        </p>
        <Link href="/blog">
          <button className="btn bg-black mt-16 hover:bg-primary text-white text-lg w-full py-3 font-bold">
            Read More
          </button>
        </Link>
      </div>
      <div className="bg-white text-center sm:h-[585px] h-[575px] w-full">
        <Image
          alt="blog-img"
          src="/assets/banner/donor.png"
          className="p-4 hover:scale-105 duration-300"
          width={500}
          height={500}
        />
        <h1 className="text-black text-2xl mt-2 font-bold">Why Give Blood?</h1>
        <p className="text-slate-500 mx-2 mt-5">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give pleasure
        </p>
        <Link href="/blog">
          <button className="btn bg-black mt-16 hover:bg-primary text-white text-lg w-full py-3 font-bold">
            Read More
          </button>
        </Link>
      </div>
      <div className="bg-white text-center sm:h-[585px] h-[575px] w-full">
        <Image
          alt="blog-img"
          src="/assets/banner/donations.png"
          className="p-4 hover:scale-105 duration-300"
          width={500}
          height={500}
        />
        <h1 className="text-black text-2xl mt-2 font-bold">
          How Donations Helps
        </h1>
        <p className="text-slate-500 mx-2 mt-5">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give pleasure
        </p>
        <Link href="/blog">
          <button className="btn bg-black mt-16 hover:bg-primary text-white text-lg w-full py-3 font-bold">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;

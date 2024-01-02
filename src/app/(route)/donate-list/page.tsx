"use client";
import LoadingPage from "@/app/loading";
import DonateCart from "@/components/DonateList/DonateCart";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import { IUser } from "@/interfaces/common";
import { useGetAllUsersQuery } from "@/redux/Api/authApi/AuthApi";
import React from "react";

type DonateListProps = {};

const DonateList: React.FC<DonateListProps> = () => {
  const { data: users, isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }

  const sortedUsers = users?.data?.data
    .filter((user: IUser) => user.totalDonation !== 0)
    .sort((a: IUser, b: IUser) => b.totalDonation - a.totalDonation);
  return (
    <main
      style={{
        backgroundImage:
          "url(https://sandbox.elemisthemes.com/assets/img/map.png)",
      }}
    >
      <BannerBreadcrumb
        items={[
          {
            label: "Donate list",
          },
        ]}
        title="Donate list"
      />
      <section>
        <div className="common">
          <div className="div">
            <div className="mb-3">
              <div className=" w-full lg:w-1/3 mx-auto relative mb-4 flex flex-wrap items-stretch rounded-full">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-primary bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none rounded-tl-full rounded-bl-full"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                {/*Search button*/}
                <button
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg rounded-tr-full rounded-br-full"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className="mb-10 text-3xl text-[#111] font-semibold font-kalpurush">
              সর্বোচ্চ রক্তদাতা
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {sortedUsers?.map((person: IUser) => (
                <DonateCart key={person._id} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="common">
          <div className="div">
            <h3 className="mb-10 text-3xl text-[#111] font-semibold font-kalpurush">
              প্লাটিনাম ক্লাব
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {users?.data?.data?.map((person: IUser) => (
                <DonateCart key={person._id} person={person} />
              ))}
            </div>
            {/* <div className="flex justify-center">
              <Button className="my-10 rounded-full font-bold " type="button">
                More
              </Button>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};
export default DonateList;

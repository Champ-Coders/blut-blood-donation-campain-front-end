"use client";

import { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "@/redux/Api/authApi/AuthApi";
import { useAppSelector, useDebounced } from "@/redux/app/hook";

import DonateList from "@/components/DonateList/DonateList";
import { IUser } from "@/interfaces/common";
import LoadingPage from "@/app/loading";
import Empty from "@/components/Empty/Empty";

const paginationPages = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 4,
    name: "4",
  },
  {
    id: 5,
    name: "5",
  },
  {
    id: 6,
    name: "6",
  },
  {
    id: 7,
    name: "7",
  },
  {
    id: 8,
    name: "8",
  },
  {
    id: 9,
    name: "9",
  },
  {
    id: 10,
    name: "10",
  },
];

const bloodGroups = [
  {
    id: 1,
    name: "A+",
  },
  {
    id: 2,
    name: "A-",
  },
  {
    id: 3,
    name: "B+",
  },
  {
    id: 4,
    name: "B-",
  },
  {
    id: 5,
    name: "AB+",
  },
  {
    id: 6,
    name: "AB-",
  },
  {
    id: 7,
    name: "O+",
  },
  {
    id: 8,
    name: "O-",
  },
];

// available,
const Available = [
  {
    id: 1,
    name: true,
  },
  {
    id: 2,
    name: false,
  },
];

const AllUsers = () => {
  const { area, district, name } = useAppSelector((state) => state.search);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [bloodGroup, setBloodGroup] = useState<string | undefined>(undefined);
  const [available, setAvailable] = useState<boolean | undefined>(undefined);

  const query: Record<string, any> = {};

  query["limit"] = size;
  query["page"] = page;
  query["bloodGroup"] = bloodGroup;
  query["available"] = available;

  useEffect(() => {
    if (name) {
      setSearchTerm(name);
    }
  }, [name]);

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 400,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  // query and mutation
  const { data: users, isLoading } = useGetAllUsersQuery({ ...query });

  // clear all
  const clearAll = () => {
    setSearchTerm("");
    setBloodGroup(undefined);
  };

  return (
    <div className="common flex gap-10 flex-col lg:flex-row ">
      {/* <!-- Filters --> */}
      <div className=" mb-4 max-w-none lg:max-w-sm border-x px-5">
        <form name="wf-form-Filter-2" method="get" className="flex-col gap-6">
          {/* <!-- Filters title --> */}
          <div className="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
            <h5 className="text-xl font-bold">Filters</h5>
            <button onClick={clearAll} className="text-sm">
              <p>Clear all</p>
            </button>
          </div>
          {/* <!-- Search input --> */}
          <input
            type="text"
            className="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 "
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundImage:
                "url('https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg')",
            }}
          />
          {/* <!-- Categories --> */}
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Blood Group</p>
            <div className="flex flex-wrap items-center gap-2">
              {/* clear */}
              <div
                onClick={() => setBloodGroup(undefined)}
                className={`flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid ${
                  !bloodGroup
                    ? "bg-primary text-white"
                    : "bg-[#f2f2f7] text-sm font-semibold"
                }`}
              >
                <span>All</span>
              </div>

              {bloodGroups?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setBloodGroup(item.name)}
                  className={`flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid ${
                    bloodGroup === item.name
                      ? "bg-primary text-white"
                      : "bg-[#f2f2f7] text-sm font-semibold"
                  }`}
                >
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* <!-- Divider --> */}
          <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
          {/* <!-- Rating --> */}
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Available Blood </p>
            <div className="flex flex-wrap gap-2 ">
              {/* clear */}
              <div
                onClick={() => setAvailable(undefined)}
                className={`flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid ${
                  available === undefined
                    ? "bg-primary text-white"
                    : "bg-[#f2f2f7] text-sm font-semibold"
                }`}
              >
                <span>All</span>
              </div>

              {Available?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setAvailable(item.name)}
                  className={`flex h-9 w-24 cursor-pointer items-center justify-center rounded-md border border-solid ${
                    available === item.name
                      ? "bg-primary text-white"
                      : "bg-[#f2f2f7] text-sm font-semibold"
                  }`}
                >
                  <span>
                    {item.name === true ? "Available" : "Unavailable"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      {/* <!-- Donor --> */}
      <div className="w-full flex flex-col gap-2">
        {isLoading ? (
          <LoadingPage />
        ) : users?.data?.data?.length === 0 ? (
          <Empty title="Donor" />
        ) : (
          users?.data?.data?.map((item: IUser) => (
            <DonateList key={item?._id} data={item} />
          ))
        )}

        {/* <!-- Pagination --> */}
        <div className="flex justify-between items-center flex-wrap gap-2 mt-5">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1 && true}
            className="flex justify-center items-center h-9 w-20 rounded-md border border-solid border-[#cccccc] text-sm font-semibold"
          >
            <span>Previous</span>
          </button>
          {paginationPages?.map((item) => (
            <button
              onClick={() => setPage(item.id)}
              key={item.id}
              className={`flex justify-center items-center h-9 w-9 rounded-md border border-solid ${
                page == item.id ? "bg-primary text-white border-primary" : ""
              }  border-[#cccccc] text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-500 ease-in-out    `}
            >
              <span>{item.name}</span>
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            className="flex justify-center items-center h-9 w-16 rounded-md border border-solid border-[#cccccc] text-sm font-semibold"
          >
            <span>Next</span>
          </button>

          {/* <!-- End of Pagination --> */}

          {/* <!-- End of Donor --> */}
        </div>
      </div>
    </div>
  );
};
export default AllUsers;

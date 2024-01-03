"use client";

import { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "@/redux/Api/authApi/AuthApi";
import { useAppSelector, useDebounced } from "@/redux/app/hook";

import DonateList from "@/components/DonateList/DonateList";
import { IUser } from "@/interfaces/common";
import LoadingPage from "@/app/loading";

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
];

const AllUsers = () => {
  const { area, bloodGroup, district, name } = useAppSelector(
    (state) => state.search
  );
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const query: Record<string, any> = {};

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

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

  return (
    <div className="common flex gap-10 flex-col lg:flex-row ">
      {/* <!-- Filters --> */}
      <div className=" mb-4 max-w-none lg:max-w-sm border-x px-5">
        <form name="wf-form-Filter-2" method="get" className="flex-col gap-6">
          {/* <!-- Filters title --> */}
          <div className="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
            <h5 className="text-xl font-bold">Filters</h5>
            <a href="#" className="text-sm">
              <p>Clear all</p>
            </a>
          </div>
          {/* <!-- Search input --> */}
          <input
            type="text"
            className="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]"
            placeholder="Search"
            // style="background-image: url('https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg');"
            style={{
              backgroundImage:
                "url('https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg')",
            }}
          />
          {/* <!-- Categories --> */}
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Categories</p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#"
                className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daab_design.svg"
                  alt=""
                  className="inline-block"
                />
                <p>Design</p>
              </a>
              <a
                href="#"
                className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daae_illustration.svg"
                  alt=""
                  className="inline-block"
                />
                <p>Illustrations</p>
              </a>
              <a
                href="#"
                className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daad_icons.svg"
                  alt=""
                  className="inline-block"
                />
                <p>Icons</p>
              </a>
              <a
                href="#"
                className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaf_plugins.svg"
                  alt=""
                  className="inline-block"
                />
                <p>Plugins</p>
              </a>
              <a
                href="#"
                className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daac_color%20palette.svg"
                  alt=""
                  className="inline-block"
                />
                <p>Color Palette</p>
              </a>
            </div>
          </div>
          {/* <!-- Divider --> */}
          <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
          {/* <!-- Rating --> */}
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Rating</p>
            <div className="flex flex-wrap gap-2 lg:justify-between">
              <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                <span>1</span>
              </div>
              <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-black text-sm font-semibold text-white">
                <span>2</span>
              </div>
              <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                <span>3</span>
              </div>
              <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                <span>4</span>
              </div>
              <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                <span>5</span>
              </div>
            </div>
          </div>
          {/* <!-- Divider --> */}
          <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
          {/* <!-- FIlter One --> */}
          <div className="flex flex-col gap-6">
            <div className="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
              <p className="font-semibold">FIlter One</p>
              <a href="#" className="inline-block text-sm text-black">
                <p>Clear</p>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex items-center text-sm font-medium">
                <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option One
                </span>
              </label>
              <label className="flex items-center text-sm font-medium">
                <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Two
                </span>
              </label>
              <label className="flex items-center text-sm font-medium">
                <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Three
                </span>
              </label>
              <label className="flex items-center text-sm font-medium">
                <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Four
                </span>
              </label>
              <label className="flex items-center text-sm font-medium">
                <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Five
                </span>
              </label>
            </div>
          </div>
          {/* <!-- Divider --> */}
          <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
          {/* <!-- FIlter Two --> */}
          <div className="flex flex-col gap-6">
            <div className="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
              <p className="font-semibold">FIlter Two</p>
              <a href="#" className="inline-block text-sm text-black">
                <p>Clear</p>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <label className="flex items-center font-medium">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  All
                </span>
              </label>
              <label className="flex items-center font-medium">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option One
                </span>
              </label>
              <label className="flex items-center font-medium">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Two
                </span>
              </label>
              <label className="flex items-center font-medium">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Three
                </span>
              </label>
              <label className="flex items-center font-medium">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Four
                </span>
              </label>
              <label className="flex items-center font-medium">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                <span
                  className="inline-block cursor-pointer"
                  htmlFor="Filter-One-Option-1"
                >
                  Option Five
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
      {/* <!-- Donor --> */}
      <div className="w-full flex flex-col gap-2">
        {isLoading ? (
          <LoadingPage />
        ) : users?.data?.data?.length === 0 ? (
          <h1 className="text-4xl text-center">No Donor Found</h1>
        ) : (
          users?.data?.data?.map((item: IUser) => (
            <DonateList key={item?._id} data={item} />
          ))
        )}

        {/* <!-- Pagination --> */}
        <div className="flex justify-center items-center gap-2 mt-5">
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

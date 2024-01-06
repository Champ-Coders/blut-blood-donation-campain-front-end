import { IPerson } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuPhoneIncoming } from "react-icons/lu";

type SearchCardProps = {
  person: IPerson;
};

const SearchCard: React.FC<SearchCardProps> = ({ person }) => {
  return (
    <Link href={`donate-list/${person.id}`}>
      <div className="w-full h-full relative items-center justify-start overflow-hidden transition-all bg-white rounded  group p-1 mb-2  flex  gap-3 border border-primary">
        <div className="w-0 h-0  bg-primary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></div>
        <div className="w-full h-full transition-colors duration-300 ease-in-out  z-10 flex justify-between items-center ">
          <div className="col-span-1 w-full h-full divide-y divide-gray-200 rounded ">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900 group-hover:text-white">
                    {person.name}
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person.donation} time donate
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500 group-hover:text-white">
                  {person.title}
                </p>
              </div>
              <Image
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src={person.imageUrl}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200 ">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 group-hover:text-white"
                  >
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 group-hover:text-white"
                  >
                    <LuPhoneIncoming
                      className="h-5 w-5 text-gray-400 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SearchCard;

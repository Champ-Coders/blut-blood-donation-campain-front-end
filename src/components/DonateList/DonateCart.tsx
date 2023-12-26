import { IPerson } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuPhoneIncoming } from "react-icons/lu";

type DonateCartProps = { person: IPerson };

const DonateCart: React.FC<DonateCartProps> = ({ person }) => {
  return (
    <Link href={`donate-list/${person.id}`}>
      <div className="w-full h-full relative items-center justify-start overflow-hidden transition-all bg-white rounded  group p-1 mb-2  flex  gap-3 border border-primary">
        <div className="w-0 h-0  bg-primary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></div>
        <div className="w-full transition-colors duration-300 ease-in-out  z-10 flex justify-between items-center ">
          <div
            key={person.email}
            className=" flex flex-col   text-center w-full h-full"
          >
            <div className="flex flex-1 flex-col p-8">
              <Image
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                width={128}
                height={128}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900 group-hover:text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500 group-hover:text-white">
                  {person.title}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ">
                    {person.donation} time donate
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg  group-hover:text-white border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    {/* <EnvelopeIcon
        className="h-5 w-5 text-gray-400"
        aria-hidden="true"
      /> */}
                    chat
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex group-hover:text-white w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
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
export default DonateCart;

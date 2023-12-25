import { IPerson } from "@/interfaces/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuPhoneIncoming } from "react-icons/lu";

type DonateCartProps = { person: IPerson };

const DonateCart: React.FC<DonateCartProps> = ({ person }) => {
  return (
    <Link href={`donate-list/${person.id}`}>
      <div
        key={person.email}
        className=" flex flex-col divide-y divide-gray-200  bg-white text-center shadow"
      >
        <div className="flex flex-1 flex-col p-8">
          <Image
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src={person.imageUrl}
            width={128}
            height={128}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">
            {person.name}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{person.title}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {person.donation} time
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={`mailto:${person.email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
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
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <LuPhoneIncoming
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default DonateCart;

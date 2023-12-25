import Button from "@/components/Button/Button";
import DonateCart from "@/components/DonateList/DonateCart";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import Image from "next/image";
import React from "react";
import { LuPhoneIncoming } from "react-icons/lu";

type DonateListProps = {};

const DonateList: React.FC<DonateListProps> = () => {
  const people = [
    {
      id: "1",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "2",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "3",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "4",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "5",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "6",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "7",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: "8",
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      donation: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <main>
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
              <div className="w-1/3 mx-auto relative mb-4 flex flex-wrap items-stretch rounded-full">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-primary bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary rounded-tl-full rounded-bl-full"
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
            <h3 className="mb-10 text-3xl text-[#111] font-semibold">
              Regularly new
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {people.slice(0, 6).map((person) => (
                <DonateCart key={person.id} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="common">
          <div className="div">
            <h3 className="mb-10 text-3xl text-[#111] font-semibold">
              More blood donors regularly
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {people.map((person) => (
                <DonateCart key={person.id} person={person} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="my-10 rounded-full font-bold " type="button">
                More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default DonateList;

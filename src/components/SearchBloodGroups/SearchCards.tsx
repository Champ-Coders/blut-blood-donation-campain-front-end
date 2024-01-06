"use client";
import Image from "next/image";
import React from "react";
import { LuPhoneIncoming } from "react-icons/lu";
import SearchCard from "./SearchCard";
import { useAppSelector } from "@/redux/app/hook";

type SearchCardsProps = {};

const SearchCards: React.FC<SearchCardsProps> = () => {
  const { search } = useAppSelector((state) => state);

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
      name: "Rifat Jane Cooper",
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
  ];

  let searchPeople;

  //   search by name, blood Group, area, district functionality
  if (search) {
    searchPeople = people.filter((person) => {
      return person.name.toLowerCase().includes(search.name.toLowerCase());
    });
  } else {
    searchPeople = people;
  }

  return (
    <section>
      <div className="common">
        <div
          role="list"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {searchPeople.length == 0 ? (
            <p className="text-2xl font-semibold text-center text-primary col-span-3">
              Not found
            </p>
          ) : (
            searchPeople.map((person) => (
              <SearchCard person={person} key={person.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
export default SearchCards;

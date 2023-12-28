"use client";
import {
  ISearchPersonData,
  searchData,
} from "@/redux/Api/searchBloodGroug/searchBloodGroups";
import { useAppDispatch } from "@/redux/app/hook";
import React from "react";
import SearchAndFilter from "./SearchAndFilter";

type SearchComponentProps = {};

const SearchComponent: React.FC<SearchComponentProps> = () => {
  return <SearchAndFilter />;
};
export default SearchComponent;

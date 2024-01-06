import SearchAndFilter from "@/components/SearchBloodGroups/SearchAndFilter";
import SearchCards from "@/components/SearchBloodGroups/SearchCards";
import SearchComponent from "@/components/SearchBloodGroups/SearchComponent";
import {
  ISearchPersonData,
  searchData,
} from "@/redux/Api/searchBloodGroug/searchBloodGroups";
import { useAppDispatch } from "@/redux/app/hook";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <SearchComponent />
      <SearchCards />
    </main>
  );
};
export default page;

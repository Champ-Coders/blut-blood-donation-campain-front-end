import SearchAndFilter from "@/components/SearchBloodGroups/SearchAndFilter";
import SearchCards from "@/components/SearchBloodGroups/SearchCards";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <SearchAndFilter />
      <SearchCards />
    </main>
  );
};
export default page;

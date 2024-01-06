import React from "react";

import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";

const HeaderPage = () => {
  return (
    <section className="sticky md:-top-16 top-0 z-50">
      {/* Top Nav */}
      <TopHeader />

      {/* Main Nav */}

      <MainHeader />
    </section>
  );
};

export default HeaderPage;

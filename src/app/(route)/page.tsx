"use client";
import dynamic from "next/dynamic";

// import BloodOwner from "@/components/Home/BloodOwner";
// import CallNow from "@/components/Home/CallNow";
// import Counter from "@/components/Home/Counter";
// import HelpThePeopleInNeed from "@/components/Home/HelpThePeopleInNeed";
// import HomeEvent from "@/components/Home/HomeEvent";
// import News from "@/components/Home/News";
// import PopularCampaigns from "@/components/Home/PopularCampaigns";
// import Services from "@/components/Home/Services";
// import TeamMember from "@/components/Home/TeamMember";

// import FaqQuestion from "@/components/Home/FaqQuestion";
// import ListOfHonorableBloodDonors from "@/components/Home/ListOfHonorableBloodDonors";
// import FeedBackForum from "@/components/FeedBackForum/FeedBackForum";

import VideoBanner from "@/components/Home/VideoBanner.jsx";
import BloodTypeDonors from "@/components/Home/BloodTypeDonors";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import Testimonials from "@/components/Home/Testimonials";
export default function Home() {
  return (
    <>
      <VideoBanner />
      <BloodTypeDonors />
      {/*
      <ListOfHonorableBloodDonors />
      <HomeEvent />
      <HelpThePeopleInNeed />
      <Counter />
      <Services />
      <CallNow />
      <PopularCampaigns /> */}
      <Testimonials />
      {/* <BloodOwner />
      <TeamMember />
      <News />
      <FaqQuestion />
      <FeedBackForum /> */}
      {/* floating icon */}
      <FloatButton.BackTop
        shape="square"
        type="primary"
        style={{ right: 24 }}
        icon={<VerticalAlignTopOutlined />}
      />
    </>
  );
}

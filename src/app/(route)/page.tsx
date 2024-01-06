"use client";

import VideoBanner from "@/components/Home/VideoBanner.jsx";
import BloodTypeDonors from "@/components/Home/BloodTypeDonors";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import Testimonials from "@/components/Home/Testimonials";
import ListOfHonorableBloodDonors from "@/components/Home/ListOfHonorableBloodDonors";
import HomeEvent from "@/components/Home/HomeEvent";
import HelpThePeopleInNeed from "@/components/Home/HelpThePeopleInNeed";
import Counter from "@/components/Home/Counter";
import Services from "@/components/Home/Services";
import CallNow from "@/components/Home/CallNow";
import PopularCampaigns from "@/components/Home/PopularCampaigns";
import BloodOwner from "@/components/Home/BloodOwner";
import TeamMember from "@/components/Home/TeamMember";
import News from "@/components/Home/News";
import FaqQuestion from "@/components/Home/FaqQuestion";
import FeedBackForum from "@/components/FeedBackForum/FeedBackForum";
export default function Home() {
  return (
    <>
      <VideoBanner />
      <BloodTypeDonors />
      <ListOfHonorableBloodDonors />
      <HomeEvent />
      <HelpThePeopleInNeed />
      <Counter />
      <Services />
      <CallNow />

      <PopularCampaigns />
      <Testimonials />
      <BloodOwner />
      <TeamMember />
      <News />
      <FaqQuestion />
      <FeedBackForum />

      {/* floating icon */}
      <FloatButton.BackTop
        shape="square"
        type="primary"
        className="!bg-primary"
        style={{ right: 24 }}
        icon={<VerticalAlignTopOutlined />}
      />
    </>
  );
}

import Banner from "@/components/Home/Banner";
import Blog from "@/components/Home/Blog";
import BloodOwner from "@/components/Home/BloodOwner";
import BloodTypeDonors from "@/components/Home/BloodTypeDonors";
import CallNow from "@/components/Home/CallNow";
import Counter from "@/components/Home/Counter";
import HelpThePeopleInNeed from "@/components/Home/HelpThePeopleInNeed";
import News from "@/components/Home/News";
import PopularCampaigns from "@/components/Home/PopularCampaigns";
import Services from "@/components/Home/Services";
import TeamMember from "@/components/Home/TeamMember";
import Testimonials from "@/components/Home/Testimonials";

import VideoBanner from "@/components/Home/VideoBanner.jsx";

import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <VideoBanner />
      <BloodTypeDonors />
      {/* <Blog /> */}
      <HelpThePeopleInNeed />
      <Counter />
      <Services />
      <CallNow />
      <PopularCampaigns />
      <Testimonials />
      <BloodOwner />
      <TeamMember />
      <News />
    </>
  );
}

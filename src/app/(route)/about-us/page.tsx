import CallNow from "@/components/Home/CallNow";
import PopularCampaigns from "@/components/Home/PopularCampaigns";
import TeamMember from "@/components/Home/TeamMember";
import Testimonials from "@/components/Home/Testimonials";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import Counter from "@/components/about/Counter";
import HelpThePeopleInNeedAbut from "@/components/about/HelpThePeopleInNeedAbut";
import WhoWeAre from "@/components/about/WhoWeAre";

const AboutPage = () => {
  return (
    <main>
      <BannerBreadcrumb
        items={[
          {
            label: "About",
          },
        ]}
        title="About Us"
      />
      <WhoWeAre />
      <Counter />
      <HelpThePeopleInNeedAbut />
      {/* <PopularCampaignsAbout /> */}
      <PopularCampaigns />
      {/* <AboutTestimonials /> */}
      <Testimonials />
      <CallNow />
      {/* <DonationProcessAbout /> */}
      <TeamMember />
    </main>
  );
};

export default AboutPage;

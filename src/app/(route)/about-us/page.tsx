import CallNow from "@/components/Home/CallNow";
import TeamMember from "@/components/Home/TeamMember";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import AboutTestimonials from "@/components/about/AboutTesimonials";
import Counter from "@/components/about/Counter";
import DonationProcessAbout from "@/components/about/DonationProcessAbout";
import HelpThePeopleInNeedAbut from "@/components/about/HelpThePeopleInNeedAbut";
import PopularCampaignsAbout from "@/components/about/PopularCampaignsAbout";
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
        image="/assets/blood-donor-bg.png"
      />
      <WhoWeAre />
      <Counter />
      <HelpThePeopleInNeedAbut />
      <PopularCampaignsAbout />
      <AboutTestimonials />
      <CallNow />
      <DonationProcessAbout />
      <TeamMember />
    </main>
  );
};

export default AboutPage;

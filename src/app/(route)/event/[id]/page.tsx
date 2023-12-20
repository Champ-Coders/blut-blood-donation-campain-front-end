import JoinUs from "@/components/Event/JoinUs";
import EventDetails from "@/components/EventDetails/EventDetails";
import EventRegisterForm from "@/components/EventDetails/EventRegisterForm";
import HomeEvent from "@/components/Home/HomeEvent";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";
import React from "react";

type EventDetailProps = {};

const EventDetail: React.FC<EventDetailProps> = () => {
  return (
    <main>
      <section>
        <BannerBreadcrumb
          items={[
            {
              label: "Event Details",
            },
          ]}
          title="Event Details"
          image="/assets/blood-donor-bg.png"
        />
      </section>
      <section>
        <EventDetails />
      </section>
      <EventRegisterForm />
      <JoinUs />
      <HomeEvent />
    </main>
  );
};
export default EventDetail;

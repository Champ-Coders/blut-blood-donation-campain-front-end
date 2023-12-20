import EventDetails from "@/components/EventDetails/EventDetails";
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
    </main>
  );
};
export default EventDetail;

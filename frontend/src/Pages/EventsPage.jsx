import React from "react";
import EventCard from "../Components/EventCard";
import Header from "../Components/Layout/Header";

const EventsPage = () => {
  return (
    <>
      <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard active={true} />
      </div>
    </>
  );
};

export default EventsPage;

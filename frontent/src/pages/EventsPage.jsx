import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
// import Loader from '../components/Layout/Loader';

const EventsPage = () => {
  // data={allEvents && allEvents[0]}
  //   const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : (
        
      )} */}
      <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard active={true} />
      </div>
    </>
  );
};

export default EventsPage;

import React from "react";
import CreateEvent from "../../Components/Shop/CreateEvent";
import DashboardHeader from "../../Components/Shop/Layout/DashBoardHeader";
import DashboardSideBar from "../../Components/Shop/Layout/DashboardSideBar";

const ShopCreateEvent = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[330px]">
          <DashboardSideBar active={6} />
        </div>
        <div className="w-full justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateEvent;

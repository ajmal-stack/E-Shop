import React from "react";
import DashBoardHeader from "../../Components/Shop/Layout/DashBoardHeader";
import DashboardSideBar from "../../Components/Shop/Layout/DashboardSideBar";

const ShopDashBoardPage = () => {
  return (
    <div>
      <DashBoardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={1} />
        </div>
        {/* <DashboardHero /> */}
      </div>
    </div>
  );
};

export default ShopDashBoardPage;

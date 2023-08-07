import React from "react";
import DashboardHeader from "../../Components/Shop/Layout/DashBoardHeader";
import DashboardSideBar from "../../Components/Shop/Layout/DashboardSideBar";
import AllCoupouns from "../../Components/Shop/AllCoupouns";

const ShopAllCoupouns = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
          <AllCoupouns />
        </div>
      </div>
    </div>
  );
};

export default ShopAllCoupouns;

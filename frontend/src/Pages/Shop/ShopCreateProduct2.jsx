// import React from "react";

// const ShopCreateProduct2 = () => {
//   return <div>ShopCreateProduct2</div>;
// };

// export default ShopCreateProduct2;

import React from "react";
import DashboardHeader from "../../Components/Shop/Layout/DashBoardHeader";
import DashboardSideBar from "../../Components/Shop/Layout/DashboardSideBar";
import CreateProduct2 from "../../Components/Shop/CreateProduct2.jsx";

const ShopCreateProduct2 = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={8} />
        </div>
        <div className="w-full justify-center flex">
          <CreateProduct2 />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateProduct2;

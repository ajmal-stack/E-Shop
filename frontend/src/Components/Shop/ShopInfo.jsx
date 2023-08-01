import React from "react";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const logoutHandler = () => {};

const ShopInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <>
      <div className="w-full py-5">
        <div className="w-full flex item-center justify-center">
          <img
            src={`${backend_url}${seller?.avatar}`}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
        <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
          {/* {seller.description} */}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <div className="p-3">
          <h5 className="font-[600]">Address</h5>
          <h4 className="text-[#000000a6]">{seller.address}</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Phone Number</h5>
          <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Total Products</h5>
          <h4 className="text-[#000000a6]">
            {/* {products && products.length} */}
            111
          </h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Shop Ratings</h5>
          <h4 className="text-[#000000b0]">
            {/* {averageRating}/5 */}
            4.7/5
          </h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Joined On</h5>
          <h4 className="text-[#000000b0]">
            {seller?.createdAt?.slice(0, 10)}
          </h4>
        </div>
        {isOwner && (
          <div className="py-3 px-4">
            <Link to="/settings">
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
              >
                <span className="text-white">Edit Shop</span>
              </div>
            </Link>
            <div
              className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
              onClick={logoutHandler}
            >
              <span className="text-white">Log Out</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopInfo;

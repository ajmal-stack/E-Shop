import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { addTocart } from '../../redux/actions/cart';
import { toast } from "react-toastify";
// { active, data }
const EventCard = ({ active }) => {
  //   const { cart } = useSelector((state) => state.cart);
  //   const dispatch = useDispatch();

  //   const addToCartHandler = (data) => {
  //     const isItemExists = cart && cart.find((i) => i._id === data._id);
  //     if (isItemExists) {
  //       toast.error("Item already in cart!");
  //     } else {
  //       if (data.stock < 1) {
  //         toast.error("Product stock limited!");
  //       } else {
  //         const cartData = { ...data, qty: 1 };
  //         dispatch(addTocart(cartData));
  //         toast.success("Item added to cart successfully!");
  //       }
  //     }
  //   }
  return (
    // ${active ? 'unset' : 'mb-12'}
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        {/* <img src={`${data.images[0]?.url}`} alt='' /> */}
        <img
          src={`https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg`}
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        {/* <h2 className={`${styles.productTitle}`}>{data.name}</h2> */}
        <h2 className={`${styles.productTitle}`}>iphone 14pro max 8/256gb</h2>
        {/* <p>{data.description}</p> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {/* {data.originalPrice}$ */}
              1099 $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {/* {data.discountPrice}$ */}
              999 $
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {/* {data.sold_out} sold */}
            120 sold
          </span>
        </div>
        {/* <CountDown data={data} /> */}
        <CountDown />
        <br />
        <div className="flex items-center">
          {/* <Link to={`/product/${data._id}?isEvent=true`}> */}
          <Link to={`/product/?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            //   onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

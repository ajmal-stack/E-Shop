import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

  return (
    <div className="w-full">
      {/* profile */}

      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}
      {/* order */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Change Password */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllOrdersOfUser(user._id));
  // }, []);
  // const orders = [
  //   {
  //     _id: "93768274tfgwgfsuytvfi",
  //     orderItems: [
  //       {
  //         name: "Iphone 14 pro max",
  //       },
  //     ],
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  // ];
  // const columns = [
  //   { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     minWidth: 130,
  //     flex: 0.7,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Delivered"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },
  //   {
  //     field: "itemsQty",
  //     headerName: "Items Qty",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.7,
  //   },

  //   {
  //     field: "total",
  //     headerName: "Total",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.8,
  //   },

  //   {
  //     field: " ",
  //     flex: 1,
  //     minWidth: 150,
  //     headerName: "",
  //     type: "number",
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={`/user/order/${params.id}`}>
  //             <Button>
  //               <AiOutlineArrowRight size={20} />
  //             </Button>
  //           </Link>
  //         </>
  //       );
  //     },
  //   },
  // ];
  // const row = [];

  // orders &&
  //   orders.forEach((item) => {
  //     row.push({
  //       id: item._id,
  //       itemsQty: item.orderItems.length,
  //       total: "US$ " + item.totalPrice,
  //       status: item.orderStatus,
  //     });
  //   });

  return (
    <div className="pl-8 pt-1">
      {/* <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      /> */}
      <p>AllRefundOrders</p>
    </div>
  );
};

const AllRefundOrders = () => {
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllOrdersOfUser(user._id));
  // }, []);
  // const orders = [
  //   {
  //     _id: "93768274tfgwgfsuytvfi",
  //     orderItems: [
  //       {
  //         name: "Iphone 14 pro max",
  //       },
  //     ],
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  // ];
  // const columns = [
  //   { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     minWidth: 130,
  //     flex: 0.7,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Delivered"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },
  //   {
  //     field: "itemsQty",
  //     headerName: "Items Qty",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.7,
  //   },

  //   {
  //     field: "total",
  //     headerName: "Total",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.8,
  //   },

  //   {
  //     field: " ",
  //     flex: 1,
  //     minWidth: 150,
  //     headerName: "",
  //     type: "number",
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={`/user/order/${params.id}`}>
  //             <Button>
  //               <AiOutlineArrowRight size={20} />
  //             </Button>
  //           </Link>
  //         </>
  //       );
  //     },
  //   },
  // ];
  // const row = [];

  // orders &&
  //   orders.forEach((item) => {
  //     row.push({
  //       id: item._id,
  //       itemsQty: item.orderItems.length,
  //       total: "US$ " + item.totalPrice,
  //       status: item.orderStatus,
  //     });
  //   });

  return (
    <div className="pl-8 pt-1">
      {/* <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      /> */}
      <p>AllRefundOrders</p>
    </div>
  );
};
const TrackOrder = () => {
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllOrdersOfUser(user._id));
  // }, []);
  // const orders = [
  //   {
  //     _id: "93768274tfgwgfsuytvfi",
  //     orderItems: [
  //       {
  //         name: "Iphone 14 pro max",
  //       },
  //     ],
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  // ];
  // const columns = [
  //   { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     minWidth: 130,
  //     flex: 0.7,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Delivered"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },
  //   {
  //     field: "itemsQty",
  //     headerName: "Items Qty",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.7,
  //   },

  //   {
  //     field: "total",
  //     headerName: "Total",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.8,
  //   },

  //   {
  //     field: " ",
  //     flex: 1,
  //     minWidth: 150,
  //     headerName: "",
  //     type: "number",
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={`/user/order/${params.id}`}>
  //             <Button>
  //               <AiOutlineArrowRight size={20} />
  //             </Button>
  //           </Link>
  //         </>
  //       );
  //     },
  //   },
  // ];
  // const row = [];

  // orders &&
  //   orders.forEach((item) => {
  //     row.push({
  //       id: item._id,
  //       itemsQty: item.orderItems.length,
  //       total: "US$ " + item.totalPrice,
  //       status: item.orderStatus,
  //     });
  //   });

  return (
    <div className="pl-8 pt-1">
      {/* <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      /> */}
      <p>TrackOrder</p>
    </div>
  );
};
const ChangePassword = () => {
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllOrdersOfUser(user._id));
  // }, []);
  // const orders = [
  //   {
  //     _id: "93768274tfgwgfsuytvfi",
  //     orderItems: [
  //       {
  //         name: "Iphone 14 pro max",
  //       },
  //     ],
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  // ];
  // const columns = [
  //   { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     minWidth: 130,
  //     flex: 0.7,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Delivered"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },
  //   {
  //     field: "itemsQty",
  //     headerName: "Items Qty",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.7,
  //   },

  //   {
  //     field: "total",
  //     headerName: "Total",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.8,
  //   },

  //   {
  //     field: " ",
  //     flex: 1,
  //     minWidth: 150,
  //     headerName: "",
  //     type: "number",
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={`/user/order/${params.id}`}>
  //             <Button>
  //               <AiOutlineArrowRight size={20} />
  //             </Button>
  //           </Link>
  //         </>
  //       );
  //     },
  //   },
  // ];
  // const row = [];

  // orders &&
  //   orders.forEach((item) => {
  //     row.push({
  //       id: item._id,
  //       itemsQty: item.orderItems.length,
  //       total: "US$ " + item.totalPrice,
  //       status: item.orderStatus,
  //     });
  //   });

  return (
    <div className="pl-8 pt-1">
      {/* <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      /> */}
      <p>ChangePassword</p>
    </div>
  );
};
const Address = () => {
  // const { user } = useSelector((state) => state.user);
  // const { orders } = useSelector((state) => state.order);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllOrdersOfUser(user._id));
  // }, []);
  // const orders = [
  //   {
  //     _id: "93768274tfgwgfsuytvfi",
  //     orderItems: [
  //       {
  //         name: "Iphone 14 pro max",
  //       },
  //     ],
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  // ];
  // const columns = [
  //   { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     minWidth: 130,
  //     flex: 0.7,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Delivered"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },
  //   {
  //     field: "itemsQty",
  //     headerName: "Items Qty",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.7,
  //   },

  //   {
  //     field: "total",
  //     headerName: "Total",
  //     type: "number",
  //     minWidth: 130,
  //     flex: 0.8,
  //   },

  //   {
  //     field: " ",
  //     flex: 1,
  //     minWidth: 150,
  //     headerName: "",
  //     type: "number",
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={`/user/order/${params.id}`}>
  //             <Button>
  //               <AiOutlineArrowRight size={20} />
  //             </Button>
  //           </Link>
  //         </>
  //       );
  //     },
  //   },
  // ];
  // const row = [];

  // orders &&
  //   orders.forEach((item) => {
  //     row.push({
  //       id: item._id,
  //       itemsQty: item.orderItems.length,
  //       total: "US$ " + item.totalPrice,
  //       status: item.orderStatus,
  //     });
  //   });

  return (
    <div className="pl-8 pt-1">
      {/* <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      /> */}
      <p>Address</p>
    </div>
  );
};

export default ProfileContent;

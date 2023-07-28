import React, { useState } from "react";
import Header from "../Components/Layout/Header";
import styles from "../styles/styles";
// import Loader from "../components/Layout/Loader";
import ProfileSidebar from "../../src/Components/Profile/ProfileSidebar";
import ProfileContent from "../../src/Components/Profile/ProfileContent";
// import { useSelector } from "react-redux";

const ProfilePage = () => {
  //   const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      {/* <> */}
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default ProfilePage;

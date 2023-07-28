import React, { useEffect } from "react";
import Signup from "../Components/Signup/Signup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);
  return <Signup />;
};

export default SignupPage;

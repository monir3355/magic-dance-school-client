import React from "react";
import studentImg from "./../../../../assets/images/panel/student.png";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {
  // const navigate = useNavigate();
  // const { user } = useAuth();
  // if (!user) {
  //   navigate("/login");
  //   return;
  // }
  return (
    <div className="my-4">
      <img className="w-1/2 mx-auto" src={studentImg} alt="" />
      <h1 className="text-4xl font-semibold text-center mt-6">
        Welcome to Student dashboard
      </h1>
    </div>
  );
};

export default UserHome;

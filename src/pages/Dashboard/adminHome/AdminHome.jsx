import React from "react";
import adminImg from "./../../../assets/images/panel/admin.png";
import useTitle from "../../../hooks/useTitle";

const AdminHome = () => {
  useTitle("Admin Home");
  return (
    <div className="my-4">
      <img className="w-1/2 mx-auto" src={adminImg} alt="" />
      <h1 className="text-4xl font-semibold text-center mt-6">
        Welcome to Admin dashboard
      </h1>
    </div>
  );
};

export default AdminHome;

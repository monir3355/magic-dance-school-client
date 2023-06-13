import React from "react";
import studentImg from "./../../../../assets/images/panel/student.png";

const UserHome = () => {
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

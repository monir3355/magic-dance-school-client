import React from "react";
import instructorImg from "../../../assets/images/panel/instructor.jpg";
import useTitle from "../../../hooks/useTitle";

const InstructorHome = () => {
  useTitle("Instructor Home");
  return (
    <div className="my-4">
      <img className="w-1/2 mx-auto" src={instructorImg} alt="" />
      <h1 className="text-4xl font-semibold text-center mt-6">
        Welcome to Instructor dashboard
      </h1>
    </div>
  );
};

export default InstructorHome;

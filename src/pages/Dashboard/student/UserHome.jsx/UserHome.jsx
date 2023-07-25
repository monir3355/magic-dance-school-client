import React, { useEffect } from "react";
import studentImg from "./../../../../assets/images/panel/student.png";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useTitle from "../../../../hooks/useTitle";

const UserHome = () => {
  useTitle("Student Home");
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [navigate, user]);
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

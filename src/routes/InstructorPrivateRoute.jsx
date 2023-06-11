import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorPrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (user && isInstructor) {
    return children;
  }
  if (loading || isInstructorLoading) {
    return (
      <div className="text-center mt-40">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorPrivateRoute;

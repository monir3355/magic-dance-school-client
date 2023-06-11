import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminPrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (user && isAdmin) {
    return children;
  }
  if (loading || isAdminLoading) {
    return (
      <div className="text-center mt-40">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;

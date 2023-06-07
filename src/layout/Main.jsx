import React from "react";
import Header from "../components/headers/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="max-w-[1440px] mx-auto">
      {noHeaderFooter || <Header />}
      <div className="min-h-[calc(100vh-421px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;

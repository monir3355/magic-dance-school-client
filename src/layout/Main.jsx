import React from "react";
import Header from "../components/headers/Header";
import Home from "../pages/home/home/Home";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-421px)]">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

import React from "react";
import banner from "./../../assets/images/banner/banner.jpeg";

const Banner = ({ children }) => {
  return (
    <div className="relative rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black rounded-lg"></div>
      <img
        className="w-full h-[400px] rounded-lg"
        src={banner}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default Banner;

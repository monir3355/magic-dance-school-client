import React, { useEffect, useRef } from "react";
import banner from "./../../assets/images/banner/banner.jpeg";
import anime from "animejs";

const Banner = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: textRef.current,
      translateX: [-200, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);
  return (
    <div className="relative rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black rounded-lg"></div>
      <img
        className="w-full h-[400px] rounded-lg"
        src={banner}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 ref={textRef} className="text-4xl lg:text-6xl font-bold">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Banner;

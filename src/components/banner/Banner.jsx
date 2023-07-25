import React, { useEffect, useRef } from "react";
import banner from "./../../assets/images/banner/banner.jpg";
import anime from "animejs";

const Banner = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: textRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
    });
  }, []);
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black"></div>
      <img className="w-full h-[200px]" src={banner} alt="Background Image" />
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
      >
        <h1 className="text-4xl lg:text-6xl font-bold">{children}</h1>
        <h4 className="font-semibold text-xl mt-3">Home- {children}</h4>
      </div>
    </div>
  );
};

export default Banner;

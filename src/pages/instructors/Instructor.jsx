import anime from "animejs";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Instructor = ({ instructor }) => {
  const cardRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (cardPosition.top < windowHeight && !animated) {
        anime({
          targets: cardRef.current,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 1000,
          easing: "easeOutSine",
        });
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);
  const { _id, name, email, image } = instructor;
  return (
    // <div className="card card-compact bg-base-100 shadow-xl">
    //   <figure>
    //     <img className="h-64 w-full" src={image} alt="" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       <span className="font-semibold">Instructor Name:</span> {name}
    //     </h2>
    //     <p>
    //       <span className="font-semibold">Email:</span> {email}
    //     </p>
    //     <div className="card-actions justify-end">
    //       <Link to={`/instructorDetail/${_id}`}>
    //         <button className="button-primary"></button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div
      ref={cardRef}
      className="mt-8 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
    >
      <div className="h-96 w-full">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={image}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Email: {email}
        </p>
        <Link to={`/instructorDetail/${_id}`}>
          <button className="buttonBorder">
            <span>View Details</span>
            <i></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Instructor;

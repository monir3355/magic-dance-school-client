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
    <div ref={cardRef} className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-semibold">Instructor Name:</span> {name}
        </h2>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/instructorDetail/${_id}`}>
            <button className="button-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

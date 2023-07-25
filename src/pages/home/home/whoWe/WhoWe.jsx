import React, { useEffect, useRef, useState } from "react";
import whoWeImg from "../../../../assets/images/whowe.jpg";
import anime from "animejs";

const WhoWe = () => {
  // Animate card
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
  return (
    <div
      ref={cardRef}
      className="mb-14 flex flex-col-reverse md:flex-row gap-12 justify-center items-center"
    >
      <div className="space-y-3 md:w-1/2">
        <h5 className="text-2xl font-semibold text-yellow-500">Who We Are</h5>
        <h1 className="text-3xl lg:text-5xl font-bold">
          BEST DANCE SCHOOL & STUDIO SINCE 1992
        </h1>
        <p>
          This also meant we needed to provide a learning environment run by
          experienced and successful coaches. However, our most important goal
          was to create a welcoming atmosphere and community in which everyone
          feels a sense of belonging.
        </p>
        <button className="buttonBorder">
          <span>About Us</span>
          <i></i>
        </button>
      </div>
      <div className="md:w-1/2">
        <img className="rounded-lg" src={whoWeImg} alt="" />
      </div>
    </div>
  );
};

export default WhoWe;

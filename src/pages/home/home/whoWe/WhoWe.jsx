import React from "react";
import whoWeImg from "../../../../assets/images/whowe.jpg";

const WhoWe = () => {
  return (
    <div className="mb-14 flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
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
        <button className="button-primary">About Us</button>
      </div>
      <div className="md:w-1/2">
        <img className="rounded-lg" src={whoWeImg} alt="" />
      </div>
    </div>
  );
};

export default WhoWe;

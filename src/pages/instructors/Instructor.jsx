import React from "react";

const Instructor = ({ instructor }) => {
  const { name, email, image } = instructor;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
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
          <button className="button-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

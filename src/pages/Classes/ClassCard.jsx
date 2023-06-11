import React, { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassCard = ({ singleClass }) => {
  const { image, class_name, email, instructor_name, available_seats, price } =
    singleClass;
  const [disabled, setDisabled] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  useEffect(() => {
    if (available_seats <= 0) {
      setDisabled(true);
    }
  }, []);
  return (
    <div
      className={`${
        available_seats > 0 ? "bg-base-100" : "bg-red-500 text-white"
      } card card-compact shadow-xl`}
    >
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-semibold">Class Name:</span> {class_name}
        </h2>
        <p>
          <span className="font-semibold">Instructor Name: </span>{" "}
          {instructor_name}
        </p>
        <p>
          <span className="font-semibold">Instructor Email: </span> {email}
        </p>
        <p>
          <span className="font-semibold">Available Seats: </span>{" "}
          {available_seats}
        </p>
        <p>
          <span className="font-semibold">Price: </span> ${price}
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={disabled || isAdmin || isInstructor}
            className="btn button-primary"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

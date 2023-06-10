import React from "react";

const Instructor = ({ instructor }) => {
  const {
    instructor_image,
    email,
    instructor_name,
    number_of_classes,
    name_of_classes,
  } = instructor;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={instructor_image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-semibold">Instructor Name:</span>{" "}
          {instructor_name}
        </h2>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Number of Classes:</span>{" "}
          {number_of_classes}
        </p>
        <p>
          <span className="font-semibold">Name of Classes:</span>{" "}
          {name_of_classes.map((name, index) => (
            <p key={name}>
              {index + 1}. {name}
            </p>
          ))}
        </p>
        <div className="card-actions justify-end">
          <button className="button-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

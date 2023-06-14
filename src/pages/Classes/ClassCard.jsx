import React, { useEffect, useRef, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import anime from "animejs";

const ClassCard = ({ singleClass }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    _id,
    image,
    class_name,
    email,
    instructor_name,
    available_seats,
    price,
    enrolled_students,
  } = singleClass;
  const [disabled, setDisabled] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (available_seats <= 0) {
      setDisabled(true);
    }
  }, []);
  const handleSelect = (_id) => {
    if (!user) {
      navigate("/login");
      return;
    }
    const savedClass = {
      classId: _id,
      image,
      class_name,
      instructor_name,
      available_seats,
      price,
    };
    axiosSecure.post("/selectedClasses", savedClass).then((data) => {
      if (data.data.insertedId) {
        setDisabled(true);
        Swal.fire({
          title: "Success!",
          text: "You have successfully selected a class",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

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
      className={`${
        available_seats > 0 ? "bg-base-100" : "bg-red-500 text-white"
      } card card-compact shadow-xl`}
    >
      <figure>
        <img className="h-60 w-full" src={image} alt="" />
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
          <span className="font-semibold">Enrolled Students: </span>{" "}
          {enrolled_students}
        </p>
        <p>
          <span className="font-semibold">Price: </span> ${price}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSelect(_id)}
            disabled={disabled || isAdmin || isInstructor}
            className="btn button-primary btn-sm"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

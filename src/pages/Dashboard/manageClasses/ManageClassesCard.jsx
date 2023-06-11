import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClassesCard = ({ singleClass, count, refetch }) => {
  const {
    _id,
    image,
    class_name,
    email,
    instructor_name,
    available_seats,
    price,
    status,
    feedback,
  } = singleClass;

  const handleApprove = (_id) => {
    fetch(`http://localhost:5000/classes/approved/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Successfully!", `Your Class is Approved!.`, "success");
        }
      });
  };
  const handleDenied = (_id) => {
    fetch(`http://localhost:5000/classes/denied/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Successfully!", `Your Class is Denied!.`, "success");
        }
      });
  };
  // feedback message
  const handleFeedback = async (_id) => {
    const { value: feedbackMessage } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
    });

    if (feedbackMessage) {
      const feedbackData = {
        feedback: feedbackMessage,
      };

      fetch(`http://localhost:5000/classes/feedback/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire("Success!", "Your feedback is sent!", "success");
          }
        })
        .catch((error) => {
          console.error("Error sending feedback:", error);
          Swal.fire("Error!", "Failed to send feedback.", "error");
        });
    }
  };

  return (
    <>
      <tr>
        <th>
          <label>
            <h5 className="font-semibold">{count + 1}</h5>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-40 h-28">
                <img className="rounded-lg" src={image} alt="Toy" />
              </div>
            </div>
            <div>
              <div className="font-bold">Class Name: {class_name}</div>
              <div className="text-sm opacity-75">
                <h6 className="">Instructor Name: {instructor_name}</h6>
                <h6>Email: {email}</h6>
                <p> Available seats: {available_seats}</p>
                <p>Price: ${price} </p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <p>{status}</p>
        </td>
        <th className="flex flex-col gap-1">
          {singleClass.status === "approved" ? (
            <button disabled className="btn btn-primary btn-sm">
              Approved
            </button>
          ) : (
            <button
              onClick={() => handleApprove(_id)}
              className="btn btn-primary btn-sm"
            >
              Approve
            </button>
          )}
          {singleClass.status === "denied" ? (
            <button disabled className="btn btn-primary btn-sm">
              denied
            </button>
          ) : (
            <button
              onClick={() => handleDenied(_id)}
              className="btn btn-primary btn-sm"
            >
              Deny
            </button>
          )}
          <button
            onClick={() => handleFeedback(_id)}
            className="btn btn-primary btn-sm mr-3"
          >
            Feedback
          </button>
        </th>
      </tr>
    </>
  );
};

export default ManageClassesCard;

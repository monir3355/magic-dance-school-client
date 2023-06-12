import React from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SelectedCard = ({ singleClass, count, refetch }) => {
  const { _id, image, class_name, available_seats, price } = singleClass;
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (_id) => {
    axiosSecure.delete(`/selectedClasses/${_id}`).then((data) => {
      if (data.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: "You have successfully delete a class",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
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
              <div className="w-24 h-16">
                <img className="rounded-lg" src={image} alt="Toy" />
              </div>
            </div>
            <div>
              <div className="font-bold">Class Name: {class_name}</div>
              <div className="text-sm opacity-75">
                <p> Available seats: {available_seats}</p>
                <p>Price: ${price} </p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary btn-sm mr-3"
          >
            Delete
          </button>
        </td>
        <th>
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-primary btn-sm mr-3">Pay</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default SelectedCard;

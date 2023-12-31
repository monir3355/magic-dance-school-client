import React from "react";
import { Link } from "react-router-dom";

const MyClassesCard = ({ singleClass, count }) => {
  const {
    _id,
    image,
    class_name,
    available_seats,
    price,
    status,
    feedback,
    enrolled_students,
  } = singleClass;
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
          <p>{enrolled_students} Students</p>
        </td>
        <td>
          <p>{feedback}</p>
        </td>
        <td>
          <p>{status}</p>
        </td>
        <th>
          <Link to={`/dashboard/classesUpdate/${_id}`}>
            <button className="btn btn-primary btn-sm mr-3">update</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default MyClassesCard;

import React from "react";

const EnrolledCard = ({ singleClass, count }) => {
  const { _id, image, class_name, price, instructor_name } = singleClass;
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
            </div>
          </div>
        </td>
        <td>
          <p>{instructor_name} </p>
        </td>
        <td>
          <p>Price: ${price} </p>
        </td>
      </tr>
    </>
  );
};

export default EnrolledCard;

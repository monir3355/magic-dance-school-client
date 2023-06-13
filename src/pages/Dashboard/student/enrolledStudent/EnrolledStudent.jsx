import React, { useEffect, useState } from "react";
import usePayment from "../../../../hooks/usePayment";
import EnrolledCard from "./EnrolledCard";

const EnrolledStudent = () => {
  const [payments] = usePayment();
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-6 mb-4 text-center">
        My Total Enrolled classes: {payments.length}
      </h2>
      <div className="overflow-x-auto w-full md:w-5/6 mx-auto mb-6">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <p>SL.</p>
                </label>
              </th>
              <th>Classes Info</th>
              <th>Instructors Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments?.map((singleClass, count) => (
              <EnrolledCard
                key={singleClass._id}
                singleClass={singleClass}
                count={count}
              ></EnrolledCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EnrolledStudent;

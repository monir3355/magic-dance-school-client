import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyClassesCard from "./MyClassesCard";
import useMyClasses from "../../../hooks/useMyClasses";

const MyClasses = () => {
  const [classes] = useMyClasses();
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-6 mb-4 text-center">
        Total My classes: {classes.length}
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
              <th>Admin Feedback</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes?.map((singleClass, count) => (
              <MyClassesCard
                key={singleClass._id}
                singleClass={singleClass}
                count={count}
              ></MyClassesCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

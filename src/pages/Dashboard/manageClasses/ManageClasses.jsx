import React from "react";
import useClasses from "../../../hooks/useClasses";
import ManageClassesCard from "./ManageClassesCard";
import useTitle from "../../../hooks/useTitle";

const ManageClasses = () => {
  useTitle("Manage Classes");
  const [classes, refetch] = useClasses();
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-6">
        Total Classes: {classes.length}
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((singleClass, count) => (
              <ManageClassesCard
                key={singleClass._id}
                singleClass={singleClass}
                count={count}
                refetch={refetch}
              ></ManageClassesCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

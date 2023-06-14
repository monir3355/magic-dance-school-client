import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SelectedCard from "./SelectedCard";
import useTitle from "../../../../hooks/useTitle";

const MySelectedClass = () => {
  useTitle("Selected Class");
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/selectedClasses");
    return res.data;
  });
  // console.log(classes);
  return (
    <div className="md:w-5/6 mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center">
        Total Selected Classes: {classes?.length}
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
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes?.map((singleClass, count) => (
              <SelectedCard
                key={singleClass._id}
                singleClass={singleClass}
                count={count}
                refetch={refetch}
              ></SelectedCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;

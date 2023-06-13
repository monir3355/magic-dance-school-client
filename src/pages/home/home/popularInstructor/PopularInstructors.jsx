import React from "react";
import Instructor from "../../../instructors/Instructor";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    }
  );
  return (
    <div className="pb-14">
      <div className="text-center space-y-3">
        <h2 className="font-semibold text-4xl">Popular Instructors </h2>
        <p>
          Popular instructors are revered for their expertise, engaging teaching
          style, and ability to inspire students. Their passion, knowledge, and
          effective communication create an impactful learning experience{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {instructors?.slice(0, 6).map((instructor) => (
          <Instructor instructor={instructor} key={instructor._id}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

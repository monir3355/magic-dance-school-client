import React from "react";
import Banner from "../../components/banner/Banner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Instructor from "./Instructor";
import useTitle from "../../hooks/useTitle";

const Instructors = () => {
  useTitle("Instructors");
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    }
  );
  // console.log(instructors);
  return (
    <div>
      <Banner>Instructors</Banner>
      <div className="px-4 md:px-0">
        <h2 className="text-4xl font-semibold mt-16 text-center">
          Our Instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {instructors?.map((instructor) => (
            <Instructor
              instructor={instructor}
              key={instructor._id}
            ></Instructor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;

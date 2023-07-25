import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../Classes/ClassCard";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/popularClasses");
    return res.data;
  });

  return (
    <div className="pt-8">
      <div className="text-center space-y-3">
        <h2 className="font-semibold text-4xl">Popular Classes</h2>
        <p>
          Popular classes cater to a wide range of interests and skill sets.
          From fitness to cooking, coding to painting, these classes provide
          valuable learning experiences.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {classes?.slice(0, 6).map((singleClass) => (
          <ClassCard
            singleClass={singleClass}
            key={singleClass._id}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;

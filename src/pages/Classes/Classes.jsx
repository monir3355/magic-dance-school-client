import React from "react";
import Banner from "../../components/banner/Banner";
import ClassCard from "./ClassCard";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const [classes] = useClasses();
  return (
    <div>
      <Banner>Classes</Banner>
      <div className="px-4 md:px-0">
        <h2 className="text-4xl font-semibold mt-16 text-center">
          All Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {classes?.map((singleClass) => (
            <ClassCard
              singleClass={singleClass}
              key={singleClass._id}
            ></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;

import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(`/classes/instructor/${user?.email}`);
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, [user]);
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-6 text-center">
        Total My classes: {classes.length}
      </h2>
    </div>
  );
};

export default MyClasses;

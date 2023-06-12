import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user]);
  return [classes];
};

export default useMyClasses;

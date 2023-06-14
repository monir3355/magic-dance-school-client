import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyClasses = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://magic-dance-arts-server.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user]);
  return [classes];
};

export default useMyClasses;

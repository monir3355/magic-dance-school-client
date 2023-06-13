import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const usePayment = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [user]);
  return [payments];
};

export default usePayment;

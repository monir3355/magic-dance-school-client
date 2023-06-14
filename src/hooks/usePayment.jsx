import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const usePayment = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`https://magic-dance-arts-server.vercel.app/payments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [user]);
  return [payments];
};

export default usePayment;

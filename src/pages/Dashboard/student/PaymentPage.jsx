import React from "react";
import { useLoaderData } from "react-router-dom";

const PaymentPage = () => {
  const selectedClass = useLoaderData();
  console.log(selectedClass);
  return (
    <div className="md:w-5/6 mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center">
        Please Give Your Payment Information
      </h2>
    </div>
  );
};

export default PaymentPage;

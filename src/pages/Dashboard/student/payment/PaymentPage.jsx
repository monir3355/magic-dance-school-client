import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentPage = () => {
  const selectedClass = useLoaderData();
  // console.log(selectedClass);
  // console.log(import.meta.env.VITE_stripe_payment);
  const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment);
  return (
    <div className="md:w-5/6 mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Please Give Your Payment Information
      </h2>
      <p className="text-xl mb-4">
        Please Pay from your card: ${selectedClass?.price}
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={selectedClass.price}
            selectedClass={selectedClass}
          />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;

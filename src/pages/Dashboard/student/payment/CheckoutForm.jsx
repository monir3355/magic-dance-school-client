import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, selectedClass }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  // console.log(price);
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError);
    }

    // console.log("paymentIntent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // const transactionId = paymentIntent.id;
      const payment = {
        image: selectedClass.image,
        class_name: selectedClass.class_name,
        instructor_name: selectedClass.instructor_name,
        available_seats: selectedClass.available_seats,
        name: user?.displayName,
        email: user?.email,
        date: new Date(),
        transactionId: paymentIntent.id,
        price,
        classesId: selectedClass._id, // my selected class id
        classClassId: selectedClass.classId, // when student selected class from class page id
      };
      axiosSecure.post("/payments", payment).then((res) => {
        // console.log("resss", res.data);
        if (res.data.insertResult.insertedId) {
          navigate("/dashboard/selectedClass");
          Swal.fire({
            title: "successfully!",
            text: "You have payment successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-6"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 mt-6">{cardError}</p>
      {transactionId && (
        <p className="text-green-500">
          Congratulations! for payment and your Transaction Id : {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;

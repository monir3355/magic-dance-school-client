import React from "react";
import usePayment from "../../../hooks/usePayment";
import HistoryRow from "./HistoryRow";
import useTitle from "../../../hooks/useTitle";

const PaymentHistory = () => {
  useTitle("Payment History");
  const payments = usePayment();
  // console.log(payments);
  return (
    <div className="md:w-5/6 mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center mb-4">
        My Payment History
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>SL.</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Transections ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments[0]?.map((payment, count) => (
                <HistoryRow
                  key={payment._id}
                  payment={payment}
                  count={count}
                ></HistoryRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

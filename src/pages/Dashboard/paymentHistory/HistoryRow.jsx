import React from "react";

const HistoryRow = ({ payment, count }) => {
  const { transactionId, price, class_name, date } = payment;
  return (
    <tr>
      <th>{count + 1}</th>
      <td>{class_name}</td>
      <td>{price}</td>
      <td>{transactionId}</td>
      <td>{date}</td>
    </tr>
  );
};

export default HistoryRow;

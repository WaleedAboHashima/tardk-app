import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { paypal } from 'paypal-rest-sdk';

function Success() {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const [error, setError] = useState();
  const paymentId = queryParam.get("paymentId");
  const PayerID = queryParam.get("PayerID");
  console.log(paymentId);
  console.log(PayerID);
  const executePaymentData = {
    payer_id: PayerID,
  };
    paypal.payment.execute();
  return <div>{error}</div>;
}

export default Success;

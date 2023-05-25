import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ConfirmPaymentHandler } from "../apis/Payment/ConfirmPayment";
// import { paypal } from 'paypal-rest-sdk';

function Success() {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const [error, setError] = useState();
  const paymentId = queryParam.get("paymentId");
  const PayerID = queryParam.get("PayerID");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      ConfirmPaymentHandler({
        paymentId,
        payerId: PayerID,
        amount: localStorage.getItem("amount"),
      })
    ).then((res) => {
      if (res.payload.data) {
        switch (res.payload.status) {
          case 200:
            setError(200);
            localStorage.removeItem("amount");
            setTimeout(() => {
              window.location.pathname = "/";
            }, 3000);
            break;
          case 500:
            setError(500);
            localStorage.removeItem("amount");
            break;
          default:
            break;
        }
      }
    });
  }, [dispatch]);
  // paypal.payment.execute();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
          {error === 200 ? <img width={'50%'} height={'50%'} src="/assets/PaymentSuccess.png" alt="PaymentSuccessful" /> : error === 500 ? <img src="/assets/PaymentFailure.png" alt="PaymentFailure" /> : ""}
    </div>
  );
}

export default Success;

import React, { useEffect, useRef } from "react";

export default function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool Product",
                amount: { currency: "EU", value: 650.0 },
              },
            ],
          });
        },
          onApprove: async (data, actions) => {
              const order = await actions.order.capture()
              console.log('Successful purchase:' + order)
          },
          onError: (err) => {
              console.log(err)
          }
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

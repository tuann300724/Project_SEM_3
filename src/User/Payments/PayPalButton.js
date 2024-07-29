import axios from "axios";
import React, { useEffect, useState } from "react";

const PayPalButton = ({ price, userid }) => {
  const [isSdkReady, setIsSdkReady] = useState(false);
  useEffect(() => {
    // Check if PayPal SDK script is already loaded
    const addPayPalSdk = () => {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AX5rqiCeo-fBQboS4b1PQC85QGHTJ1mkCNgS6PeHQnMjKGQuaPCVeRbcCLE_09-BBskfMJkJEHvfiAhS";
      script.async = true;
      script.onload = () => setIsSdkReady(true);
      script.onerror = (err) =>
        console.error("PayPal SDK failed to load.", err);
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPayPalSdk();
    } else {
      setIsSdkReady(true);
    }
  }, []);

  useEffect(() => {
    if (isSdkReady) {
      const renderButton = () => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price,
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `Transaction completed ${details.payer.name.given_name}`
                );
                window.location.reload();
                axios
                  .post(
                    `http://localhost:5223/api/user/recharge/${userid}?amount=${price}`
                  )
                  .then((result) => {
                    console.log(result);
                  })
                  .catch((err) => console.log(err));
              
              });
            },
            onError: (err) => {
              console.error("PayPal Checkout onError", err);
            },
          })
          .render("#paypal-button-container");
      };
      document.getElementById("paypal-button-container").innerHTML = "";
      renderButton();
    }
  }, [isSdkReady, price, userid]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;

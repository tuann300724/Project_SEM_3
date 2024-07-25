import React, { useEffect } from 'react';

const PayPalButton = () => {
  useEffect(() => {
    const loadPaypalScript = () => {
      return new Promise((resolve) => {
        if (window.paypal) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = "https://www.paypal.com/sdk/js?client-id=AX5rqiCeo-fBQboS4b1PQC85QGHTJ1mkCNgS6PeHQnMjKGQuaPCVeRbcCLE_09-BBskfMJkJEHvfiAhS&currency=USD";
          script.onload = resolve;
          document.body.appendChild(script);
        }
      });
    };

    loadPaypalScript().then(() => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '0.01'
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              alert(`Transaction completed by ${details.payer.name.given_name}`).then(() => {
               
              });
            });
          },
          onError: (err) => {
            console.error('PayPal Checkout onError', err);
          }
        }).render('#paypal-button-container');
      }
    });
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;

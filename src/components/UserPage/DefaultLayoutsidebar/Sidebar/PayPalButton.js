import React, { useEffect, useRef } from 'react';

const PayPalButton = ({onTransactionComplete }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const addPayPalSdk = () => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=AX5rqiCeo-fBQboS4b1PQC85QGHTJ1mkCNgS6PeHQnMjKGQuaPCVeRbcCLE_09-BBskfMJkJEHvfiAhS`;
      script.async = true;
      script.onload = () => {
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
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              onTransactionComplete();
              if (window.opener) {
                window.close();
              }    
            });
          },
          onError: (err) => {
            console.error('PayPal Checkout onError', err);
          }
        }).render(paypalRef.current);
      };
      script.onerror = (err) => console.error('PayPal SDK failed to load.', err);
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPayPalSdk();
    } else {
      window.paypal.Buttons().render(paypalRef.current);
    }
  }, [onTransactionComplete]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;

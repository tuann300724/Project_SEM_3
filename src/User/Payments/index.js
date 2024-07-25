import React, { useEffect, useState } from "react";
import styles from "./payment.module.scss";
import classNames from "classnames/bind";
const PayPalButton = () => {
    const [isSdkReady, setIsSdkReady] = useState(false);
  
    useEffect(() => {
      // Check if PayPal SDK script is already loaded
      const addPayPalSdk = () => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AX5rqiCeo-fBQboS4b1PQC85QGHTJ1mkCNgS6PeHQnMjKGQuaPCVeRbcCLE_09-BBskfMJkJEHvfiAhS`;
        script.async = true;
        script.onload = () => setIsSdkReady(true);
        script.onerror = (err) => console.error('PayPal SDK failed to load.', err);
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
            });
          },
          onError: (err) => {
            console.error('PayPal Checkout onError', err);
          }
        }).render('#paypal-button-container');
      }
    }, [isSdkReady]);
  
    return <div id="paypal-button-container"></div>;
  };
function Payments(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("container")}>
      <div className={cx("containter-payment")}>
        <div className={cx("title")}>Nhập số tiền muốn nạp</div>
        <div className={cx("input-amount")}>
          <input type="number" required placeholder="Nhập số tiền 10.000" />
        </div>
        <div className={cx("row")}>
          <div className={cx("col-lg-4 col-6")}>
            <div className={cx("amount-choose")}>100.000 đ</div>
          </div>
          <div className={cx("col-lg-4 col-6")}>
            <div className={cx("amount-choose")}>200.000 đ</div>
          </div>
          <div className={cx("col-lg-4 col-6")}>
            <div className={cx("amount-choose")}>300.000 đ</div>
          </div>
          <div className={cx("col-lg-4 col-6")}>
            <div className={cx("amount-choose")}>500.000 đ</div>
          </div>
          <div className={cx("col-lg-4 col-6")}>
            <div className={cx("amount-choose")}>1.000.000 đ</div>
          </div>
          <div className={cx("col-lg-4 col-6")}>
            <div className={cx("amount-choose")}>2.000.000 đ</div>
          </div>
        </div>

        <div className={cx("btn-payment")}>
          <div className={cx("payment-info")}>
            {PayPalButton()}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;

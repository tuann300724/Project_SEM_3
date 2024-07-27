import React, { useState } from "react";
import styles from "./payment.module.scss";
import classNames from "classnames/bind";
import PayPalButton from "./PayPalButton";

const amountchoose = [
  { id: 1, price: 5 },
  { id: 2, price: 10 },
  { id: 3, price: 15 },
  { id: 4, price: 20 },
  { id: 5, price: 50 },
  { id: 6, price: 100 },
];

function Payments() {
  const [amount, setAmount] = useState(0);
  const cx = classNames.bind(styles);
  const [userid] = useState(1); // Static user id for now

  const handleAmount = (price) => {
    setAmount(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("container")}>
      <div className={cx("containter-payment")}>
        <div className={cx("title")}>Enter Amount</div>
        <form onSubmit={handleSubmit}>
          <div className={cx("input-amount")}>
            <input
              type="number"
              required
              placeholder="Enter amount 5 $"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, e.target.value))}
            />
          </div>
          <div className={cx("row")}>
            {amountchoose.map((item) => (
              <div className={cx("col-lg-4 col-6")} key={item.id}>
                <div
                  className={cx("amount-choose")}
                  onClick={() => handleAmount(item.price)}
                >
                  {item.price} $
                </div>
              </div>
            ))}
          </div>

        </form>
        <div className={cx("btn-payment")}>
          <div className={cx("payment-info")}>
            {amount > 0 ? (
              <PayPalButton userid={userid} price={amount} />
            ) : (
              <div>Please enter a valid amount.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;

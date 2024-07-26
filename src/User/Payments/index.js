import React, { useEffect, useRef, useState } from "react";
import styles from "./payment.module.scss";
import classNames from "classnames/bind";
import PayPalButton from "./PayPalButton";

const amountchoose = [
  {
    id: 1,
    price: 5,
  },
  {
    id: 2,
    price: 10,
  },
  {
    id: 3,
    price: 15,
  },
  {
    id: 4,
    price: 20,
  },
  {
    id: 5,
    price: 50,
  },
  {
    id: 6,
    price: 100,
  },
];

function Payments(props) {
  const [amount, setAmount] = useState();
  const cx = classNames.bind(styles);
  const handleAmount = (price) => {
    setAmount(price);
  };

  useEffect(() => {
    console.log(amount);
  }, [amount]);
  return (
    <div className={cx("container")}>
      <div className={cx("containter-payment")}>
        <div className={cx("title")}>Nhập số tiền muốn nạp</div>
        <div className={cx("input-amount")}>
          <input type="number" required placeholder="Nhập số tiền 10.000" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div className={cx("row")}>
          {amountchoose.map((item, index) => (
            <div className={cx("col-lg-4 col-6")}>
              <div className={cx("amount-choose")} key={index} onClick={() => handleAmount(item.price)}>
                {item.price} $
              </div>
            </div>
          ))}
        </div>

        <div className={cx("btn-payment")}>
          <div className={cx("payment-info")}>
            <PayPalButton />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;

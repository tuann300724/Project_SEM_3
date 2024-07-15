import React from "react";
import styles from "./HouseForRent.module.scss";
import classNames from "classnames/bind";
import Searchsell from "../Aboutus/Searchsell";

const cx = classNames.bind(styles);
function HouseForRent(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("ads")}></div>

      <div className={cx("wrapper-content")}>
        <div className={cx("wrapper-search")}>
          <Searchsell />
        </div>
      </div>

      <div className={cx("ads")}></div>
    </div>
  );
}

export default HouseForRent;

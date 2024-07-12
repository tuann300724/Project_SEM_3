import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Headers(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>BatDongSan</div>

      <div className={cx("nav-menu")}>
        <div className={cx("menu")}>
          <li className={cx("item")}>Home</li>
          <li className={cx("item")}>House For Rent</li>
          <li className={cx("item")}>House For Sell</li>
          <li className={cx("item")}>News</li>
        </div>

        <div className={cx("authlogin")}>
          <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
          <div className={cx("login")}>Login</div>
          <div className={cx("register")}>Register</div>
          <button className={cx("post")}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Headers;

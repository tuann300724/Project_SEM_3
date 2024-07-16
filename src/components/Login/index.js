import React from "react";
import classNames from "classnames/bind";
import style from "./Login.module.scss";

const cx = classNames.bind(style);

function Login(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-layout")}>
        <div className={cx("layout-conent")}>
          <div className={cx("layout-right")}>
            <img
              src="https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg"
              alt="logo"
              className={cx("layout-img-size")}
            />
          </div>
          <div className={cx("layout-left")}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import avatarcat from "../../../../public/images/catavatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartPie,
  faCreditCard,
  faCube,
  faSignsPost,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import PayPalButton from "./PayPalButton";
function Sidebar(props) {
  const cx = classNames.bind(styles);
  const sidebarRef = useRef(null);
  const [paypal, setpaypal] = useState(false);
  const tippyRef = useRef(null);

  const handleMenu = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle(styles.active);
    }
  };
  const handleTransactionComplete = () => {
    setpaypal(false);
  };
  const handlepaypal = () =>{
    setpaypal(!paypal)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tippyRef.current &&
        !tippyRef.current.contains(event.target) &&
        !event.target.closest(".tippy-box")
      ) {
        setpaypal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={cx("container-sidebar", "active")}
      id="sidebar"
      ref={sidebarRef}
    >
      <div className={cx("openmenu")} id="openmenu" onClick={handleMenu}>
        {" "}
        <FontAwesomeIcon icon={faBars} />{" "}
      </div>
      <div className={cx("sidebar")}>
        <div className={cx("sidebar-info")}>
          <div className={cx("avatar")}>
            <img src={avatarcat} alt="avatar" />
          </div>
          <span className={cx("username")}>Thanh Phong</span>
        </div>
        <div className={cx("account-amout")}>
          <span className={cx("title")}>Số dư tài khoản</span>
          <div className={cx("main-info")}>
            <span className={cx("main-text")}>TK chính</span>
            <span className={cx("main-amount")}>0</span>
          </div>
          <div className={cx("code-info")}>
            <span className={cx("bank-title")}>Mã chuyển khoản</span>
            <span className={cx("bank-code")}>BDS20868774</span>
          </div>
          <div className={cx("recharge")}>
            <Tippy trigger="click" interactive={true} 
              content={
                <div className={cx("paypal-button")} ref={tippyRef}>
                  {paypal && <PayPalButton onTransactionComplete={handleTransactionComplete} />}
                </div>
              }
            >
              <button onClick={handlepaypal}>
                <FontAwesomeIcon icon={faCreditCard} /> Nạp tiền
              </button>
            </Tippy>
          </div>
        </div>
        <div className={cx("sidebar-list")}>
          <Link to="/user/dashboard">
            <li>
              {" "}
              <FontAwesomeIcon icon={faChartPie} /> Tổng Quan
            </li>
          </Link>
          <Link to="/user/post">
            <li>
              {" "}
              <FontAwesomeIcon icon={faSignsPost} /> Đăng Tin
            </li>
          </Link>
          <Link to="/user/package">
            <li>
              {" "}
              <FontAwesomeIcon icon={faCube} /> Gói Hội Viên
            </li>
          </Link>
          <Link to="/#">
            <li>
              {" "}
              <FontAwesomeIcon icon={faUser} /> Quản lý tài khoản
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

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
import axios from "axios";
function Sidebar(props) {
  const cx = classNames.bind(styles);
  const sidebarRef = useRef(null);
  const [usersid, setUsersid] = useState(JSON.parse(localStorage.getItem('DataLogin')))
  const handleMenu = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle(styles.active);
    }
  };
  const [user,setUser] = useState([]);

    useEffect(() =>{
      axios.get(`http://localhost:5223/api/user/${usersid.Id}`)
      .then(result => {
        setUser(result.data.data)
        console.log("Sidebar: ", result.data.data)
      })
      .catch(err => console.log(err))
    }, [usersid.Id])
  return (
    <div
      className={cx("container-sidebar")}
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
            <img src={user.avatar ? user.avatar : avatarcat} alt="avatar" />
          </div>
          <span className={cx("username")}>{user.username}</span>
        </div>
        <div className={cx("account-amout")}>
          <span className={cx("title")}>Số dư tài khoản</span>
          <div className={cx("main-info")}>
            <span className={cx("main-text")}>TK chính</span>
            <span className={cx("main-amount")}>{user.money} $</span>
          </div>
          <div className={cx("code-info")}>
            <span className={cx("bank-title")}>Mã chuyển khoản</span>
            <span className={cx("bank-code")}>{user.code}</span>
          </div>
          <div className={cx("recharge")}>
            <Link to="/user/payments">
              <button>
                <FontAwesomeIcon icon={faCreditCard} /> Nạp tiền
              </button>
            </Link>
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
          <Link to="/user/changeinfo">
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

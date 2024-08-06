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
  const [usersid, setUsersid] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const storedUsersid = JSON.parse(localStorage.getItem("DataLogin"));
    setUsersid(storedUsersid);
  }, []);

  const handleMenu = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle(styles.active);
    }
  };

  useEffect(() => {
    if (usersid) {
      axios
        .get(`http://localhost:5223/api/user/${usersid.Id}`)
        .then((result) => {
          setUser(result.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [usersid]);

  return (
    <div className={cx("container-sidebar")} id="sidebar" ref={sidebarRef}>
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
          <span className={cx("title")}>Account Balance</span>
          <div className={cx("main-info")}>
            <span className={cx("main-text")}>Amount</span>
            <span className={cx("main-amount")}>{user.money} $</span>
          </div>
          <div className={cx("code-info")}>
            <span className={cx("bank-title")}>Transfer code</span>
            <span className={cx("bank-code")}>{user.code}</span>
          </div>
          <div className={cx("recharge")}>
            <Link to="/user/payments">
              <button>
                <FontAwesomeIcon icon={faCreditCard} /> Recharge
              </button>
            </Link>
          </div>
        </div>
        <div className={cx("sidebar-list")}>
          <Link to="/user/dashboard">
            <li>
              {" "}
              <FontAwesomeIcon icon={faChartPie} /> Overview
            </li>
          </Link>
          <Link to="/user/post">
            <li>
              {" "}
              <FontAwesomeIcon icon={faSignsPost} /> Post
            </li>
          </Link>
          <Link to="/user/package">
            <li>
              {" "}
              <FontAwesomeIcon icon={faCube} />  Package
            </li>
          </Link>
          <Link to="/user/changeinfo">
            <li>
              {" "}
              <FontAwesomeIcon icon={faUser} /> Manage Account
            </li>
          </Link>
          <Link to="/user/listpost">
            <li>
              {" "}
              <FontAwesomeIcon icon={faUser} /> List Post
            </li>
          </Link>
          <Link to="/user/feedback">
            <li>
              {" "}
              <FontAwesomeIcon icon={faUser} /> FeedBack
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import avatarcat from "../../../../public/images/catavatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faCreditCard, faCube, faDashboard, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
function Sidebar(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("container-sidebar")}>
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
          <div className={cx("main-info")}>
            <span className={cx("main-text")}>TK Khuyễn mãi</span>
            <span className={cx("main-amount")}>0</span>
          </div>
          <div className={cx("code-info")}>
            <span className={cx("bank-title")}>Mã chuyển khoản</span>
            <span className={cx("bank-code")}>BDS20868774</span>
          </div>
          <div className={cx("recharge")}>
            <button> <FontAwesomeIcon icon={faCreditCard} /> Nạp tiền</button>
          </div>
        </div>
        <div className={cx("sidebar-list")}>
            <Link to="/user/dashboard"><li> <FontAwesomeIcon icon={faChartPie}/> Tổng Quan</li></Link>
            <Link to="/user/post"><li> <FontAwesomeIcon icon={faSignsPost} /> Đăng Tin</li></Link>
            <Link to="/#"><li> <FontAwesomeIcon icon={faCube} /> Gói Hội Viên</li></Link>
            <Link to="/#"><li> <FontAwesomeIcon icon={faUser} />  Quản lý tài khoản</li></Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

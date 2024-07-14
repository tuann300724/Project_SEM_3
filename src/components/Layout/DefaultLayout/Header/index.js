import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from '../../../../public/images/logo.svg'
import heart from '../../../../public/images/heartblack.svg'
import menubar from '../../../../public/images/menubars.svg'
function Headers(props) {
  const cx = classNames.bind(styles);
  useEffect(() => {
    const btnmenu = document.getElementById("menu")
    const closemenu = document.getElementById("closemenu")
    const menuactive = document.getElementById("activemenu")
    btnmenu.addEventListener("click", function () {
      menuactive.classList.add(styles.active)
    })
    closemenu.addEventListener("click", function () {
      menuactive.classList.remove(styles.active)
    })

  }, [])
  return (
    <div className={cx('headers')}>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}> <img src={logo} alt="Logo" /> </div>

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
      <div className={cx("wrapper-mobile")}>
        <div className={cx("wrapper-logo")}>
          <div className={cx("logo")}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={cx("heart")}>
            <img src={heart} alt="Heart" />
            <div className={cx("count")}>
              10
            </div>
          </div>
          <div className={cx("menubars")} id="menu">
            <img src={menubar} alt="bars" />
          </div>
        </div>
      </div>
      <div className={cx("menu-mobile")} id="activemenu">
          <div className={cx("close-menu")} id="closemenu">X</div>
      </div>
    </div>
  );
}

export default Headers;

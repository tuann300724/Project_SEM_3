import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from '../../../../public/images/logo.svg'
import heart from '../../../../public/images/heartblack.svg'
import menubar from '../../../../public/images/menubars.svg'
import avatar from '../../../../public/images/avatar-trang-2.jpg'
import notification from '../../../../public/images/notificationicon.svg'
import packagetheme from '../../../../public/images/packagetheme.svg'
import { Link } from "react-router-dom";
function Headers(props) {
  const cx = classNames.bind(styles);
  useEffect(() => {
    const btnmenu = document.getElementById("menu")
    // const closemenu = document.getElementById("closemenu")
    const menuactive = document.getElementById("activemenu")
    const overlayout = document.getElementById("overlayout")
    btnmenu.addEventListener("click", function () {
      menuactive.classList.add(styles.active)
      overlayout.style.visibility = "visible";
    })
    // closemenu.addEventListener("click", function () {
    //   menuactive.classList.remove(styles.active)
    //   overlayout.style.visibility = "hidden";

    // })
    overlayout.addEventListener("click", function () {
      menuactive.classList.remove(styles.active)
      overlayout.style.visibility = "hidden";

    })
  }, [])
  return (
    <div className={cx('headers')}>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}> <img src={logo} alt="Logo" /> </div>

        <div className={cx("nav-menu")}>
          <div className={cx("menu")}>
            <li ><Link className={cx("item")} to="/">Home</Link></li>
            <li ><Link className={cx("item")} to="/about" >House For Rent</Link></li>
            <li ><Link className={cx("item")}></Link> House For Sell</li>
            <li ><Link className={cx("item")}></Link> News</li>
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
      <div className={cx("overlayout")} id="overlayout">
      </div>
      <div className={cx("menu-mobile")} id="activemenu">
        {/* <div className={cx("close-menu")} id="closemenu">X</div> */}
        <div className={cx("user")}>
          <div className={cx("information")}>
            <div className={cx("user-info")}>
              <div className={cx("user-logo")}>
                <img src={avatar} alt="avatar" />
              </div>
              <div className={cx("user-name")}>
                Thanh Phong
              </div>
            </div>
            <div className={cx("notification")}>
              <img src={notification} alt="Notification" />
            </div>
          </div>
          <div className={cx("user-post")}>
            <button>Đăng tin</button>
          </div>
          <div className={cx("package")}>
            <img src={packagetheme} alt="packge" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;

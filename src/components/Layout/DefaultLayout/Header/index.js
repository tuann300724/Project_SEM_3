import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../../public/images/logo.svg";
import heart from "../../../../public/images/heartblack.svg";
import menubar from "../../../../public/images/menubars.svg";
import catavatar from "../../../../public/images/catavatar.jpg";
import avatar from "../../../../public/images/avatar-trang-2.jpg";
import notification from "../../../../public/images/notificationicon.svg";
import packagetheme from "../../../../public/images/packagetheme.svg";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../Layout/Popper";
import Accountitem from "../../../Login"; // login
import Register from "../../../Register";

function Headers() {
  const cx = classNames.bind(styles);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("DataLogin")));
  useEffect(() => {
    const btnmenu = document.getElementById("menu");
    // const closemenu = document.getElementById("closemenu")
    const menuactive = document.getElementById("activemenu");
    const overlayout = document.getElementById("overlayout");
    btnmenu.addEventListener("click", function () {
      menuactive.classList.add(styles.active);
      overlayout.style.visibility = "visible";
    });
    // closemenu.addEventListener("click", function () {
    //   menuactive.classList.remove(styles.active)
    //   overlayout.style.visibility = "hidden";

    // })
    overlayout.addEventListener("click", function () {
      menuactive.classList.remove(styles.active);
      overlayout.style.visibility = "hidden";
    });
  }, []);
  const [login, setlogin] = useState({ status: false, code: 1 });
  const handelLogin = () => {
    setlogin((prevState) => ({ status: !login.status, code: 1 }));
  };
  const handeRegister = () => {
    setlogin((prevState) => ({ status: !login.status, code: 2 }));
  };
  //
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = (newToggleState) => {
    setIsToggled(newToggleState);
  };
  console.log("check tippy", isToggled);
  useEffect(() => {});

  return (
    <div className={cx("headers")}>
      {login.status && isToggled && (
        <div className={cx("test")} onClick={handelLogin}></div>
      )}
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          {" "}
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" />{" "}
          </Link>
        </div>

        <Tippy
          interactive
          visible={login.status && isToggled}
          placement="top"
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                {login.code === 2 ? (
                  <Register />
                ) : (
                  <Accountitem onToggleChange={handleToggleChange} />
                )}
              </PopperWrapper>
            </div>
          )}
          popperOptions={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [-50, -650],
                },
              },
              {
                name: "flip",
                enabled: false,
              },
              {
                name: "preventOverflow",
                options: {
                  padding: { top: 0 },
                },
              },
            ],
          }}
        >
          <div className={cx("nav-menu")}>
            <div className={cx("menu")}>
              <li>
                <Link className={cx("item")} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={cx("item")} to="/house-for-rent">
                  Rent
                </Link>
              </li>
              <li>
                <Link className={cx("item")} to="/house-for-sell">
                  Sell
                </Link>{" "}
              </li>
              <li>
                <Link className={cx("item")} to="/new">
                  News
                </Link>{" "}
              </li>
            </div>

            {user ? (
              <div className={cx("auth-islogin")}>
                <FontAwesomeIcon icon={faHeart} className={cx("icon")} />

                <div className={cx("auth-avatar")}>
                  {" "}
                  <img src={catavatar} alt="" />{" "}
                </div>
                <div className={cx("auth-username")}>{user.Username}</div>
                <Link to={"user/post"} style={{color: "#000"}}><button className={cx("post")}>Post</button></Link>
              </div>
            ) : (
              <div className={cx("authlogin")}>
                <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
                <div className={cx("login")} onClick={handelLogin}>
                  Login
                </div>
                <div className={cx("register")} onClick={handeRegister}>
                  Register
                </div>
              </div>
            )}
          </div>
        </Tippy>
      </div>
      <div className={cx("wrapper-mobile")}>
        <div className={cx("wrapper-logo")}>
          <div className={cx("logo")}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className={cx("heart")}>
            <img className="bx-tada" src={heart} alt="Heart" />
            <div className={cx("count")}>10</div>
          </div>
          <div className={cx("menubars")} id="menu">
            <img src={menubar} alt="bars" />
          </div>
        </div>
      </div>
      <div className={cx("overlayout")} id="overlayout"></div>
      <div className={cx("menu-mobile")} id="activemenu">
        {/* <div className={cx("close-menu")} id="closemenu">X</div> */}
        <div className={cx("user")}>
          <div className={cx("information")}>
            <div className={cx("user-info")}>
              <div className={cx("user-logo")}>
                <img src={avatar} alt="avatar" />
              </div>
              <div className={cx("user-name")}>
                {user ? user.username : "Chưa login"}
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
        <div className={cx("menu-table")}>
          <ul className={cx("menu-table-list")}>
            <li className={cx("menu-table-item")}>
              <Link to="/user/dashboard">
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/litsting.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Danh sách tin</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/heart.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Tin đăng đã lưu</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link to={"/"}>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/home.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Trang chủ</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link to={"/house-for-sell"}>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/all.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Nhà đất bán</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link to={"/house-for-rent"}>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/complex.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Nhà đất cho thuê</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link to={"/new"}>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/news.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Tin tức</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("auth-logout")}>
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
}

export default Headers;

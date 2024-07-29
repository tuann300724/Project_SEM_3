import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../../../ThemContext";
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
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  faArrowDown,
  faBars,
  faChartPie,
  faChevronDown,
  faCreditCard,
  faHouse,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Headers() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:5223/api/user/${user.Id}`)
    .then(result => {
      setUsers(result.data.data)
      console.log("Sidebar: ", result.data.data)
    })
    .catch(err => console.log(err))
  }, [user.Id])
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const context = useContext(ThemeContext);
  console.log("truyen xuyen ko gian", context);

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
  const handleLogout = () => {
    localStorage.removeItem("DataLogin");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className={cx("headers")}>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          {" "}
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" />{" "}
          </Link>
        </div>

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

              <Tippy
                interactive={true}
                content={
                  <div className={cx("auth-logout-pc")}>
                    <div className={cx("auth-logout-menu")}>
                      <Link to="/user/dashboard">
                        <li>
                          <FontAwesomeIcon icon={faChartPie} /> Tổng quan
                        </li>
                      </Link>
                      <Link to="/user/dashboard">
                        <li>
                          <FontAwesomeIcon icon={faBars} /> Tin đăng đã lưu
                        </li>
                      </Link>
                      <Link to="/user/changeinfo">
                        <li>
                          <FontAwesomeIcon icon={faUser} /> Thay đổi thông tin
                          cá nhân
                        </li>
                      </Link>
                      <Link to="/user/payments">
                        <li>
                          <FontAwesomeIcon icon={faCreditCard} /> Nạp tiền
                        </li>
                      </Link>
                    </div>
                    <div className={cx("logout")} onClick={handleLogout}>
                      <FontAwesomeIcon icon={faRightFromBracket} /> Đăng Xuất
                    </div>
                  </div>
                }
              >
                <div className={cx("auth-flex")}>
                  <div className={cx("auth-avatar")}>
                    {" "}
                    <img src={users.avatar ? users.avatar : catavatar} alt="" />{" "}
                  </div>
                  <div className={cx("auth-username")}>{users.username}</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ marginRight: "12px" }}
                  />
                </div>
              </Tippy>

              <Link to="/user/post" style={{ color: "#000" }}>
                <button className={cx("post")}>Post</button>
              </Link>
            </div>
          ) : (
            <div className={cx("authlogin")}>
              <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
              <Link className={cx("item")} to="/login">
                <div className={cx("login")}>Login</div>
              </Link>
              <Link to="/register">
                <div className={cx("register")}>Register</div>
              </Link>
            </div>
          )}
        </div>
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
              <div className={cx("user-name")}>
                {user ? user.Username : "Chưa login"}
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

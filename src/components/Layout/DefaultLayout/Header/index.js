import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../../public/images/logo.svg";
import heart from "../../../../public/images/heartblack.svg";
import menubar from "../../../../public/images/menubars.svg";
import avatar from "../../../../public/images/avatar-trang-2.jpg";
import notification from "../../../../public/images/notificationicon.svg";
import packagetheme from "../../../../public/images/packagetheme.svg";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../Layout/Popper";
import Accountitem from "../../../Login";

function Headers(props) {
  const cx = classNames.bind(styles);
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
  const [login, setlogin] = useState(false);
  const handelLogin = () => {
    setlogin(!login);
  };
  return (
    <div className={cx("headers")}>
      {login && <div className={cx("test")} onClick={handelLogin}></div>}
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
          visible={login}
          placement="top"
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <Accountitem />
              </PopperWrapper>
            </div>
          )}
          popperOptions={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [-50, -700],
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
                  House For Rent
                </Link>
              </li>
              <li>
                <Link className={cx("item")} to="/house-for-sell">
                  House For Sell
                </Link>{" "}
              </li>
              <li>
                <Link className={cx("item")} to="/new">
                  News
                </Link>{" "}
              </li>
              <li>
                <Link className={cx("item")} to="/infopost">
                  InfoPost
                </Link>{" "}
              </li>
            </div>

            <div className={cx("authlogin")}>
              <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
              <div className={cx("login")} onClick={handelLogin}>
                Login
              </div>
              <div className={cx("register")}>Register</div>
              <button className={cx("post")}>Post</button>
            </div>
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
            <img src={heart} alt="Heart" />
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
              <div className={cx("user-name")}>Thanh Phong</div>
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
              <Link to="/usermanager">
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
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/ad.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Quản lý tin tài trợ</span>
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
              <Link>
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
              <Link>
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
              <Link>
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
              <Link>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/complex.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Dự án</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/news.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Tin tức</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/wiki.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Wiki BĐS</span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/barchart.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Phân tích đánh giá </span>
              </Link>
            </li>
            <li className={cx("menu-table-item")}>
              <Link>
                <span className={cx("icon")}>
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/notebook.svg"
                    alt="icon"
                  />
                </span>
                <span className={cx("text-span")}>Danh bạ</span>
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

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
  faBars,
  faChartPie,
  faChevronDown,
  faCreditCard,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Headers() {
  const [user, setUser] = useState(null); // lấy dataUser Login trong Storege ra
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favPostVisible, setFavPostVisible] = useState(false);

  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const context = useContext(ThemeContext);
  console.log("truyenContext", context);

  useEffect(() => {
    const fetchFavoritePosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5117/api/FavoritePost/${user.Id}`
        );
        const favoritePostIds = response.data.data.map((post) => post.postId);
        const postDetailsPromises = favoritePostIds.map((id) =>
          axios.get(`http://localhost:5117/api/Post/${id}`)
        );

        const postsResponses = await Promise.all(postDetailsPromises);
        const postsData = postsResponses.map((res) => res.data.data);
        setFavorites(postsData);
      } catch (err) {
        console.error("Error fetching favorite posts or post details:", err);
      }
    };

    if (user && user.Id) {
      fetchFavoritePosts();
    }
  }, [user, context.checkFavoritesStatus]);
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5223/api/user/${user.Id}`)
        .then((result) => {
          setUsers(result.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  useEffect(() => {
    console.log("favorites", favorites);
  }, [favorites]);

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
      window.location.reload();
    }, 2000);
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("DataLogin")));
  }, [context]);
  const toggleFavPostVisibility = () => {
    setFavPostVisible(!favPostVisible);
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
            <li>
              <Link className={cx("item")} to="/about">
                About us
              </Link>{" "}
            </li>
          </div>

          {user ? (
            <div className={cx("auth-islogin")}>
              <div className={cx("fav-post")} onClick={toggleFavPostVisibility}>
                <div className={cx("heart-post")}>
                  <img className="bx-tada" src={heart} alt="Heart" />
                  <div className={cx("count")}>{favorites.length}</div>
                </div>
                <div
                  className={classNames(cx("fav-post-list"), {
                    [cx("show")]: favPostVisible,
                  })}
                >
                  <span className={cx("title")}>Post Have Saved</span>
                  {favorites.map((item, index) => (
                    <Link to={`/infopost/${item.id}`}  key={index}>
                    <div className={cx("post-save-info")}>
                      <div className={cx("post-image")}>
                        <img src={item.postImages[0].imageUrl} alt="post" />
                      </div>
                      <div className={cx("title-post")}>{item.title}</div>
                    </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Tippy
                interactive={true}
                content={
                  <div className={cx("auth-logout-pc")}>
                    <div className={cx("auth-logout-menu")}>
                      <Link to="/user/dashboard">
                        <li>
                          <FontAwesomeIcon icon={faChartPie} /> DashBoard
                        </li>
                      </Link>

                      <Link to="/user/changeinfo">
                        <li>
                          <FontAwesomeIcon icon={faUser} /> Change personal information
                        </li>
                      </Link>
                      <Link to="/chat">
                        <li>
                          <FontAwesomeIcon icon={faUser} /> Chat
                        </li>
                      </Link>
                      <Link to="/user/payments">
                        <li>
                          <FontAwesomeIcon icon={faCreditCard} /> Recharge
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
                    <img
                      src={users.avatar ? users.avatar : catavatar}
                      alt=""
                    />{" "}
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
              <div className={cx("fav-post")}>
                <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
                <div className={cx("fav-post-list")}></div>
              </div>
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
              <div className={cx("user-logo")}>
                <img src={user ? user.avatar : catavatar} alt="avatar" />
              </div>
              <div className={cx("user-name")}>
                {user ? user.Username : "Chưa login"}
              </div>
            </div>
            <div className={cx("notification")}>
              <img src={notification} alt="Notification" />
            </div>
          </div>
          <div className={cx("user-post")}>
            <button>Post</button>
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
                <span className={cx("text-span")}>News feed</span>
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
                <span className={cx("text-span")}>Saved posts</span>
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
                <span className={cx("text-span")}>Home</span>
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
                <span className={cx("text-span")}>Real estate for sale</span>
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
                <span className={cx("text-span")}>Real estate for lease</span>
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
                <span className={cx("text-span")}>News</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("auth-logout")} onClick={handleLogout}>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Headers;

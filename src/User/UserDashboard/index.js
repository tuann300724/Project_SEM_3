import React, { useEffect, useState } from "react";
import styles from "./UserDashboard.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hotfire from "../../public/images/hotfire.svg";
import infoicon from "../../public/images/infoicon.svg";
import heart from "../../public/images/heartred.svg";
import {
  faClipboardCheck,
  faDollarSign,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
function UserDashboard(props) {
  const cx = classNames.bind(styles);
  const [userid, setUserid] = useState(JSON.parse(localStorage.getItem('DataLogin')));
  const [user, setUser] = useState([])
  const [countpost ,setCountpost] = useState(0);
  const [countcontact, setCountcontact] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/User/userchat/${userid.Id}`)
      .then((result) => {
        const usercontact = result.data.length;
        console.log("usercontact", usercontact);
        setCountcontact(usercontact);
      })
      .catch((err) => console.log(err));
  }, [userid]);
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${userid.Id}`)
      .then((result) => {
        setUser(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() =>{
    axios.get(`http://localhost:5117/api/Post`)
    .then((result) => {
      const post = result.data.data
      console.log("POST", post)
      const countpost = post.filter(c => c.userId === user.id);
      console.log("POST", countpost)

      setCountpost(countpost.length);
    }).catch((err) => console.log(err));
  }, [])

  return (
    <div className="container-xl">
      <span className={cx("title")}>Account Overview</span>
      <div className={cx("row")}>
        <div className={cx("col-xxl-4 col-xl-6 col-12")}>
          <div className={cx("card-info")}>
            <div className={cx("card-inside")}>
              <span className={cx("card-title")}>
                {" "}
                <FontAwesomeIcon icon={faUserGroup} /> Contact person
              </span>
              <span className={cx("card-count")}>{countcontact} persons</span>
            </div>
          </div>
        </div>
        <div className={cx("col-xxl-4 col-xl-6 col-12")}>
          <div className={cx("card-info")}>
            <div className={cx("card-inside")}>
              <span className={cx("card-title")}>
                {" "}
                <FontAwesomeIcon icon={faClipboardCheck} /> Posted
              </span>
              <span className={cx("card-count")}>{countpost} posts</span>
              <span className={cx("card-more")}>
                <Link>Post</Link>
              </span>
            </div>
          </div>
        </div>
        <div className={cx("col-xxl-4 col-xl-6 col-12")}>
          <div className={cx("card-info")}>
            <div className={cx("card-inside")}>
              <span className={cx("card-title")}>
                {" "}
                <FontAwesomeIcon icon={faDollarSign} /> Account Balance
              </span>
              <span className={cx("card-count")}>{user.money} $</span>
              <span className={cx("card-more")}>
                <Link>Recharge</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className={cx("title")}>Information just for you</span>
      <div className={cx("row")}>
        <div className={cx("col-xxl-4 col-xl-6 col-12")}>
          <div className={cx("notification-info")}>
            <div className={cx("notification-title")}>
              <div className={cx("icon")}>
                <img src={hotfire} alt="icon" />
              </div>
              <span className={cx("info")}>Important</span>
            </div>
            <div className={cx("notification-children")}>
              <span className={cx("children-title")}>
              Secret to save up to 37% on posting/pushing costs with Membership Package!              </span>
              <span className={cx("children-content")}>
              Only from 10$/month, own exclusive benefits! Sign up now!
              </span>
              <div className={cx("children-btn")}>
                <button>
                  {" "}
                  <span>+</span> Register now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-xxl-4 col-xl-6 col-12")}>
          <div className={cx("notification-info")}>
            <div className={cx("notification-title")}>
              <div className={cx("icon")}>
                <img src={infoicon} alt="icon" />
              </div>
              <span className={cx("info")}>Information</span>
            </div>
            <div className={cx("notification-alert")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-automation-id="svg-icon"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 65 64"
                className="svg-icon-wrapper"
                da-id="svg-icon"
              >
                <circle cx="32.418" cy="32" r="32" fill="#000"></circle>
                <mask
                  id="a"
                  width="65"
                  height="64"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                  style={{maskType: "alpha"}}
                >
                  <circle cx="32.418" cy="32" r="32" fill="#000"></circle>
                </mask>
                <g mask="url(#a)">
                  <path
                    fill="#fff"
                    d="M33.461 27.084s-1.081-3.459-2.78-6.797c-1.697-3.339-2.8-5.062-2.425-8.31.374-3.249 2.97-7.048 4.801-6.812 1.832.235 1.745 1.711 1.93 3.6s1.163 6.506 2.601 8.543c1.439 2.037 5.374 6.747 7.336 9.303 1.558 2.027 2.542 5.276 3.553 8.153 0 0 1.436 2.763 2.603 6.857 1.167 4.093 9.35 10.472 9.35 10.472L57.77 63.47l-11.656 5.082s-5.02-6-6-7.066-2.605-2.45-3.112-2.524c-.508-.072-2.393 1.2-12.726-5.403 0 0-2.626.074-5.22-1.819-2.595-1.892-.079-5.225-.079-5.225l1.208-.953s-2.393-.877-2.514-2.884c-.12-2.006 2.666-4.081 2.666-4.081s-2.506-.517-2.463-2.697 4.374-6.279 4.374-6.279-2.055-2.737-.951-4.851 3.015-3.817 7.224-1.096c4.21 2.721 4.943 3.415 4.943 3.415z"
                  ></path>
                  <path
                    fill="#C20000"
                    d="M35.923 37.88c-.145.564-.3.521-.13 1.08-.675 3.617 1.208 4.85 1.515 5.11-2.191 1.631-2.962 4.97-2.456 7.666.392 2.09 1.443 4.276 3.415 5.05 1.474.578 3.176.23 4.553-.545 1.377-.776 2.49-1.937 3.581-3.082-.35 1.62-1.706 2.992-1.618 4.648.072 1.339 1.068 2.42 2.005 3.375l4.862 4.953-5.537 2.413s-5.018-6-6-7.066c-.98-1.065-2.605-2.448-3.112-2.523-.507-.073-2.393 1.202-12.726-5.404 0 0-1.034.03-2.444-.416a2 2 0 0 1 .123-.186c.57-.785 1.38-1.357 2.195-1.88a37 37 0 0 1 5.053-2.716c.83-.363 1.676-.7 2.434-1.199.758-.498 1.428-1.18 1.733-2.035.304-.857.179-1.901-.46-2.546.207-.033.364-.075.52-.215.672-.601 1.118-1.42 1.427-2.268.158-.436.284-.892.261-1.355s-.211-.937-.583-1.212c.529-.23.658-.65 1.007-1.11.33-.437.632-.908.79-1.433.157-.522.155-1.112-.103-1.593l-.005-.01.005.01c.364.677.392 1.49.27 2.249s-.384 1.491-.575 2.24M21.295 24.767s-1.182 1.856.951 4.851c0 0 1.128-.757 3.133-.397a75 75 0 0 1 4.217.912s-11.279-1.887-5.509-7.81c0 0-2.246.57-2.794 2.444zm.445 5.351s-2.308 3.798 1.449 4.934 4.802 1.047 4.802 1.047-2.97-.772-4.632.306c-1.663 1.079-3.024 2.19-3.024 2.19s-1.898-.03-2.41-2.122 1.07-4.735 3.815-6.353z"
                  ></path>
                  <path
                    fill="#C20000"
                    d="M20.182 45.56s-2.2-.472-2.513-2.884c-.314-2.413 3.583-4.794 3.583-4.794l2.612-1.738s-2.016 1.215-1.548 3.56c.469 2.344 2.67 2.332 4.893 2.765 0 0-3.326.698-4.1 1.035s-2.928 2.056-2.928 2.056z"
                  ></path>
                  <path
                    fill="#C20000"
                    d="M22.52 43.84s-3.085 2.204-3.545 2.672c-.46.469-1.915 3.318-.47 4.724 1.444 1.405 3.761 2.03 3.761 2.03l3.431-3.136-3.747 2.122s2.74-1.858 3.047-2.55c0 0-2.181 1.245-3.28-.773-1.098-2.017-.37-4.318.804-5.092zm6.128-13.69c2.735.565 6.557 1.128 7.78 3.99-.01-2.521-2.466-3.072-2.466-3.072s-4.842-1.05-7.773-1.695c-2.125-.468-3.242-.129-3.694.092 1.927-.516 4.337.31 6.153.686m-2.463 12.784c2.282-.106 4.773-.705 6.904.411.14.074.262.167.372.27-.337-1.735-1.904-1.553-6.06-1.087-1.73.195-2.89.461-3.664.715a14 14 0 0 1 2.448-.31"
                  ></path>
                  <path
                    fill="#C20000"
                    d="M34.088 27.413s-5.158-3.476-6.438-4.26c-1.279-.781-2.53-.867-3.246-.875-.186-.002-.368.093-.54.234 1.968-.351 4.425 1.335 5.885 2.52 1.044.849 2.018 1.78 2.99 2.714.342.329.695.646 1.044.969.627.58 1.082 1.19 1.327 1.878.186.355.225.647.19.877q.01.1.011.206a2.7 2.7 0 0 0 .444-1.264c.161-1.627-1.667-3-1.667-3zM30.187 36.4c-3.18-.633-4.098-.575-5.43-.496-.542.032-.982.28-1.32.57 1.596-.709 3.848-.377 5.461-.16 1.662.223 3.291.62 4.641 1.673a4.17 4.17 0 0 1 1.372 1.914c.143-.497.206-.983.206-.983-.004-1.972-1.751-1.885-4.93-2.519z"
                  ></path>
                </g>
              </svg>
              <p>You have updated all the information of today 👏</p>
            </div>
          </div>
        </div>
        <div className={cx("col-xxl-4 col-xl-6 col-12")}>
          <div className={cx("notification-info")}>
            <div className={cx("notification-title")}>
              <div className={cx("icon")}>
                <img src={heart} alt="icon" />
              </div>
              <span className={cx("info")}>Suggest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

import React, { useEffect, useState } from "react";
import styles from "./profileuser.module.scss";
import zaloicon from "../../public/images/zaloicon.svg";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function ProfileUser(props) {
  const cx = classNames.bind(styles);
  const param = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${param.id}`)
      .then((result) => {
        setUser(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    
    axios.get(`http://localhost:5117/api/Post`)
    .then((result) => {
      const post = result.data.data
      const countpost = post.filter(c => c.userId === parseInt(param.id));
      console.log("POST", countpost)
      setData(countpost)

    }).catch((err) => console.log(err));
  }, [param.id]);
  function formatPrice(price) {
    if (price == null || isNaN(price)) {
      return "N/A"; // hoặc bạn có thể trả về giá trị mặc định khác
    }
    const format = (value) => {
      const formatted = value.toFixed(2);
      return formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted;
    };

    if (price >= 1000000) {
      return `${format(price / 1000000)} Billions`;
    } else if (price >= 1000) {
      return `${format(price / 1000)} Millions`;
    } else if (price >= 1) {
      return `${format(price / 1)}  Thousand`;
    } else {
      return format(price);
    }
  }
  return (
    <div className={cx("container-xl")}>
      <div className="row">
        <div className={cx("col-4")}>
          <div className={cx("container-content-right")}>
            <div className={cx("box-content")}>
              <div className={cx("content-flex")}>
                <div className={cx("content-image")}>
                  <img
                    src={user.avatar}
                    alt="avatar"
                  />
                </div>
                <div className={cx("content-username")}>{user.username}</div>
              </div>
              <div className={cx("button-box-flex")}>
                <Link to={`https://zalo.me/${user.phone}`} >
                <div className={cx("button-zalo")}>
                  <div className={cx("image-zalo")}>
                    <img src={zaloicon} alt="" />
                  </div>
                  <span>Text Zalo</span>
                </div>
                </Link>
                <div className={cx("button-phone")}>
                  <span>Call {user.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-8")}>
          <div className={cx("container-content-left")}>
            <div className={cx("title")}>List Post</div>
            <div className={cx("row")}>
             {data.map((item,index) => (
                 <div className={cx("col-4")}>
                 <div className={cx("box-content-info")}>
                   <Link to={`/infopost/${item.id}`}>
                   <div className={cx("box-image")}>
                     <img
                       src={item.postImages[0].imageUrl}
                       alt="post"
                     />
                   </div>
                   </Link>
                   <div className={cx("box-info")}>
                     <div className={cx("content-info")}>
                       {item.title}
                     </div>
                     <div className={cx("info-amount")}>
                       <div className={cx("price")}>{formatPrice(item.price)}/Months</div>
                       <div className={cx("reddog")}>・</div>
                       <div className={cx("area")}>{item.area} m</div>
                     </div>
                     <div className={cx("info-address")}>
                       <FontAwesomeIcon icon={faLocationDot} /> {item.address}
                     </div>
                   </div>
                 </div>
               </div>
             ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;

import React, { useEffect, useState } from "react";
import styles from "./chat.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import catavatar from "../../public/images/catavatar.jpg";
import Sidechat from "./Sidechat";

function ChatPrivate(props) {
  const cx = classNames.bind(styles);
  const [Selectid, setSelecetid] = useState(null);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5223/api/User")
      .then((result) => {
        setUser(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-xl">
      <div className="row">
        <div className={cx("col-3")}>
          <div className={cx("container-list-user")}>
            <span className={cx("title-user")}>Hộp thư</span>
            <div className={cx("list-user-menu")}>
              {user.map((item, index) => (
                <div
                  className={cx("list-user-list")}
                  key={index}
                  onClick={(e) => setSelecetid(item.id)}
                >
                  <div className={cx("list-user-image")}>
                    <img src={item.avatar || catavatar} alt="avatar" />
                  </div>
                  <div className={cx("list-user-info")}>
                    <span className={cx("username")}>{item.username}</span>
                    <span className={cx("small-message")}> <span className={cx("greendot")}></span> Đang hoạt động</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={cx("col-9")}>
          {Selectid ? (
            <Sidechat userId={Selectid} />
          ) : (
            <div className={cx("container-box-chat")}>
              <div className={cx("empty-message")}>
                <span>Choose a user to chat</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPrivate;

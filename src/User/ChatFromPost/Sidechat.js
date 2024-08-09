import React, { useEffect, useState } from "react";
import styles from "./chat.module.scss";
import catavatar from "../../public/images/catavatar.jpg";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFly } from "@fortawesome/free-brands-svg-icons";
import { faFaceSmile, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import * as signalR from "@microsoft/signalr";

import axios from "axios";
import { useParams } from "react-router-dom";
function Sidechat() {
  const cx = classNames.bind(styles);
  const [isPickerEmoji, setisPickerEmoji] = useState(false);
  const [connection, setConnection] = useState(null);
  const [message, setMessage] = useState();
  const [usernamerecivce, setUsernameRecivce] = useState([]);
  const [MessageHistory, setMessageHistory] = useState([]);
  const [userlogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const [user, setUser] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5223/api/User/${userlogin.Id}`)
        .then((result) => {
          setUser(result.data.data);
          console.log("userne", result.data.data)
        })
        .catch((err) => console.log(err));
    }, [userlogin]);
  const param = useParams();
  // tham gia phòng chat
  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5223/chat", {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("Connection established");
        setConnection(newConnection);
        newConnection.invoke("Joinid", userlogin["Id"], parseInt(param.id));
      })
      .catch((e) => {
        console.log("Connection failed", e);
      });

    return () => {
      newConnection.stop();
    };
  }, [param.id]);
  // nhận tin nhắn
  useEffect(() => {
    if (connection) {
      connection.on("ReceiveMessage", (username, userId, message, avatar) => {
        setMessageHistory((messages) => [
          ...messages,
          { username, userId, message, avatar },
        ]);
      });
      connection.on("ReceviceMessageHistory", (message) => {
        setMessageHistory(message);
      });
    }
  }, [connection]);
  useEffect(() => {
    console.log(MessageHistory);
  }, [MessageHistory]);
  // gửi tin nhắn
  const sendmessage = async (e) => {
    e.preventDefault();
    if (connection && connection._connectionStarted) {
      try {
        await connection.invoke(
          "Sendmessage",
          userlogin.Id,
          message,
          parseInt(param.id)
        );
        setMessage("");
      } catch (error) {
        console.log("Error sending message via SignalR:", error);
      }
    } else {
      console.log("No SignalR connection");
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${param.id}`)
      .then((result) => {
        console.log(result);
        setUsernameRecivce(result.data.data);
      })
      .catch((err) => console.log(err));
  }, [param.id]);
  useEffect(() => {
    console.log("user đc chọn", param.id);
  }, [param.id]);
  return (
    <div>
      <form onSubmit={sendmessage}>
        <div className={cx("container-box-chat")}>
          <div className={cx("nav-box-chat")}>
            <div className={cx("nav-flex-menu")}>
              <div className={cx("nav-flex")}>
                <div className={cx("avatar-check")}>
                  <img src={usernamerecivce.avatar || catavatar} alt="" />
                </div>
                <div className={cx("info-check")}>
                  <span className={cx("username-check")}>
                    {usernamerecivce.username}
                  </span>
                  <span className={cx("check-time")}>Online</span>
                </div>
              </div>
              <div className={cx("call-info")}>
                <div className={cx("icon-phone")}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("main-content")}>
          {MessageHistory.map((item,index) =>(
                  <div className={cx(user.id === item.userId ? "message-info-send" : "message-info-recivce")} key={index}>
                  <div className={cx("user-avatar")} data-userlogin={user.id} data-usernhan={item.userId}>
                    <img
                      src={user.id === item.userId ? user.avatar  : item.avatar } 
                      alt="avatar"
                    />
                  </div>
                  <span className={cx(user.id === item.userId ? "user-message-send" : "user-message-recivce")}>{item.message}</span>
                </div>
                ))}
          </div>
          <div className={cx("chat-input")}>
            <div className={cx("chat-flex")}>
              <div className={cx("input-chat")}>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div
                  className={cx("emoij-chat")}
                  onClick={() => setisPickerEmoji(!isPickerEmoji)}
                >
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <div
                    className={cx(
                      "emoji",
                      isPickerEmoji ? "d-block" : "d-none"
                    )}
                  >
                    <Picker data={data} onEmojiSelect={console.log} />
                  </div>
                </div>
              </div>
              <div className={cx("icon-send")}>
                <button>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Sidechat;

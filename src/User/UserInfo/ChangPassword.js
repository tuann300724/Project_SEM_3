import React, { useState } from "react";
import axios from "axios";
import styles from "./Userinfo.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

function ChangPassword(props) {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);
  const [userinfo] = useState(JSON.parse(localStorage.getItem("DataLogin")));
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault(); 

    // Kiểm tra các điều kiện của mật khẩu mới
    const passwordRequirements = [
      { regex: /[A-Z]/, message: "Password must contain at least 1 uppercase character" },
      { regex: /[0-9]/, message: "Password must contain at least 1 numeric character" },
      { regex: /.{8,}/, message: "Password must be at least 8 characters" },
    ];

    for (const requirement of passwordRequirements) {
      if (!requirement.regex.test(newPassword)) {
        setMessage(requirement.message);
        return;
      }
    }
    
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation password do not match");
      return;
    }

    const data = {
      oldPassword: currentPassword,
      newPassword: newPassword
    };

    try {

      const response = await axios.post(`http://localhost:5223/api/Auth/changepasswordinfo/${userinfo.Id}`, data);
      alert("Password changed successfully");
      localStorage.removeItem("DataLogin");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1000);
      window.location.reload();
    } catch (error) {
      // Handling specific error messages
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleChangePassword}>
        <div className={cx("small-title")}>Change password</div>
        <div className={cx("current-password")}>Current Password</div>
        <div className={cx("input-currentpassword")}>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className={cx("current-password")}>New password</div>
        <div className={cx("input-currentpassword")}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={cx("current-password")}>Enter a new password</div>
        <div className={cx("input-currentpassword")}>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {message && <div className={cx("validatexxxxxxxxxxxxx")}>{message}</div>}
        <div className={cx("checkvalidate")}>
          <div className={cx("checkvalidatex2")}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
            </svg>
            <div type="tertiary" className={cx("checkvalidatex3")}>
            Contains at least 1 uppercase character
            </div>
          </div>
          <div className={cx("checkvalidatex2")}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
            </svg>
            <div type="tertiary" className={cx("checkvalidatex3")}>
            Contains at least 1 numeric character
            </div>
          </div>
          <div className={cx("checkvalidatex2")}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
            </svg>
            <div type="tertiary" className={cx("checkvalidatex3")}>
            Password minimum 8 characters
            </div>
          </div>
        </div>
        <hr />
        <div className={cx("button-info")}>
          <button type="submit">Save changes</button>
        </div>
      </form>
    </div>
  );
}

export default ChangPassword;

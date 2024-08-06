import React, { useState } from "react";
import axios from "axios";
import styles from "./Userinfo.module.scss";
import classNames from "classnames/bind";

function ChangPassword(props) {
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
      { regex: /[A-Z]/, message: "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa" },
      { regex: /[0-9]/, message: "Mật khẩu phải chứa ít nhất 1 ký tự số" },
      { regex: /.{8,}/, message: "Mật khẩu phải tối thiểu 8 ký tự" },
    ];

    for (const requirement of passwordRequirements) {
      if (!requirement.regex.test(newPassword)) {
        setMessage(requirement.message);
        return;
      }
    }

    if (newPassword !== confirmPassword) {
      setMessage("Mật khẩu mới và mật khẩu xác nhận không khớp");
      return;
    }

    const data = {
      oldPassword: currentPassword,
      newPassword: newPassword
    };

    try {

      const response = await axios.post(`http://localhost:5223/api/Auth/change-password/${userinfo.Id}`, data);
      alert("Đổi mật khẩu thành công");
      window.location.reload();


    } catch (error) {
      // Handling specific error messages
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Có lỗi xảy ra");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleChangePassword}>
        <div className={cx("small-title")}>Đổi mật khẩu</div>
        <div className={cx("current-password")}>Mật khẩu hiện tại</div>
        <div className={cx("input-currentpassword")}>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className={cx("current-password")}>Mật khẩu mới</div>
        <div className={cx("input-currentpassword")}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={cx("current-password")}>Nhập lại mật khẩu mới</div>
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
              Chứa ít nhất 1 ký tự viết hoa
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
              Chứa ít nhất 1 ký tự số
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
              Mật khẩu tối thiểu 8 ký tự
            </div>
          </div>
        </div>
        <hr />
        <div className={cx("button-info")}>
          <button type="submit">Lưu thay đổi</button>
        </div>
      </form>
    </div>
  );
}

export default ChangPassword;

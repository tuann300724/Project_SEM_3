import React from "react";
import styles from './Userinfo.module.scss'
import classNames from "classnames/bind";
function ChangPassword(props) {
    const cx = classNames.bind(styles);
  return (
    <div>
      <div className={cx("small-title")}>Đổi mật khẩu</div>
      <div className={cx("current-password")}>Mật khẩu hiện tại</div>
      <div className={cx("input-currentpassword")}>
        <input type="password" />
      </div>
      <div className={cx("current-password")}>Mật khẩu mới</div>
      <div className={cx("input-currentpassword")}>
        <input type="password" />
      </div>
      <div className={cx("current-password")}>Nhập lại mật khẩu mới</div>
      <div className={cx("input-currentpassword")}>
        <input type="password" />
      </div>
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
    </div>
  );
}

export default ChangPassword;

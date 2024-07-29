import React from "react";
import styles from './Userinfo.module.scss'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
function ChangeInfo(props) {
    const cx = classNames.bind(styles);
  return (
    <div>
      <div className={cx("small-title")}>Thông tin cá nhân</div>
      <div className={cx("info-image")}>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
        <label for="avatar-upload">
          <div className={cx("circle-image")}>
            <FontAwesomeIcon icon={faCamera} />
            <span>Tải ảnh</span>
          </div>
        </label>
      </div>
      <div className={cx("info-username")}>Họ và tên</div>
      <div className={cx("input-username")}>
        <input type="text" placeholder="Change Name" />
      </div>
      <hr />
      <div className={cx("small-title")}>Thông tin liên hệ</div>
      <div className={cx("group-info")}>
        <div className={cx("info-phone")}>Số điện thoại</div>
        <div className={cx("info-email")}>Email</div>
      </div>
      <div className={cx("group-info-input")}>
        <div className={cx("input-phone")}>
          <input type="text" placeholder="Change Phone Number" />
        </div>
        <div className={cx("input-email")}>
          <input type="text" placeholder="Change Email" />
        </div>
      </div>
    </div>
  );
}

export default ChangeInfo;

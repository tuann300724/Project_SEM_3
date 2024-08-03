import React, { useEffect, useState } from "react";
import styles from "./Userinfo.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import ChangeInfo from "./ChangeInfo";
import ChangPassword from "./ChangPassword";
import axios from "axios";
function Userinfo(props) {
  const cx = classNames.bind(styles);
  const [changeinfo, setChangeinfo] = useState(true);
  const [changepassword, setChangepassword] = useState(false);

  const handleChanginfo = (e) => {
    setChangeinfo(true);
    setChangepassword(false);
  };
  const handleChangepassword = (e) => {
    setChangepassword(true);
    setChangeinfo(false);
  };
  return (
    <div className={cx("container-xl")}>
      <div className={cx("container-info-user")}>
        <div className={cx("title")}>Quản lý tài khoản</div>
        <div className={cx("menu-info-user")}>
          <li onClick={handleChanginfo}>Chỉnh sửa thông tin</li>
          <li onClick={handleChangepassword}>Đổi mật khẩu</li>
        </div>
        {changeinfo && <ChangeInfo />}
        {changepassword && <ChangPassword />}
      </div>
    </div>
  );
}

export default Userinfo;

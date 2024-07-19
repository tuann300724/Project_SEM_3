import React from "react";
import styles from "./Userpost.module.scss";
import classNames from "classnames/bind";
import AutocompleteAddress from "./AutocompleteAddress";
function UserPost(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("container-post", "container-xl")}>
      <div className={cx("post-title")}>Thông tin cơ bản</div>
      <div className={cx("post-rent-sell")}>
        <button className={cx("sell", "activebtn")}>Bán</button>
        <button className={cx("rent")}>Thuê</button>
      </div>
      <div className={cx("type-house-title")}>
        Loại bất động sản <span className={cx("reddot")}>*</span>{" "}
      </div>
      <div className={cx("select-house")}>
        <select name="typehouse">
          <option value="Bán chung cư mini">Bán chung cư mini</option>
          <option value="Bán nhà riêng">Bán nhà riêng</option>
          <option value="Bán đất">Bán đất</option>
          <option value="Bán căn hộ chung cư">Bán căn hộ chung cư</option>
        </select>
      </div>
      <div className={cx("type-house-title")}>Chọn nhanh địa chỉ </div>
      <AutocompleteAddress />
      <div className={cx("type-group")}>
        <div className={cx("type-province-title")}>
          Tỉnh, thành phố <span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("type-province-title")}>
          Quận, huyện <span className={cx("reddot")}>*</span>{" "}
        </div>
      </div>
      <div className={cx("type-city-input")}>
        <select>
          <option value="1">Chọn</option>
        </select>
        <select>
          <option value="1">Chọn</option>
        </select>
      </div>
      <div className={cx("type-group")}>
        <div className={cx("type-province-title")}>
          Phường, xã <span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("type-province-title")}>
          Đường, phố <span className={cx("reddot")}>*</span>{" "}
        </div>
      </div>
      <div className={cx("type-city-input")}>
        <select>
          <option value="1">Chọn</option>
        </select>
        <select>
          <option value="1">Chọn</option>
        </select>
      </div>
      <div className={cx("type-house-title")}>
        Địa chỉ hiện thị trên tin đăng<span className={cx("reddot")}>*</span>{" "}
      </div>
      <div className={cx("type-city-input")}>
        <input type="text" placeholder="Chọn" />
      </div>
      <div className={cx("type-house-title")}>
        Vị trí hiển thị trên bản đồ{" "}
      </div>
    </div>
  );
}

export default UserPost;

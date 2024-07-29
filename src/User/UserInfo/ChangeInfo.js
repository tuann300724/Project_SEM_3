import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Userinfo.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function ChangeInfo(props) {
  const cx = classNames.bind(styles);
  const [userinfo, setUserinfo] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const [username, setUsername] = useState(userinfo?.Username || "");
  const [email, setEmail] = useState(userinfo?.Email || "");
  const [phone, setPhone] = useState(userinfo?.Phone || "");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState([]);
  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a temporary URL for the image
    } else {
      setImage(""); // Clear the image if no file is selected
    }
  }, [file]);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Username", username);
    formData.append("Email", email);
    formData.append("Phone", phone);

    if (file) {
      formData.append("formFiles", file);
    }

    try {
      await axios.put(`http://localhost:5223/api/User/changeinfo/${userinfo.Id}`, formData, {
        headers:{
          "Content-Type": "multipart/form-data",
        }
      }).then(result => {
        alert("Cập nhật thông tin thành công");
        window.location.reload();
      })
      .catch(err => console.log(err))
    } catch (error) {
      setMessage(error.response?.data?.message); // Handle error response
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={cx("small-title")}>Thông tin cá nhân</div>
        <div className={cx("info-image")}>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="avatar-upload">
            <div className={cx("circle-image")}>
              <FontAwesomeIcon icon={faCamera} />
              <span>Tải ảnh</span>
            </div>
          </label>
        </div>
        {image && (
          <div className={cx("image-show")}>
            <div className={cx("circle-image")}>
              <img src={image} alt="Selected preview" />
            </div>
          </div>
        )}
        <div className={cx("info-username")}>Họ và tên</div>
        <div className={cx("input-username")}>
          <input
            type="text"
            placeholder="Change Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <hr />
        <div className={cx("small-title")}>Thông tin liên hệ</div>
        <div className={cx("group-info")}>
          <div className={cx("info-phone")}>Số điện thoại</div>
          <div className={cx("info-email")}>Email</div>
        </div>
        <div className={cx("group-info-input")}>
          <div className={cx("input-phone")}>
            <input
              type="text"
              placeholder="Change Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={cx("input-email")}>
            <input
              type="text"
              placeholder="Change Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {message && <div className={cx("message")}>{message}</div>}

        <hr />
        <div className={cx("button-info")}>
          <button type="submit">Lưu thay đổi</button>
        </div>
      </form>
    </div>
  );
}

export default ChangeInfo;

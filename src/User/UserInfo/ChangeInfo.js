import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Userinfo.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function ChangeInfo(props) {
  const cx = classNames.bind(styles);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState([]);
  const [userid, setUserid] = useState(JSON.parse(localStorage.getItem('DataLogin')));
  const [user, setUser] = useState([])
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^\d+$/.test(phone);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${userid.Id}`)
      .then((result) => {
        const userData = result.data.data;
        setUser(userData);
        setUsername(userData.username);
        setEmail(userData.email);
        setPhone(userData.phone);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (file) {
      setImage(URL.createObjectURL(file)); 
    } else {
      setImage(""); 
    }
  }, [file]);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage("Phone number must be exactly 10 digits");
      return;
    }
    const formData = new FormData();
    formData.append("Username", username);
    formData.append("Email", email);
    formData.append("Phone", phone);

    if (file) {
      formData.append("formFiles", file);
    }

    try {
      await axios.put(`http://localhost:5223/api/User/changeinfo/${userid.Id}`, formData, {
        headers:{
          "Content-Type": "multipart/form-data",
        }
      }).then(result => {
        alert("Successfully updated");
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
        <div className={cx("small-title")}>Personal information</div>
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
              <span>Download photo</span>
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
        <div className={cx("info-username")}>Full name</div>
        <div className={cx("input-username")}>
          <input
            type="text"
            placeholder="Change Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <hr />
        <div className={cx("small-title")}>Contact information</div>
        <div className={cx("group-info")}>
          <div className={cx("info-phone")}>Phone number</div>
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
          <button type="submit">Save changes</button>
        </div>
      </form>
    </div>
  );
}

export default ChangeInfo;

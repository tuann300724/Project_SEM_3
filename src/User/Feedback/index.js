import React, { useEffect, useState } from "react";
import styles from "./Feedback.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function FeedBack(props) {
  const cx = classNames.bind(styles);
  const [userid, setUserid] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${userid.Id}`)
      .then((result) => {
        setUser(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  }, [userid.Id]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
        name: user.username,
        phone: user.phone,
        email: user.email,
        message: message
    }
    axios.post(`http://localhost:5223/api/Feedback`, data)
    .then(result=> {
        console.log(result);
        alert("Send feedback successfully");
        window.location.reload();
    }).catch(error => console.log(error));
  }
  return (
    <div className={cx("container-xl")}>
      <div className={cx("container-box-content")}>
        <div className={cx("container")}>
          <div className={cx("content-title")}>Form Feedback</div>
          <form onSubmit={handleSubmit}>
            <div className={cx("content-description")}>
              <label htmlFor="context">Content:</label>
              <textarea required
                id="context"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your content"
              ></textarea>
            </div>
            <div className={cx("button-send")}>
              <button type="submit">
                Send <FontAwesomeIcon icon={faPaperPlane} />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;

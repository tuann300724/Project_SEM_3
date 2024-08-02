import React, { useEffect, useState } from "react";
import styles from "./Listpost.module.scss";
import classNames from "classnames/bind";
import catavatar from "../../public/images/catavatar.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
function Listpost(props) {
  const cx = classNames.bind(styles);
  const [userid, setUserid] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${userid.Id}`)
      .then((result) => {
        setUser(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  }, [userid.Id]);
  useEffect(() => {
    axios
      .get(`http://localhost:5117/api/Post`)
      .then((result) => {
        
        setPost(result.data.data);
      })
      .catch((err) => console.log(err));
  }, [user]);
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  return (
    <div className={cx("container-xl")}>
      <span className={cx("title")}>List Post</span>
      <table className={cx("table ")}>
        <thead>
          <th>ID</th>
          <th>Image</th>
          <th>Adress</th>
          <th>Type</th>
          <th>Post day</th>
          <th>Action</th>
        </thead>
        <tbody>
          {post.map((item, index) => {
            if (item.userId === user.id) {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td className={cx("image-info")}>
                    <img src={item.postImages[0].imageUrl} alt="House" />
                  </td>
                  <td>{item.address}</td>
                  <td>{item.typeHouse.purpose}</td>
                  <td>{formatTimestamp(item.createdDate)}</td>
                  <td>
                    <Link to={`/infopost/${item.title}`}>
                      <button className="btn btn-warning">View</button>
                    </Link>{" "}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Listpost;

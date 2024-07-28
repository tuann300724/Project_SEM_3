import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function New(props) {
  const [timeDifference, setTimeDifference] = useState([]);
  const [news, setNews] = useState([]);
  const [timenews, setTimenews] = useState([]);
  const [infoImage, setinfoImage] = useState();
  const [infoTitle, setinfoTitle] = useState();
  const [loading, setLoading] = useState(true); 
  const cx = classNames.bind(styles);


  const handleinfo = (e) => {
    setinfoImage(e.target.getAttribute("value"));
    setinfoTitle(e.target.getAttribute("data-title"));
    setTimenews(e.target.getAttribute("data-time"));
  };
  useEffect(() =>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  useEffect(() => {
    axios
      .get("http://localhost:5288/api/new")
      .then((result) => {
        setNews(result.data.data);
        setinfoImage(result.data.data[0].image);
        setinfoTitle(result.data.data[0].title);
        setTimenews(calculateTimeDifference(result.data.data[0].createdAt));
        console.log(result.data.data);
      })
      .catch((error) => console.log(error));

    
  }, []);

  const calculateTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDiff = Math.abs(currentTime - createdTime);

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    if (years > 0) return `${years} năm trước`;

    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    if (months > 0) return `${months} tháng trước`;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} ngày trước`;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hours > 0) return `${hours} giờ trước`;

    const minutes = Math.floor(timeDiff / (1000 * 60));
    if (minutes > 0) return `${minutes} phút trước`;

    const seconds = Math.floor(timeDiff / 1000);
    if (seconds > 0) return `${seconds} giây trước`;

    return "vừa xong";
  };

  if (loading) {
   
  }
  return (
    <div className={cx("container-xl", "mt-5")}>
      <div className={cx("row")}>
        <div className={cx("col-xl-9 col-lg-12")}>
          <div className={cx("container-news")}>
            <div className={cx("container-news-menu")}>
              <div className={cx("container-news-item")}>
                <li>
                  <div className={cx("list-item", "active")}>Tin Nổi bật</div>
                </li>
              </div>
              <a
                href="https://www.youtube.com/watch?v=PXqcHi2fkXI"
                target="_blank"
                rel="noreferrer"
                className={cx("container-news-more")}
              >
                Xem Thêm <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className={cx("row")}>
              <div className={cx("col-xl-7", "d-xl-block", "d-none")}>
                <div className={cx("container-info-img")}>
                  <img src={infoImage} alt="hinh" loading="lazy" />
                </div>
                <div className={cx("container-info-text")}>{infoTitle}</div>
                <div className={cx("container-info-time")}>
                  <FontAwesomeIcon icon={faClock} /> {timenews}
                </div>
              </div>
              <div className={cx("col-xl-5", "d-xl-block", "d-none")}>
                <div className={cx("container-info-menu")}>
                  <div className={cx("container-info-item")}>
                    {news.map((item, index) => (
                      <li key={index}>
                        <a
                          href="/#"
                          value={item.image}
                          data-title={item.title}
                          data-time={calculateTimeDifference(item.createdAt)}
                          onMouseEnter={handleinfo}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("row")}>
              {news.map((item, index) => (
                <div
                  className={cx("col-12", "d-xl-none", "d-block")}
                  key={index}
                >
                  <div className={cx("article-info-container")}>
                    <div className={cx("article-image")}>
                      <Link>
                        <img src={item.image} alt="news" />
                      </Link>
                    </div>
                    <div className={cx("article-title")}>
                      <span className={cx("title")}>
                        {" "}
                        <Link>{item.title}</Link>{" "}
                      </span>
                      <p className={cx("time")}>
                        {" "}
                        <FontAwesomeIcon icon={faClock} />
                        {calculateTimeDifference(item.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={cx("col-xl-3", "d-none", "d-xl-block")}>
          <div className={cx("container-ads")}>
            <div className={cx("ads-img")}>
              <img
                src="https://tpc.googlesyndication.com/simgad/7271652329159884271"
                alt="ads-live"
              />
            </div>
            <div className={cx("ads-img")}>
              <img
                src="https://tpc.googlesyndication.com/simgad/7271652329159884271"
                alt="ads-live"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;

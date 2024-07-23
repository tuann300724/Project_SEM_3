import React, { useEffect, useState } from "react";
import styles from "./Newinfo.module.scss";
import classNames from "classnames/bind";
import Foryou from "../InfoPost/Foryou";
import axios from "axios";
import NewsComponent from "./NewsComponent";
function Newinfo(props) {
  const cx = classNames.bind(styles);
  const [news, setNews] = useState([]);
  useEffect(() =>{
    axios.get("https://batdongsan-new.azurewebsites.net/api/new/2")
    .then(result => setNews(result.data.data))
    .catch(err => console.error(err))
  }, [])
  return (
    <div className={cx("container-xl")}>
      <div className={cx("row")}>
        <div className={cx("col-8")}>
          <div className={cx("container-news")}>
            <div className={cx("news-title")}>
                {news.title}
            </div>
            <NewsComponent content={news.content}/>
          </div>
          <Foryou />
        </div>
        <div className={cx("col-4")}>
          <div className={cx("container-list-news")}>
            <div className={cx("PopularArticles_popularArticlesWrapper")}>
              <h2>Bài viết được xem nhiều nhất</h2>
              <div className={cx("PopularArticles_popularArticlesItemHeading")}>
                <div className={cx("PopularArticles_sortedNumber")}>1</div>
                <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                </a>
              </div>
              <div className={cx("PopularArticles_popularArticlesItemHeading")}>
                <div className={cx("PopularArticles_sortedNumber")}>2</div>
                <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                </a>
              </div>
              <div className={cx("PopularArticles_popularArticlesItemHeading")}>
                <div className={cx("PopularArticles_sortedNumber")}>3</div>
                <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                </a>
              </div>
              <div className={cx("PopularArticles_popularArticlesItemHeading")}>
                <div className={cx("PopularArticles_sortedNumber")}>4</div>
                <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                </a>
              </div>
              <div className={cx("PopularArticles_popularArticlesItemHeading")}>
                <div className={cx("PopularArticles_sortedNumber")}>5</div>
                <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newinfo;

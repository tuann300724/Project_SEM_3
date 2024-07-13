/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./homepage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons"

//sm 640px
//md 768px 
//lg 1024px
//xl 1280px
//2xl 1530px
function HomePage() {
  const cx = classNames.bind(styles);
  const [infoImage, setinfoImage] = useState("https://tpc.googlesyndication.com/simgad/9434874418247389845");
  const handleinfo = (event) => {
    setinfoImage(event.target.getAttribute('value'));
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("banner")}>
          <img
            src="https://tpc.googlesyndication.com/simgad/9434874418247389845"
            alt="Banner"
          />
        </div>
      </div>

      <div className={cx("container-xl", "mt-5")}>
        <div className={cx("row")}>
          <div className={cx("col-xl-9 col-lg-12")}>
            <div className={cx("container-news")}>
              <div className={cx("container-news-menu")}>
                <div className={cx("container-news-item")}>
                  <li><div >Tin Nổi Bật</div> </li>
                  <li><div >Tin Tức</div></li>
                  <li><div >BĐS HCM</div></li>
                  <li><div className={cx("active")}>BĐS Hà Nội</div><i></i></li>
                </div>
                <div className={cx("container-news-more")}>Xem Thêm <FontAwesomeIcon icon={faArrowAltCircleRight} /></div>
              </div>
              <div className={cx("row")}>
                <div className={cx("col-7")}>
                  <div className={cx("container-info-img")}>
                    <img src={infoImage} alt="hinh" />
                  </div>
                  <div className={cx("container-info-text")}>
                    Cuộc Chiến Tranh Database Của Yeong Và Tuấn
                  </div>
                  <div className={cx("container-info-time")}>
                    <FontAwesomeIcon icon={faClock} /> 6 Năm Trước
                  </div>
                </div>
                <div className={cx('col-5')}>
                  <div className={cx("container-info-menu")}>
                    <div className={cx("container-info-item")}>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/ky-nang-pv.jpeg" onMouseEnter={handleinfo}>Cuộc Chiến Tranh Database Của Yeong Và Tuấn</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/05/lai-suat-ngan-hang-techcombank-1.jpg" onMouseEnter={handleinfo}>Workshop Kỹ Năng Phỏng Vấn Thực Chiến Dành Cho Sinh Viên</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/Perspective-2.png" onMouseEnter={handleinfo}>Lãi Suất Ngân Hàng Techcombank Mới Nhất Tháng 07/2024</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/61e783b995d0d.jpg" onMouseEnter={handleinfo}>Từ 1/8, Mua Nhà Bắt Buộc Phải Qua Ngân Hàng</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/BDScomvn_Cam2_207-scaled.jpg" onMouseEnter={handleinfo}>Sự Kiện BĐS Nóng Nhất Đà Nẵng Tháng 7: "Toàn Cảnh Thị Trường BĐS Đà Nẵng 2024"</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/eaton-park-tien-do-xay-dung.jpg" onMouseEnter={handleinfo}>Tổng Kết Giá Bất Động Sản TP.HCM 6 Tháng Đầu Năm 2024</a></li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 d-sm-none d-xl-block")}>
            <div className={cx("container-ads")}>
              <div className={cx("ads-img")}>
                <img src="https://tpc.googlesyndication.com/simgad/7271652329159884271" alt="ads-live" />
              </div>
              <div className={cx("ads-img")}>
                <img src="https://tpc.googlesyndication.com/simgad/7271652329159884271" alt="ads-live" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container-fluid", 'bg-light')} style={{height: "500px"}}>
        <div className={cx("container-xl")}>
          <div className={cx("container-foryou-menu")}>
            <h2 className={cx("container-foryou-item")}>
              Bất Động Sản Dành Cho Bạn
            </h2>
            <div className={cx("container-foryou-list", "d-lg-block", 'd-sm-none')}>
              <a href="">Tin nhà đất bán mới nhất</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">Tin nhà đất cho thuê mới nhất</a>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col-3", 'set-col')}>
              <div className={cx("container-foryou-card")}>
                <div className={cx("container-card-image")}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

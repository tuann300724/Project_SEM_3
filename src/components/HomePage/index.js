/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./homepage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faImage, faHeart as solidHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock, faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"
import house1 from "../../public/images/house1.jpg"
import Listitem from "./Listitem";
//sm 640px
//md 768px 
//lg 1024px
//xl 1280px
//2xl 1530px
function HomePage() {
  const cx = classNames.bind(styles);
  const [infoImage, setinfoImage] = useState("https://tpc.googlesyndication.com/simgad/9434874418247389845");
  const [Favorite, setFavorite] = useState([]);
  const [RedHeart, setRedHeart] = useState(true);

  const fake = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ]
  const handleinfo = (e) => {
    setinfoImage(e.target.getAttribute('value'));
  };
  const HandleFavorite = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    console.log(id)
    setRedHeart(!RedHeart)
    setFavorite(prev => {
      const exits = prev.find(item => item.id === id);
      if (exits) {
        return prev.map(item =>
          item.id === id ? { ...item, success: !item.success } : item
        );
      } else {
        return [...prev, { id: id, success: true }]
      }
    });
    console.log(Favorite);
  };
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
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
                  {["Tin Nổi Bật", "Tin Tức", "BĐS HCM", "BĐS HN"].map((item, index) => (
                    <li
                      key={index}
                      
                      onClick={() => handleMenuItemClick(index)}
                    >
                      <div className={cx("list-item", { active: activeMenuItem === index })}>{item}</div>
                    </li>
                  ))}
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
          <div className={cx("col-xl-3", "d-none", "d-xl-block")}>
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
      <div className={cx("container-fluid", 'setcolor-fluid')}>
        <div className={cx("container-xl", "container-foryou")}>
          <div className={cx("container-foryou-menu")}>
            <h2 className={cx("container-foryou-item")}>
              Bất Động Sản Dành Cho Bạn
            </h2>
            <div className={cx("container-foryou-list", "d-lg-block", 'd-sm-none', 'd-none')}>
              <a href="">Tin nhà đất bán mới nhất</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">Tin nhà đất cho thuê mới nhất</a>
            </div>
          </div>
          <div className={cx("row")}>
            {fake.map((card, index) => (
              <div className={cx("col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12", 'set-col')} key={index}>
                <div className={cx("container-foryou-card")}>
                  <div className={cx("container-card-image")}>
                    <img src={house1} alt="" />
                    <div className={cx("card-icon")}>
                      <FontAwesomeIcon icon={faImage} /> &nbsp;6
                    </div>
                  </div>
                  <div className={cx("card-info")}>
                    <div className={cx("card-info-title")}>
                      <div className={cx("card-title")}>
                        Cho thuê căn hộ 1 phòng tại khu đô thị Vạn Phúc.
                        Ngay trường đại học Kinh Tế Luật giá 5 triệu/tháng
                      </div>
                    </div>
                    <div className={cx("card-info-config")}>
                      <span className={cx("card-price")}>
                        5 Triệu / tháng
                      </span>
                      <span className={cx("card-reddot")}>·</span>
                      <span className={cx("card-arena")}>
                        30 m²
                      </span>
                    </div>
                    <div className={cx("card-location")}>
                      <FontAwesomeIcon icon={faLocationDot} className={cx("location-icon")} />
                      <span>Thủ Đức, Hồ Chí Minh</span>
                    </div>
                    <div className={cx("card-time")}>
                      <div className={cx("card-publish-info")}>Đăng Hôm Nay</div>
                      <div className={cx("card-favorite")} id="handleheart" data-id={card.id} onClick={HandleFavorite}>
                        {Favorite.find((item) => item.id === card.id && item.success) ? (
                          <FontAwesomeIcon icon={solidHeart} data-id={card.id} style={{ color: "red" }} />
                        ) : (
                          <FontAwesomeIcon icon={regularHeart} data-id={card.id} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col-12", 'mb-5')}>
            <div className={cx("watch-more")}><button>Xem thêm</button> </div>
          </div>
        </div>
      </div>
      <div className={cx("container-xl", "container-special")}>

      </div>
    </div>
  );
}

export default HomePage;

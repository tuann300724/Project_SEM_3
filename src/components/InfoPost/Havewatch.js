import React, { useState, useEffect } from "react";
import styles from "./Infopost.module.scss";
import classNames from "classnames/bind";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Havewatch() {
  const cx = classNames.bind(styles);
  
  const getInitialData = () => {
    const savedData = localStorage.getItem("postInfoArray");
    return savedData ? JSON.parse(savedData) : [];
  };

  const [data, setData] = useState(getInitialData());

  function formatPrice(price) {
    if (price == null || isNaN(price)) {
      return "N/A";
    }

    const format = (value) => {
      const formatted = value.toFixed(2);
      return formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted;
    };

    if (price >= 1000000000) {
      return `${format(price / 1000000000)} tỷ`;
    } else if (price >= 1000000) {
      return `${format(price / 1000000)} triệu`;
    } else if (price >= 1000) {
      return `${format(price / 1000)} ngàn`;
    } else {
      return format(price);
    }
  }

  const calculateTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDiff = currentTime - createdTime;
    const oneDayInMillis = 24 * 60 * 60 * 1000;

    if (timeDiff < oneDayInMillis) {
      return "hôm nay";
    }
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

  return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1320: { slidesPerView: 4 },
        }}
        className={cx("container-foryou")}
      >
      {data.map((item, index) => (
        <SwiperSlide key={index} className={cx("box-foryou")}>
          <Link to={`/infopost/${item.title}`}>
            <div className={cx("box-thumb")}>
              <img src={item.image} alt="thumb" />
            </div>
            <div className={cx("box-content")}>
              <div className={cx("box-title-foryou")}>{item.title}</div>
              <div className={cx("box-config-price")}>
                {formatPrice(item.price)}
              </div>
              <div className={cx("box-config-location")}>
                <FontAwesomeIcon icon={faLocationDot} /> {item.address}
              </div>
              <div className={cx("box-config-contact")}>Đăng {calculateTimeDifference(item.createdDate)}</div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Havewatch;

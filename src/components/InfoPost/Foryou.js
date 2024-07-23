import React, { useEffect, useRef, useState } from "react";
import styles from "./Infopost.module.scss";
import classNames from "classnames/bind";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Swiper from "swiper";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Foryou() {
  const cx = classNames.bind(styles);
  const swiperRef = useRef(null);
  const fake = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, []);
  return (
    <>
      <div className={cx("title-description")}>Bất động sản dành cho bạn</div>
      <div className={cx("container-foryou", "swiper")} ref={swiperRef}>
        <div className={cx("grandient-right")}></div>
        <div className={cx("swiper-wrapper")}>
          {fake.map((item, index) => (
            <div className={cx("box-foryou", "swiper-slide")} key={index}>
              <div className={cx("box-thumb")}>
                <img
                  src="https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="thumb"
                />
              </div>
              <div className={cx("box-content")}>
                <div className={cx("box-title-foryou")}>
                  Quỹ căn studio và 1 ngủ + có CK 3% - view pháo hoa, sông Hàn -
                  Sun Symphony Đà Nẵng. Giá từ 2.8 tỷ
                </div>
                <div className={cx("box-config-price")}>Giá thỏa thuận</div>
                <div className={cx("box-config-location")}>
                  <FontAwesomeIcon icon={faLocationDot} /> Sơn Trà, Đà Nẵng
                </div>
                <div className={cx("box-config-contact")}>
                  Đăng 1 thập kỉ trước
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Foryou;

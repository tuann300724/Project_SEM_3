import React, { useEffect, useRef, useState } from 'react';
import styles from './Infopost.module.scss'
import classNames from 'classnames/bind';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Swiper from 'swiper';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Havewatch() {
    const cx = classNames.bind(styles);
    const swiperRef = useRef(null);
    const getInitialData = () => {
        const savedData = localStorage.getItem('postInfo');
        return savedData ? [JSON.parse(savedData)] : [];
      };
    
      const [data, setData] = useState(getInitialData()); 
    useEffect(() => {
        const swiperInstance = new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination, Autoplay],
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false

            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1320: {
                    slidesPerView: 4
                },
            }
        });

        return () => {
            swiperInstance.destroy();
        };
    }, []);
    function formatPrice(price) {
        if (price == null || isNaN(price)) {
          return "N/A"; // hoặc bạn có thể trả về giá trị mặc định khác
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
    return (
        <div className={cx("container-foryou", "swiper")} ref={swiperRef}>
            <div className={cx("grandient-right")}></div>
            <div className={cx("swiper-wrapper")}>
                {data.map((item, index) => (
                    <div className={cx("box-foryou", "swiper-slide")} key={index}>
                        <div className={cx("box-thumb")}>
                            <img src={item.image} alt="thumb" />
                        </div>
                        <div className={cx("box-content")}>
                            <div className={cx("box-title-foryou")}>
                                {item.title}
                            </div>
                            <div className={cx("box-config-price")}>
                                {formatPrice(item.price)}
                            </div>
                            <div className={cx("box-config-location")}>
                                <FontAwesomeIcon icon={faLocationDot} /> {item.address}
                            </div>
                            <div className={cx("box-config-contact")}>
                                Đăng hôm nay
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Havewatch;
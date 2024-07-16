import React, { useEffect, useRef } from 'react';
import classNames from "classnames/bind";
import housespecial from '../../public/images/housespecial.png';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./homepage.module.scss";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Swiper from 'swiper';

const data = [
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
    },
    {
        id: 5
    },
]

function SliderSwiper(props) {
    const cx = classNames.bind(styles);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination],
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3
                },
                1140: {
                    slidesPerView: 3
                },
                1320: {
                    slidesPerView: 4
                },
            }
        });

        return () => {
            // Cleanup Swiper instance on component unmount
            swiperInstance.destroy();
        };
    }, []);
    return (
        <div className={cx("slider-wrapper", "swiper")} ref={swiperRef}>
            <div className={cx("swiper-wrapper")}>
                {data.map((item, index) => (
                    <a href='https://www.youtube.com/watch?v=PXqcHi2fkXI' target="_blank" rel="noreferrer" className={cx("card-special-list", "swiper-slide")} key={index}>
                        <div className={cx("card-special-image")}>
                            <img src={housespecial} alt="Special" />
                        </div>
                        <div className={cx("card-special-content")}>
                            <div className={cx("card-special-project")}>
                                <label>Đã bàn giao</label>
                            </div>
                            <div className={cx("card-special-title")}>
                                Taisei Square Hanoi
                            </div>
                            <div className={cx("card-special-location")}>
                                Cầu Giấy, Hà Nội
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SliderSwiper;

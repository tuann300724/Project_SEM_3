import React, { useEffect, useRef } from 'react';
import styles from './Search.module.scss'
import classNames from 'classnames/bind';
import magnifyclass from '../../public/images/magnifyingglass.svg'
import arrowdown from '../../public/images/arrowdown.svg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Swiper from 'swiper';

function Searchsell(props) {
    const cx = classNames.bind(styles);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination],
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
                    slidesPerView: 2
                },
                576: {
                    slidesPerView: 4
                },
                768: {
                    slidesPerView: 5
                },
                1140: {
                    slidesPerView: 6
                },
                1320: {
                    slidesPerView: 7
                },
            }
        });

        return () => {
            swiperInstance.destroy();
        };
    }, []);
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
        {
            id: 6
        },
        {
            id: 7
        },
    ]
    return (
        <div className={cx("container-xl", "container-search")}>
            <div className={cx("container-input")}>
                <div className={cx("searchlocation-header")}>
                    <div className={cx("listsearch-select")}>
                        <div className={cx("container-listsearch")}>
                            <div className={cx("icon")}>
                                <img src={magnifyclass} alt="magnifyinggclass" />
                            </div>
                            <div className={cx("title")}>
                                Trên toàn quốc
                            </div>
                        </div>
                        <button className={cx("button-search")}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx("container-selecttag", "swiper")} ref={swiperRef}>
                <div className={cx("swiper-wrapper")}>
                    {data.map((item, index) => (
                        <div className={cx("tag", "swiper-slide")} key={index}>
                            Loại nhà đất
                            <span className={cx("icon")}>
                                <img src={arrowdown} alt="arrow" />
                            </span>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Searchsell;
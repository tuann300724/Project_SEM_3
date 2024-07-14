import React, { useEffect, useRef } from 'react';
import styles from "./homepage.module.scss";
import classNames from 'classnames/bind';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Swiper from 'swiper';


const data = [
    {
        name: "Vinhomes Central Park"
    },
    {
        name: "Vinhomes Grand Park"
    },
    {
        name: "Vinhomes Smart City"
    },
    {
        name: "Vũng Tàu Pearl"
    },
    {
        name: "Bcons Green View"
    },
    {
        name: "Grandeur Palace"
    },
    {
        name: "Diamond Island"
    },
    {
        name: "The Sun Avenue"
    },
    {
        name: "Nhà đất Hải Phòng"
    },
    {
        name: "Nhà đất Quy Nhơn"
    },
]

function Followlocation(props) {
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
                768: {
                    slidesPerView: 3
                },
                1140: {
                    slidesPerView: 4
                },
                1320: {
                    slidesPerView: 5
                },
            }
        });

        return () => {
            // Cleanup Swiper instance on component unmount
            swiperInstance.destroy();
        };
    }, []);
    return (
        <div className={cx("container-xl", "container-follow-location")}>
            <div className={cx("follow-text")}>
                Bất động sản theo địa điểm
            </div>
            <div className={cx('row')}>
                <div className={cx("col-lg-6 col-12")}>
                    <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx('follow-image')}>
                        <img src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg" alt="HCM" />
                        <div className={cx("follow-info")}>
                            <h5 className={cx("title")}>TP. Hồ Chí Minh</h5>
                            <span className={cx("info-count")}>69.696 tin đăng</span>
                        </div>
                    </a>
                </div>
                <div className={cx("col-lg-6 col-12")}>
                    <div className={cx("row")}>
                        <div className={cx("col-6")}>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-1.jpg" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Hà Nội</h5>
                                    <span>96.696 tin đăng</span>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-1.jpg" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Đồng Nai</h5>
                                    <span>96.696 tin đăng</span>
                                </div>
                            </a>
                        </div>
                        <div className={cx("col-6")}>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-1.jpg" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Bình Dương</h5>
                                    <span>96.696 tin đăng</span>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-1.jpg" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Đà Nẵng</h5>
                                    <span>96.696 tin đăng</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className={cx("follow-tag", "swiper")} ref={swiperRef}>
                <div className={cx("swiper-wrapper")}>
                    {data.map((item, index) => (
                        <div className={cx("tag", "swiper-slide")} key={index}>
                            <a href="/#">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Followlocation;
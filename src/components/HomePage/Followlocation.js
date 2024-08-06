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
        name: "Property in Hai Phong"
    },
    {
        name: "Property in Quy Nhơn"
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
            Location-based real estate
            </div>
            <div className={cx('row')}>
                <div className={cx("col-lg-6 col-12")}>
                    <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx('follow-image')}>
                        <img src="https://images.unsplash.com/photo-1536086845112-89de23aa4772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HCM" />
                        <div className={cx("follow-info")}>
                            <h5 className={cx("title")}>Ho Chi Minh City</h5>
                            <span className={cx("info-count")}>69.696 posts</span>
                        </div>
                    </a>
                </div>
                <div className={cx("col-lg-6 col-12")}>
                    <div className={cx("row")}>
                        <div className={cx("col-6")}>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Ha Noi</h5>
                                    <span>96.696 posts</span>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://images.unsplash.com/photo-1672849843203-eb3eff2e1be0?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Dong Nai</h5>
                                    <span>96.696 posts</span>
                                </div>
                            </a>
                        </div>
                        <div className={cx("col-6")}>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://special.vietnamplus.vn/wp-content/uploads/2022/04/vna_potal_thu_hut_von_fdi_binh_duong_tang_toc_phat_trien_182300727_5001122-2048x1353.jpg" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Binh Duong</h5>
                                    <span>96.696 posts</span>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("follow-image-grid")}>
                                <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className={cx("follow-info-small")}>
                                    <h5>Da Nang</h5>
                                    <span>96.696 posts</span>
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
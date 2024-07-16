import React, { useEffect, useRef, useState } from 'react';
import styles from './Infopost.module.scss'
import classNames from 'classnames/bind';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Swiper from 'swiper';
import share from '../../public/images/shareicon.svg';
import warning from '../../public/images/warningicon.svg';
import acreage from '../../public/images/acreage.svg';
import direction from '../../public/images/direction.svg';
import vndicon from '../../public/images/vndicon.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
function InfoPost(props) {
    const cx = classNames.bind(styles);
    const swiperRef = useRef(null);
    const thumbref = useRef(null);
    const [bigImage, setbigImage] = useState("https://images.unsplash.com/photo-1536086845112-89de23aa4772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const fake = [
        { id: 1, url: "https://images.unsplash.com/photo-1536086845112-89de23aa4772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, url: "https://images.unsplash.com/photo-1597307932023-38eeb19069ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, url: "https://images.unsplash.com/photo-1521019795854-14e15f600980?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 5, url: "https://images.unsplash.com/photo-1541079606130-1f46216e419d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, url: "https://images.unsplash.com/photo-1598544919456-fcb105fa7a6f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 7, url: "https://images.unsplash.com/photo-1603852452440-b383ac720729?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 8, url: "https://images.unsplash.com/photo-1603852452516-972df21fccac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    ]
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
                    slidesPerView: 3
                },
                576: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 4
                },
                1140: {
                    slidesPerView: 5
                },
                1320: {
                    slidesPerView: 6
                },
            }
        });

        return () => {
            swiperInstance.destroy();
        };
    }, []);
    useEffect(() => {
        const thumbnails = document.querySelectorAll("#thumbnail-image")
        thumbnails.forEach(item => {
            item.addEventListener('click', function (e) {
                console.log(item);
                setbigImage(e.target.src);

                thumbnails.forEach(i => i.classList.remove(styles.active));

                this.classList.add(styles.active);
            });
        });
    }, [])
    return (
        <div>
            <div className={cx("container-xl", "container-abc")}>
                <div className={cx("row")}>
                    <div className={cx("col-xl-8 col-12")}>
                        <div className={cx("container-content-left")}>
                            <div className={cx("content-media")}>
                                <div className={cx("big-image")}>
                                    <img src={bigImage} alt="thumbnail" />
                                </div>
                                <div className={cx("slider-image", "swiper")} ref={swiperRef}>
                                    <div className={cx("swiper-wrapper")}>
                                        {fake.map((item, index) => (
                                            <div className={cx("thumbnail-image", "swiper-slide")} id='thumbnail-image' key={index} ref={thumbref} >
                                                <img src={item.url} alt="thumb" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h3 className={cx("content-title")}>Chính chủ bán đất ven hồ Suối Hai, mặt đường trục chính hồ Suối Hai</h3>
                            <span className={cx('description-location')}>Xã Cẩm Lĩnh, Ba Vì, Hà Nội</span>
                            <hr />
                            <div className={cx("content-info-price")}>
                                <div className='d-flex'>
                                    <div className={cx("info-price")}>
                                        <span className={cx("amount")}>Mức Giá</span>
                                        <span className={cx("price")}>4,5 tỷ</span>
                                        <span className={cx("precent")}>~1,5 triệu/m²</span>
                                    </div>
                                    <div className={cx("info-arena")}>
                                        <span className={cx("arena")}>Diện Tích</span>
                                        <span className={cx("arena-precent")}>3.000 m²</span>
                                    </div>
                                </div>
                                <div className={cx("info-icon")}>
                                    <Tippy content="Chia sẻ">
                                        <div className={cx("icon")}>
                                            <img src={share} alt="share" />
                                        </div>
                                    </Tippy>
                                    <Tippy content="Báo xấu tin đăng">
                                        <div className={cx("icon")}>
                                            <img src={warning} alt="share" />
                                        </div>
                                    </Tippy>
                                </div>
                            </div>
                            <span className={cx("title-description")}>Thông tin mô tả</span>
                            <div className={cx("detail-content")}>
                                <div className={cx("detail-info")}>
                                    Do áp lực tài chính, gia đình tôi cần chuyển nhượng mảnh đất rất đẹp ven hồ Suối Hai, giá chỉ 1.5tr/m².<br />
                                    View thoáng toàn bộ hồ.<br />Diện tích: 3000m² x 2 mảnh liền kề, tổng 6000m².<br />
                                    Diện tích đất ở: 300m² x 2 mảnh, tổng 600m².<br />
                                    Pháp lý: Đã được quy hoạch đất ở nông thôn (ONT), hợp đồng giao khoán, chờ cấp sổ.<br />
                                    Đặc điểm: Khu vực ven hồ các hộ gia đình đã xây biệt thự, nhà kiên cố, sinh sống ổn định, toàn bộ đang chờ cấp sổ đỏ.<br />
                                    Phù hợp làm khu nghỉ dưỡng cuối tuần, biệt thự sinh thái.<br />Bán từng mảnh hoặc cả 2 mảnh liền nhau.<br />
                                </div>
                            </div>
                            <span className={cx("title-description")}>Đặc điểm bất động sản</span>
                            <div className={cx("row")}>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <span className={cx("icon")}> <img src={acreage} alt="icon" /> </span>
                                        <span className={cx("text")}>Diện Tích</span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <span className={cx("icon")}> <img src={vndicon} alt="icon" /> </span>
                                        <span className={cx("text")}>Mức giá</span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <span className={cx("icon")}> <img src={direction} alt="icon" /> </span>
                                        <span className={cx("text")}>Hướng nhà</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className={cx("col-xl-4 d-xl-block d-none")}>
                        <div className={cx("container-content-right")}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoPost;
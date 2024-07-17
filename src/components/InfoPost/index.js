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
import shower from '../../public/images/showericon.svg';
import beg from '../../public/images/bedicon.svg';
import interior from '../../public/images/interioricon.svg';
import zaloicon from '../../public/images/zaloicon.svg';
import arrowright from '../../public/images/arrowright.svg';
import vndicon from '../../public/images/vndicon.svg';
import catavatar from '../../public/images/catavatar.jpg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import Foryou from './Foryou';
import Havewatch from './Havewatch';
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
            <div className={cx("container-xl")}>
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
                            {/* start */}
                            <div className={cx("row")}>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <div className={cx("box-flex")}>
                                            <span className={cx("icon")}> <img src={acreage} alt="icon" /> </span>
                                            <span className={cx("text")}>Diện Tích</span>
                                        </div>
                                        <span className={cx("value")}>
                                            55 m²
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <div className={cx("box-flex")}>
                                            <span className={cx("icon")}> <img src={vndicon} alt="icon" /> </span>
                                            <span className={cx("text")}>Mức giá</span>
                                        </div>
                                        <span className={cx("value")}>
                                            2.9 tỷ
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <div className={cx("box-flex")}>
                                            <span className={cx("icon")}> <img src={beg} alt="icon" /> </span>
                                            <span className={cx("text")}>Phòng ngủ</span>
                                        </div>
                                        <span className={cx("value")}>
                                            2
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <div className={cx("box-flex")}>
                                            <span className={cx("icon")}> <img src={shower} alt="icon" /> </span>
                                            <span className={cx("text")}>Số toilet</span>
                                        </div>
                                        <span className={cx("value")}>
                                            1
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <div className={cx("box-flex")}>
                                            <span className={cx("icon")}> <img src={direction} alt="icon" /> </span>
                                            <span className={cx("text")}>Hướng nhà</span>
                                        </div>
                                        <span className={cx("value")}>
                                            Đông - Tây
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("box-title")}>
                                        <div className={cx("box-flex")}>
                                            <span className={cx("icon")}> <img src={interior} alt="icon" /> </span>
                                            <span className={cx("text")}>Nội thất</span>
                                        </div>
                                        <span className={cx("value")}>
                                            Đầy đủ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* end */}
                            <div className={cx("title-project")}>
                                <span className={cx("title")}>Thông tin dự án</span>
                                <span className={cx("more")}> <Link>Xem 377 tin đăng bán <span className={cx("icon")}> <img src={arrowright} alt="icon" /> </span> </Link> </span>
                            </div>
                            <div className={cx("container-project")}>
                                <div className={cx("project-content")}>
                                    <div className={cx("project-img")}>
                                        <img src="https://images.unsplash.com/photo-1564983529458-ab605016b2be?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project" />
                                    </div>
                                    <div className={cx("project-info")}>
                                        <span className={cx("group-title")}>Sun Symphony Residence</span>
                                        <span className={cx("group-progress")}>Đang cập nhật tiến độ
                                            <span className={cx("reddog")}>·</span>
                                            <FontAwesomeIcon icon={faHouse} /> 1.373
                                            <span className={cx("reddog")}>·</span>
                                            <FontAwesomeIcon icon={faBuilding} /> 3
                                        </span>
                                        <span className={cx("group-incorporation")}>Tập đoàn Sun Group</span>
                                    </div>
                                </div>
                            </div>
                            <span className={cx("title-description")}>Xem trên bản đồ</span>
                            <div className={cx("container-map")}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.690381099047!2d106.66069771118606!3d10.758328259481841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fde1f0eee75%3A0xb806853aa80856b6!2sC%C3%B4ng%20ty%20Bia%20Saigon!5e0!3m2!1svi!2s!4v1721187252667!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <span className={cx("title-description")}>Tìm kiếm theo từ khóa</span>
                            <div className={cx("container-keyword")}>
                                <div className={cx("box-keyword")}>Căn hộ Sun Symphony Residence từ 50 m2 đến 80 m2</div>
                                <div className={cx("box-keyword")}>Căn hộ Nại Hiên Đông Sơn Trà</div>
                                <div className={cx("box-keyword")}>Căn hộ Sơn Trà Đà Nẵng</div>
                                <div className={cx("box-keyword")}>Căn hộ Đà Nẵng 2 PN</div>
                                <div className={cx("box-keyword")}>Căn hộ Đà Nẵng từ 5 tỷ đến 7 tỷ</div>
                            </div>
                            <div className={cx("container-short-info")}>
                                <div className={cx("postday")}>
                                    <span className={cx("daysubmit")}>Ngày Đăng</span>
                                    <p className={cx("daytime")}>09/07/2024</p>
                                </div>
                                <div className={cx("postday")}>
                                    <span className={cx("daysubmit")}>Ngày hết hạn</span>
                                    <p className={cx("daytime")}>24/07/2024</p>
                                </div>
                                <div className={cx("postday")}>
                                    <span className={cx("daysubmit")}>Loại tin</span>
                                    <p className={cx("daytime")}>Tin VIP Kim Cương</p>
                                </div>
                                <div className={cx("postday")}>
                                    <span className={cx("daysubmit")}>Mã tin</span>
                                    <p className={cx("daytime")}>40349901</p>
                                </div>
                            </div>
                            <span className={cx("title-description")}>Bất động sản dành cho bạn</span>
                            {/* foryou */}
                            <Foryou />
                            {/* foryou */}
                            <span className={cx("title-description")}>Tin đăng đã xem</span>
                            <Havewatch />
                        </div>
                    </div>
                    <div className={cx("col-xl-4 d-xl-block d-none")}>
                        <div className={cx("container-content-right")}>
                            <div className={cx("sidebar-box-contact")}>
                                <div className={cx("box-info-avatar")}>
                                    <div className={cx("avatar")}>
                                        <img src={catavatar} alt="" />
                                    </div>
                                    <span className={cx("info-username")}>
                                        Ban quản lý Thanh Phong
                                    </span>
                                    <span className={cx("info-description")}>
                                        Xem thêm 16 tin khác
                                    </span>
                                </div>
                                <div className={cx("button-contact")}>
                                    <span> <FontAwesomeIcon icon={faPhone} /> 096969696</span>
                                </div>
                                <Link to='https://zalo.me/0898852504' target="_blank">
                                    <div className={cx("button-contact-zalo")}>
                                        <div className={cx("zalo-icon")}> <img src={zaloicon} alt="Zalo" /> </div>  <span>Chat qua Zalo</span>
                                    </div>
                                </Link>
                                <div className={cx("button-contact-mail")}>
                                    <span>Gửi Email</span>
                                </div>
                                <div className={cx("button-contact-phone")}>
                                    <span>Yêu cầu liên hệ lại</span>
                                </div>
                            </div>
                            <div className={cx("sidebar-box-special")}>
                                <div className={cx("special-title")}>
                                    <span className={cx("title")}>Bất động sản nổi bật</span>
                                    <li>Bán chung cư Văn Giang</li>
                                    <li>Cho thuê kho Văn Giang</li>
                                    <li>Bán đất Hòa Hải</li>
                                    <li>Bán đất Hiệp Phước</li>
                                    <li>Bán đất Gia Thụy</li>
                                    <li>Bán nhà Hòa Xuân</li>
                                    <li>Bán nhà Phường 7 Vũng Tàu</li>
                                </div>
                            </div>
                            <div className={cx("sidebar-box-special")}>
                                <div className={cx("special-title")}>
                                    <span className={cx("title")}>Hỗ trợ tiện ích</span>
                                    <li>Tư vấn phong thủy</li>
                                    <li>Dự tính chi phí làm nhà</li>
                                    <li>Tính lãi suất</li>
                                    <li>Quy trình xây nhà</li>
                                    <li>Xem tuổi làm nhà</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoPost;
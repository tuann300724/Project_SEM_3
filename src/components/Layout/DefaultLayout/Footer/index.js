import React from 'react';
import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import location from '../../../../public/images/locationicon.svg'
import phone from '../../../../public/images/phoneicon.svg'
import userquestion from '../../../../public/images/userquestionicon.svg'
import mailbox from '../../../../public/images/mailbox.svg'
import sendicon from '../../../../public/images/sendicon.svg'
function Footer(props) {
    const cx = classNames.bind(styles)
    return (
        <div className={cx("container-fluid", "footer")}>
            <div className={cx("container-xl")}>
                <div className={cx("row")}>
                    <div className={cx("col-xl-4 col-lg-12")}>
                        <div className={cx("footer-left")}>
                            <div className={cx("logo")}>
                                <img src="https://staticfile.batdongsan.com.vn/images/logo/standard/black/logo_gray-5.svg" alt="logo" />
                            </div>
                            <div className={cx("left-text")}>
                                CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM
                            </div>
                            <div className={cx("location")}>
                                <div className={cx("location-icon")}>
                                    <img src={location} alt="icon" />
                                </div>
                                <div className={cx("location-info")}>
                                    Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
                                </div>
                            </div>
                            <div className={cx("information")}>
                                <div className={cx("information-icon")}>
                                    <img src={phone} alt="" />
                                </div>
                                <div className={cx("information-info")}>
                                    (+84) 69696969 - (+84) 113114115
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-xl-8 col-lg-12")}>
                        <div className={cx("footer-right")}>
                            <div className={cx("row")}>
                                <div className={cx("col-xl-3 col-md-4 col-12")}>
                                    <div className={cx("hotline")}>
                                        <div className={cx("hotline-icon")}> <img src={phone} alt="phone" /> </div>
                                        <div className={cx("hotline-info")}>
                                            <span>Hotline</span>
                                            <p>1900 000 biết</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-xl-4 col-md-4 col-12")}>
                                    <div className={cx("hotline")}>
                                        <div className={cx("hotline-icon")}> <img src={userquestion} alt="userquestion" /> </div>
                                        <div className={cx("hotline-info")}>
                                            <span>Hỗ trợ khách hàng</span>
                                            <p>trogiup.batdongsan.com.vn</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-xl-5 col-md-4 col-12")}>
                                    <div className={cx("hotline")}>
                                        <div className={cx("hotline-icon")}> <img src={mailbox} alt="mailbox" /> </div>
                                        <div className={cx("hotline-info")}>
                                            <span>Chăm sóc khách hàng</span>
                                            <p>trieunhananh@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("row")}>
                                <div className={cx("col-3")}>
                                    <div className={cx("menu-footer")}>
                                        <div className={cx("menu-title")}>Hướng Dẫn</div>
                                        <div className={cx("menu-list")}>
                                            <li className={cx("menu-item")}>Về chúng tôi</li>
                                            <li className={cx("menu-item")}>Báo giá & hỗ trợ</li>
                                            <li className={cx("menu-item")}>Câu hỏi thường gặp</li>
                                            <li className={cx("menu-item")}>Góp ý báo lỗi</li>
                                            <li className={cx("menu-item")}>Sitemap</li>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-3")}>
                                    <div className={cx("menu-footer")}>
                                        <div className={cx("menu-title")}>QUY ĐỊNH</div>
                                        <div className={cx("menu-list")}>
                                            <li className={cx("menu-item")}>Quy định đăng tin</li>
                                            <li className={cx("menu-item")}>Quy chế hoạt động</li>
                                            <li className={cx("menu-item")}>Điều khoản thỏa thuận</li>
                                            <li className={cx("menu-item")}>Chính sách bảo mật</li>
                                            <li className={cx("menu-item")}>Giải quyết khiếu nại</li>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("menu-mail")}>
                                        <div className={cx("mail-title")}>ĐĂNG KÝ NHẬN TIN</div>
                                        <div className={cx("mail-input")}>
                                            <form action="#">
                                                <input type="text" className={cx("input-email")} />
                                                <div className={cx("icon")}>
                                                    <button> <img src={sendicon} alt="send" width={32}/> </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
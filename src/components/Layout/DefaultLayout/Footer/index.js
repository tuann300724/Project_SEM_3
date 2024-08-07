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
                            PropertyGuru Vietnam Joint Stock Company
                            </div>
                            <div className={cx("location")}>
                                <div className={cx("location-icon")}>
                                    <img src={location} alt="icon" />
                                </div>
                                <div className={cx("location-info")}>
                                391A Nam Ky Khoi Nghia, Vo Thi Sau Ward, District 3, Vietnam
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
                                            <p>1900 0000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-xl-4 col-md-4 col-12")}>
                                    <div className={cx("hotline")}>
                                        <div className={cx("hotline-icon")}> <img src={userquestion} alt="userquestion" /> </div>
                                        <div className={cx("hotline-info")}>
                                            <span>Customer service</span>
                                            <p>trogiup.batdongsan.com.vn</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-xl-5 col-md-4 col-12")}>
                                    <div className={cx("hotline")}>
                                        <div className={cx("hotline-icon")}> <img src={mailbox} alt="mailbox" /> </div>
                                        <div className={cx("hotline-info")}>
                                            <span>Customer care</span>
                                            <p>trieunhananh@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("row")}>
                                <div className={cx("col-3")}>
                                    <div className={cx("menu-footer")}>
                                        <div className={cx("menu-title")}>INSTRUCTIONS</div>
                                        <div className={cx("menu-list")}>
                                            <li className={cx("menu-item")}>About us</li>
                                            <li className={cx("menu-item")}>Quotation & Support</li>
                                            <li className={cx("menu-item")}>Frequently Asked Questions FAQs</li>
                                            <li className={cx("menu-item")}>Góp ý báo lỗi</li>
                                            <li className={cx("menu-item")}>Sitemap</li>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-3")}>
                                    <div className={cx("menu-footer")}>
                                        <div className={cx("menu-title")}>POLICIES</div>
                                        <div className={cx("menu-list")}>
                                            <li className={cx("menu-item")}>Advertisement regulations</li>
                                            <li className={cx("menu-item")}>Operational procedures</li>
                                            <li className={cx("menu-item")}>Terms and Conditions</li>
                                            <li className={cx("menu-item")}>Privacy Policy</li>
                                            <li className={cx("menu-item")}>Complaint resolution</li>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("col-6")}>
                                    <div className={cx("menu-mail")}>
                                        <div className={cx("mail-title")}>SIGN UP FOR NOTIFICATIONS</div>
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
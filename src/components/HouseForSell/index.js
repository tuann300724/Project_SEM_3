import React from 'react';
import styles from './Houseforsell.module.scss'
import classNames from 'classnames/bind';
import Searchsell from '../Aboutus/Searchsell';
import { Link } from 'react-router-dom';
import catavatar from '../../public/images/catavatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower } from '@fortawesome/free-solid-svg-icons';

function HouseForSell(props) {
    const cx = classNames.bind(styles);
    return (
        <div>
            <div className={cx("container-xl")}>
                {/* start search */}
                <Searchsell />
                <hr />
                {/* end search */}
                <div className={cx("title")}>
                    Mua bán nhà đất trên toàn quốc
                </div>
                <div className={cx("description-count")}>
                    Hiện có 171.784 bất động sản.
                </div>
                <div className={cx("row")}>
                    <div className={cx("col-xl-9 col-lg-12")} >
                        <div className={cx("container-main-content-left")}>

                            <div className={cx("container-card-info")}>

                                <Link to="/infopost" >
                                    <div className={cx("main-card")}>
                                        <div className={cx("premium-diamond")}>
                                            <img src="https://staticfile.batdongsan.com.vn/images/label/Label_VIPDiamond.svg" alt="diamond" />
                                        </div>
                                        <div className={cx("parent-flex")}>
                                            <div className={cx("parent-image")}>
                                                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                            </div>
                                            <div className={cx("children-image")}>
                                                <img src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={cx("border-image")} alt="house" />
                                                <div className={cx("children-flex")}>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className={cx("container-description")}>
                                    <div className={cx("title-description")}>
                                        Quỹ căn STU-1N-2N-3N cắt lỗ Vinhomes Ocean Park cập nhật giá tốt nhất liên tục
                                    </div>
                                    <div className={cx("product-description-info")}>
                                        <div className={cx("product-price")}>
                                            1,92 tỷ
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-arena")}>
                                            59 m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-price-percent")}>
                                            51,01 tr/m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-bed")}>
                                            2
                                            <FontAwesomeIcon icon={faBed} className={cx("icon")} />
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-shower")}>
                                            2
                                            <FontAwesomeIcon icon={faShower} className={cx("icon")} />

                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-location")}>
                                            Hoàng Mai, Hà Nội
                                        </div>
                                    </div>
                                    <div className={cx("product-description")}>

                                        N02. Xx tầng trung đẹp, căn góc, ngoài ra tôi có 3 căn góc 3PN giá tốt. - DT sử dụng: 87.4m². -
                                        Thiết kế 2PN, 2WC. - View sông rất đẹp. - Đã đóng 26%, ký HĐMB. -
                                        Nội thất bàn giao: Hoàn thiện cơ bản, nhà mới tinh. - Giá bán nhanh: 4.458 tỷ
                                        (đã gồm VAT, phí bảo trì, bao thuế phí sang tên).Liên hệ xem hợp đồng và nhà: 090/2596688.

                                    </div>
                                </div>
                                <div className={cx("container-contact")}>
                                    <div className={cx("publish-contact")}>
                                        <div className={cx("contact-flex")}>
                                            <div className={cx("contact-avatar")}>
                                                <img src={catavatar} alt="avatar" />
                                            </div>
                                            <div className={cx("user-info")}>
                                                <span className={cx("username")}>Triệu Nhân Anh</span>
                                            </div>
                                        </div>
                                        <span className={cx("contact-phone")}>
                                            0696969696 Liên hệ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("container-card-info")}>

                                <Link to="/infopost" >
                                    <div className={cx("main-card")}>
                                        <div className={cx("premium-diamond")}>
                                            <img src="https://staticfile.batdongsan.com.vn/images/label/Label_VIPDiamond.svg" alt="diamond" />
                                        </div>
                                        <div className={cx("parent-flex")}>
                                            <div className={cx("parent-image")}>
                                                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                            </div>
                                            <div className={cx("children-image")}>
                                                <img src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={cx("border-image")} alt="house" />
                                                <div className={cx("children-flex")}>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className={cx("container-description")}>
                                    <div className={cx("title-description")}>
                                        Quỹ căn STU-1N-2N-3N cắt lỗ Vinhomes Ocean Park cập nhật giá tốt nhất liên tục
                                    </div>
                                    <div className={cx("product-description-info")}>
                                        <div className={cx("product-price")}>
                                            1,92 tỷ
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-arena")}>
                                            59 m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-price-percent")}>
                                            51,01 tr/m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-bed")}>
                                            2
                                            <FontAwesomeIcon icon={faBed} className={cx("icon")} />
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-shower")}>
                                            2
                                            <FontAwesomeIcon icon={faShower} className={cx("icon")} />

                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-location")}>
                                            Hoàng Mai, Hà Nội
                                        </div>
                                    </div>
                                    <div className={cx("product-description")}>

                                        N02. Xx tầng trung đẹp, căn góc, ngoài ra tôi có 3 căn góc 3PN giá tốt. - DT sử dụng: 87.4m². -
                                        Thiết kế 2PN, 2WC. - View sông rất đẹp. - Đã đóng 26%, ký HĐMB. -
                                        Nội thất bàn giao: Hoàn thiện cơ bản, nhà mới tinh. - Giá bán nhanh: 4.458 tỷ
                                        (đã gồm VAT, phí bảo trì, bao thuế phí sang tên).Liên hệ xem hợp đồng và nhà: 090/2596688.

                                    </div>
                                </div>
                                <div className={cx("container-contact")}>
                                    <div className={cx("publish-contact")}>
                                        <div className={cx("contact-flex")}>
                                            <div className={cx("contact-avatar")}>
                                                <img src={catavatar} alt="avatar" />
                                            </div>
                                            <div className={cx("user-info")}>
                                                <span className={cx("username")}>Triệu Nhân Anh</span>
                                            </div>
                                        </div>
                                        <span className={cx("contact-phone")}>
                                            0696969696 Liên hệ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("container-card-info")}>

                                <Link to="/infopost" >
                                    <div className={cx("main-card")}>
                                        <div className={cx("premium-diamond")}>
                                            <img src="https://staticfile.batdongsan.com.vn/images/label/Label_VIPDiamond.svg" alt="diamond" />
                                        </div>
                                        <div className={cx("parent-flex")}>
                                            <div className={cx("parent-image")}>
                                                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                            </div>
                                            <div className={cx("children-image")}>
                                                <img src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={cx("border-image")} alt="house" />
                                                <div className={cx("children-flex")}>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className={cx("container-description")}>
                                    <div className={cx("title-description")}>
                                        Quỹ căn STU-1N-2N-3N cắt lỗ Vinhomes Ocean Park cập nhật giá tốt nhất liên tục
                                    </div>
                                    <div className={cx("product-description-info")}>
                                        <div className={cx("product-price")}>
                                            1,92 tỷ
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-arena")}>
                                            59 m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-price-percent")}>
                                            51,01 tr/m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-bed")}>
                                            2
                                            <FontAwesomeIcon icon={faBed} className={cx("icon")} />
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-shower")}>
                                            2
                                            <FontAwesomeIcon icon={faShower} className={cx("icon")} />

                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-location")}>
                                            Hoàng Mai, Hà Nội
                                        </div>
                                    </div>
                                    <div className={cx("product-description")}>

                                        N02. Xx tầng trung đẹp, căn góc, ngoài ra tôi có 3 căn góc 3PN giá tốt. - DT sử dụng: 87.4m². -
                                        Thiết kế 2PN, 2WC. - View sông rất đẹp. - Đã đóng 26%, ký HĐMB. -
                                        Nội thất bàn giao: Hoàn thiện cơ bản, nhà mới tinh. - Giá bán nhanh: 4.458 tỷ
                                        (đã gồm VAT, phí bảo trì, bao thuế phí sang tên).Liên hệ xem hợp đồng và nhà: 090/2596688.

                                    </div>
                                </div>
                                <div className={cx("container-contact")}>
                                    <div className={cx("publish-contact")}>
                                        <div className={cx("contact-flex")}>
                                            <div className={cx("contact-avatar")}>
                                                <img src={catavatar} alt="avatar" />
                                            </div>
                                            <div className={cx("user-info")}>
                                                <span className={cx("username")}>Triệu Nhân Anh</span>
                                            </div>
                                        </div>
                                        <span className={cx("contact-phone")}>
                                            0696969696 Liên hệ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("container-card-info")}>

                                <Link to="/infopost" >
                                    <div className={cx("main-card")}>
                                        <div className={cx("premium-diamond")}>
                                            <img src="https://staticfile.batdongsan.com.vn/images/label/Label_VIPDiamond.svg" alt="diamond" />
                                        </div>
                                        <div className={cx("parent-flex")}>
                                            <div className={cx("parent-image")}>
                                                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                            </div>
                                            <div className={cx("children-image")}>
                                                <img src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={cx("border-image")} alt="house" />
                                                <div className={cx("children-flex")}>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>
                                                    <div className={cx("children-flex-image")}>
                                                        <img src="https://plus.unsplash.com/premium_photo-1689609950057-8d01c2542fd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className={cx("container-description")}>
                                    <div className={cx("title-description")}>
                                        Quỹ căn STU-1N-2N-3N cắt lỗ Vinhomes Ocean Park cập nhật giá tốt nhất liên tục
                                    </div>
                                    <div className={cx("product-description-info")}>
                                        <div className={cx("product-price")}>
                                            1,92 tỷ
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-arena")}>
                                            59 m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-price-percent")}>
                                            51,01 tr/m²
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-bed")}>
                                            2
                                            <FontAwesomeIcon icon={faBed} className={cx("icon")} />
                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-shower")}>
                                            2
                                            <FontAwesomeIcon icon={faShower} className={cx("icon")} />

                                        </div>
                                        <div className={cx("reddot")}>
                                            ·
                                        </div>
                                        <div className={cx("product-location")}>
                                            Hoàng Mai, Hà Nội
                                        </div>
                                    </div>
                                    <div className={cx("product-description")}>

                                        N02. Xx tầng trung đẹp, căn góc, ngoài ra tôi có 3 căn góc 3PN giá tốt. - DT sử dụng: 87.4m². -
                                        Thiết kế 2PN, 2WC. - View sông rất đẹp. - Đã đóng 26%, ký HĐMB. -
                                        Nội thất bàn giao: Hoàn thiện cơ bản, nhà mới tinh. - Giá bán nhanh: 4.458 tỷ
                                        (đã gồm VAT, phí bảo trì, bao thuế phí sang tên).Liên hệ xem hợp đồng và nhà: 090/2596688.

                                    </div>
                                </div>
                                <div className={cx("container-contact")}>
                                    <div className={cx("publish-contact")}>
                                        <div className={cx("contact-flex")}>
                                            <div className={cx("contact-avatar")}>
                                                <img src={catavatar} alt="avatar" />
                                            </div>
                                            <div className={cx("user-info")}>
                                                <span className={cx("username")}>Triệu Nhân Anh</span>
                                            </div>
                                        </div>
                                        <span className={cx("contact-phone")}>
                                            0696969696 Liên hệ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-xl-3 d-xl-block d-none")}>
                        <div className={cx("container-main-content-right")}>
                            <div className={cx("content-title")}>Lọc theo khoảng giá</div>
                            <div className={cx("content-search-price")}>
                                <li className={cx("deal")}>Thỏa thuận</li>
                                <li className={cx("deal")}>Dưới 500 triệu</li>
                                <li className={cx("deal")}>500 - 800 triệu</li>
                                <li className={cx("deal")}>800 triệu - 1tỷ</li>
                                <li className={cx("deal")}>1 - 2 tỷ</li>
                                <li className={cx("deal")}>2 - 3 tỷ</li>
                                <li className={cx("deal")}>3 - 5 tỷ</li>
                                <li className={cx("deal")}>5 - 7 tỷ</li>
                                <li className={cx("deal")}>7 - 10 tỷ</li>
                                <li className={cx("deal")}>10 - 20 tỷ</li>
                                <li className={cx("deal")}>20 - 30 tỷ</li>
                                <li className={cx("deal")}>30 - 40 tỷ</li>
                                <li className={cx("deal")}>40 - 60 tỷ</li>
                                <li className={cx("deal")}>trên 60 tỷ</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HouseForSell;
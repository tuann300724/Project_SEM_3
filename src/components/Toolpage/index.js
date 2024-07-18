import React from 'react';
import styles from './toolpage.module.scss'
import classNames from 'classnames/bind';

function Toolspage(props) {
    const cx = classNames.bind(styles)
    return (
        <div className={cx("container-xl", "abc")}>
            <div className={cx("row")}>
                <div className={cx("col-lg-3 d-lg-block d-none")}>
                    <div className={cx("box-right")}>
                        <div className={cx("box-tools")}>
                            <div className={cx("tools-title")}>Hỗ trợ tiện tích</div>
                            <li>Xem hướng nhà</li>
                            <li>Xem tuổi xây nhà</li>
                            <li>Phong thủy văn phòng</li>
                            <li>Chọn màu sơn</li>
                            <li>Dự toán chi tiết</li>
                            <li>Khai toán sơ lược</li>
                            <li>Dự trù vật tư</li>
                            <li>Tính lãi xuất</li>
                        </div>
                    </div>
                </div>
                <div className={cx("col-lg-6 col-12")}>
                    <div className={cx("box-center")}>
                        <span className={cx("title")}>Tính lãi suất</span>
                        <div className={cx("box-caculator")}>
                            <div className={cx("caculator-title")}>Tìm lãi suất ngân hàng</div>
                            <div className={cx("caculator-ult-money")}>
                                <div className={cx("first-radio")}>
                                    <input type="radio" name='money' id='vnd' />
                                    <label for="vnd">VND</label>
                                </div>
                                <div className={cx("first-radio")}>
                                    <input type="radio" name='money' id='usd' />
                                    <label for="usd">USD</label>
                                </div>
                            </div>
                            <div className={cx("bank-info")}>
                                <span className={cx("detail")}>Ngân Hàng</span>
                                <div className={cx("select-bank")}>
                                    <select name="bank" >
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx("fl-info")}>
                                <span className={cx("detail")}>Kỳ hạn</span>
                                <div className={cx("select-bank")}>
                                    <select name="bank" >
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx("percent-info")}>
                                <span className={cx("detail")}>Lãi suất</span>
                                <div className={cx("select-bank")}>
                                    Không có
                                </div>
                            </div>
                        </div>
                        <div className={cx("box-seconds-caculator")}>
                            <div className={cx("seconds-title")}>
                                Bảng này giúp bạn tính toán số tiền cần trả khi vay ngân hàng để mua nhà trả góp
                            </div>
                            <div className={cx("ultils-row")}>
                                <label htmlFor='price'>Số tiền vay</label>
                                <div className={cx("input-row")}>
                                    <input type="text" id='price' placeholder='0' />
                                </div>
                            </div>
                            <div className={cx("ultils-row")}>
                                <label htmlFor='price'>Thời gian vay</label>
                                <div className={cx("input-row")}>
                                    <input type="text" id='price' placeholder='0' />
                                </div>
                            </div>
                            <div className={cx("ultils-row")}>
                                <label htmlFor='price'>Lãi suất</label>
                                <div className={cx("input-row")}>
                                    <input type="text" id='price' placeholder='0' className={cx("input-one")} />
                                    %
                                    <select name="daytime" className={cx("input-two")}>
                                        <option value="year">Year</option>
                                        <option value="month">Month</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx("ultils-row")}>
                                <label htmlFor='price'>Loại hình</label>
                                <div className={cx("input-row")}>
                                    <select name="daytime" className={cx("select-button")}>
                                        <option value="year">Year</option>
                                        <option value="month">Month</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("col-lg-3 d-lg-block d-none")}>
                    <div className={cx("box-left")}>
                        <div className={cx("box-news")}>
                            <div className={cx("news-title")}>
                                Tin tức mới nhất
                            </div>
                            <div className={cx("list-news")}>
                                <div className={cx("box-wraper")}>
                                    <div className={cx("news-img")}>
                                        <img src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="news" />
                                    </div>
                                    <span className={cx("news-context")}>
                                        Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh Biết Đón Thời Cơ ada
                                    </span>
                                </div>
                                <div className={cx("box-wraper")}>
                                    <div className={cx("news-img")}>
                                        <img src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="news" />
                                    </div>
                                    <span className={cx("news-context")}>
                                        Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh Biết Đón Thời Cơ ada
                                    </span>
                                </div>
                                <div className={cx("box-wraper")}>
                                    <div className={cx("news-img")}>
                                        <img src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="news" />
                                    </div>
                                    <span className={cx("news-context")}>
                                        Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh Biết Đón Thời Cơ ada
                                    </span>
                                </div>
                                <div className={cx("box-wraper")}>
                                    <div className={cx("news-img")}>
                                        <img src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="news" />
                                    </div>
                                    <span className={cx("news-context")}>
                                        Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh Biết Đón Thời Cơ ada
                                    </span>
                                </div>
                                <div className={cx("box-wraper")}>
                                    <div className={cx("news-img")}>
                                        <img src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="news" />
                                    </div>
                                    <span className={cx("news-context")}>
                                        Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh Biết Đón Thời Cơ ada
                                    </span>
                                </div>
                                <div className={cx("box-wraper")}>
                                    <div className={cx("news-img")}>
                                        <img src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="news" />
                                    </div>
                                    <span className={cx("news-context")}>
                                        Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh Biết Đón Thời Cơ ada
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Toolspage;
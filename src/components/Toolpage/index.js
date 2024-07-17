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

                        </div>
                    </div>
                </div>
                <div className={cx("col-lg-3 d-lg-block d-none")}>
                    <div className={cx("box-left")}>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Toolspage;
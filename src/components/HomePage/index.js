/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import React from "react";
import styles from "./homepage.module.scss";
import searchbox from "../../public/images/search-box.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const cx = classNames.bind(styles);
  return (
    <div>
      <div className={cx("wrapper")}>
        <div class={cx("banner")}>
          <img
            src="https://tpc.googlesyndication.com/simgad/9434874418247389845"
            alt="Banner"
          />
        </div>
      </div>
      <div className="w-full px-5 pt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className={cx("col-span-2", "search-box")}>
            <img src={searchbox} alt="searchbox" />
            <div className={cx("search-title")}>
             <p className={cx("search-title-text")}>Tra cứu lịch sử giá nhà đất toàn quốc</p>
            </div>
            <div className={cx("search-price-history")}>
                <div className={cx("search-categories")}>
                  <p>Chọn Loại Nhà Đất*</p>
                  <a className={cx("search-categories-input")}>
                  <FontAwesomeIcon icon={faHouse} className={cx("text-[15px]", 'mr-3', 'mb-[2px]')}/>
                    Chọn Nhà Đất
                    <FontAwesomeIcon icon={faAngleDown} className={cx("text-[15px]", 'ml-5', 'mb-[2px]')}/>

                  </a>
                </div>
            </div>
          </div>
          <div className="bg-slate-100">a</div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default HomePage;

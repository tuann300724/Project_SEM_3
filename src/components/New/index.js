import React from "react";
import classNames from "classnames/bind";
import styles from "./New.module.scss";

const cx = classNames.bind(styles);
function New(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-top")}>Path search</div>
      <div className={cx("wrapper-content")}>
        <div className={cx("header-new")}>
          <h1>Tin tức bất động sản mới nhất</h1>
          <div className={cx("header-span")}>
            <span>
              Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam
              thông qua dữ liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo
              sát thực tế của đội ngũ phóng viên, biên tập của
              Batdongsan.com.vn.
            </span>
          </div>
        </div>
        {/* trang duoi */}
        <div className={cx("list-content")}>
          <div className={cx("header-list-conent")}>
            <div className={cx("img-conent")}>
              <img
                src="https://img.iproperty.com.my/angel/1110x400-fit/wp-content/uploads/sites/7/2023/09/ttbds.png"
                alt="Căn Hộ Vừa Túi Tiền Thanh Khoản Tốt Nhưng Thiếu Cung"
              />
              <div className={cx("textOverLay")}>
                <div className={cx("Artcle-content")}>
                  <span>15/07/2024 15:02 • Tin tức</span>
                  <h3>Căn Hộ Vừa Túi Tiền Thanh Khoản Tốt Nhưng Thiếu Cung</h3>
                  <p>
                    Quý 2, căn hộ vừa túi tiền đang là phân khúc có thanh khoản
                    tốt trên thị trường hiện tại nhưng nguồn cung lại ít ỏi,
                    không đáp ứng được nhu cầu mua.
                  </p>
                </div>
              </div>
              <div className={cx("backgroundOverLay")}></div>
            </div>
            {/* ban phai */}
            <div className={cx("text-conent")}>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;

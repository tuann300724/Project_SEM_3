import React from "react";
import styles from "./Userpackage.module.scss";
import classNames from "classnames/bind";
import banner from "../../public/images/bannerpackage.png";
import salepackage from "../../public/images/salepackage.png";
import housepackage from "../../public/images/housepackage.svg";
import temppackage from "../../public/images/temppackage.svg";
import bighousepackage from "../../public/images/bighousepackage.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHandHoldingDollar,
  faUserPlus,
  faV,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

function Userpackage(props) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("container-fluid", "container-ap")}>
      <div className={cx("container-banner")}>
        <div className={cx("salepackage")}>
          <img src={salepackage} alt="sale" />
        </div>
        <div className={cx("banner-image")}>
          <img src={banner} alt="banner" />
        </div>
        <div className={cx("banner-content")}>
          <div className={cx("content-title")}>Gói hội viên</div>
          <div className={cx("content-title-list")}>
            <li>
              {" "}
              <FontAwesomeIcon icon={faHandHoldingDollar} /> Thảnh thơi đăng
              tin/đẩy tin không lo biến động giá
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faThumbsUp} /> Quản lý ngân sách dễ dàng và
              hiệu quả
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faUserPlus} /> Sử dụng các tính năng tiện
              ích nâng cao dành cho Hội viên
            </li>
          </div>
        </div>
      </div>
      <div className={cx("row", "container-package")}>
        <div className={cx("col-xl-4 col-12")}>
          <div className={cx("box-package")}>
            <div className={cx("package-title")}>
              <div className={cx("title")}>
                <span className={cx("title-name")}>Gói hội viên</span>
                <span className={cx("description")}>
                  Phù hợp với môi giới mới hoặc giỏ hàng nhỏ
                </span>
              </div>

              <div className={cx("package-image")}>
                <img src={temppackage} alt="package" />
              </div>
            </div>
            <div className={cx("package-amount")}>
              Từ <span className={cx("price")}>999.999</span>đ/tháng
            </div>
            <div className={cx("package-button")}>
              <button>Mua Ngay</button>
            </div>
            <div className={cx("little-title")}>Gói tin hàng tháng</div>
            <div className={cx("package-list")}>
              <li className={cx("disables")}>
                <FontAwesomeIcon icon={faX} /> Tin VIP Vàng (hiển thị 7 ngày)
              </li>
              <li className={cx("disables")}>
                <FontAwesomeIcon icon={faX} />
                Tin VIP Bạc (hiển thị 7 ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> 15 Tin Thường (hiển thị 10
                ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> 15 lượt đẩy cho Tin Thường
                (loại 1 lần đẩy)
              </li>
            </div>
          </div>
        </div>
        <div className={cx("col-xl-4 col-12")}>
          <div className={cx("box-package")}>
            <div className={cx("package-title")}>
              <div className={cx("title")}>
                <span className={cx("title-name")}>Hội viên Tiêu chuẩn</span>
                <span className={cx("description")}>
                  Phù hợp với môi giới chuyên nghiệp có giỏ hàng từ 10 BDS
                </span>
              </div>

              <div className={cx("package-image")}>
                <img src={housepackage} alt="package" />
              </div>
            </div>
            <div className={cx("package-amount")}>
              Từ <span className={cx("price")}>1.383.000</span>đ/tháng
            </div>
            <div className={cx("package-button")}>
              <button>Mua Ngay</button>
            </div>
            <div className={cx("little-title")}>Gói tin hàng tháng</div>
            <div className={cx("package-list")}>
              <li className={cx("disables")}>
                <FontAwesomeIcon icon={faX} /> Tin VIP Vàng (hiển thị 7 ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} />
                Tin VIP Bạc (hiển thị 7 ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> 30 Tin Thường (hiển thị 10
                ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> 30 lượt đẩy cho Tin Thường
                (loại 1 lần đẩy)
              </li>
            </div>
          </div>
        </div>
        <div className={cx("col-xl-4 col-12")}>
          <div className={cx("box-package")}>
            <div className={cx("package-title")}>
              <div className={cx("title")}>
                <span className={cx("title-name")}>Gói hội viên</span>
                <span className={cx("description")}>
                  Phù hợp với môi giới mới hoặc giỏ hàng nhỏ
                </span>
              </div>

              <div className={cx("package-image")}>
                <img src={bighousepackage} alt="package" />
              </div>
            </div>
            <div className={cx("package-amount")}>
              Từ <span className={cx("price")}>999.999</span>đ/tháng
            </div>
            <div className={cx("package-button")}>
              <button>Mua Ngay</button>
            </div>
            <div className={cx("little-title")}>Gói tin hàng tháng</div>
            <div className={cx("package-list")}>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> Tin VIP Vàng (hiển thị 7
                ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} />
                Tin VIP Bạc (hiển thị 7 ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> 15 Tin Thường (hiển thị 10
                ngày)
              </li>
              <li className={cx("actives")}>
                <FontAwesomeIcon icon={faCheck} /> 15 lượt đẩy cho Tin Thường
                (loại 1 lần đẩy)
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpackage;

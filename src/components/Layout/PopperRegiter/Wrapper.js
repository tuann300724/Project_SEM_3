import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
import Register from "../../Register"


const cx = classNames.bind(styles);
function Wrapper({ children, className }) {
  return (
    <div className={cx("wrapperAll")}>
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-layout")}>
        <div className={cx("layout-conent")}>
          <div className={cx("layout-right")}>
            <img
              src="https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg"
              alt="logo"
              className={cx("layout-img-size")}
            />
            <div className={cx("layout-img-duoi")}>
              <div className={cx("img-duoix2")}>
                <img
                  src="https://batdongsan.com.vn/sellernet/static/media/cover.800e56db.png"
                  alt="logo"
                  className={cx("hinh_nen")}
                />
                <div>
                  <h4 type="primary" className={cx("motalogin")}>
                    Tìm nhà đất
                  </h4>
                  <h4 type="primary" className={cx("motalogin")}>
                    Có Nguyễn Văn Nghị dẫn lối
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("layout-left")}>
             <Register/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Wrapper;

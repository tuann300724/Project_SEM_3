import React from "react";
import classNames from "classnames/bind";
import style from "./Login.module.scss";

const cx = classNames.bind(style);

function Login(props) {
  return (
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
            <div className={cx("layout-leftX2")}>
              <div className={cx("wrapper-layout-left")}>
                <div>
                  <h5 type="primary" className={cx("hilogin")}>
                    Xin chào bạn
                  </h5>
                  <h3 className={cx("hilogin-next")} type="primary">
                    Đăng nhập để tiếp tục
                  </h3>
                  <form>
                    <div className={cx("wapper-input")}>
                      <div className={cx("wapper-inputx2")}>
                        <div className={cx("wapper-icon")}>
                          <svg
                            font-size="24px"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              xmlns="http://www.w3.org/2000/svg"
                              d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <input
                          autocomplete="username"
                          name="username"
                          placeholder="SĐT chính hoặc email"
                          type="text"
                          mode="normal"
                          className={cx("inputconentwp")}
                        />
                      </div>
                      <div className={cx("validate-input")} type="negative">
                        Tên đăng nhập không được để trống
                      </div>
                    </div>
                    <div className={cx("wapper-input", "pdtop")}>
                      <div className={cx("wapper-inputx2")}>
                        <div className={cx("wapper-icon")}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            font-size="24px"
                          >
                            <path
                              d="M18.7691 21H5.23076C4.90434 21 4.59129 20.8712 4.36048 20.642C4.12967 20.4128 4 20.1019 4 19.7778V11.2222C4 10.8981 4.12967 10.5872 4.36048 10.358C4.59129 10.1288 4.90434 10 5.23076 10H18.7691C19.0955 10 19.4086 10.1288 19.6394 10.358C19.8702 10.5872 19.9999 10.8981 19.9999 11.2222V19.7778C19.9999 20.1019 19.8702 20.4128 19.6394 20.642C19.4086 20.8712 19.0955 21 18.7691 21Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M7.42859 9.85709V6.99997C7.42859 5.93911 7.91022 4.9217 8.76752 4.17156C9.62482 3.42142 10.7876 3 12 3C13.2124 3 14.3751 3.42142 15.2324 4.17156C16.0897 4.9217 16.5714 5.93911 16.5714 6.99997V9.85709"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <input
                          autocomplete="username"
                          name="username"
                          placeholder="Mật Khẩu"
                          type="text"
                          mode="normal"
                          className={cx("inputconentwp")}
                        />
                      </div>
                      <div className={cx("validate-input")} type="negative">
                        Mật Khẩu Không Được Để Trống
                      </div>
                    </div>
                    <button className={cx("wrapper-button")}>
                      <div className={cx("button-login")}>
                      <span type="primary" className={cx("logintext")}>Đăng nhập</span>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

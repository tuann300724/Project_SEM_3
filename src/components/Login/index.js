import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Login.module.scss";

const cx = classNames.bind(style);

function Login(props) {
  const [remeberAccunt, setRemeberAccunt] = useState(false);
  const handelRemeberAccount = () => {
    setRemeberAccunt(!remeberAccunt);
  };

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
                          type="password"
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
                        <span type="primary" className={cx("logintext")}>
                          Đăng nhập
                        </span>
                      </div>
                    </button>
                  </form>
                  <div className={cx("footerlogin")}>
                    <div
                      className={cx("wrapper-footerlogin")}
                      onClick={handelRemeberAccount}
                    >
                      {remeberAccunt ? (
                        <svg
                          font-size="24px"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          font-size="24px"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M17 8L10.7 15L8 12"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      )}
                      {/* <svg
                        font-size="24px"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></path>
                      </svg> */}

                      <div className={cx("remenberAcount")}>
                        <div type="primary" className={cx("remenberAcountx2")}>
                          Nhớ tài khoản
                        </div>
                      </div>
                    </div>
                    {/* +++++++++++++++ */}
                    <a
                      type="primary"
                      state="normal"
                      href="/forget-password"
                      className={cx("forget-password")}
                    >
                      <div className={cx("forget-passwordx2")} type="primary">
                        Quên mật khẩu?
                      </div>
                    </a>
                  </div>
                  {/* +++++++++++++++ */}
                  <div className={cx("Add-login")}>
                    <div className={cx("Add-div")}></div>
                    <div className={cx("Ordiv")}>
                      <div type="tertiary" className={cx("Ordivx2")}>
                        Hoặc
                      </div>
                    </div>
                  </div>
                  {/* ++++++++++++++++++ */}
                  <div>
                    <div className={cx("wrapper-loginor")}>
                      <button className={cx("loginor")}>
                        <div className={cx("add-loginor-or")}>
                          <span className={cx("wrapper-icon-login")}>
                            <div className={cx("icon-icon")}>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.4933 17.5861C20.1908 18.2848 19.8328 18.928 19.418 19.5193C18.8526 20.3255 18.3897 20.8835 18.0329 21.1934C17.4798 21.702 16.8872 21.9625 16.2527 21.9773C15.7972 21.9773 15.2478 21.8477 14.6083 21.5847C13.9667 21.323 13.3771 21.1934 12.838 21.1934C12.2726 21.1934 11.6662 21.323 11.0176 21.5847C10.3679 21.8477 9.84463 21.9847 9.44452 21.9983C8.83602 22.0242 8.22949 21.7563 7.62408 21.1934C7.23767 20.8563 6.75436 20.2786 6.17536 19.4601C5.55415 18.586 5.04342 17.5725 4.64331 16.417C4.21481 15.1689 4 13.9603 4 12.7902C4 11.4498 4.28962 10.2938 4.86973 9.32509C5.32564 8.54696 5.93216 7.93316 6.69127 7.48255C7.45038 7.03195 8.2706 6.80233 9.15391 6.78763C9.63723 6.78763 10.271 6.93714 11.0587 7.23096C11.8441 7.52576 12.3484 7.67526 12.5695 7.67526C12.7348 7.67526 13.295 7.50045 14.2447 7.15195C15.1429 6.82874 15.9009 6.69492 16.5218 6.74764C18.2045 6.88343 19.4686 7.54675 20.3094 8.74177C18.8045 9.6536 18.06 10.9307 18.0749 12.5691C18.0884 13.8452 18.5514 14.9071 19.4612 15.7503C19.8736 16.1417 20.334 16.4441 20.8464 16.6589C20.7353 16.9812 20.618 17.2898 20.4933 17.5861ZM16.6342 2.40011C16.6342 3.40034 16.2687 4.33425 15.5404 5.19867C14.6614 6.22629 13.5982 6.8201 12.4453 6.7264C12.4306 6.60641 12.4221 6.48011 12.4221 6.3474C12.4221 5.38718 12.8401 4.35956 13.5824 3.51934C13.953 3.09392 14.4244 2.74019 14.9959 2.45801C15.5663 2.18005 16.1058 2.02632 16.6132 2C16.628 2.13371 16.6342 2.26744 16.6342 2.4001V2.40011Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </div>
                          </span>
                          <span type="primary" className={cx("deslogin")}>
                            Đăng nhập với Apple
                          </span>
                        </div>
                      </button>
                      <button className={cx("loginor")}>
                        <div className={cx("add-loginor-or")}>
                          <span className={cx("wrapper-icon-login")}>
                            <div className={cx("icon-icon")}>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.4933 17.5861C20.1908 18.2848 19.8328 18.928 19.418 19.5193C18.8526 20.3255 18.3897 20.8835 18.0329 21.1934C17.4798 21.702 16.8872 21.9625 16.2527 21.9773C15.7972 21.9773 15.2478 21.8477 14.6083 21.5847C13.9667 21.323 13.3771 21.1934 12.838 21.1934C12.2726 21.1934 11.6662 21.323 11.0176 21.5847C10.3679 21.8477 9.84463 21.9847 9.44452 21.9983C8.83602 22.0242 8.22949 21.7563 7.62408 21.1934C7.23767 20.8563 6.75436 20.2786 6.17536 19.4601C5.55415 18.586 5.04342 17.5725 4.64331 16.417C4.21481 15.1689 4 13.9603 4 12.7902C4 11.4498 4.28962 10.2938 4.86973 9.32509C5.32564 8.54696 5.93216 7.93316 6.69127 7.48255C7.45038 7.03195 8.2706 6.80233 9.15391 6.78763C9.63723 6.78763 10.271 6.93714 11.0587 7.23096C11.8441 7.52576 12.3484 7.67526 12.5695 7.67526C12.7348 7.67526 13.295 7.50045 14.2447 7.15195C15.1429 6.82874 15.9009 6.69492 16.5218 6.74764C18.2045 6.88343 19.4686 7.54675 20.3094 8.74177C18.8045 9.6536 18.06 10.9307 18.0749 12.5691C18.0884 13.8452 18.5514 14.9071 19.4612 15.7503C19.8736 16.1417 20.334 16.4441 20.8464 16.6589C20.7353 16.9812 20.618 17.2898 20.4933 17.5861ZM16.6342 2.40011C16.6342 3.40034 16.2687 4.33425 15.5404 5.19867C14.6614 6.22629 13.5982 6.8201 12.4453 6.7264C12.4306 6.60641 12.4221 6.48011 12.4221 6.3474C12.4221 5.38718 12.8401 4.35956 13.5824 3.51934C13.953 3.09392 14.4244 2.74019 14.9959 2.45801C15.5663 2.18005 16.1058 2.02632 16.6132 2C16.628 2.13371 16.6342 2.26744 16.6342 2.4001V2.40011Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </div>
                          </span>
                          <span type="primary" className={cx("deslogin")}>
                            Đăng nhập với Apple
                          </span>
                        </div>
                      </button>
                      <button className={cx("loginor")}>
                        <div className={cx("add-loginor-or")}>
                          <span className={cx("wrapper-icon-login")}>
                            <div className={cx("icon-icon")}>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.4933 17.5861C20.1908 18.2848 19.8328 18.928 19.418 19.5193C18.8526 20.3255 18.3897 20.8835 18.0329 21.1934C17.4798 21.702 16.8872 21.9625 16.2527 21.9773C15.7972 21.9773 15.2478 21.8477 14.6083 21.5847C13.9667 21.323 13.3771 21.1934 12.838 21.1934C12.2726 21.1934 11.6662 21.323 11.0176 21.5847C10.3679 21.8477 9.84463 21.9847 9.44452 21.9983C8.83602 22.0242 8.22949 21.7563 7.62408 21.1934C7.23767 20.8563 6.75436 20.2786 6.17536 19.4601C5.55415 18.586 5.04342 17.5725 4.64331 16.417C4.21481 15.1689 4 13.9603 4 12.7902C4 11.4498 4.28962 10.2938 4.86973 9.32509C5.32564 8.54696 5.93216 7.93316 6.69127 7.48255C7.45038 7.03195 8.2706 6.80233 9.15391 6.78763C9.63723 6.78763 10.271 6.93714 11.0587 7.23096C11.8441 7.52576 12.3484 7.67526 12.5695 7.67526C12.7348 7.67526 13.295 7.50045 14.2447 7.15195C15.1429 6.82874 15.9009 6.69492 16.5218 6.74764C18.2045 6.88343 19.4686 7.54675 20.3094 8.74177C18.8045 9.6536 18.06 10.9307 18.0749 12.5691C18.0884 13.8452 18.5514 14.9071 19.4612 15.7503C19.8736 16.1417 20.334 16.4441 20.8464 16.6589C20.7353 16.9812 20.618 17.2898 20.4933 17.5861ZM16.6342 2.40011C16.6342 3.40034 16.2687 4.33425 15.5404 5.19867C14.6614 6.22629 13.5982 6.8201 12.4453 6.7264C12.4306 6.60641 12.4221 6.48011 12.4221 6.3474C12.4221 5.38718 12.8401 4.35956 13.5824 3.51934C13.953 3.09392 14.4244 2.74019 14.9959 2.45801C15.5663 2.18005 16.1058 2.02632 16.6132 2C16.628 2.13371 16.6342 2.26744 16.6342 2.4001V2.40011Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </div>
                          </span>
                          <span type="primary" className={cx("deslogin")}>
                            Đăng nhập với Apple
                          </span>
                        </div>
                      </button>
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

export default Login;

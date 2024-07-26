import React from "react";

import classNames from "classnames/bind";
import style from "./Password.module.scss";

const cx = classNames.bind(style);

function Infor(props) {
  return (
    <div className={cx("wrapper-password")}>
      <div className={cx("wrapper-passwordx2")}>
        <div>
          <div className={cx("input-password")}>
            <form>
              <h5 className={cx("title-password")}>Cho chúng tôi được biết thông tin về bạn!</h5>
              <div className={cx("passwordx2")}>
                <div className={cx("passwordx3")}>
                  <div className={cx("passwordx4")}>
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.42859 9.85709V6.99997C7.42859 5.93911 7.91022 4.9217 8.76752 4.17156C9.62482 3.42142 10.7876 3 12 3C13.2124 3 14.3751 3.42142 15.2324 4.17156C16.0897 4.9217 16.5714 5.93911 16.5714 6.99997V9.85709"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <input
                    autoComplete="new-password"
                    name="password"
                    data-testid="password-input"
                    placeholder="Tên Của Bạn"
                    type="text"
                    mode="normal"
                    className={cx("inputpasswordx2")}
                    aria-autoComplete="list"
                  />
                </div>
              </div>
              <div className={cx("passwordx2")}>
                <div className={cx("passwordx3")}>
                  <div className={cx("passwordx4")}>
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.42859 9.85709V6.99997C7.42859 5.93911 7.91022 4.9217 8.76752 4.17156C9.62482 3.42142 10.7876 3 12 3C13.2124 3 14.3751 3.42142 15.2324 4.17156C16.0897 4.9217 16.5714 5.93911 16.5714 6.99997V9.85709"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <input
                    autoComplete="new-password"
                    name="password"
                    data-testid="password-input"
                    placeholder="Sdt Của Bạn"
                    type="text"
                    mode="normal"
                    className={cx("inputpasswordx2")}
                    aria-autoComplete="list"
                  />
                </div>
                <div className={cx("check2password")} type="negative">
                  Mật khẩu không trùng khớp
                </div>
              </div>
              <div className={cx("checkvalidate")}>
                <button className={cx("submitnext")}>
                  <div className={cx("submitnextx2")}>
                    <span type="primary" className={cx("submitnextx3")}>
                    Đăng Ký Tài Khoản
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infor;
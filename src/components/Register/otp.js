import React, { useRef, useState, useEffect } from "react";

import classNames from "classnames/bind";
import style from "./Otp.module.scss";
import Password from "./Password";

const cx = classNames.bind(style);

function Otp({ email }) {
  // nextPassword
  //Kết hợp với check Otp trả về
  const [nextPassword, setNextPassword] = useState(false);
  const handleOtpSubmit = () => {
    setNextPassword(!nextPassword);
  };
  // set thời gian ngược 60s
  const [second, setSecond] = useState(60);
  useEffect(() => {
    if (second > 0) {
      const timer = setInterval(() => {
        setSecond((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [second]);

  // di chuyen input
  const inputRefs = useRef([]);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={cx("layoutOtp")}>
      {nextPassword == false && (
        <div className={cx("wrapper-layout")}>
          <div>
            <form>
              <div className={cx("wrapper-icon")}>
                <svg
                  fontSize="24px"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M4 12L20 12M4 12L10 6M4 12L10 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h5 type="primary" className={cx("titleOtp")}>
                Nhập mã xác minh
              </h5>
              <div type="primary" className={cx("titleDescription")}>
                Chúng tôi đã gửi mã xác minh gồm 6 chữ số tới email{" "}
                <span type="primary" className={cx("title-email")}>
                  {email}
                </span>
              </div>
              <div className={cx("wrapper-otpinput")}>
                <div>
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      autoComplete="off"
                      aria-label={`Please enter OTP character ${index + 1}`}
                      type="tel"
                      inputMode="numeric"
                      maxLength="1"
                      onChange={(e) => handleChange(e, index)}
                    />
                  ))}
                </div>
              </div>
              <div className={cx("footerotp")}>
                <div className={cx("timeotp")}>
                  Mã có hiệu lực trong {5} phút
                </div>
                {second >= 1 && (
                  <div className={cx("otpagain")}>
                    <div className={cx("titleagain")}>
                      Gửi lại mã sau{" "}
                      <a
                        type="primary"
                        state="normal"
                        href="/#"
                        className={cx("titleagainred")}
                      >
                        <div className={cx("titleagainredx2")} type="primary">
                          00:{second} s
                        </div>
                      </a>
                    </div>
                  </div>
                )}
                {second == 0 && (
                  <div className={cx("otpagain")}>
                    <div className={cx("titleagain")}>
                      Không nhận được mã?{" "}
                      <a
                        type="primary"
                        state="normal"
                        href="/#"
                        className={cx("titleagainred")}
                      >
                        <div className={cx("titleagainredx2")} type="primary">
                          Gửi lại mã
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              {/* -------------- */}
              <button
                className={cx("submitotp")}
                type="solid"
                color="primary"
                disabled=""
              >
                <div className={cx("submitotpx2")} onClick={handleOtpSubmit}>
                  <span type="primary" className={cx("submitotpx3")}>
                    Xác minh
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
      {nextPassword == true && <Password />}
    </div>
  );
}

export default Otp;

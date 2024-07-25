import classNames from "classnames/bind";
import style from "./Register.module.scss";
import Otp from "./otp";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function Register() {
  const [nextotp, setNextotp] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [checkemal, setCheckemal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNextOtp = () => {
    if (!error && email) {
      setLoading(true);
      setNextotp(!nextotp);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setError("Email không được bỏ trống.");
    } else if (!validateEmail(value)) {
      setError("Email không hợp lệ. Hãy Nhập Đầy Đủ");
    } else {
      setError("");
    }
  };
  // checl lỗi
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  useEffect(() => {
    if (nextotp) {
      fetch(
        "https://batdongsanuser.azurewebsites.net/api/Auth/send-otp-to-verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setCheckemal(!!data.otp);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    }
  }, [nextotp, email]);
  // xoay coay dm
  if (loading) {
    return <div className={cx("loader")}></div>;
  }

  return (
    <div className={cx("layout-leftX2")}>
      {!checkemal && (
        <div className={cx("wrapper-layout-left")}>
          <div>
            <h5 className={cx("hilogin")}>Xin chào bạn</h5>
            <h3 className={cx("hilogin-next")}>Đăng ký tài khoản mới</h3>
            <form>
              <div className={cx("wapper-input")}>
                <div className={cx("wapper-inputx2")}>
                  <div className={cx("wapper-icon")}>
                    <svg
                      fontSize="24px"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    autoComplete="username"
                    name="username"
                    placeholder="Nhập Email Của Bạn."
                    type="email"
                    className={cx("inputconentwp")}
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className={cx("validate-input")}>{error}</div>
              </div>

              <button
                type="button"
                className={cx("wrapper-button")}
                onClick={handleNextOtp}
              >
                <div className={cx("button-login")}>
                  <span className={cx("logintext")}>Tiếp Tục</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
      {checkemal && <Otp email={email} />}
    </div>
  );
}

export default Register;

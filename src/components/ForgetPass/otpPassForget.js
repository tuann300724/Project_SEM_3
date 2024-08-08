import React, { useRef, useState, useEffect, memo } from "react";
import classNames from "classnames/bind";
import style from "./otpPassForget.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
function OtpPassForget({ email }) {
  const navigate = useNavigate();
  const [nextChange, setNextChange] = useState(false);
  const [second, setSecond] = useState(60);
  const [loading, setLoading] = useState(false);
  const [Otpagain, setOtpagain] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [show, setShow] = useState(false);
  const handleOtpSubmit = () => {
    setNextChange(true);
    console.log("a b c ", email, password);
    setLoading(true);
  };
  const HandelOtpAgain = () => {
    setOtpagain(!Otpagain);
    setLoading(true);
    setSecond(60);
  };
  useEffect(() => {
    if (second > 0) {
      const timer = setInterval(() => {
        setSecond((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [second]);
  const inputRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(new Array(6).fill(""));
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      } else if (value.length === 0 && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  const OtpNum = String(otpValues.join(""));
  useEffect(() => {
    if (OtpNum.length === 6) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [OtpNum]);
  console.log(OtpNum);

  // gửi lại otp
  useEffect(() => {
    if (Otpagain) {
      fetch("http://localhost:5223/api/Auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
        })
        .catch((error) => {
          setOtpagain(false);
          console.error("Failed to send OTP", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [Otpagain]);

  useEffect(() => {
    if (nextChange) {
      fetch("http://localhost:5223/api/Auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: OtpNum, newpassword: password }),
      })
        .then((response) => {
          console.log(response);
          navigate("/login");
          setLoading(false);
        })

        .catch((error) => {
          console.error("Failed to change password: ", error);  
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [nextChange]);

  if (loading) {
    return <div className={cx("loader")}></div>;
  }

  const validatePassword = (pwd) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const isValid = pwd.length >= minLength && hasUpperCase && hasNumber;
    return {
      minLength: pwd.length >= minLength,
      hasUpperCase,
      hasNumber,
      isValid,
    };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const validation = validatePassword(newPassword);
    if (!validation.minLength) {
      setPasswordError("Password must have at least 8 characters");
    } else if (!validation.hasUpperCase) {
      setPasswordError(
        "Password must contains at least one uppercase character"
      );
    } else if (!validation.hasNumber) {
      setPasswordError("Password must contains at least one number");
    } else {
      setPasswordError("");
    }

    setFormValid(validation.isValid && newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Password mismatch");
    } else {
      setConfirmPasswordError("");
    }

    const validation = validatePassword(password);
    setFormValid(validation.isValid && newConfirmPassword === password);
  };

  return (
    <div className={cx("layoutOtp")}>
      <div className={cx("wrapper-layout")}>
        <div>
          <form>
            {show === false && (
              <div>
                <h5 type="primary" className={cx("titleOtp")}>
                  Enter OTP
                </h5>
                <div type="primary" className={cx("titleDescription")}>
                  We have sent a 6-digit verification code to your email{" "}
                  <span type="primary" className={cx("title-email")}>
                    {email}
                  </span>
                </div>
              </div>
            )}
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
                    value={otpValues[index]}
                  />
                ))}
              </div>
            </div>
            <div className={cx("footerotp")}>
              <div className={cx("timeotp")}>
                The verification code is valid for 5 minutes
              </div>

              {second >= 1 && (
                <div className={cx("otpagain")}>
                  <div className={cx("titleagain")}>
                    Resend the code after{" "}
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
              {second === 0 && (
                <div className={cx("otpagain")}>
                  <div className={cx("titleagain")}>
                    Haven't received the OTP?{" "}
                    <a
                      type="primary"
                      state="normal"
                      className={cx("titleagainred")}
                    >
                      <div
                        className={cx("titleagainredx2")}
                        type="primary"
                        onClick={HandelOtpAgain}
                      >
                        Resend OTP
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            {show && (
              <div>
                <div className={cx("input-password")}>
                  <h5 className={cx("title-password")}>
                    Create a new password
                  </h5>
                  <div className={cx("passwordx2")}>
                    <div className={cx("passwordx3")}>
                      <div className={cx("passwordx4")}>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          fontSize="24px"
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
                        placeholder="Enter password"
                        type="password"
                        mode="normal"
                        className={cx("inputpasswordx2")}
                        aria-autoComplete="list"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    {passwordError && (
                      <div className={cx("check2password")} type="negative">
                        {passwordError}
                      </div>
                    )}
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
                          fontSize="24px"
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
                        name="confirmPassword"
                        data-testid="confirm-password-input"
                        placeholder="Confirm password"
                        type="password"
                        mode="normal"
                        className={cx("inputpasswordx2")}
                        aria-autoComplete="list"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    {confirmPasswordError && (
                      <div className={cx("check2password")} type="negative">
                        {confirmPasswordError}
                      </div>
                    )}
                  </div>
                  <div className={cx("checkvalidate")}>
                    <div className={cx("checkvalidatex2")}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
                      </svg>
                      <div type="tertiary" className={cx("checkvalidatex3")}>
                        Must contain at least 1 uppercase letter.
                      </div>
                    </div>
                    <div className={cx("checkvalidatex2")}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
                      </svg>
                      <div type="tertiary" className={cx("checkvalidatex3")}>
                        Must contain at least 1 number.
                      </div>
                    </div>
                    <div className={cx("checkvalidatex2")}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
                      </svg>
                      <div type="tertiary" className={cx("checkvalidatex3")}>
                        Password must have at least 8 characters
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className={cx("submitotp")}
              type="solid"
              color="primary"
              disabled=""
              onClick={handleOtpSubmit}
            >
              <div className={cx("submitotpx2")}>
                <span type="primary" className={cx("submitotpx3")}>
                  Submit
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(OtpPassForget);

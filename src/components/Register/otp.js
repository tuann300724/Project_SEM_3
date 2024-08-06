import React, { useRef, useState, useEffect,memo } from "react";
import classNames from "classnames/bind";
import style from "./Otp.module.scss";
import Password from "./Password";

const cx = classNames.bind(style);

function Otp({ email }) {
  const [nextPassword, setNextPassword] = useState(false);
  const [dataPost, setDataPost] = useState(false);
  const [second, setSecond] = useState(60);
  const [loading, setLoading] = useState(false);
  const [Otpagain, setOtpagain] = useState(false)
  const [checkOtp,setCheckOtp]=useState(false)
  const handleOtpSubmit = () => {
    setLoading(true);
    setNextPassword(!nextPassword);
  };
  const HandelOtpAgain =()=>{
    setOtpagain(!Otpagain);
    setLoading(true);
    setSecond(60)
  }

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
  console.log(OtpNum);
  useEffect(() => {
    if(nextPassword){
    fetch("http://localhost:5223/api/Auth/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: OtpNum,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataPost(data.isValid);
        setCheckOtp(true)
        setLoading(false);
        setNextPassword(false)
      })
      .catch((error) => {
        console.error("Lỗi Check Otp:", error);
        setLoading(false);
      });
    }
  }, [nextPassword]);
// gửi lại otp 
useEffect(() => {
  if (Otpagain) {
    fetch(
      "http://localhost:5223/api/Auth/send-otp-to-verify-email",
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
        
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setOtpagain(false)
        console.error("Lỗi gửi otp", error);
        setLoading(false);
      });
  }else{
    setLoading(false)
  }
}, [Otpagain]);

  if (loading) {
    return <div className={cx("loader")}></div>;
  }

  return (
    <div className={cx("layoutOtp")}>
      {dataPost === false && (
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
                Enter OTP
              </h5>
              <div type="primary" className={cx("titleDescription")}>
              We've sent a 6-digit verification OTP to your email{" "}
                <span type="primary" className={cx("title-email")}>{email}</span>
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
                      value={otpValues[index]}
                    />
                  ))}
                </div>
              </div>
              <div className={cx("footerotp")}>
                 {checkOtp ?<div className={cx("titleagainredx2")}>Invalid OTP!</div>:<div className={cx("timeotp")}>The OTP is valid for 5 minutes</div>} 
              
                {second >= 1 && (
                  <div className={cx("otpagain")}>
                    <div className={cx("titleagain")}>
                    Resend the OTP after{" "}
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
                    OTP not received?{" "}
                      <a
                        type="primary"
                        state="normal"
                        className={cx("titleagainred")}
                      >
                        <div className={cx("titleagainredx2")} type="primary" onClick={HandelOtpAgain}>
                          Resend OTP
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <button
                className={cx("submitotp")}
                type="solid"
                color="primary"
                disabled=""
                onClick={handleOtpSubmit}
              >
                <div className={cx("submitotpx2")}>
                  <span type="primary" className={cx("submitotpx3")}>
                    Verify
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
      {dataPost === true && <Password email={email} />}
    </div>
  );
}

export default memo(Otp);

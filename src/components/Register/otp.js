import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Otp.module.scss';

const cx = classNames.bind(style);

function Otp() {
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
    <div className={cx('layoutOtp')}>
      <div className={cx('wrapper-layout')}>
        <div>
          <form>
            <div className={cx('wrapper-icon')}>
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
            <h5 type="primary" className={cx('titleOtp')}>
              Nhập mã xác minh
            </h5>
            <div type="primary" className={cx('titleDescription')}>
              Chúng tôi đã gửi mã xác minh gồm 6 chữ số tới email{' '}
              <span type="primary" className={cx('title-email')}>
                abc@gmail.com
              </span>
            </div>
            <div className={cx('wrapper-otpinput')}>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;

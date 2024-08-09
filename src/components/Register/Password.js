import React, { useState,memo } from "react";
import classNames from "classnames/bind";
import style from "./Password.module.scss";
import Infor from "./infor";


const cx = classNames.bind(style);

function Password({email}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [next, setNext] = useState(false);
  const HandlerNext =()=>{
   if(formValid){
    setNext(!next)
   }
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
      setPasswordError("Password minimum 8 characters");
    } else if (!validation.hasUpperCase) {
      setPasswordError("Contains at least 1 uppercase character");
    } else if (!validation.hasNumber) {
      setPasswordError("Contains at least 1 numeric character");
    } else {
      setPasswordError("");
    }

    setFormValid(validation.isValid && newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }

    const validation = validatePassword(password);
    setFormValid(validation.isValid && newConfirmPassword === password);
  };

  return (
    <div className={cx("wrapper-password")}>
      {next===false&&<div className={cx("wrapper-passwordx2")}>
        <div>
          <div className={cx("input-password")}>
            <form>
              <h5 className={cx("title-password")}>Create Password</h5>
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
                    placeholder="Confirm Password"
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
                    Password must contain at least 1 uppercase letter
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
                    Password must contain at least 1 number
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
                    Password must be at least 8 characters long
                  </div>
                </div>
                {/* submit */}
                <buttont className={cx("submitnext")} onClick={HandlerNext}>
                  <div className={cx("submitnextx2")}>
                    <span type="primary" className={cx("submitnextx3")}>
                      Continue
                    </span>
                  </div>
                </buttont>
              </div>
            
            </form>
          </div>
        </div>
      </div>}
      {next===true&&<Infor email={email} password={password}/>}
    </div>
  );
}

export default memo(Password);

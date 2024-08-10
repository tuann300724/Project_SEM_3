import React, { useState, useEffect, memo } from "react";
import classNames from "classnames/bind";
import style from "./Password.module.scss";
import Alert from "./Alert";

const cx = classNames.bind(style);

function Infor({ email, password }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [next, setNext] = useState(false);
  const [nextLogin, setNextLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateName = (name) => {
    if (!name) {
      return "Name is required.";
    }
    const nameRegex = /^[A-Z][a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      return "The name must start with a capital letter and contain no special characters.";
    }
    return "";
  };

  const validateTel = (tel) => {
    const telRegex = /^(\+?\d{1,4}[-.\s]?)?(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\d{3}[-.\s]\d{4})$/;
    if (!telRegex.test(tel)) {
      return "Invalid phone number.";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameValidationError = validateName(name);
    const telValidationError = validateTel(tel);

    setNameError(nameValidationError);
    setTelError(telValidationError);

    if (!nameValidationError && !telValidationError) {
      handleNext();
    }
  };

  const handleNext = () => {
    setLoading(true);
    setNext(true);
  };

  useEffect(() => {
    if (next) {
      fetch("http://localhost:5223/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          phone: tel,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data.id) {
            setNextLogin(true);
          }
          setLoading(false);
          setNext(false);
        })
        .catch((error) => {
          console.error("Đăng ký tài khoản", error);
          setLoading(false);
        });
    }
  }, [next, name, email, password, tel]);

  if (loading) {
    return <div className={cx("loader")}></div>;
  }

  return (
    <div className={cx("wrapper-password")}>
      {!nextLogin && (
        <div className={cx("wrapper-passwordx2")}>
          <div>
            <div className={cx("input-password")}>
              <form onSubmit={handleSubmit}>
                <h5 className={cx("title-password")}>
                Tell us about yourself!
                </h5>
                <div className={cx("passwordx2")}>
                  <div className={cx("passwordx3")}>
                    <div className={cx("passwordx4")}>
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
                          d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="name"
                      placeholder="Name"
                      type="text"
                      className={cx("inputpasswordx2")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {nameError && (
                    <div className={cx("check2password")} type="negative">
                      {nameError}
                    </div>
                  )}
                </div>
                <div className={cx("passwordx2")}>
                  <div className={cx("passwordx3")}>
                    <div className={cx("passwordx4")}>
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
                          d="M14.5 6.5C15.2371 6.64382 15.9689 6.96892 16.5 7.5C17.031 8.03108 17.3561 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9096 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9994 16.4767V19.1864C21.0036 20.2223 20.0722 21.0873 19.0264 20.9929C10 21 3 13.935 3.00706 4.96919C2.91287 3.92895 3.77358 3.00106 4.80811 3.00009H7.52325C7.96247 2.99577 8.38828 3.151 8.72131 3.43684C9.66813 4.24949 10.2771 7.00777 10.0428 8.10428C9.85987 8.96036 8.9969 9.55929 8.41019 10.1448C9.69858 12.4062 11.5746 14.2785 13.8405 15.5644C14.4272 14.9788 15.0273 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.8579 15.6021 21.0104 16.0337 20.9994 16.4767Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="tel"
                      placeholder="Phone"
                      type="tel"
                      className={cx("inputpasswordx2")}
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                  </div>
                  {telError && (
                    <div className={cx("check2password")} type="negative">
                      {telError}
                    </div>
                  )}
                </div>
                <div className={cx("checkvalidate")}>
                  <button type="submit" className={cx("submitnext")}>
                    <div className={cx("submitnextx2")}>
                      <span className={cx("submitnextx3")}>
                      Register an Account
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {nextLogin && <Alert />}
    </div>
  );
}

export default memo(Infor);

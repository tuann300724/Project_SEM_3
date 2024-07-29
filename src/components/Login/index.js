import { useEffect, useState,memo,useContext } from "react";
import { ThemeContext } from "../../ThemContext";
import {useNavigate } from 'react-router-dom';
import classNames from "classnames/bind";
import style from "./Login.module.scss";
import ForgetPassword from "./forget-password";

const cx = classNames.bind(style);

function Login() {
  const context =useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorpass, setErrorpass] = useState("");
  const [loading, setLoading] = useState(false);
  const [remeberAccunt, setRemeberAccunt] = useState(false);
  const [next, setNext] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false)
  const [ForgetPassword1, setForgetPassword] = useState(false)
  console.log("checklogin",ForgetPassword1)
  const handleNext = () => {
    setLoading(true);
    setNext(!next);
  };
   const HandelForgetPass =()=>{
    setForgetPassword(!ForgetPassword1)
   };

  const handleChangeEmail = (event) => {
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
  const handleChangePass = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 5) {
      setErrorpass("Password ít hơn 5 ký tự");
    } else {
      setErrorpass("");
    }
  };
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  const handelRemeberAccount = () => {
    setRemeberAccunt(!remeberAccunt);
  };
  useEffect(() => {
    if(next){
    fetch("http://localhost:5223/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const DataLogin={
          Id:data.data.id,
          Username:data.data.username,
          Role: data.data.role,
        }
        localStorage.setItem('DataLogin', JSON.stringify(DataLogin))
        setLoading(false);
        setCheckLogin(false);
        context.TongleThem();
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        setCheckLogin(true);
        setNext(false);
        console.error("Lỗi đăng nhập:", error);
      });
    }else{
      setLoading(false);
    }
  }, [next]);

  if (loading) {
    return <div className={cx("loader")}></div>;
  }

  return (
    <div>
     {ForgetPassword1===false &&<div className={cx("layout-leftX2")}>
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
                
                  name="username"
                  placeholder="Nhập email của bạn"
                  type="text"
                  mode="normal"
                  className={cx("inputconentwp")}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className={cx("validate-input")} type="negative">
                {error}
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
                 
                  name="username"
                  placeholder="Mật Khẩu"
                  type="password"
                  mode="normal"
                  className={cx("inputconentwp")}
                  onChange={handleChangePass}
                />
              </div>
              <div className={cx("validate-input")} type="negative">
                {errorpass}
              </div>
                {checkLogin && <div className={cx("validate-input")} type="negative">
                  Thất bại. Tài khoản hoặc mật khâu sai !!!!
                </div>}
            </div>
 
            <div className={cx("wrapper-button")} onClick={handleNext}>
              <div className={cx("button-login")}>
                <span type="primary" className={cx("logintext")}>
                  Đăng nhập
                </span>
              </div>
            </div>
          </form>
          <div className={cx("footerlogin")}>
            <div
              className={cx("wrapper-footerlogin")}
              onClick={handelRemeberAccount}
            >
              {remeberAccunt ? (
                <svg
                  fontSize="24px"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  fontSize="24px"
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
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17 8L10.7 15L8 12"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )}
             
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
              className={cx("forget-password")}
            >
              <div className={cx("forget-passwordx2")} type="primary" onClick={HandelForgetPass}>
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
                    <div className={cx("icon-icon", "xanhFace")}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sc-hHftDr kCQmsc"
                      >
                        <path
                          d="M20.5576 2H3.44241C2.64575 2 2 2.64575 2 3.44241V20.5576C2 21.3542 2.64575 22 3.44241 22H12.6836V14.2656H10.0859V11.2383H12.6836V9.01035C12.6836 6.42673 14.2609 5.02048 16.5656 5.02048C17.6694 5.02048 18.618 5.10272 18.8945 5.1395V7.83984H17.3053C16.0514 7.83984 15.8086 8.4357 15.8086 9.31018V11.2383H18.8066L18.416 14.2656H15.8086V22H20.5576C21.3542 22 22 21.3542 22 20.5576V3.44241C22 2.64575 21.3542 2 20.5576 2V2Z"
                          fill="url(#paint0_linear)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="11"
                            y1="2"
                            x2="15"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="currentColor"></stop>
                            <stop offset="1" stopColor="currentColor"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </span>
                  <span type="primary" className={cx("deslogin")}>
                    Đăng nhập với Facebook
                  </span>
                </div>
              </button>
              <button className={cx("loginor")}>
                <div className={cx("add-loginor-or")}>
                  <span className={cx("wrapper-icon-login")}>
                    <div className={cx("icon-icon")}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54594 13.6689L6.989 15.7481L4.95341 15.7911C4.34506 14.6628 4 13.3718 4 11.9999C4 10.6733 4.32263 9.42233 4.8945 8.3208H4.89494L6.70719 8.65305L7.50106 10.4544C7.33491 10.9388 7.24434 11.4588 7.24434 11.9999C7.24441 12.5872 7.35078 13.1498 7.54594 13.6689Z"
                          fill="#FBBB00"
                        ></path>
                        <path
                          d="M19.8601 10.5054C19.952 10.9893 19.9999 11.4891 19.9999 11.9999C19.9999 12.5726 19.9397 13.1313 19.825 13.6702C19.4355 15.5041 18.4179 17.1054 17.0083 18.2386L17.0078 18.2381L14.7252 18.1217L14.4022 16.1049C15.3375 15.5564 16.0685 14.6979 16.4536 13.6702H12.1758V10.5054H16.516H19.8601Z"
                          fill="#518EF8"
                        ></path>
                        <path
                          d="M17.0081 18.2382L17.0086 18.2386C15.6376 19.3406 13.896 19.9999 12.0002 19.9999C8.95361 19.9999 6.30483 18.2971 4.95361 15.7911L7.54614 13.6689C8.22174 15.472 9.96108 16.7555 12.0002 16.7555C12.8767 16.7555 13.6978 16.5186 14.4024 16.105L17.0081 18.2382Z"
                          fill="#28B446"
                        ></path>
                        <path
                          d="M17.1064 5.84175L14.5147 7.9635C13.7855 7.50769 12.9235 7.24437 12 7.24437C9.91475 7.24437 8.14287 8.58678 7.50112 10.4545L4.89497 8.32087H4.89453C6.22597 5.75384 8.90816 4 12 4C13.9411 4 15.7209 4.69144 17.1064 5.84175Z"
                          fill="#F14336"
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
          {/* +++++++++++++++++ */}
          <div className={cx("footer-login")} type="tertiary">
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <a
              type="primary"
              state="normal"
              href="https://trogiup.batdongsan.com.vn/docs/dieu-khoan-thoa-thuan"
              className={cx("footer-a")}
            >
              <div className={cx("footer-aa")} type="primary">
                Điều khoản sử dụng
              </div>
            </a>
            ,
            <a
              type="primary"
              state="normal"
              href="https://trogiup.batdongsan.com.vn/docs/chinh-sach-bao-mat"
              className={cx("footer-aaa")}
            >
              <div className={cx("footer-bb")} type="primary">
                Chính sách bảo mật
              </div>
            </a>
            ,{" "}
            <a
              type="primary"
              state="normal"
              href="https://trogiup.batdongsan.com.vn/docs/quy-che-hoat-dong"
              className={cx("footer-b")}
            >
              <div className={cx("footer-bb")} type="primary">
                Quy chế
              </div>
            </a>
            ,{" "}
            <a
              type="primary"
              state="normal"
              href="https://trogiup.batdongsan.com.vn/"
              className={cx("footer-b")}
            >
              <div className="sc-bqyKva kNPgPf sc-jifIRw fiHoWs" type="primary">
                Chính sách
              </div>
            </a>{" "}
            của chúng tôi.
          </div>
        </div>
      </div>
      {/* cuoi */}
      <div className={cx("wrapper-register")}>
        <div type="primary" className={cx("register")}>
          Chưa là thành viên?{" "}
          <a
            type="primary"
            href="/register"
            className={cx("footer-b")}
          >
            <div className={cx("register-conent")} type="primary">
              Đăng ký
            </div>
          </a>{" "}
          tại đây
        </div>
      </div>
    </div>}
     {ForgetPassword1===true&&<ForgetPassword/>} 
    </div>
  );
}
export default memo(Login);
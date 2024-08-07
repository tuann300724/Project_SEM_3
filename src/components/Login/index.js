import { useEffect, useState,memo,useContext } from "react";
import { ThemeContext } from "../../ThemContext";
import {useNavigate } from 'react-router-dom';
import classNames from "classnames/bind";
import style from "./Login.module.scss";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import catavatar from '../../public/images/catavatar.jpg'

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
  const [ForgetPassword1, setForgetPassword] = useState(false);

  console.log("checklogin",ForgetPassword1)
  const handleNext = () => {
    setLoading(true);
    setNext(!next);
  };
   const HandelForgetPass =()=>{
   navigate("/forgetpassword")
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
        // const decoded = jwtDecode(data.token);
        // console.log("token", decoded)
        const DataLogin={
          Id:data.data.id,
          Username:data.data.username,
          Role: data.data.role,
          Avatar: data.data.avatar || catavatar
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
  //login google 
  const handleLoginSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      console.log('Đăng nhập thành công:', decoded);
      // kiểm tra email đã có trong db chưa mới cho đăng ký và login 
      // còn có rồi thì login không thôi 
      const checkEmailGoogle = await fetch("http://localhost:5223/api/Auth/check-email-exists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: decoded.email
        }),
      });
      const checkEmailGoogleData = await checkEmailGoogle.json();
      console.log("check có hay chưa", checkEmailGoogleData.exists);
       if(checkEmailGoogleData.exists===false){
        // Đăng ký tài khoản
      const registerResponse = await fetch("http://localhost:5223/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: decoded.name,
          email: decoded.email,
          password: "",
          avatar: decoded.picture,

        }),
      });
  
      if (!registerResponse.ok) {
        throw new Error('Đăng ký không thành công');
      }
  
      const registerData = await registerResponse.json();
      console.log("Đăng ký thành công:", registerData);
    
       }
  
  //     // Đăng nhập tài khoản
      const loginResponse = await fetch("http://localhost:5223/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: decoded.email,
          password: "",
        }),
      });
  
      if (!loginResponse.ok) {
        throw new Error('Đăng nhập không thành công');
      }
  
      const loginData = await loginResponse.json();
      console.log("Đăng nhập thành công:", loginData);
  
      const DataLogin = {
        Id: loginData.data.id,
        Username: loginData.data.username,
        Role: loginData.data.role,
        avatar: decoded.picture,

      };
  
      localStorage.setItem('DataLogin', JSON.stringify(DataLogin));
      context.TongleThem();
      navigate('/');
  
    } catch (error) {
    console.error("Lỗi:", error);
  }
 };
  
 
  

  const handleLoginFailure = (error) => {
  console.log('Login Failure:', error);
  };

  

  return (
    <div>
     <div className={cx("layout-leftX2")}>
      <div className={cx("wrapper-layout-left")}>
        <div>
          <h5 type="primary" className={cx("hilogin")}>
            Hello
          </h5>
          <h3 className={cx("hilogin-next")} type="primary">
          Login to continue
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
                Remember me
                </div>
              </div>
            </div>
            {/* +++++++++++++++ */}
            <a
              type="primary"
              state="normal"
              className={cx("forget-password")}
              href="/forgetpassword"
            >
              <div className={cx("forget-passwordx2")} type="primary" onClick={HandelForgetPass}>
              Forgot password?
              </div>
            </a>
          </div>
          {/* +++++++++++++++ */}
          <div className={cx("Add-login")}>
            <div className={cx("Add-div")}></div>
            <div className={cx("Ordiv")}>
              <div type="tertiary" className={cx("Ordivx2")}>
                Or
              </div>
            </div>
          </div>
          {/* ++++++++++++++++++ */}
          <div>
            <div className={cx("wrapper-loginor")}>

            <div className={cx("logingoogle")}>
               <GoogleLogin
               onSuccess={handleLoginSuccess}
               onError={handleLoginFailure}
               />
              </div>
            </div>
          </div>
          {/* +++++++++++++++++ */}
          <div className={cx("footer-login")} type="tertiary">
          By proceeding, you agree with{" "}
            <a
              type="primary"
              state="normal"
              href="https://trogiup.batdongsan.com.vn/docs/dieu-khoan-thoa-thuan"
              className={cx("footer-a")}
            >
              <div className={cx("footer-aa")} type="primary">
              Terms of Use
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
              Privacy Policy
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
              Regulations
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
              Policies
              </div>
            </a>{" "}
            of our website.
          </div>
        </div>
      </div>
      {/* cuoi */}
      <div className={cx("wrapper-register")}>
        <div type="primary" className={cx("register")}>
        Not registered yet?{" "}
          <a
            type="primary"
            href="/register"
            className={cx("footer-b")}
          >
            <div className={cx("register-conent")} type="primary">
              Sign up
            </div>
          </a>{" "}
          here
        </div>
      </div>
    </div>
    
    </div>
  );
}
export default memo(Login);
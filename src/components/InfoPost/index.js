/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Infopost.module.scss";
import classNames from "classnames/bind";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import Swiper from "swiper";
import share from "../../public/images/shareicon.svg";
import warning from "../../public/images/warningicon.svg";
import heartblack from "../../public/images/heartblack.svg";
import heartred from "../../public/images/heartred.svg";
import acreage from "../../public/images/acreage.svg";
import direction from "../../public/images/direction.svg";
import shower from "../../public/images/showericon.svg";
import beg from "../../public/images/bedicon.svg";
import interior from "../../public/images/interioricon.svg";
import zaloicon from "../../public/images/zaloicon.svg";
import arrowright from "../../public/images/arrowright.svg";
import vndicon from "../../public/images/vndicon.svg";
import catavatar from "../../public/images/catavatar.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import Foryou from "./Foryou";
import Havewatch from "./Havewatch";
import axios from "axios";
import Description from "./Description";
import { ThemeContext } from "../../ThemContext";
import DisplayContent from "./DisplayContent";
function InfoPost(props) {
  const cx = classNames.bind(styles);
  const swiperRef = useRef(null);
  const thumbref = useRef(null);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [bigImage, setbigImage] = useState();
  const [user, setUser] = useState([]);
  const [packages, setPackages] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [checktype, setChecktype] = useState([]);
  const [selectName, setselectName] = useState("")

  const [userlogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const context = useContext(ThemeContext);
  const [checkFav, setCheckFav] = useState({});
  const [checkPost, setcheckPost] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const addFavoritePost = async (postid) => {
    if (userlogin) {
      try {
        const response = await axios.get(
          `http://localhost:5117/api/FavoritePost/check?userId=${userlogin.Id}&postId=${postid}`
        );
        console.log("Response: ", response.data);
        if (response.data.isFavorite) {
          await axios.delete(
            `http://localhost:5117/api/FavoritePost?userId=${userlogin.Id}&postId=${postid}`
          );
          console.log("Post removed from favorites");
        } else {
          await axios.post("http://localhost:5117/api/FavoritePost", {
            userId: userlogin.Id,
            postId: postid,
          });
          console.log("Post added to favorites");
        }
        context.toggleFavoritesStatus();
      } catch (error) {
        console.error("Error handling favorite post:", error);
      }
    } else {
      alert("You need to login to favorite post");
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchFavpost = async () => {
    if (userlogin) {
      const newCheckFav = {};
      for (const item of checkPost) {
        try {
          const response = await axios.get(
            `http://localhost:5117/api/FavoritePost/check?userId=${userlogin.Id}&postId=${item.id}`
          );
          newCheckFav[item.id] = response.data.isFavorite;
        } catch (error) {
          console.error("Error fetching favorite post:", error);
        }
      }
      setCheckFav(newCheckFav);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5117/api/Post")
      .then((result) => {
        setcheckPost(result.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (checkPost.length > 0) {
      fetchFavpost();
    }
  }, [checkPost, context.checkFavoritesStatus]);

  const param = useParams();
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param.slug]);
  useEffect(() => {
    axios
      .get(`http://localhost:5117/api/Post/${param.id}`)
      .then((res) => {
        console.log(res.data.data);

        setData(res.data.data);
        setImages(res.data.data.postImages);
        setbigImage(res.data.data.postImages[0].imageUrl);
        let postInfoArray =
          JSON.parse(localStorage.getItem("postInfoArray")) || [];

        const newPost = {
          idpost: res.data.data.id,
          title: res.data.data.title,
          address: res.data.data.address,
          price: res.data.data.price,
          image: res.data.data.postImages[0].imageUrl,
        };
        const postExists = postInfoArray.some(
          (post) => post.idpost === newPost.idpost
        );

        if (!postExists) {
          postInfoArray.push(newPost);
          localStorage.setItem("postInfoArray", JSON.stringify(postInfoArray));
        }

        axios
          .get(`http://localhost:5223/api/user/${res.data.data.userId}`)
          .then((res) => {
            setUser(res.data.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [param.id]);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1140: {
          slidesPerView: 5,
        },
        1320: {
          slidesPerView: 6,
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5081/api/Package`)
      .then((result) => {
        setPackages(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5081/api/Transaction/user/${data.userId}`)
      .then((result) => {
        const userTransactions = result.data.data;
        setTransactions(userTransactions);
        const checktype = packages.find(
          (p) => p.id === userTransactions.packageId
        );
        if (checktype.name === "Basic") {
          setChecktype("Type Basic");
        } else if (checktype.name === "Premium") {
          setChecktype("Type Premium");
        } else if (checktype.name === "Deluxe") {
          setChecktype("Type Deluxe");
        }
      })
      .catch((err) => console.log(err));
  }, [packages, data.userId]);
  useEffect(() => {
    const thumbnails = document.querySelectorAll("#thumbnail-image");
    thumbnails.forEach((item) => {
      item.addEventListener("click", function (e) {
        setbigImage(e.target.src);
        thumbnails.forEach((i) => i.classList.remove(styles.active));
        this.classList.add(styles.active);
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      thumbnails.forEach((item) => {
        item.removeEventListener("click", function (e) {
          setbigImage(e.target.src);
          thumbnails.forEach((i) => i.classList.remove(styles.active));
          this.classList.add(styles.active);
        });
      });
    };
  }, [images]);
  function formatPrice(price) {
    if (price == null || isNaN(price)) {
      return "N/A"; // hoặc bạn có thể trả về giá trị mặc định khác
    }
    const format = (value) => {
      const formatted = value.toFixed(2);
      return formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted;
    };

    if (price >= 1000000) {
      return `${format(price / 1000000)} Billions`;
    } else if (price >= 1000) {
      return `${format(price / 1000)} Millions`;
    } else if (price >= 1) {
      return `${format(price / 1)}  Thousand`;
    } else {
      return format(price);
    }
  }
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`;
  useEffect(() => {
    console.log("data info", data);
  }, [data]);
  const handleChoosecity = (e) => {
    const cityName = e.target.getAttribute("data-name");
    setselectName(cityName);
    navigate(`/house-for-sell?address=${encodeURIComponent(cityName)}`);
};
  return (
    <div>
      <div className={cx("container-xl")}>
        <div className={cx("row")}>
          <div className={cx("col-xl-8 col-12")}>
            <div className={cx("container-content-left")}>
              <div className={cx("content-media")}>
                <div className={cx("big-image")}>
                  <img src={bigImage} alt="thumbnail" />
                </div>
                <div className={cx("slider-image", "swiper")} ref={swiperRef}>
                  <div className={cx("swiper-wrapper")}>
                    {images.map((item, index) => (
                      <div
                        className={cx("thumbnail-image", "swiper-slide")}
                        id="thumbnail-image"
                        key={index}
                        ref={thumbref}
                      >
                        <img src={item.imageUrl} alt="thumb" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className={cx("content-title")}>{data.title}</h3>
              <span className={cx("description-location")}>{data.address}</span>
              <hr />
              <div className={cx("content-info-price")}>
                <div className="d-flex">
                  <div className={cx("info-price")}>
                    <span className={cx("amount")}>Price range</span>
                    <span className={cx("price")}>
                      {formatPrice(data.price)}
                    </span>
                    <span className={cx("precent")}>
                      {formatPrice(data.price / data.area)}/m²
                    </span>
                  </div>
                  <div className={cx("info-arena")}>
                    <span className={cx("arena")}>Area</span>
                    <span className={cx("arena-precent")}>{data.area} m²</span>
                  </div>
                </div>
                <div className={cx("info-icon")}>
                  <Tippy content="Share">
                    <div className={cx("icon")}>
                      <img src={share} alt="share" />
                    </div>
                  </Tippy>
                  <Tippy content="Report">
                    <div className={cx("icon")}>
                      <img src={warning} alt="share" />
                    </div>
                  </Tippy>
                  <div
                    className={cx("icon")}
                    onClick={() => addFavoritePost(data.id)}
                  >
                    {
                      <img
                        src={checkFav[data.id] ? heartred : heartblack}
                        alt="heart"
                      />
                    }
                  </div>
                </div>
              </div>
              <span className={cx("title-description")}>
                Information description
              </span>
              <div className={cx("detail-content")}>
                <div className={cx("detail-info")}>
                  <DisplayContent content={data.description} />
                </div>
              </div>
              <span className={cx("title-description")}>
                Property specifications
              </span>
              {/* start */}
              <div className={cx("row")}>
                <div className={cx("col-6")}>
                  <div className={cx("box-title")}>
                    <div className={cx("box-flex")}>
                      <span className={cx("icon")}>
                        {" "}
                        <img src={acreage} alt="icon" />{" "}
                      </span>
                      <span className={cx("text")}>Area</span>
                    </div>
                    <span className={cx("value")}>{data.area} m²</span>
                  </div>
                </div>
                <div className={cx("col-6")}>
                  <div className={cx("box-title")}>
                    <div className={cx("box-flex")}>
                      <span className={cx("icon")}>
                        {" "}
                        <img src={vndicon} alt="icon" />{" "}
                      </span>
                      <span className={cx("text")}>Price range</span>
                    </div>
                    <span className={cx("value")}>
                      {formatPrice(data.price)}
                    </span>
                  </div>
                </div>
                <div className={cx("col-6")}>
                  <div className={cx("box-title")}>
                    <div className={cx("box-flex")}>
                      <span className={cx("icon")}>
                        {" "}
                        <img src={beg} alt="icon" />{" "}
                      </span>
                      <span className={cx("text")}>Bedrooms</span>
                    </div>
                    <span className={cx("value")}>{data.bedrooms}</span>
                  </div>
                </div>
                <div className={cx("col-6")}>
                  <div className={cx("box-title")}>
                    <div className={cx("box-flex")}>
                      <span className={cx("icon")}>
                        {" "}
                        <img src={shower} alt="icon" />{" "}
                      </span>
                      <span className={cx("text")}>Bathrooms</span>
                    </div>
                    <span className={cx("value")}>{data.bathrooms}</span>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className={cx("title-project")}>
                <span className={cx("title")}>Project information</span>
                <span className={cx("more")}>
                  {" "}
                  <Link>
                    Check out 377 properties for sale.{" "}
                    <span className={cx("icon")}>
                      {" "}
                      <img src={arrowright} alt="icon" />{" "}
                    </span>{" "}
                  </Link>{" "}
                </span>
              </div>
              <div className={cx("container-project")}>
                <div className={cx("project-content")}>
                  <div className={cx("project-img")}>
                    <img
                      src="https://images.unsplash.com/photo-1564983529458-ab605016b2be?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="project"
                    />
                  </div>
                  <div className={cx("project-info")}>
                    <span className={cx("group-title")}>
                      Sun Symphony Residence
                    </span>
                    <span className={cx("group-progress")}>
                      Currently updating progress
                      <span className={cx("reddog")}>·</span>
                      <FontAwesomeIcon icon={faHouse} /> 1.373
                      <span className={cx("reddog")}>·</span>
                      <FontAwesomeIcon icon={faBuilding} /> 3
                    </span>
                    <span className={cx("group-incorporation")}>
                      Sun Group Corporation
                    </span>
                  </div>
                </div>
              </div>
              <span className={cx("title-description")}>View on map</span>
              <div className={cx("container-map")}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.690381099047!2d106.66069771118606!3d10.758328259481841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fde1f0eee75%3A0xb806853aa80856b6!2sC%C3%B4ng%20ty%20Bia%20Saigon!5e0!3m2!1svi!2s!4v1721187252667!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <span className={cx("title-description")}>Keyword search</span>
              <div className={cx("container-keyword")}>
                <div className={cx("box-keyword")} onClick={handleChoosecity} data-name="Ho Chi Minh City">
                Ho Chi Minh City
                </div>
                <div className={cx("box-keyword")} onClick={handleChoosecity} data-name="Da Nang">
                Da Nang
                </div>
                <div className={cx("box-keyword")} onClick={handleChoosecity} data-name="Ha Noi City">
                Ha Noi City
                </div>
                <div className={cx("box-keyword")} onClick={handleChoosecity} data-name="Binh Duong">
                Binh Duong
                </div>
                <div className={cx("box-keyword")} onClick={handleChoosecity} data-name="Dong Nai">
                Dong Nai
                </div>
              </div>
              <div className={cx("container-short-info")}>
                <div className={cx("postday")}>
                  <span className={cx("daysubmit")}>Date posted</span>
                  <p className={cx("daytime")}>
                    {formatTimestamp(data.createdDate)}
                  </p>
                </div>
                <div className={cx("postday")}>
                  <span className={cx("daysubmit")}>Post type</span>
                  <p className={cx("daytime")}>{checktype}</p>
                </div>
                <div className={cx("postday")}>
                  <span className={cx("daysubmit")}>Reference number</span>
                  <p className={cx("daytime")}>{data.id}</p>
                </div>
              </div>
              {/* foryou */}
              <Foryou />
              {/* foryou */}
              <span className={cx("title-description")}>Viewed listings</span>
              <Havewatch />
            </div>
          </div>
          <div className={cx("col-xl-4 d-xl-block d-none")}>
            <div className={cx("container-content-right")}>
              <div className={cx("sidebar-box-contact")}>
                <div className={cx("box-info-avatar")}>
                  <div className={cx("avatar")}>
                    <img src={user.avatar || catavatar} alt="" />
                  </div>
                  <span className={cx("info-username")}>{user.username}</span>

                  <Link to={`/profileuser/${user.id}`}>
                    <span className={cx("info-description")}>
                      Watch more post about this user
                    </span>
                  </Link>
                </div>
                <div className={cx("button-contact")}>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} /> {user.phone}
                  </span>
                </div>
                <Link to={`https://zalo.me/${user.phone}`} target="_blank">
                  <div className={cx("button-contact-zalo")}>
                    <div className={cx("zalo-icon")}>
                      <img src={zaloicon} alt="Zalo" />
                    </div>
                    <span>Chat via Zalo</span>
                  </div>
                </Link>
                <Link
                  to="#"
                  onClick={() => window.open(mailtoLink, "_blank")}
                  target="_blank"
                  style={{ color: "#000" }}
                >
                  <div className={cx("button-contact-mail")}>
                    <span>Send Email</span>
                  </div>
                </Link>
                <Link to={`/chats/${data.userId}`}>
                  <div className={cx("button-contact-phone")}>
                    <span>Chat</span>
                  </div>
                </Link>
                <Link to={`/reservation/${param.id}`}>
                  <div className={cx("button-contact-reservation")}>
                    <span>Reservation</span>
                  </div>
                </Link>
              </div>
              <div className={cx("sidebar-box-special")}>
                <div className={cx("special-title")}>
                  <span className={cx("title")}>Highlighted properties</span>
                  <li>Selling apartments in Van Giang</li>
                  <li>Van Giang warehouse for lease</li>
                  <li>Hoa Hai land for sale</li>
                  <li>Hiep Phuoc land for sale</li>
                  <li>Gia Thuy land for sale</li>
                  <li>Hoa Xuan land for sale</li>
                  <li>House for sale in Ward 7, Vung Tau</li>
                </div>
              </div>
              <div className={cx("sidebar-box-special")}>
                <div className={cx("special-title")}>
                  <span className={cx("title")}>Support for utilities</span>
                  <li>Feng Shui consultation</li>
                  <li>Estimate the cost of building a house</li>
                  <li>Mortage Calculation</li>
                  <li>Residential construction procedure</li>
                  <li>Astrological assessment for house building</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("info-mobile")}>
        <div className={cx("info-mobile-flex")}>
          <Link to={`https://zalo.me/${user.phone}`} target="_blank">
            <div className={cx("button-zalo")}>
              <div className={cx("zalo-icon")}>
                <img src={zaloicon} alt="Zalo" />
              </div>
              <span>Chat Zalo</span>
            </div>
          </Link>
          <Link
            to="#"
            onClick={() => window.open(mailtoLink, "_blank")}
            target="_blank"
            style={{ color: "#000" }}
          >
            <div className={cx("button-email")}>
              <span>Send Email</span>
            </div>
          </Link>
          <div className={cx("button-phone")}>
            <span>Contact {user.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPost;

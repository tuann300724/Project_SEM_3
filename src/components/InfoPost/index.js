/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from "react";
import styles from "./Infopost.module.scss";
import classNames from "classnames/bind";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Swiper from "swiper";
import share from "../../public/images/shareicon.svg";
import warning from "../../public/images/warningicon.svg";
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
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import Foryou from "./Foryou";
import Havewatch from "./Havewatch";
import axios from "axios";
import Description from "./Description";
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
  const param = useParams();
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5117/api/Post/title/${param.slug}`)
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
  }, [param.slug]);
  const handleShare = () => {
    const postUrl = "http://localhost:3000/infopost/"; // Current page URL
    const postTitle = data.title || "Check out this post!";
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl
    )}&quote=${encodeURIComponent(postTitle)}`;
    window.open(url, "_blank");
  };
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
        const checktype = packages.find(p => p.id === userTransactions.packageId);
        if(checktype.name === "Basic"){
          setChecktype("Loại Tin Basic")
        }else if(checktype.name === "Premium"){
          setChecktype("Loại Tin Premium")
        }else if(checktype.name === "Deluxe"){
          setChecktype("Loại tin Deluxe")
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

    if (price >= 1000000000) {
      return `${format(price / 1000000000)} tỷ`;
    } else if (price >= 1000000) {
      return `${format(price / 1000000)} triệu`;
    } else if (price >= 1000) {
      return `${format(price / 1000)} ngàn`;
    } else {
      return format(price);
    }
  }
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`;

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
                    <span className={cx("amount")}>Mức Giá</span>
                    <span className={cx("price")}>
                      {formatPrice(data.price)}
                    </span>
                    <span className={cx("precent")}>
                      {formatPrice(data.price / data.area)}/m²
                    </span>
                  </div>
                  <div className={cx("info-arena")}>
                    <span className={cx("arena")}>Diện Tích</span>
                    <span className={cx("arena-precent")}>{data.area} m²</span>
                  </div>
                </div>
                <div className={cx("info-icon")}>
                  <Tippy content="Chia sẻ">
                    <div className={cx("icon")} onClick={handleShare}>
                      <img src={share} alt="share" />
                    </div>
                  </Tippy>
                  <Tippy content="Báo xấu tin đăng">
                    <div className={cx("icon")}>
                      <img src={warning} alt="share" />
                    </div>
                  </Tippy>
                </div>
              </div>
              <span className={cx("title-description")}>Thông tin mô tả</span>
              <div className={cx("detail-content")}>
                <div className={cx("detail-info")}>
                  <Description content={data.description} />
                </div>
              </div>
              <span className={cx("title-description")}>
                Đặc điểm bất động sản
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
                      <span className={cx("text")}>Diện Tích</span>
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
                      <span className={cx("text")}>Mức giá</span>
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
                      <span className={cx("text")}>Phòng ngủ</span>
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
                      <span className={cx("text")}>Số toilet</span>
                    </div>
                    <span className={cx("value")}>{data.bathrooms}</span>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className={cx("title-project")}>
                <span className={cx("title")}>Thông tin dự án</span>
                <span className={cx("more")}>
                  {" "}
                  <Link>
                    Xem 377 tin đăng bán{" "}
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
                      Đang cập nhật tiến độ
                      <span className={cx("reddog")}>·</span>
                      <FontAwesomeIcon icon={faHouse} /> 1.373
                      <span className={cx("reddog")}>·</span>
                      <FontAwesomeIcon icon={faBuilding} /> 3
                    </span>
                    <span className={cx("group-incorporation")}>
                      Tập đoàn Sun Group
                    </span>
                  </div>
                </div>
              </div>
              <span className={cx("title-description")}>Xem trên bản đồ</span>
              <div className={cx("container-map")}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.690381099047!2d106.66069771118606!3d10.758328259481841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fde1f0eee75%3A0xb806853aa80856b6!2sC%C3%B4ng%20ty%20Bia%20Saigon!5e0!3m2!1svi!2s!4v1721187252667!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <span className={cx("title-description")}>
                Tìm kiếm theo từ khóa
              </span>
              <div className={cx("container-keyword")}>
                <div className={cx("box-keyword")}>
                  Căn hộ Sun Symphony Residence từ 50 m2 đến 80 m2
                </div>
                <div className={cx("box-keyword")}>
                  Căn hộ Nại Hiên Đông Sơn Trà
                </div>
                <div className={cx("box-keyword")}>Căn hộ Sơn Trà Đà Nẵng</div>
                <div className={cx("box-keyword")}>Căn hộ Đà Nẵng 2 PN</div>
                <div className={cx("box-keyword")}>
                  Căn hộ Đà Nẵng từ 5 tỷ đến 7 tỷ
                </div>
              </div>
              <div className={cx("container-short-info")}>
                <div className={cx("postday")}>
                  <span className={cx("daysubmit")}>Ngày Đăng</span>
                  <p className={cx("daytime")}>
                    {formatTimestamp(data.createdDate)}
                  </p>
                </div>
                <div className={cx("postday")}>
                  <span className={cx("daysubmit")}>Loại tin</span>
                  <p className={cx("daytime")}>{checktype}</p>
                </div>
                <div className={cx("postday")}>
                  <span className={cx("daysubmit")}>Mã tin</span>
                  <p className={cx("daytime")}>{data.id}</p>
                </div>
              </div>
              {/* foryou */}
              <Foryou />
              {/* foryou */}
              <span className={cx("title-description")}>Tin đăng đã xem</span>
              <Havewatch />
            </div>
          </div>
          <div className={cx("col-xl-4 d-xl-block d-none")}>
            <div className={cx("container-content-right")}>
              <div className={cx("sidebar-box-contact")}>
                <div className={cx("box-info-avatar")}>
                  <div className={cx("avatar")}>
                    <img src={catavatar} alt="" />
                  </div>
                  <span className={cx("info-username")}>{user.username}</span>
                  <span className={cx("info-description")}>
                    Xem thêm 16 tin khác
                  </span>
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
                    <span>Chat qua Zalo</span>
                  </div>
                </Link>
                <Link
                  to="#"
                  onClick={() => window.open(mailtoLink, "_blank")}
                  target="_blank"
                  style={{ color: "#000" }}
                >
                  <div className={cx("button-contact-mail")}>
                    <span>Gửi Email</span>
                  </div>
                </Link>
                <div className={cx("button-contact-phone")}>
                  <span>Yêu cầu liên hệ lại</span>
                </div>
              </div>
              <div className={cx("sidebar-box-special")}>
                <div className={cx("special-title")}>
                  <span className={cx("title")}>Bất động sản nổi bật</span>
                  <li>Bán chung cư Văn Giang</li>
                  <li>Cho thuê kho Văn Giang</li>
                  <li>Bán đất Hòa Hải</li>
                  <li>Bán đất Hiệp Phước</li>
                  <li>Bán đất Gia Thụy</li>
                  <li>Bán nhà Hòa Xuân</li>
                  <li>Bán nhà Phường 7 Vũng Tàu</li>
                </div>
              </div>
              <div className={cx("sidebar-box-special")}>
                <div className={cx("special-title")}>
                  <span className={cx("title")}>Hỗ trợ tiện ích</span>
                  <li>Tư vấn phong thủy</li>
                  <li>Dự tính chi phí làm nhà</li>
                  <li>Tính lãi suất</li>
                  <li>Quy trình xây nhà</li>
                  <li>Xem tuổi làm nhà</li>
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
            <span>Liên hệ {user.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPost;

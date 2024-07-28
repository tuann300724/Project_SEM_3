/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./homepage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faImage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import house1 from "../../public/images/house1.jpg";
import heartblack from "../../public/images/heartblack.svg";
import magnifyclass from "../../public/images/magnifyingglass.svg";
import heartred from "../../public/images/heartred.svg";
import xmark from "../../public/images/xmark.svg";
import locationicon from "../../public/images/locationicon.svg";
import arrowdown from "../../public/images/arrowdown.svg";
import SliderSwiper from "./SliderSwiper";
import Followlocation from "./Followlocation";
import axios from "axios";
import { Link } from "react-router-dom";
import New from "./New";

function HomePage() {
  const cx = classNames.bind(styles);
  const [Favorite, setFavorite] = useState([]);
  const [RedHeart, setRedHeart] = useState(true);
  const [province, setProvice] = useState([]);

  useEffect(() => {
    axios
      .get("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((result) => setProvice(result.data.data))
      .catch((error) => console.log(error));
  }, [province]);
  const fake = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  
  const HandleFavorite = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    console.log(id);
    setRedHeart(!RedHeart);
    setFavorite((prev) => {
      const exits = prev.find((item) => item.id === id);
      if (exits) {
        return prev.map((item) =>
          item.id === id ? { ...item, success: !item.success } : item
        );
      } else {
        return [...prev, { id: id, success: true }];
      }
    });
    console.log(Favorite);
  };
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  // show city header
  
  useEffect(() => {
    const showcity = document.getElementById("showcity");
    const searchboxcity = document.getElementById("searchbox-city");
    showcity.addEventListener("click", function () {
      searchboxcity.style.visibility = "visible";
      searchboxcity.style.opacity = "1";
      searchboxcity.style.height = "490px";
      document.querySelector("body").style.overflowY = "hidden";
      const closecity = document.getElementById("close-searchbox-city");
      closecity.addEventListener("click", function () {
        searchboxcity.style.visibility = "hidden";
        searchboxcity.style.opacity = "0";
        searchboxcity.style.height = "0";
        document.querySelector("body").style.overflowY = "visible";
      });
    });
  });
  // end city header

  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("banner")}>
          <img
            src="https://tpc.googlesyndication.com/simgad/9434874418247389845"
            alt="Banner"
          />
        </div>
        <div className={cx("container", "searchbox-container")}>
          <div className={cx("boxtag-menu")}>
            <li className={cx("active")}>BĐS bán</li>
            <li>BĐS thuê</li>
            <li>Dự án</li>
          </div>
          <div className={cx("searchbox-content")}>
            <div className={cx("move")}>
              <div className={cx("searchbox-input")} id="showcity">
                <div className={cx("searchbox-input-flex")}>
                  <div className={cx("search-info")}>
                    <div className={cx("searchbox-input-icon")}>
                      {" "}
                      <img src={magnifyclass} alt="" />{" "}
                    </div>
                    <div className={cx("searchbox-input-text")}>
                      Trên toàn quốc
                    </div>
                  </div>
                  <div className={cx("searchbox-btn")}>
                    <button>Tìm kiếm</button>
                  </div>
                </div>
              </div>
              {/* chọn city */}
              <div className={cx("searchlocation-headers")}>
                <div className={cx("searchlocation-info")}>
                  <div className={cx("location-info-icon")}>
                    <div className={cx("location-icon")}>
                      {" "}
                      <img src={locationicon} alt="icon" />{" "}
                    </div>
                    <div className={cx("location-info")}>Hà Nội</div>
                  </div>
                  <div className={cx("location-icondown")}>
                    <img src={arrowdown} alt="icon" />
                  </div>
                </div>
                <div className={cx("location-input-group")}>
                  <div className={cx("input-icon")}>
                    {" "}
                    <img src={magnifyclass} alt="icon" />{" "}
                  </div>
                  <div className={cx("input-select")}>
                    <input type="text" className={cx("input-box")} />
                  </div>
                </div>
                <div className={cx("btn-search")}>
                  <button>Tìm kiếm</button>
                </div>
              </div>
              {/* chọn city */}
            </div>
            <div className={cx("searchbox-city")} id="searchbox-city">
              <div className={cx("city-header")}>
                <span>Bạn muốn tìm bất động sản tại tỉnh thành nào?</span>
                <span className={cx("close-city")} id="close-searchbox-city">
                  {" "}
                  <img src={xmark} alt="mark" />{" "}
                </span>
              </div>
              <div className={cx("city-body")}>
                <span className={cx("city-title")}>Top tỉnh thành nổi bật</span>
                <div className={cx("row")}>
                  <div className={cx("col-2")}>
                    <div className={cx("city-image")}>
                      <div className={cx("city-gradient")}></div>
                      <img
                        src="https://staticfile.batdongsan.com.vn/images/search/city-search-select/hn.webp"
                        alt="city"
                      />
                      <span className={cx("description")}>Hà Nội</span>
                    </div>
                  </div>
                  <div className={cx("col-2")}>
                    <div className={cx("city-image")}>
                      <div className={cx("city-gradient")}></div>
                      <img
                        src="https://staticfile.batdongsan.com.vn/images/search/city-search-select/hcm.webp"
                        alt="city"
                      />
                      <span className={cx("description")}>Hồ Chí Minh</span>
                    </div>
                  </div>
                  <div className={cx("col-2")}>
                    <div className={cx("city-image")}>
                      <div className={cx("city-gradient")}></div>
                      <img
                        src="https://staticfile.batdongsan.com.vn/images/search/city-search-select/dn.webp"
                        alt="city"
                      />
                      <span className={cx("description")}>Đà Nẵng</span>
                    </div>
                  </div>
                  <div className={cx("col-2")}>
                    <div className={cx("city-image")}>
                      <div className={cx("city-gradient")}></div>
                      <img
                        src="https://staticfile.batdongsan.com.vn/images/search/city-search-select/bd.webp"
                        alt="city"
                      />
                      <span className={cx("description")}>Bình Dương</span>
                    </div>
                  </div>
                  <div className={cx("col-2")}>
                    <div className={cx("city-image")}>
                      <div className={cx("city-gradient")}></div>
                      <img
                        src="https://staticfile.batdongsan.com.vn/images/search/city-search-select/don.webp"
                        alt="city"
                      />
                      <span className={cx("description")}>Đồng Nai</span>
                    </div>
                  </div>
                  <div className={cx("col-2")}>
                    <div className={cx("city-image")}>
                      <div className={cx("city-gradient")}></div>
                      <img
                        src="https://staticfile.batdongsan.com.vn/images/search/city-search-select/kh.webp"
                        alt="city"
                      />
                      <span className={cx("description")}>Khánh Hòa</span>
                    </div>
                  </div>
                </div>
                <hr />
                <span className={cx("province-list")}>Tất cả tỉnh thành</span>
                <ul className={cx("city-searchlist")}>
                  {province.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <New />
      <div className={cx("container-fluid", "setcolor-fluid")}>
        <div className={cx("container-xl", "container-foryou")}>
          <div className={cx("container-foryou-menu")}>
            <h2 className={cx("container-foryou-item")}>
              Bất Động Sản Dành Cho Bạn
            </h2>
            <div
              className={cx(
                "container-foryou-list",
                "d-lg-block",
                "d-sm-none",
                "d-none"
              )}
            >
              <a href="">Tin nhà đất bán mới nhất</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">Tin nhà đất cho thuê mới nhất</a>
            </div>
          </div>
          <div className={cx("row")}>
            {fake.map((card, index) => (
              <div
                className={cx(
                  "col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12",
                  "set-col"
                )}
                key={index}
              >
                <div className={cx("container-foryou-card")}>
                  <div className={cx("container-card-image")}>
                    <img src={house1} alt="" loading="lazy" />
                    <div className={cx("card-icon")}>
                      <FontAwesomeIcon icon={faImage} /> &nbsp;6
                    </div>
                  </div>
                  <div className={cx("card-info")}>
                    <div className={cx("card-info-title")}>
                      <div className={cx("card-title")}>
                        Cho thuê căn hộ 1 phòng tại khu đô thị Vạn Phúc. Ngay
                        trường đại học Kinh Tế Luật giá 5 triệu/tháng
                      </div>
                    </div>
                    <div className={cx("card-info-config")}>
                      <span className={cx("card-price")}>5 Triệu / tháng</span>
                      <span className={cx("card-reddot")}>·</span>
                      <span className={cx("card-arena")}>30 m²</span>
                    </div>
                    <div className={cx("card-location")}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className={cx("location-icon")}
                      />
                      <span>Thủ Đức, Hồ Chí Minh</span>
                    </div>
                    <div className={cx("card-time")}>
                      <div className={cx("card-publish-info")}>
                        Đăng Hôm Nay
                      </div>
                      <div
                        className={cx("card-favorite")}
                        id="handleheart"
                        data-id={card.id}
                        onClick={HandleFavorite}
                      >
                        {Favorite.find(
                          (item) => item.id === card.id && item.success
                        ) ? (
                          // <FontAwesomeIcon icon={solidHeart} data-id={card.id} style={{ color: "red" }} />
                          <div>
                            <img src={heartred} data-id={card.id} alt="heart" />
                          </div>
                        ) : (
                          // <FontAwesomeIcon icon={regularHeart} data-id={card.id} />
                          <div>
                            <img
                              src={heartblack}
                              data-id={card.id}
                              alt="heart"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col-12", "mb-5")}>
            <div className={cx("watch-more")}>
              <button>Xem thêm</button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container-xl", "container-special")}>
        <div className={cx("special-content")}>
          <h2 className={cx("speical-text")}>Dự án bất động sản nổi bật</h2>
          <a
            href="https://www.youtube.com/watch?v=PXqcHi2fkXI"
            target="_blank"
            rel="noreferrer"
          >
            Xem Thêm <FontAwesomeIcon icon={faArrowRight} />{" "}
          </a>
        </div>
        {/* start slider */}
        <SliderSwiper />
        {/* end slider */}
      </div>
      {/* start ads */}
      <div className={cx("container-xl  d-md-block d-none", "container-ads")}>
        <div className={cx("row")}>
          <div className={cx("col-12")}>
            <a
              href="https://www.youtube.com/watch?v=PXqcHi2fkXI"
              target="_blank"
              rel="noreferrer"
              className={cx("ads-image")}
            >
              <img
                src="https://tpc.googlesyndication.com/simgad/12977529917631729069"
                alt="Ads"
              />
            </a>
          </div>
        </div>
      </div>
      {/* end ads */}

      {/* start follow location*/}
      <Followlocation />
      {/* end follow location */}

      {/* start tools*/}
      <div className={cx("container-xl", "container-tools")}>
        <div className={cx("tools-text")}>Hỗ trợ tiện ích</div>
        <div className={cx("row")}>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}>
                  {" "}
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-ying-yang.svg"
                    alt="laban"
                  />{" "}
                </span>
                <span className={cx("tools-text")}>
                  Xem tuổi <br /> xây nhà
                </span>
              </a>
            </div>
          </div>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}>
                  {" "}
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-house.svg"
                    alt="laban"
                  />{" "}
                </span>
                <span className={cx("tools-text")}>
                  Chi phí <br /> làm nhà
                </span>
              </a>
            </div>
          </div>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <Link to="/tinh-lai-suat">
                <span className={cx("tools-image")}>
                  {" "}
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/home/calculator.svg"
                    alt="laban"
                  />{" "}
                </span>
                <span className={cx("tools-text")}>Tính lãi xuất</span>
              </Link>
            </div>
          </div>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}>
                  {" "}
                  <img
                    src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-feng-shui.svg"
                    alt="laban"
                  />{" "}
                </span>
                <span className={cx("tools-text")}>
                  Tư vấn <br /> phong thủy
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end tools */}
      {/* start ads2 */}
      <div className={cx("container-xl  d-md-block d-none", "container-ads2")}>
        <div className={cx("row")}>
          <div className={cx("col-6")}>
            <a
              href="https://www.youtube.com/watch?v=PXqcHi2fkXI"
              target="_blank"
              rel="noreferrer"
              className={cx("ads-image")}
            >
              <img
                src="https://tpc.googlesyndication.com/simgad/17560320499553780515"
                alt="Ads"
              />
            </a>
          </div>
          <div className={cx("col-6")}>
            <a
              href="https://www.youtube.com/watch?v=PXqcHi2fkXI"
              target="_blank"
              rel="noreferrer"
              className={cx("ads-image")}
            >
              <img
                src="https://tpc.googlesyndication.com/simgad/13887361005011073924"
                alt="Ads"
              />
            </a>
          </div>
        </div>
      </div>
      {/* end ads2 */}
      {/* start introduction */}
      <div className={cx("container-xl", "container-introduction")}>
        <div className={cx("row")}>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"
                  alt="house"
                />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Bất động sản bán</div>
                <div className={cx("introduction-description")}>
                  Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn
                  thông qua lượng tin rao lớn, uy tín về các loại hình bất động
                  sản bán tại Việt Nam, bao gồm bán nhà riêng, bán nhà mặt tiền,
                  bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và
                  các loại hình BĐS khác.
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg"
                  alt="house"
                />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>
                  Bất động sản cho thuê
                </div>
                <div className={cx("introduction-description")}>
                  Cập nhật thường xuyên và đầy đủ các loại hình bất động sản cho
                  thuê như: thuê phòng trọ, nhà riêng, thuê biệt thự, văn phòng,
                  kho xưởng hay thuê mặt bằng kinh doanh giúp bạn nhanh chóng
                  tìm được bất động sản ưng ý.
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg"
                  alt="house"
                />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Đánh giá dự án</div>
                <div className={cx("introduction-description")}>
                  Các video đánh giá tổng quan dự án cung cấp góc nhìn khách
                  quan của các chuyên gia về những dự án nổi bật tại Việt Nam,
                  giúp bạn đưa ra quyết định đúng đắn cho nơi an cư lý tưởng
                  hoặc cơ hội đầu tư sinh lời.
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img
                  src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg"
                  alt="house"
                />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Wiki BĐS</div>
                <div className={cx("introduction-description")}>
                  Ngoài cập nhật những biến động thị trường, chúng tôi còn cung
                  cấp kiến ​​thức, kinh nghiệm về mua bán, cho thuê, đầu tư, vay
                  mua nhà, phong thủy, thiết kế nhà, mọi thông tin cần thiết để
                  dẫn lối người tìm nhà tìm thấy căn nhà mơ ước.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end introduction */}
    </div>
  );
}

export default HomePage;

/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./homepage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons"
import house1 from "../../public/images/house1.jpg"
import heartblack from '../../public/images/heartblack.svg'
import heartred from '../../public/images/heartred.svg'
import magnifyclass from '../../public/images/magnifyingglass.svg'
import SliderSwiper from "./SliderSwiper";
import Followlocation from "./Followlocation";
//sm 640px
//md 768px 
//lg 1024px
//xl 1280px
//2xl 1530px
function HomePage() {
  const cx = classNames.bind(styles);
  const [infoImage, setinfoImage] = useState("https://tpc.googlesyndication.com/simgad/9434874418247389845");
  const [Favorite, setFavorite] = useState([]);
  const [RedHeart, setRedHeart] = useState(true);

  const fake = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
  ]
  const handleinfo = (e) => {
    setinfoImage(e.target.getAttribute('value'));
  };
  const HandleFavorite = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    console.log(id)
    setRedHeart(!RedHeart)
    setFavorite(prev => {
      const exits = prev.find(item => item.id === id);
      if (exits) {
        return prev.map(item =>
          item.id === id ? { ...item, success: !item.success } : item
        );
      } else {
        return [...prev, { id: id, success: true }]
      }
    });
    console.log(Favorite);
  };
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("banner")}>
          <img
            src="https://tpc.googlesyndication.com/simgad/9434874418247389845"
            alt="Banner"
          />
        </div>
        <div className={cx('container',"searchbox-container")}>
          <div className={cx("boxtag-menu")}>
            <li className={cx("active")}>Nhà đất bán</li>
            <li>Nhà cho thuê</li>
            <li>Dự án</li>
          </div>
          <div className={cx("searchbox-content")}>
            <div className={cx("searchbox-input")}>
                {/* <div className={cx("searchbox-input-icon")}> <img src={magnifyclass} alt="" /> </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className={cx("container-xl", "mt-5")}>
        <div className={cx("row")}>
          <div className={cx("col-xl-9 col-lg-12")}>
            <div className={cx("container-news")}>
              <div className={cx("container-news-menu")}>
                <div className={cx("container-news-item")}>
                  {["Tin Nổi Bật", "Tin Tức", "BĐS HCM", "BĐS HN"].map((item, index) => (
                    <li
                      key={index}

                      onClick={() => handleMenuItemClick(index)}
                    >
                      <div className={cx("list-item", { active: activeMenuItem === index })}>{item}</div>
                    </li>
                  ))}
                </div>
                <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("container-news-more")}>Xem Thêm <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              <div className={cx("row")}>
                <div className={cx("col-7")}>
                  <div className={cx("container-info-img", "d-none", "d-md-block")}>
                    <img src={infoImage} alt="hinh" />
                  </div>
                  <div className={cx("container-info-text")}>
                    Cuộc Chiến Tranh Database Của Yeong Và Tuấn
                  </div>
                  <div className={cx("container-info-time")}>
                    <FontAwesomeIcon icon={faClock} /> 6 Năm Trước
                  </div>
                </div>
                <div className={cx('col-5')}>
                  <div className={cx("container-info-menu")}>
                    <div className={cx("container-info-item")}>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/ky-nang-pv.jpeg" onMouseEnter={handleinfo}>Cuộc Chiến Tranh Database Của Yeong Và Tuấn</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/05/lai-suat-ngan-hang-techcombank-1.jpg" onMouseEnter={handleinfo}>Workshop Kỹ Năng Phỏng Vấn Thực Chiến Dành Cho Sinh Viên</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/Perspective-2.png" onMouseEnter={handleinfo}>Lãi Suất Ngân Hàng Techcombank Mới Nhất Tháng 07/2024</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/61e783b995d0d.jpg" onMouseEnter={handleinfo}>Từ 1/8, Mua Nhà Bắt Buộc Phải Qua Ngân Hàng</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/BDScomvn_Cam2_207-scaled.jpg" onMouseEnter={handleinfo}>Sự Kiện BĐS Nóng Nhất Đà Nẵng Tháng 7: "Toàn Cảnh Thị Trường BĐS Đà Nẵng 2024"</a></li>
                      <li><a href="/#" value="https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2024/07/eaton-park-tien-do-xay-dung.jpg" onMouseEnter={handleinfo}>Tổng Kết Giá Bất Động Sản TP.HCM 6 Tháng Đầu Năm 2024</a></li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3", "d-none", "d-xl-block")}>
            <div className={cx("container-ads")}>
              <div className={cx("ads-img")}>
                <img src="https://tpc.googlesyndication.com/simgad/7271652329159884271" alt="ads-live" />
              </div>
              <div className={cx("ads-img")}>
                <img src="https://tpc.googlesyndication.com/simgad/7271652329159884271" alt="ads-live" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container-fluid", 'setcolor-fluid')}>
        <div className={cx("container-xl", "container-foryou")}>
          <div className={cx("container-foryou-menu")}>
            <h2 className={cx("container-foryou-item")}>
              Bất Động Sản Dành Cho Bạn
            </h2>
            <div className={cx("container-foryou-list", "d-lg-block", 'd-sm-none', 'd-none')}>
              <a href="">Tin nhà đất bán mới nhất</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">Tin nhà đất cho thuê mới nhất</a>
            </div>
          </div>
          <div className={cx("row")}>
            {fake.map((card, index) => (
              <div className={cx("col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12", 'set-col')} key={index}>
                <div className={cx("container-foryou-card")}>
                  <div className={cx("container-card-image")}>
                    <img src={house1} alt="" />
                    <div className={cx("card-icon")}>
                      <FontAwesomeIcon icon={faImage} /> &nbsp;6
                    </div>
                  </div>
                  <div className={cx("card-info")}>
                    <div className={cx("card-info-title")}>
                      <div className={cx("card-title")}>
                        Cho thuê căn hộ 1 phòng tại khu đô thị Vạn Phúc.
                        Ngay trường đại học Kinh Tế Luật giá 5 triệu/tháng
                      </div>
                    </div>
                    <div className={cx("card-info-config")}>
                      <span className={cx("card-price")}>
                        5 Triệu / tháng
                      </span>
                      <span className={cx("card-reddot")}>·</span>
                      <span className={cx("card-arena")}>
                        30 m²
                      </span>
                    </div>
                    <div className={cx("card-location")}>
                      <FontAwesomeIcon icon={faLocationDot} className={cx("location-icon")} />
                      <span>Thủ Đức, Hồ Chí Minh</span>
                    </div>
                    <div className={cx("card-time")}>
                      <div className={cx("card-publish-info")}>Đăng Hôm Nay</div>
                      <div className={cx("card-favorite")} id="handleheart" data-id={card.id} onClick={HandleFavorite}>
                        {Favorite.find((item) => item.id === card.id && item.success) ? (
                          // <FontAwesomeIcon icon={solidHeart} data-id={card.id} style={{ color: "red" }} />
                          <div><img src={heartred} data-id={card.id} alt="heart" /></div>
                        ) : (
                          // <FontAwesomeIcon icon={regularHeart} data-id={card.id} />
                          <div><img src={heartblack} data-id={card.id} alt="heart" /></div>

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
          <div className={cx("col-12", 'mb-5')}>
            <div className={cx("watch-more")}><button>Xem thêm</button> </div>
          </div>
        </div>
      </div>
      <div className={cx("container-xl", "container-special")}>
        <div className={cx("special-content")}>
          <h2 className={cx("speical-text")}>
            Dự án bất động sản nổi bật
          </h2>
          <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" >Xem Thêm <FontAwesomeIcon icon={faArrowRight} /> </a>
        </div>
        {/* start slider */}
        <SliderSwiper />
        {/* end slider */}
      </div>
      {/* start ads */}
      <div className={cx("container-xl  d-md-block d-none", "container-ads")}>
        <div className={cx("row")}>
          <div className={cx("col-12")}>
            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("ads-image")}>
              <img src="https://tpc.googlesyndication.com/simgad/13887361005011073924" alt="Ads" />
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
        <div className={cx("tools-text")}>
          Hỗ trợ tiện ích
        </div>
        <div className={cx("row")}>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}> <img src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-ying-yang.svg" alt="laban" /> </span>
                <span className={cx("tools-text")}>Xem tuổi <br /> xây nhà</span>
              </a>
            </div>
          </div>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}> <img src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-house.svg" alt="laban" /> </span>
                <span className={cx("tools-text")}>Chi phí <br /> làm nhà</span>
              </a>
            </div>
          </div>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}> <img src="https://staticfile.batdongsan.com.vn/images/home/calculator.svg" alt="laban" /> </span>
                <span className={cx("tools-text")}>Tính lãi xuất</span>
              </a>
            </div>
          </div>
          <div className={cx("col-6 col-xl-3")}>
            <div className={cx("box-tools")}>
              <a href="/#">
                <span className={cx("tools-image")}> <img src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-feng-shui.svg" alt="laban" /> </span>
                <span className={cx("tools-text")}>Tư vấn <br /> phong thủy</span>
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
            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("ads-image")}>
              <img src="https://tpc.googlesyndication.com/simgad/17560320499553780515" alt="Ads" />
            </a>
          </div>
          <div className={cx("col-6")}>
            <a href="https://www.youtube.com/watch?v=PXqcHi2fkXI" target="_blank" rel="noreferrer" className={cx("ads-image")}>
              <img src="https://tpc.googlesyndication.com/simgad/13887361005011073924" alt="Ads" />
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
                <img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg" alt="house" />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Bất động sản bán</div>
                <div className={cx("introduction-description")}>
                  Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao lớn,
                  uy tín về các loại hình bất động sản bán tại Việt Nam,
                  bao gồm bán nhà riêng, bán nhà mặt tiền, bán căn hộ chung cư, bán biệt thự,
                  bán đất, bán shophouse và các loại hình BĐS khác.
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg" alt="house" />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Bất động sản cho thuê</div>
                <div className={cx("introduction-description")}>
                  Cập nhật thường xuyên và đầy đủ các loại hình bất động sản cho thuê như:
                  thuê phòng trọ, nhà riêng, thuê biệt thự, văn phòng,
                  kho xưởng hay thuê mặt bằng kinh doanh giúp bạn nhanh chóng tìm được bất động sản ưng ý.
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg" alt="house" />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Đánh giá dự án</div>
                <div className={cx("introduction-description")}>
                  Các video đánh giá tổng quan dự án cung cấp góc nhìn khách quan
                  của các chuyên gia về những dự án nổi bật tại Việt Nam,
                  giúp bạn đưa ra quyết định đúng đắn cho nơi an cư lý tưởng hoặc cơ hội đầu tư sinh lời.
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-xl-3 col-md-6 col-12")}>
            <div className={cx("introduction-box")}>
              <div className={cx("introduction-img")}>
                <img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg" alt="house" />
              </div>
              <div className={cx("introduction-info")}>
                <div className={cx("introduction-title")}>Wiki BĐS</div>
                <div className={cx("introduction-description")}>
                  Ngoài cập nhật những biến động thị trường, chúng tôi còn cung cấp kiến ​​thức,
                  kinh nghiệm về mua bán, cho thuê, đầu tư, vay mua nhà,
                  phong thủy, thiết kế nhà, mọi thông tin cần thiết để dẫn lối người tìm nhà tìm thấy căn nhà mơ ước.
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

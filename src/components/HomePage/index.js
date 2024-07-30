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
import { Link, useNavigate } from "react-router-dom";
import New from "./New";
import { Box, Slider } from "@mui/material";

function HomePage() {
  const cx = classNames.bind(styles);
  const [Favorite, setFavorite] = useState([]);
  const [RedHeart, setRedHeart] = useState(true);
  const [province, setProvice] = useState([]);
  const navigate = useNavigate();
  const [typehouse, setTypehouse] = useState([]);
  const [filteredTypehouse, setFilteredTypehouse] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  //để search giá
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleCloseDropdown = () => {
    setActiveFilter(null);
  };
  //price
  const [value1, setValue1] = useState([0, 100000]);
  const [minValue, setMinValue] = useState('Từ');
  const [maxValue, setMaxValue] = useState('Đến');

  useEffect(() => {
    setMinValue(value1[0].toLocaleString());
    setMaxValue(value1[1].toLocaleString());
  }, [value1]);
  //area
  const [value2, setValue2] = useState([0, 1000]);
  const [minAreaValue, setMinAreaValue] = useState('Từ');
  const [maxAreaValue, setMaxAreaValue] = useState('Đến');

  useEffect(() => {
    setMinAreaValue(value2[0].toLocaleString());
    setMaxAreaValue(value2[1].toLocaleString());
  }, [value2]);
  //price
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleMinChange = (event) => {
    const newMinValue = parseInt(event.target.value.replace(/\D/g, ''), 10);
    setMinValue(newMinValue.toLocaleString());
    setValue1([newMinValue, value1[1]]);
  };

  const handleMaxChange = (event) => {
    const newMaxValue = parseInt(event.target.value.replace(/\D/g, ''), 10);
    setMaxValue(newMaxValue.toLocaleString());
    setValue1([value1[0], newMaxValue]);
  };
  //area
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  const handleMinAreaChange = (event) => {
    const newMinAreaValue = parseInt(event.target.value.replace(/\D/g, ''), 10);
    setMinAreaValue(newMinAreaValue.toLocaleString() + 'm²');
    setValue2([newMinAreaValue, value2[1]]);
  };

  const handleMaxAreaChange = (event) => {
    const newMaxAreaValue = parseInt(event.target.value.replace(/\D/g, ''), 10);
    setMaxAreaValue(newMaxAreaValue.toLocaleString() + 'm²');
    setValue2([value2[0], newMaxAreaValue]);
  };
  //sumit
  const handleSubmit = async () => {
    try {
      const minPrice = value1[0];
      const maxPrice = value1[1];
      const minArea = value2[0];
      const maxArea = value2[1];
      let url = '';

      if (selectedFilter === 'BĐS bán') {
        url = `/house-for-sell?minPrice=${minPrice}&maxPrice=${maxPrice}`;
      } else if (selectedFilter === 'BĐS thuê') {
        url = `/house-for-rent?minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }
      if (minArea !== undefined || maxArea !== undefined) {

        if (url.includes('?')) {
          url += `&minArea=${minArea}&maxArea=${maxArea}`;
        } else {
          url += `?minArea=${minArea}&maxArea=${maxArea}`;
        }
      }
      if (selectedTypes && selectedTypes.length > 0) {

        if (url.includes('?')) {
          url += `&${selectedTypes.map(typeId => `typeId=${typeId}`).join('&')}`;
        } else {
          url += `?${selectedTypes.map(typeId => `typeId=${typeId}`).join('&')}`;
        }
      }


      navigate(url);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  //price
  const getLabelText = () => {
    if (value1[1] > 100000) {
      return "Giá cao nhất";
    } else if (value1[1] < 1000) {
      return `${maxValue} triệu`;
    } else {
      return `${maxValue} tỷ`;
    }
  };
  const getLabelText1 = () => {
    if (value1[0] > 100000) {
      return "Giá Thấp nhất";
    } else if (value1[0] < 1000) {
      return `${minValue} triệu`;
    } else {
      return `${minValue} tỷ`;
    }
  };
  //price
  const [text2, setText2] = useState("Price");

  const handleChangeText2 = () => {
    if (value1[0] < value1[1] && value1[0] > 1000) {
      setText2(`${minValue}billion - ${maxValue}billion`);
      setActiveFilter(null);
    } else if (value1[0] === 0) {
      setText2(`≤ ${maxValue}billion`);
      setActiveFilter(null);
    } else if (value1[0] < value1[1] && value1[0] <= 900) {
      setText2(`${minValue}million - ${maxValue}billion`);
      setActiveFilter(null);
    } else {
      setText2("Price");
      setActiveFilter(null);
    }
  };
  //area
  const [text, setText] = useState("Area");

  const handleChangeText = () => {
    if (value2[0] < value2[1] && value2[0] > 0) {
      setText(`${minAreaValue}m² - ${maxAreaValue}m²`);
      setActiveFilter(null);
    } else if (value2[0] === 0) {
      setText(`≤ ${maxAreaValue}m²`);
      setActiveFilter(null);
    } else {
      setText("Area");
      setActiveFilter(null);
    }
  };
  //area
  const getLabelText3 = () => {
    return `${maxAreaValue} m²`;

  };
  const getLabelText2 = () => {
    return `${minAreaValue} m²`;
  };
  //price
  function valuetext(value) {
    return `${value}°C`;
  };
  //area
  function valuetext2(value2) {
    return `${value2}°C`;
  };
  //*************************** */
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
  //show type house
  useEffect(() => {
    axios
      .get("http://localhost:5117/api/TypeHouse")
      .then((result) => {
        setTypehouse(result.data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const [selectedFilter, setSelectedFilter] = useState("BĐS bán");
  useEffect(() => {
    if (selectedFilter === 'BĐS thuê') {
      setFilteredTypehouse(typehouse.filter(type => type.purpose === 'Thuê'));
    } else if (selectedFilter === 'BĐS bán') {
      setFilteredTypehouse(typehouse.filter(type => type.purpose === 'Bán'));
    } else {
      setFilteredTypehouse(typehouse);
    }
  }, [selectedFilter, typehouse]);

  const handleTypeChange = (typeId) => {
    setSelectedTypes(prevSelectedTypes => {
      if (prevSelectedTypes.includes(typeId)) {
        return prevSelectedTypes.filter(id => id !== typeId);
      } else {
        return [...prevSelectedTypes, typeId];
      }
    });
  };
  console.log("..", selectedTypes)
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
  // const [selectedFilter, setSelectedFilter] = useState("BĐS bán");


  // Handler for click events
  const handleChoice = (filter) => {
    setSelectedFilter(filter);
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
        <div className={cx("container", "searchbox-container")}>
          <div className={cx("boxtag-menu")}>
            <li
              className={cx({ active: selectedFilter === 'BĐS bán' })}
              onClick={() => handleChoice('BĐS bán')}
            >
              BĐS bán
            </li>
            <li
              className={cx({ active: selectedFilter === 'BĐS thuê' })}
              onClick={() => handleChoice('BĐS thuê')}
            >
              BĐS thuê
            </li>
            <li
              className={cx({ active: selectedFilter === 'Dự án' })}
              onClick={() => handleChoice('Dự án')}
            >
              Dự án
            </li>
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
                    <button onClick={handleSubmit}>Tìm kiếm</button>
                  </div>
                </div>
              </div>
              <div className={cx("filter-row")}>
                <div className={cx("filter-dady")} >
                  <div className={cx("filter-col")} >
                    <div className={cx("d-flex")} onClick={() => handleFilterClick('type')}>
                      <div>Loại nhà đất</div>
                      <i className={cx("fa", activeFilter === 'type' ? "fa-caret-up" : "fa-caret-down")}></i>
                    </div>
                  </div>
                  <div className={cx("filter-baby")}>
                    {activeFilter === 'type' && (
                      <div className={cx("dropdown-content")}>
                        <button className={cx("close-btn")} onClick={handleCloseDropdown}>x</button>
                        <div className={cx("text")}>Loại nhà</div>
                        <ul className={cx("typehouse-list")}>
                          {filteredTypehouse.map(type => (
                            <li key={type.id} className={cx("typehouse-item")}>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={selectedTypes.includes(type.id)}
                                  onChange={() => handleTypeChange(type.id)}
                                />
                                <span>
                                  {type.type}
                                </span>

                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className={cx("filter-dady")} >
                  <div className={cx("filter-col")} >
                    <div className={cx("d-flex")} onClick={() => handleFilterClick('price')}>
                      <div>{text2}</div>
                      <i className={cx("fa", activeFilter === 'price' ? "fa-caret-up" : "fa-caret-down")}></i>
                    </div>
                  </div>
                  <div className={cx("filter-baby")}>
                    {activeFilter === 'price' && (
                      <div className={cx("dropdown-content")}>
                        <button className={cx("close-btn")} onClick={handleCloseDropdown}>x</button>
                        <div className={cx("text")}>Price</div>
                        <div className={cx("input-container")}>
                          <div className={cx("label-container")}>
                            <div className={cx("label")}>
                              {getLabelText1()}
                            </div>
                            <input
                              type="text"
                              id="min"
                              className={cx("input")}
                              placeholder="Từ"
                              value={minValue}
                              onChange={handleMinChange}
                            />
                          </div>
                          <i className={cx("fa fa-arrow-right")}></i>
                          <div className={cx("label-container")}>
                            <div className={cx("label")}>
                              {getLabelText()}
                            </div>
                            <input
                              type="text"
                              id="max"
                              className={cx("input")}
                              placeholder="Đến"
                              value={maxValue}
                              onChange={handleMaxChange}
                            />
                          </div>
                        </div>
                        <div className={cx("input-price")}>
                          <Box sx={{ width: 300 }}>
                            <Slider
                              getAriaLabel={() => "Minimum distance"}
                              value={value1}
                              onChange={handleChange1}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                              disableSwap
                              min={0}
                              max={100000}
                              step={100}
                            />
                          </Box>
                        </div>
                        <button className={cx("add")} onClick={handleChangeText2}>Apply</button>
                      </div>
                    )}
                  </div>
                </div>
                <div className={cx("filter-dady")}>

                  <div className={cx("filter-col")}>
                    <div className={cx("d-flex")} onClick={() => handleFilterClick('area')}>
                      <div>{text}</div>
                      <i className={cx("fa", activeFilter === 'area' ? "fa-caret-up" : "fa-caret-down")}></i>
                    </div>
                  </div>
                  <div className={cx("filter-baby")}>
                    {activeFilter === 'area' && (
                      <div className={cx("dropdown-content")}>
                        <button className={cx("close-btn")} onClick={handleCloseDropdown}>x</button>
                        <div className={cx("text")}>Area</div>
                        <div className={cx("input-container")}>
                          <div className={cx("label-container")}>
                            <div className={cx("label")}>
                              {getLabelText2()}
                            </div>
                            <input
                              type="text"
                              id="min"
                              className={cx("input")}
                              placeholder="Từ"
                              value={minAreaValue}
                              onChange={handleMinAreaChange}
                            />
                          </div>
                          <i className={cx("fa fa-arrow-right")}></i>
                          <div className={cx("label-container")}>
                            <div className={cx("label")}>
                              {getLabelText3()}
                            </div>
                            <input
                              type="text"
                              id="max"
                              className={cx("input")}
                              placeholder="Đến"
                              value={maxAreaValue}
                              onChange={handleMaxAreaChange}
                            />
                          </div>
                        </div>
                        <div className={cx("input-price")}>
                          <Box sx={{ width: 300 }}>
                            <Slider
                              getAriaLabel={() => "Minimum distance"}
                              value={value2}
                              onChange={handleChange2}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext2}
                              disableSwap
                              min={0}
                              max={1000}
                              step={5}
                            />
                          </Box>
                        </div>
                        <button className={cx("add")} onClick={handleChangeText}>Apply</button>
                      </div>
                    )}
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

/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import styles from "./HouseForRent.module.scss";
import classNames from "classnames/bind";
import Searchsell from "../Aboutus/Searchsell";
import { Link, useLocation, useNavigate } from "react-router-dom";
import catavatar from "../../public/images/catavatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faShower } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function HouseForRent(props) {
  const cx = classNames.bind(styles);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const query = new URLSearchParams(location.search);
      const minPrice = query.get('fromPrice') || 0;
      const maxPrice = query.get('toPrice') || 100000000000;
      const minArea = query.get('fromArea') || 0;
      const maxArea = query.get('toArea') || 1000;
      const typeIds = query.getAll('typeHouseIds');
      const address = query.get('findAddress');
  
      let url = `http://localhost:5117/api/Post/Filters?fromPrice=${minPrice}&toPrice=${maxPrice}`;
      
      if (minArea || maxArea) {
        url += `&fromArea=${minArea}&toArea=${maxArea}`;
      }
      if (address) {
        url += `&findAddress=${address}`;
      }
      if (typeIds.length > 0) {
        const typeParams = typeIds.map(typeId => `typeHouseIds=${encodeURIComponent(typeId)}`).join('&');
        url += `&${typeParams}`;
      }
  
      try {
        const response = await fetch(url, {
          method: 'POST',
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setData([]);
      }
    };
  
    fetchPosts();
  }, [location.search]);
  console.log("cc",data);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5117/api/Post")
  //     .then((result) => {
  //       setData(result.data.data);
   
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5223/api/User")

      .then((result) => {
        setUsername(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  function formatPrice(price) {
    const format = (value) => {
      const formatted = (value).toFixed(2);
      return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted;
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
  const convertToSeoUrl = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  return (
    <div>
      <div className={cx("container-xl")}>
        {/* start search */}
        <Searchsell />
        <hr />
        {/* end search */}
        <div className={cx("title")}>Cho thuê nhà đất trên toàn quốc</div>
        <div className={cx("description-count")}>
          Hiện có 171.784 bất động sản.
        </div>
        <div className={cx("row")}>
          <div className={cx("col-xl-9 col-lg-12")}>
            <div className={cx("container-main-content-left")}>
              {data.map((item, index) => {
                if (item.status === "Approved") {
                  if (item.typeHouse.purpose === "Thuê") {
                    return (
                      <div className={cx("container-card-info")} key={index}>
                        <Link to={`/infopost/${item.title}`}>
                          <div className={cx("main-card")}>
                            <div className={cx("premium-diamond")}>
                              <img
                                src="https://staticfile.batdongsan.com.vn/images/label/Label_VIPDiamond.svg"
                                alt="diamond"
                              />
                            </div>
                            <div className={cx("parent-flex")}>
                              <div className={cx("parent-image")}>
                                <img
                                  src={item.postImages[0].imageUrl}
                                  alt="house"
                                />
                              </div>
                              <div className={cx("children-image")}>
                                <img
                                  src={item.postImages[1].imageUrl}
                                  className={cx("border-image")}
                                  alt="house"
                                />
                                <div className={cx("children-flex")}>
                                  <div className={cx("children-flex-image")}>
                                    <img
                                      src={item.postImages[2].imageUrl}
                                      alt="house"
                                    />
                                  </div>
                                  <div className={cx("children-flex-image")}>
                                    <img
                                      src={item.postImages[3].imageUrl}
                                      alt="house"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className={cx("container-description")}>
                          <div className={cx("title-description")}>
                            {item.title}
                          </div>
                          <div className={cx("product-description-info")}>
                            <div className={cx("product-price")}>
                            {formatPrice(item.price)} / tháng
                            </div>
                            <div className={cx("reddot")}>·</div>
                            <div className={cx("product-arena")}>
                              {item.area} m²
                            </div>
                            <div className={cx("reddot")}>·</div>
                            <div className={cx("product-price-percent")}>
                            {formatPrice(item.price / item.area)}/m²
                            </div>
                            <div className={cx("reddot")}>·</div>
                            <div className={cx("product-bed")}>
                              {item.bedrooms}
                              <FontAwesomeIcon
                                icon={faBed}
                                className={cx("icon")}
                              />
                            </div>
                            <div className={cx("reddot")}>·</div>
                            <div className={cx("product-shower")}>
                              {item.bathrooms}
                              <FontAwesomeIcon
                                icon={faShower}
                                className={cx("icon")}
                              />
                            </div>
                            <div className={cx("reddot")}>·</div>
                            <div className={cx("product-location")}>
                              {item.address}
                            </div>
                          </div>
                          <div className={cx("product-description")}>
                            {item.description}
                          </div>
                        </div>
                        <div className={cx("container-contact")}>
                          <div className={cx("publish-contact")}>
                            <div className={cx("contact-flex")}>
                              <div className={cx("contact-avatar")}>
                                <img src={catavatar} alt="avatar" />
                              </div>
                              <div className={cx("user-info")}>
                                <span className={cx("username")}>
                                  {username.map((user, index) => {
                                    if (item.userId == user.id) {
                                      return (
                                        <div key={index}>{user.username}</div>
                                      );
                                    }
                                  })}
                                </span>
                              </div>
                            </div>
                            <span className={cx("contact-phone")}>
                              {username.map((user, index) => {
                                if (item.userId === user.id) {
                                  return (
                                    <div key={index}>{user.phone} Liên hệ</div>
                                  );
                                }
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
          <div className={cx("col-xl-3 d-xl-block d-none")}>
            <div className={cx("container-main-content-right")}>
              <div className={cx("content-title")}>Lọc theo khoảng giá</div>
              <div className={cx("content-search-price")}>
                <li className={cx("deal")}>Thỏa thuận</li>
                <li className={cx("deal")}>Dưới 500 triệu</li>
                <li className={cx("deal")}>500 - 800 triệu</li>
                <li className={cx("deal")}>800 triệu - 1tỷ</li>
                <li className={cx("deal")}>1 - 2 tỷ</li>
                <li className={cx("deal")}>2 - 3 tỷ</li>
                <li className={cx("deal")}>3 - 5 tỷ</li>
                <li className={cx("deal")}>5 - 7 tỷ</li>
                <li className={cx("deal")}>7 - 10 tỷ</li>
                <li className={cx("deal")}>10 - 20 tỷ</li>
                <li className={cx("deal")}>20 - 30 tỷ</li>
                <li className={cx("deal")}>30 - 40 tỷ</li>
                <li className={cx("deal")}>40 - 60 tỷ</li>
                <li className={cx("deal")}>trên 60 tỷ</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseForRent;

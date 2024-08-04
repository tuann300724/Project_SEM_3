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
  const [data1, setData1] = useState([]);
  const [username, setUsername] = useState([]);
  const [packages, setPackages] = useState([]);
  const [Post, setPost] = useState([]);

  const [userPackages, setUserPackages] = useState({});

  const location = useLocation();
  
  // Fetch posts based on filters
  useEffect(() => {
    const fetchPosts = async () => {
      const query = new URLSearchParams(location.search);
      const minPrice = query.get("fromPrice") || 0;
      const maxPrice = query.get("toPrice") || 100000000;
      const minArea = query.get("fromArea") || 0;
      const maxArea = query.get("toArea") || 1000;
      const typeIds = query.getAll("typeHouseIds");
      const address = query.get("findAddress");

      let url = `http://localhost:5117/api/Post/Filters?fromPrice=${minPrice}&toPrice=${maxPrice}`;

      if (minArea || maxArea) {
        url += `&fromArea=${minArea}&toArea=${maxArea}`;
      }
      if (address) {
        url += `&findAddress=${address}`;
      }
      if (typeIds.length > 0) {
        const typeParams = typeIds
          .map((typeId) => `typeHouseIds=${encodeURIComponent(typeId)}`)
          .join("&");
        url += `&${typeParams}`;
      }

      try {
        const response = await fetch(url, {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setData([]);
      }
    };

    fetchPosts();
  }, [location.search]);
  useEffect(() => {
    axios
      .get("http://localhost:5117/api/Post")
      .then((result) => {
        setPost(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const fetchUserPackages = async () => {
      try {
        const [transactionsRes, packagesRes] = await Promise.all([
          axios.get("http://localhost:5081/api/Transaction"),
          axios.get("http://localhost:5081/api/Package"),
        ]);

        setPackages(packagesRes.data.data || []);

        const transactions = transactionsRes.data.data || [];
        const userPackagesMap = {};

        transactions.forEach((transaction) => {
          const packageData = packages.find(
            (pkg) => pkg.id === transaction.packageId
          );
          if (!userPackagesMap[transaction.userId]) {
            userPackagesMap[transaction.userId] = [];
          }
          if (packageData) {
            userPackagesMap[transaction.userId].push(packageData);
          }
        });

        setUserPackages(userPackagesMap);
      } catch (error) {
        console.error("Error fetching packages or transactions:", error);
      }
    };

    fetchUserPackages();
  }, [packages]);

  useEffect(() => {
    axios
      .get("http://localhost:5223/api/User")

      .then((result) => {
        setUsername(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const sortedData = Post.sort((a, b) => {
    const userPackagesA = userPackages[a.userId] || [];
    const userPackagesB = userPackages[b.userId] || [];

    const maxLevelA = Math.max(...userPackagesA.map((pkg) => pkg.level), 0);
    const maxLevelB = Math.max(...userPackagesB.map((pkg) => pkg.level), 0);

    if (maxLevelA !== maxLevelB) {
      return maxLevelB - maxLevelA;
    }

    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  function formatPrice(price) {
    const format = (value) => {
      const formatted = value.toFixed(2);
      return formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted;
    };

    if (price >= 1000000) {
      return `${format(price / 1000000)} tỷ`;
    } else if (price >= 1000) {
      return `${format(price / 1000)} triệu`;
    } else if (price >= 1) {
      return `${format(price / 1)} ngàn`;
    } else {
      return format(price);
    }
  }
  const calculateTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDiff = currentTime - createdTime;
    const oneDayInMillis = 24 * 60 * 60 * 1000;

    if (timeDiff < oneDayInMillis) {
      return "hôm nay";
    }
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    if (years > 0) return `${years} năm trước`;

    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    if (months > 0) return `${months} tháng trước`;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} ngày trước`;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hours > 0) return `${hours} giờ trước`;

    const minutes = Math.floor(timeDiff / (1000 * 60));
    if (minutes > 0) return `${minutes} phút trước`;

    const seconds = Math.floor(timeDiff / 1000);
    if (seconds > 0) return `${seconds} giây trước`;

    return "vừa xong";
  };
  const datadispaly = data ? data : sortedData;
  document.querySelector("body").style.overflowY = "visible";

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const fetchPrice = async () => {
    try {
      const result = await axios.post(`http://localhost:5117/api/Post/FromPrice?from=${from}&to=${to}`);
      const filteredPosts = result.data.data.filter(post => post.status === 'Approved' && post.isActive === true);
      setData(filteredPosts);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handlePriceRangeClick = (range) => {
    let fromVal = 0, toVal = Infinity;

    switch (range) {
      case 'Under 500 million':
        toVal = 500000;
        break;
      case '500 - 800 million':
        fromVal = 500000;
        toVal = 800000;
        break;
      case '800 million - 1 billion':
        fromVal = 800000;
        toVal = 1000000;
        break;
      case '1 - 2 billion':
        fromVal = 1000000;
        toVal = 2000000;
        break;
      case '2 - 3 billion':
        fromVal = 2000000;
        toVal = 3000000;
        break;
      case '3 - 5 billion':
        fromVal = 3000000;
        toVal = 5000000;
        break;
      case '5 - 7 billion':
        fromVal = 5000000;
        toVal = 7000000;
        break;
      case '7 - 10 billion':
        fromVal = 7000000;
        toVal = 10000000;
        break;
      case '10 - 20 billion':
        fromVal = 10000000;
        toVal = 20000000;
        break;
      case '20 - 30 billion':
        fromVal = 20000000;
        toVal = 30000000;
        break;
      case '30 - 40 billion':
        fromVal = 30000000;
        toVal = 40000000;
        break;
      case '40 - 60 billion':
        fromVal = 40000000;
        toVal = 60000000;
        break;
      case 'Over 60 billion':
        fromVal = 60000000;
        break;
      default:
        fromVal = 0;
        toVal = Infinity;
    }

    setFrom(fromVal);
    setTo(toVal);
 
  };

  useEffect(() => {
    fetchPrice();
  }, [from, to]);


  return (
    <div>
      <div className={cx("container-xl")}>
        {/* start search */}
        <Searchsell />
        <hr />
        {/* end search */}
        <div className={cx("title")}>Cho thuê nhà đất trên toàn quốc</div>
        <div className={cx("description-count")}>
          Hiện có {data ? data.length : sortedData.length} bất động sản.
        </div>
        <div className={cx("row")}>
          <div className={cx("col-xl-9 col-lg-12")}>
            <div className={cx("container-main-content-left")}>
              {datadispaly.map((item, index) => {
                if (item.status === "Approved" && item.isActive === true) {
                  if (item.typeHouse.purpose === "Thuê") {
                    return (
                      <div className={cx("container-card-info")} key={index}>
                      <Link to={`/infopost/${item.id}`}>
                        <div className={cx("main-card")}>
                          <div className={cx("premium-diamond")}>
                            
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
                          {username.map((user, index) => {
                            if (item.userId === user.id) {
                              return (
                                <div
                                  className={cx("contact-flex")}
                                  key={index}
                                >
                                  <div className={cx("contact-avatar")}>
                                      <img
                                        src={user.avatar || catavatar}
                                        alt="avatar"
                                      />
                                    </div>
                                  <div className={cx("user-info")}>
                                    <span className={cx("username")}>
                                      <div key={index}>{user.username}</div>
                                    </span>
                                    <p className={cx("time")}>
                                      {" "}
                                      Đăng{" "}
                                      {calculateTimeDifference(
                                        item.createdDate
                                      )}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          })}

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
              <li className={cx("deal")} onClick={() => handlePriceRangeClick('Under 500 million')}>Under 500 million</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('500 - 800 million')}>500 - 800 million</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('800 million - 1 billion')}>800 million - 1 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('1 - 2 billion')}>1 - 2 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('2 - 3 billion')}>2 - 3 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('3 - 5 billion')}>3 - 5 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('5 - 7 billion')}>5 - 7 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('7 - 10 billion')}>7 - 10 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('10 - 20 billion')}>10 - 20 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('20 - 30 billion')}>20 - 30 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('30 - 40 billion')}>30 - 40 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('40 - 60 billion')}>40 - 60 billion</li>
                <li className={cx("deal")} onClick={() => handlePriceRangeClick('Over 60 billion')}>Over 60 billion</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseForRent;

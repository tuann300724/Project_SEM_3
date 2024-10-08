import React, { useEffect, useState } from "react";
import styles from "./Userpackage.module.scss";
import classNames from "classnames/bind";
import banner from "../../public/images/bannerpackage.png";
import salepackage from "../../public/images/salepackage.png";
import housepackage from "../../public/images/housepackage.svg";
import temppackage from "../../public/images/temppackage.svg";
import bighousepackage from "../../public/images/bighousepackage.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHandHoldingDollar,
  faUserPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

function Userpackage(props) {
  const cx = classNames.bind(styles);
  const [packages, setPackage] = useState([]);
  const [user, setUser] = useState({});
  const [userPackages, setUserPackages] = useState([]);
  const [userid, setUserid] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );

  useEffect(() => {
    axios
      .get("http://localhost:5081/api/Package")
      .then((result) => {
        setPackage(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${userid.Id}`)
      .then((result) => {
        setUser(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  }, [userid.Id]);

  useEffect(() => {
    axios
      .get("http://localhost:5081/api/Transaction")
      .then((result) => {
        setUserPackages(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCurrentPackage = () => {
    const currentTransaction = userPackages
      .filter((up) => up.userId === user.id)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    if (currentTransaction) {
      return packages.find((p) => p.id === currentTransaction.packageId);
    }
    return null;
  };

  const getCurrentPackageLevel = () => {
    const packageLevels = ["Basic", "Premium", "Deluxe"];
    const currentPackage = getCurrentPackage();
    return currentPackage ? packageLevels.indexOf(currentPackage.name) : -1;
  };

  const handleBuy = async (e) => {
    const amountpackage = e.target.getAttribute("data-value");
    const packageid = e.target.getAttribute("data-id");

    const packageDetail = packages.find((p) => p.id === packageid);
    const packageLevels = ["Basic", "Premium", "Deluxe"];
    const currentPackageLevel = getCurrentPackageLevel();
    const newPackageLevel = packageLevels.indexOf(packageDetail.name);

    if (newPackageLevel <= currentPackageLevel) {
      alert("Bạn không thể mua gói có cấp độ thấp hơn hoặc bằng gói hiện tại.");
      return;
    }

    if (user.money >= amountpackage) {
      try {
        const currentTransaction = userPackages
          .filter((up) => up.userId === user.id)
          .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

        if (currentTransaction) {
          await axios.delete(
            `http://localhost:5081/api/Transaction/${currentTransaction.id}`
          );
        }

        const newTransaction = {
          total: amountpackage,
          userId: user.id,
          packageId: packageid,
        };

        await axios.post(
          `http://localhost:5081/api/Transaction`,
          newTransaction,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        await axios.post(
          `http://localhost:5223/api/User/deduction/${user.id}?amount=${amountpackage}`
        );
        window.location.reload();
        alert("Mua gói thành công");

        const transactionsResult = await axios.get(
          "http://localhost:5081/api/Transaction"
        );
        setUserPackages(transactionsResult.data.data);

        const userResult = await axios.get("http://localhost:5223/api/user/1");
        setUser(userResult.data.data);
      } catch (err) {
        console.error(err);
        alert("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } else {
      alert("Tài khoản của bạn không đủ tiền");
    }
  };

  return (
    <div className={cx("container-fluid", "container-ap")}>
      <div className={cx("container-banner")}>
        <div className={cx("salepackage")}>
          <img src={salepackage} alt="sale" />
        </div>
        <div className={cx("banner-image")}>
          <img src={banner} alt="banner" />
        </div>
        <div className={cx("banner-content")}>
          <div className={cx("content-title")}>Membership Package</div>
          <div className={cx("content-title-list")}>
            <li>
              {" "}
              <FontAwesomeIcon icon={faHandHoldingDollar} /> Post/push news
              freely without worrying about price fluctuations
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faThumbsUp} />
              Manage your budget easily and effectively
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faUserPlus} /> Use advanced Membership
              features
            </li>
          </div>
        </div>
      </div>
      <div className={cx("row", "container-package")}>
        {packages
          .filter((c) => c.name === "Basic")
          .map((item) => (
            <div className={cx("col-xl-4 col-12")}>
              <div className={cx("box-package")}>
                <div className={cx("package-title")}>
                  <div className={cx("title")}>
                    <span className={cx("title-name")}>{item.name}</span>
                    <span className={cx("description")}>
                      Suitable for new brokers or small carts
                    </span>
                  </div>

                  <div className={cx("package-image")}>
                    <img src={temppackage} alt="package" />
                  </div>
                </div>
                <div className={cx("package-amount")}>
                  From <span className={cx("price")}>{item.total}</span>$/Month
                </div>
                <div className={cx("package-button")}>
                  <button
                    onClick={handleBuy}
                    data-id={item.id}
                    data-value={item.total}
                  >
                    Buy Now
                  </button>
                </div>
                <div className={cx("little-title")}>Monthly Newsletter</div>
                <div className={cx("package-list")}>
                  <li className={cx("disables")}>
                    <FontAwesomeIcon icon={faX} /> Allow Show news in posts
                  </li>
                  <li className={cx("disables")}>
                    <FontAwesomeIcon icon={faX} /> Allow Show news home page
                  </li>
                  <li className={cx("actives")}>
                    <FontAwesomeIcon icon={faCheck} /> 15 posts in 1 month
                  </li>
                </div>
              </div>
            </div>
          ))}
        {packages
          .filter((c) => c.name === "Premium")
          .map((item) => (
            <div className={cx("col-xl-4 col-12")}>
              <div className={cx("box-package")}>
                <div className={cx("package-title")}>
                  <div className={cx("title")}>
                    <span className={cx("title-name")}>{item.name}</span>
                    <span className={cx("description")}>
                      15 posts in 1 month Suitable for professional brokers with
                      a portfolio of 10 properties{" "}
                    </span>
                  </div>

                  <div className={cx("package-image")}>
                    <img src={housepackage} alt="package" />
                  </div>
                </div>
                <div className={cx("package-amount")}>
                  From <span className={cx("price")}>{item.total}</span>$/Month
                </div>
                <div className={cx("package-button")}>
                  <button
                    onClick={handleBuy}
                    data-id={item.id}
                    data-value={item.total}
                  >
                    Buy Now
                  </button>
                </div>
                <div className={cx("little-title")}>Monthly Newsletter</div>
                <div className={cx("package-list")}>
                  <li className={cx("disables")}>
                    <FontAwesomeIcon icon={faX} /> Allow Show news home page
                  </li>
                  <li className={cx("actives")}>
                    <FontAwesomeIcon icon={faCheck} /> Allow Show news in posts
                  </li>

                  <li className={cx("actives")}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span className={cx("description")}>
                      30 posts in 1 month
                    </span>
                  </li>
                </div>
              </div>
            </div>
          ))}
        {packages
          .filter((c) => c.name === "Deluxe")
          .map((item) => (
            <div className={cx("col-xl-4 col-12")}>
              <div className={cx("box-package")}>
                <div className={cx("package-title")}>
                  <div className={cx("title")}>
                    <span className={cx("title-name")}>{item.name}</span>
                    <span className={cx("description")}>
                      Suitable for new brokers or small carts
                    </span>
                  </div>

                  <div className={cx("package-image")}>
                    <img src={bighousepackage} alt="package" />
                  </div>
                </div>
                <div className={cx("package-amount")}>
                  From <span className={cx("price")}>{item.total}</span>$/Month
                </div>
                <div className={cx("package-button")}>
                  <button
                    onClick={handleBuy}
                    data-id={item.id}
                    data-value={item.total}
                  >
                    Buy Now
                  </button>
                </div>
                <div className={cx("little-title")}>Monthly Newsletter</div>
                <div className={cx("package-list")}>
                  <li className={cx("actives")}>
                    <FontAwesomeIcon icon={faCheck} /> Allow Show news home page
                  </li>
                  <li className={cx("actives")}>
                    <FontAwesomeIcon icon={faCheck} /> Allow Show news in posts
                  </li>

                  <li className={cx("actives")}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span className={cx("description")}>
                      50 posts in 1 month
                    </span>
                  </li>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Userpackage;

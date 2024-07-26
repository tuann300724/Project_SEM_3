/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./Userpost.module.scss";
import classNames from "classnames/bind";
import AutocompleteAddress from "./AutocompleteAddress";
import axios from "axios";
function UserPost(props) {
  const [citys, setCitys] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [fullcity, setFullcity] = useState([]);
  const [latitude, setLatitude] = useState(10.762622);
  const [longitude, setLongitude] = useState(106.660172);
  // data để post
  const [datatypehouse, setDatatypeHouse] = useState([]);
  const [datapurpose, setDatapurpose] = useState([]);
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [zipcode, setZipcode] = useState();
  const [Price, setPrice] = useState();
  const [Area, setArea] = useState();
  const [bedroom, setBedrooms] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [description, setDescription] = useState();
  const [status, setStatus] = useState("Processing");
  const [userid, setUserid] = useState(1);
  const [typehouse, setTypehouse] = useState();
  const [images, setImages] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [purpose, setPurpost] = useState("Bán");
  const [LegalStatus, setLegalStatus] = useState("Sổ đổ/sổ hồng");
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [PostInfo, setPostInfo] = useState([]);

  const cx = classNames.bind(styles);
  const inputFileRef = useRef(null);

  // get purpose
  useEffect(() => {
    axios
      .get("http://localhost:5117/api/TypeHouse")
      .then((result) => {
        setDatatypeHouse(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((result) => {
        setCitys(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const HandleDistricts = (e) => {
    const idtinh = e.target.value;
    axios
      .get(`https://esgoo.net/api-tinhthanh/2/${idtinh}.htm`)
      .then((result) => setDistricts(result.data.data))
      .catch((err) => console.log(err));
  };
  const Handlewards = (e) => {
    const idquan = e.target.value;
    axios
      .get(`https://esgoo.net/api-tinhthanh/3/${idquan}.htm`)
      .then((result) => setWards(result.data.data))
      .catch((err) => console.log(err));
  };
  const HandleFullcity = (e) => {
    const idfull = e.target.value;
    axios
      .get(`https://esgoo.net/api-tinhthanh/5/${idfull}.htm`)
      .then((result) => {
        console.log(result.data.data);
        setFullcity(result.data.data);
        setLatitude(result.data.data.latitude);
        setLongitude(result.data.data.longitude);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(longitude);
    console.log(latitude);
  }, [longitude, latitude]);
  const handleImage = (e) => {
    inputFileRef.current.click();
  };
  const handleImagechange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        file.preview = URL.createObjectURL(file);
        newImages.push(file);
      }
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  useEffect(() => {
    console.log(images);
    return () => {
      images && URL.revokeObjectURL(images.preview);
    };
  }, [images]);
  const handleReducerBedroom = (e) => {
    e.preventDefault();
    setBedrooms(bedroom - 1);
    if (bedroom <= 0) {
      setBedrooms(0);
    }
  };
  const handleIncreaseBedroom = (e) => {
    e.preventDefault();
    setBedrooms(bedroom + 1);
  };
  const handleReducerBathroom = (e) => {
    e.preventDefault();
    setBathroom(bathroom - 1);
    if (bathroom <= 0) {
      setBathroom(0);
    }
  };
  const handleIncreaseBathroom = (e) => {
    e.preventDefault();
    setBathroom(bathroom + 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("Title", title);
    formData.append("Address", fullcity.full_name);
    formData.append("Zipcode", zipcode);
    formData.append("Price", Price);
    formData.append("Area", Area);
    formData.append("Bedrooms", bedroom);
    formData.append("Bathrooms", bathroom);
    formData.append("Description", description);
    formData.append("isActive", isActive);
    formData.append("Status", status);
    formData.append("LegalStatus", LegalStatus);
    formData.append("typeHouseId", typehouse);
    formData.append("UserId", userid);
    images.forEach((img) => {
      formData.append("formFiles", img);
    });
    axios
      .post("http://localhost:5117/api/Post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  useEffect(() => {
    console.log("Postinfo: ", PostInfo);
  }, [PostInfo]);
  return (
    <div className={cx("container-post", "container-xl")}>
      <div className={cx("post-title")}>Thông tin cơ bản</div>
      <form action="#" onSubmit={handleSubmit}>
        <div className={cx("post-rent-sell")}>
          {/* <button className={cx("sell", "activebtn")}>Bán</button>
        <button className={cx("rent")}>Thuê</button> */}
          <select
            name="purpose"
            value={purpose}
            onChange={(e) => setPurpost(e.target.value)}
          >
            <option value="Thuê">Thuê</option>
            <option value="Bán">Bán</option>
          </select>
        </div>
        <div className={cx("type-house-title")}>
          Loại bất động sản <span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("select-house")}>
          <select
            name="typehouse"
            value={typehouse}
            onChange={(e) => setTypehouse(e.target.value)}
          >
            {datatypehouse
              .filter((c) => c.purpose === purpose)
              .map((item, index) => (
                <option value={item.id} key={index}>
                  {item.type}
                </option>
              ))}
          </select>
        </div>
        <div className={cx("type-house-title")}>Nhập Zipcode </div>
        <div className={cx("area-input")}>
          <input
            type="number"
            pattern="[0-9]"
            value={zipcode}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        {/* <AutocompleteAddress /> */}
        <div className={cx("type-group")}>
          <div className={cx("type-province-title")}>
            Tỉnh, thành phố <span className={cx("reddot")}>*</span>{" "}
          </div>
          <div className={cx("type-province-title")}>
            Quận, huyện <span className={cx("reddot")}>*</span>{" "}
          </div>
        </div>
        <div className={cx("type-city-input")}>
          <select id="city" onChange={HandleDistricts}>
            <option>Chọn</option>
            {citys.map((item, index) => (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <select id="district" onChange={Handlewards}>
            {districts.map((item, index) => (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className={cx("type-group")}>
          <div className={cx("type-province-title")}>
            Phường, xã <span className={cx("reddot")}>*</span>{" "}
          </div>
        </div>
        <div className={cx("type-city-input")}>
          <select id="ward" onChange={HandleFullcity}>
            {wards.map((item, index) => (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className={cx("type-house-title")}>
          Địa chỉ hiện thị trên tin đăng<span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("type-city-input")}>
          <input
            type="text"
            placeholder="Chọn"
            value={fullcity.full_name}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={cx("type-house-title")}>
          Vị trí hiển thị trên bản đồ{" "}
        </div>
        <div className={cx("map-show")}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.9220631722166!2d106.66337126950565!3d10.758491999336824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ1JzMwLjYiTiAxMDbCsDM5JzUwLjUiRQ!5e0!3m2!1svi!2s!4v1721452689110!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={cx("post-title")}>Thông tin cơ bản</div>
        <div className={cx("type-house-title")}>
          Tiêu đề <span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("textarena-title")}>
          <textarea
            name="title"
            placeholder="VD: bán nhà riêng 50m2 chính chủ tại nguyễn chí thanh"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>
        <div className={cx("type-house-title")}>
          Mô tả <span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("textarena-description")}>
          <textarea
            name="description"
            placeholder="Nhập mô tả chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi, gần công viên, gần trường học ... "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={cx("post-title")}>Thông tin bất động sản</div>
        <div className={cx("type-house-title")}>
          Diện tích <span className={cx("reddot")}>*</span>{" "}
        </div>
        <div className={cx("area-input")}>
          <input
            type="number"
            pattern="[0-9]"
            value={Area}
            onChange={(e) => setArea(e.target.value)}
          />
          <span>m²</span>
        </div>
        <div className={cx("price-percent-group")}>
          <span className={cx("price")}>
            Mức giá <span className={cx("reddot")}>*</span>
          </span>
          <span className={cx("percent")}>Đơn vị</span>
        </div>
        <div className={cx("input-price-percent-group")}>
          <input
            type="number"
            className={cx("input-price")}
            pattern="[0-9]"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select name="" className={cx("input-percent")}>
            <option>VND</option>
            <option>Giá thoả thuận</option>
          </select>
        </div>
        <div className={cx("type-house-title")}>Giấy tờ pháp lý</div>
        <div className={cx("select-legal")}>
          <select
            name="LegalStatus"
            value={LegalStatus}
            onChange={(e) => setLegalStatus(e.target.value)}
          >
            <option value="Sổ đỏ/sổ hồng">Sổ đỏ/sổ hồng</option>
            <option value="Hợp đồng mua bán">Hợp đồng mua bán</option>
            <option value="Đang chờ sổ">Đang chờ sổ</option>
          </select>
        </div>
        <div className={cx("select-bedroom")}>
          <span className={cx("text-bedroom")}>Số phòng ngủ</span>
          <span className={cx("btn-bedroom")}>
            <button onClick={handleReducerBedroom}>-</button>
            <input
              type="text"
              value={bedroom}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            <button onClick={handleIncreaseBedroom}>+</button>
          </span>
        </div>
        <div className={cx("select-bathroom")}>
          <span className={cx("text-bathroom")}>Số phòng tắm</span>
          <span className={cx("btn-bathroom")}>
            <button onClick={handleReducerBathroom}>-</button>
            <input
              type="text"
              value={bathroom}
              onChange={(e) => setBathroom(e.target.value)}
            />
            <button onClick={handleIncreaseBathroom}>+</button>
          </span>
        </div>
        <div className={cx("post-title")}>Hình ảnh & Video</div>
        <div className={cx("list-description")}>
          <li>Đăng tối thiểu 3 ảnh, tối đa 24 ảnh với tất cả các loại tin</li>
          <li>Hãy dùng ảnh thật, không trùng, không chèn SĐT</li>
        </div>
        <section>
          <div tabIndex="0">
            <div className={cx("gJwRHP")} onClick={handleImage}>
              <input
                accept="image/*,.heic"
                multiple
                type="file"
                autoComplete="off"
                tabIndex="-1"
                style={{ display: "none" }}
                ref={inputFileRef}
                onChange={handleImagechange}
              />
              <svg
                width="80"
                height="80"
                viewBox="0 0 130 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M118.42 75.84C118.43 83.2392 116.894 90.5589 113.91 97.33H16.09C12.8944 90.0546 11.3622 82.1579 11.6049 74.2154C11.8477 66.2728 13.8593 58.4844 17.4932 51.4177C21.1271 44.3511 26.2918 38.1841 32.6109 33.3662C38.93 28.5483 46.2443 25.2008 54.0209 23.5676C61.7976 21.9345 69.8406 22.0568 77.564 23.9257C85.2873 25.7946 92.4965 29.363 98.6661 34.3709C104.836 39.3787 109.81 45.6999 113.228 52.8739C116.645 60.0478 118.419 67.8937 118.42 75.84Z"
                  fill="#F2F2F2"
                ></path>
                <path
                  d="M5.54 97.33H126.37"
                  stroke="#63666A"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M97 97.33H49.91V34.65C49.91 34.3848 50.0154 34.1305 50.2029 33.9429C50.3904 33.7554 50.6448 33.65 50.91 33.65H84.18C84.6167 33.6541 85.0483 33.7445 85.4499 33.9162C85.8515 34.0878 86.2152 34.3372 86.52 34.65L96.02 44.15C96.3321 44.4533 96.5811 44.8153 96.7527 45.2151C96.9243 45.615 97.0152 46.0449 97.02 46.48L97 97.33Z"
                  fill="#D7D7D7"
                  stroke="#63666A"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M59.09 105.64H42.09C41.8248 105.64 41.5704 105.535 41.3829 105.347C41.1954 105.16 41.09 104.905 41.09 104.64V41.79C41.09 41.5248 41.1954 41.2705 41.3829 41.0829C41.5704 40.8954 41.8248 40.79 42.09 40.79H77.33L89 52.42V104.62C89 104.885 88.8946 105.14 88.7071 105.327C88.5196 105.515 88.2652 105.62 88 105.62H74.86"
                  fill="white"
                ></path>
                <path
                  d="M59.09 105.64H42.09C41.8248 105.64 41.5704 105.535 41.3829 105.347C41.1954 105.16 41.09 104.905 41.09 104.64V41.79C41.09 41.5248 41.1954 41.2705 41.3829 41.0829C41.5704 40.8954 41.8248 40.79 42.09 40.79H77.33L89 52.42V104.62C89 104.885 88.8946 105.14 88.7071 105.327C88.5196 105.515 88.2652 105.62 88 105.62H74.86"
                  stroke="#63666A"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M88.97 52.42H77.33V40.77L88.97 52.42Z"
                  fill="#D7D7D7"
                  stroke="#63666A"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M27.32 65.49V70.6"
                  stroke="#D7D7D7"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M29.88 68.04H24.76"
                  stroke="#D7D7D7"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M110.49 32.5601V39.9901"
                  stroke="#D7D7D7"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M114.2 36.27H106.77"
                  stroke="#D7D7D7"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M34.07 14.58V25.59"
                  stroke="#D7D7D7"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M39.57 20.08H28.57"
                  stroke="#D7D7D7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M67 115.86V67.12"
                  stroke="#63666A"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                ></path>
                <path d="M55.5 78.61L67 67.12L78.5 78.61" fill="white"></path>
                <path
                  d="M55.5 78.61L67 67.12L78.5 78.61"
                  stroke="#63666A"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                ></path>
              </svg>
              <div type="primary" className="sc-crrsfI fAPcKa">
                Bấm để chọn ảnh cần tải lên
              </div>
              <div
                type="tertiary"
                className="sc-crrsfI fmnTOX"
                style={{ marginBottom: "16px" }}
              >
                hoặc kéo thả ảnh vào đây
              </div>
            </div>
          </div>
        </section>
        <div className={cx("show-image")}>
          <div className={cx("row")}>
            {images.length > 0 ? (
              images.map((item, index) => (
                <div
                  className={cx("col-xl-3 col-lg-4 col-md-6 col-12")}
                  key={index}
                >
                  <div className={cx("image-content")}>
                    <img src={item.preview} alt="product" />
                  </div>
                </div>
              ))
            ) : (
              <Fragment />
            )}
          </div>
        </div>
        <div className={cx("post-title")}>Thông tin liên hệ</div>
        <div className={cx("user-info")}>
          <span>Tên liên hệ</span>
          <span>
            Số điện thoại <span className={cx("reddot")}>*</span>
          </span>
        </div>
        <div className={cx("input-user-info")}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={cx("type-house-title")}>Email</div>
        <div className={cx("input-user-email")}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <hr />
        <div className={cx("button-success")}>
          <button type="submit">Tiếp tục </button>
        </div>
      </form>
    </div>
  );
}

export default UserPost;

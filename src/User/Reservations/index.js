import React, { useState } from "react";
import styles from "./Reservations.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";

const today = new Date();
const todayString = today.toISOString().split("T")[0]; // Định dạng ngày YYYY-MM-DD
const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() + 1);
const nextYearString = nextYear.toISOString().split("T")[0];
//định nghĩa schema bên ngoài component
const schema = yup.object().shape({
  //validate name
  name: yup
    .string()
    .required("Name is required")
    .test(
      "len",
      "Name must be between [5, 10] characters",
      (val) => val.length >= 5 && val.length <= 10
    ),
  //validate price
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid phone number.")
    .required("Phone number is required"),
  //validate start date
  appointmentDate: yup
    .date()
    .typeError("Appointment date is required")
    .min(todayString, `Appointment date must be after ${today}!`)
    .max(nextYearString, `Appointment date must before ${nextYear}`),
});
function Reservations() {
  const cx = classNames.bind(styles);
  const param = useParams();
  const [userlogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("DataLogin"))
  );
  const [reservation, setReservation] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const navigate = useNavigate();
  function handleFormSubmit(data) {
    const newData = {
      ...data,
      userId: userlogin.Id,
      postId: param.id,
      appointmentDate: data.appointmentDate.toISOString(),
    };
    console.log("Reservation data:", newData);
    axios
      .post("http://localhost:5223/api/Reservation", newData)
      .then((response) => {
        console.log("Success:", response.data);
        alert("Reservation sent successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });
  }
  return (
    <div className={cx("container-xl")}>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className={cx("box-content-left")}>
            <div className={cx("content-title")}>
              Let's talk about <br /> business!
            </div>
            <div className={cx("content-description")}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              debitis, fugit natus?
            </div>
            <div className={cx("content-image")}>
              <img
                src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={cx("box-content-right")}>
              <div className={cx("group-input-form")}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div className={cx("group-input-form")}>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  placeholder="Your Email"
                  id="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className={cx("group-input-form")}>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  id="phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-danger">{errors.phone.message}</p>
                )}
              </div>
              <div className={cx("group-input-form")}>
                <label htmlFor="Appointment">Appointment Date:</label>
                <input
                  type="date"
                  placeholder="Your Name"
                  id="Appointment"
                  {...register("appointmentDate")}
                />
                {errors.appointmentDate && (
                  <p className="text-danger">
                    {errors.appointmentDate.message}
                  </p>
                )}
              </div>
              <div className={cx("group-input-form")}>
                <button>
                  Send <FontAwesomeIcon icon={faPaperPlane} />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;

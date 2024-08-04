import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const today = new Date();
const todayString = today.toISOString().split('T')[0]; // Định dạng ngày YYYY-MM-DD
const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() + 1);
const nextYearString = nextYear.toISOString().split('T')[0];
//định nghĩa schema bên ngoài component
const schema = yup.object().shape({
    //validate name
    name: yup.string().required("Name is required")
        .test("len", "Name must be between [5, 10] characters", val => val.length >= 5 && val.length <= 10),
    //validate price
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, 'Invalid phone number.')
        .required('Phone number is required'),
    //validate start date
    appointmentDate: yup.date().typeError("Appointment date is required")
        .min(todayString, `Appointment date must be after ${today}!`)
        .max(nextYearString, `Appointment date must before ${nextYear}`),
});
function Reservation(props) {
    const param = useParams();
    const [userlogin, setUserLogin] = useState(
        JSON.parse(localStorage.getItem("DataLogin"))
    );
    const [reservation, setReservation] = useState({});
    //yup: để validate dễ dàng hơn
    // một hook trong thư viện react-hook-form
    // register: để đk input mình validate
    // handleSubmit: hàm để xử lý event submit
    //formState: xử lý in báo lỗi
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });
    const navigate = useNavigate();
    function handleFormSubmit(data) {
        const newData = {
            ...data,
            userId: userlogin.Id,
            postId: param.id,
            appointmentDate: data.appointmentDate.toISOString()
        }
        console.log("Reservation data:", newData);
        axios
            .post("http://localhost:5223/api/Reservation", newData)
            .then((response) => {
                console.log("Success:", response.data);
                alert("Reservation sent successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error:", error.response.data);
            });
    }
    return (
        <div className="row">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter name"
                        {...register("name")} />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                        {...register("email")} />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="phone" className="form-control" placeholder="Enter phone"
                        {...register("phone")} />
                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="appointmentDate" className="form-label">Appointment Date:</label>
                    <input type="date" className="form-control" placeholder="Enter appointment date"
                        {...register("appointmentDate")} />
                    {errors.appointmentDate && <p className="text-danger">{errors.appointmentDate.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Reservation;
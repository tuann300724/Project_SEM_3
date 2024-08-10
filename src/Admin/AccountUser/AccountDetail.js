import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AccountDetail.scss";
function AccountDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5223/api/user/${id}`)
      .then((res) => {
        console.log("API response:", res.data);
        const userdata = res.data.data;
        setUser(res.data.data);
        axios
          .get("http://localhost:5223/api/Recharge")
          .then((result) => {
            const data = result.data.data;
            const amountTotal = data
              .filter((c) => c.userId === userdata.id)
              .reduce((acc, item) => acc + item.amount, 0);
            setAmount(amountTotal);
            console.log("Total amount:", amountTotal);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);


  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="user-detail">
      <h1>User Detail</h1>
      <div className="user-card">
        <img
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          className="avatar"
        />
        <div className="user-details">
          <h3>{user.username}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Role: {user.role}</p>
          <p>Date Register: {new Date(user.createdAt).toLocaleDateString()}</p>
          <p>Amount Total: {amount}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountDetail;

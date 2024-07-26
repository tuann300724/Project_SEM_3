import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AccountDetail.scss';
function AccountDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5223/api/user/${id}`)
            .then(res => {
                console.log("API response:", res.data);
                setUser(res.data.data);
            })
            .catch(err => {
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
                <img src={user.avatar} alt={`${user.username}'s avatar`} className="avatar" />
                <div className="user-details">
                    <h3>{user.username}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Role: {user.role}</p>
                    <p>Date Register: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default AccountDetail;

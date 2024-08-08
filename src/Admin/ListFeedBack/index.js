import React, { useEffect, useState } from 'react';
import './FeedBack.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ListFeedBack() {
    const [infonew, setInfonew] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    function handleFetchNews() {
        setLoading(true);
        setError(null);
        axios.get("http://localhost:5223/api/Feedback")
            .then(res => {
                console.log("API response:", res.data.data.result);
                setInfonew(Array.isArray(res.data.data.result) ? res.data.data.result : []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching news:", err);
                setError('Failed to fetch news');
                setLoading(false);
            });
    }

    useEffect(() => {
        handleFetchNews();
    }, []);
    console.log(infonew);




    return (
        <div className="banner-list">
            <h1>Feed back</h1>
            <div className="table-container">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>

                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {infonew.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td className="title">{item.name}</td>
                                        <td className="title">{item.email}</td>
                                        <td className="title">{item.phone}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => navigate(`/admin/FeedbackDetail/${item.id}`)}> View </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default ListFeedBack;

import React, { useEffect, useState } from 'react';
import './New.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function NewAdmin() {
    const [infonew, setInfonew] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    function handleFetchNews() {
        setLoading(true);
        setError(null); 
        axios.get("http://localhost:5288/api/new")
            .then(res => {
                console.log("API response:", res.data);
                setInfonew(Array.isArray(res.data.data) ? res.data.data : []);
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

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredNews = infonew.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
    );
    
    // const handleStatusToggle = async (id, status) => {
    //     try {
    //         const newstatus = !status; 
    //         await axios.put(`http://localhost:5288/api/New/updateIsActive/${id}`, { status: newstatus });
    //         handleFetchNews(); 
    //     } catch (error) {
    //         console.error("Error updating status status:", error);
    //     }
    // };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5288/api/New/${id}`);
            handleFetchNews(); 
        } catch (error) {
            console.error("Error updating status status:", error);
        }
    };
    
    return (
        <div className="banner-list">
            <h1>News List</h1>
            <div className="actions">
                <div className="btn">
                    <Link to="/admin/AddNew" className="btn btn-primary">+ New</Link>
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
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
                                <th>Title</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredNews.length > 0 ? (
                                filteredNews.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td className="title">{item.title}</td>
                                        <td><img src={item.image} alt={item.title} className="banner-image" /></td>
                                        <td>{item.status ? 'Active' : 'Inactive'}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td>
                                           {/* <button className={`btn status ${item.status ? 'active' : 'inactive'}`}
                                              onClick={() => handleStatusToggle(item.id, item.status)}
                                           >
                                                {item.status ? 'Active' : 'Inactive'}
                                            </button> */}
                                            <button className="btn btn-info"   onClick={() => navigate(`/admin/ViewDetail/${item.id}`)}> View & Edit </button>
                                         
                                            <button className="btn delete"   onClick={() => handleDelete(item.id)}>Delete</button>
                                          
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No news found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default NewAdmin;

import React, { useEffect, useState } from 'react';
import './AllPost.scss'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const result = await axios.get("http://localhost:5117/api/Post");
            const filteredPosts = result.data.data.filter(post => post.status === 'Approved' && post.isActive === true); 
            setPosts(filteredPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleStatusToggle = async (id, isActive) => {
        try {
            const newIsActive = !isActive; 
            await axios.put(`http://localhost:5117/api/Post/updateIsActive/${id}`, { isActive: newIsActive });
            fetchPosts(); 
        } catch (error) {
            console.error("Error updating isActive status:", error);
        }
    };
    const [search, setSearch] = useState('');
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    const filteredNews = posts.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <div className='titlePage'>
                <h3 className='p-3'>Post List</h3>  
                 <Link to="/admin/DisactivePost">
                    <button className='btn btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2'>
                             Disactive Post
                    </button>
                </Link>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="horizontal-line mb-3"></div>
            <div className="list-post">

                {filteredNews.length > 0 ? (
                filteredNews.map((item, index) => (
                    <ul key={index}>
                        <li className="post-item">
                            <img
                                src={item.postImages[1]?.imageUrl}
                                className="post-image"
                                alt="Post"
                            />
                            <div className="post-details">
                                <h3 className="post-title">
                                    Title: {item.title}
                                    <div className="status-success">
                                        {item.status}
                                    </div>
                                </h3>
                                <p className="post-type"><i className="bi bi-house-door-fill"></i> : {item.typeHouse.type}</p>
                                <p className="post-address"><i className="bi bi-geo-alt-fill"></i> : {item.address}</p>
                                <p className="post-bedrooms"><i className="fas fa-bed"></i> : {item.bedrooms}</p>
                                <p className="post-bathrooms"><i className="fas fa-bath"></i> : {item.bathrooms}</p>
                                <p className="post-date"><i className="bi bi-file-post-fill"></i> : {new Date(item.createdDate).toLocaleDateString()}</p>
                            </div>
                            <div className="edit-button">
                                <button
                                    className={`btn btn-${item.isActive ? 'success' : 'secondary'} btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2`}
                                    onClick={() => handleStatusToggle(item.id, item.isActive)}
                                >
                                    {item.isActive ? 'Active' : 'Disactive'}
                                </button>
                              
                            </div>
                        </li>
                    </ul>
                ))
            ) : (
                <tr>
                    <td colSpan="6">No Posts found</td>
                </tr>
            )}
            </div>
        </div>
    );
}

export default ListPost;

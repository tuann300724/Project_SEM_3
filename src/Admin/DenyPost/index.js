import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './DenyPost.scss';
import { useNavigate } from 'react-router-dom';

function DenyPost() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const result = await axios.get("http://localhost:5117/api/Post");
            const filteredPosts = result.data.data.filter(post => post.status === 'Refuse');
            setPosts(filteredPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5117/api/Post/${id}`);
            fetchPosts();  
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    console.log(posts);

    return (
        <div>
            <div className='titlePage'>
                <h3 className='p-3'>Deny Post</h3>
            </div>
            <div className="horizontal-line mb-3"></div>
            <div className="list-post">
                {posts.map((item, index) => (
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
                                    <div className="status-deny">{item.status}</div>
                                </h3>
                                <p className="post-type"><i className="bi bi-house-door-fill"></i> : {item.typeHouse.type}</p>
                                <p className="post-address"><i className="bi bi-geo-alt-fill"></i> : {item.address}</p>
                                <p className="post-bedrooms"><i className="fas fa-bed"></i> : {item.bedrooms}</p>
                                <p className="post-bathrooms"><i className="fas fa-bath"></i> : {item.bathrooms}</p>
                                <p className="post-date"><i className="bi bi-file-post-fill"></i> : {new Date(item.createdDate).toLocaleDateString()}</p>
                            </div>
                            <div className="edit-button">
                                <button
                                    className="btn btn-info btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"
                                    onClick={() => navigate(`/admin/DenyDetail/${item.id}`)}
                                >
                                    <i className="bi bi-eye-fill"></i>
                                </button>
                                <button
                                    className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default DenyPost;

import React, { useEffect, useState } from 'react';
import './CDPost.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CDPost() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
   
    useEffect(() => {
        axios
            .get("http://localhost:5117/api/Post")
            .then((result) => {
                const filteredPosts = result.data.data.filter(post => post.status === 'Processing');
                setPosts(filteredPosts)
            })
            .catch((error) => console.log(error));
    }, []);

    const handleSuccess = async (id) => {
        try {
            await axios.put(`http://localhost:5117/api/Post/accept/${id}`);
            
            const result = await axios.get("http://localhost:5117/api/Post");
            setPosts(result.data.data);
        } catch (error) {
            console.error("Error updating status to On-Going:", error);
        }
    };

    const handleDeny = async (id) => {
        try {
            await axios.put(`http://localhost:5117/api/Post/Deny/${id}`);
          
            const result = await axios.get("http://localhost:5117/api/Post");
            setPosts(result.data.data);
        } catch (error) {
            console.error("Error updating status to Refuse:", error);
        }
    };

    return (
        <div>
            <div className='titlePage'>
                <h3 className='p-3'>Waiting For Approval</h3>
            </div>
            <div className="horizontal-line mb-3"></div>
            <div className="list-post">
                {posts.map((item, index) => (
                    <ul key={index}>
                        <li className="post-item">
                            <div className='form-image'>
                                <img
                                    src={item.postImages[1]?.imageUrl}
                                    className="post-image"
                                    alt={item.title}
                                />
                            </div>
                            <div className="post-details">
                                <h3 className="post-title">
                                    Title: {item.title}
                                    <div className="post-status alert alert-warning">{item.status}</div>
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
                                    onClick={() => navigate(`/admin/DetailPost/${item.id}`)}
                                >
                                    <i className="bi bi-eye-fill"></i>
                                </button>
                                <button
                                    className="btn btn-success btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"
                                    onClick={() => handleSuccess(item.id)}
                                >
                                    <i className="bi bi-check2"></i>
                                </button>
                                <button
                                    className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"
                                    onClick={() => handleDeny(item.id)}
                                >
                                    <i className="bi bi-x"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
            <div className='titlePage'>
                <h3 className='p-3'>Waiting For Approval The Change</h3>
            </div>
            <div className="horizontal-line mb-3"></div>
            <div className="list-post">
                <ul>
                    <li className="post-item">
                        <img
                            src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474174ewO/anh-meme-meo-khoc-cuc-cute_042216244.jpg"
                            className="post-image"
                            alt="Cute cat meme"
                        />
                        <div className="post-details">
                            <h3 className="post-title">
                                Title: Sample Title
                                <div className="post-status alert alert-warning">Processing</div>
                            </h3>
                            <p className="post-type"><i className="bi bi-house-door-fill"></i> : Sample Type</p>
                            <p className="post-address"><i className="bi bi-geo-alt-fill"></i> : Sample Address</p>
                            <p className="post-bedrooms"><i className="fas fa-bed"></i> : 3</p>
                            <p className="post-bathrooms"><i className="fas fa-bath"></i> : 2</p>
                            <p className="post-date"><i className="bi bi-file-post-fill"></i> : Sample Date</p>
                        </div>
                        <div className="edit-button">
                            <button className="btn btn-info btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2">
                                <i className="bi bi-eye-fill"></i>
                            </button>
                            <button className="btn btn-success btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2">
                                <i className="bi bi-check2"></i>
                            </button>
                            <button className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2">
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CDPost;

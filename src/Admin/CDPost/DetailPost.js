import React, { useEffect, useState } from 'react';
import './DetailPost.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DetailPost() {
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`http://localhost:5117/api/Post/${id}`)
            .then(res => {
                console.log("API response:", res.data.data);
                setPostDetail(res.data.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const handleSuccess = async (id) => {
        try {
            await axios.put(`http://localhost:5117/api/Post/accept/${id}`);
            navigate('/admin/CDPost');
        } catch (error) {
            console.error("Error updating status to On-Going:", error);
        }
    };

    const handleDeny = async (id) => {
        try {
            await axios.put(`http://localhost:5117/api/Post/Deny/${id}`);
            navigate('/admin/CDPost'); 
        } catch (error) {
            console.error("Error updating status to Refuse:", error);
        }
    };

    if (!postDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-post">
            <div className="post-title">Detailed Post</div>
            <div className="post-type">Property Type: mini</div>
            <h4>Address: {postDetail.address}</h4>
            <div className="post-image-wrapper">
                <img className="post-image" src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474174ewO/anh-meme-meo-khoc-cuc-cute_042216244.jpg" alt="Post" />
            </div>
            <div className="post-details">
                <h2>Title</h2>
                <p>{postDetail.title}</p>
                <h4>Description</h4>
                <p>{postDetail.description}</p>

                <div className="post-info">
                    <div className="post-item">
                        <strong>Acreage:</strong> {postDetail.area} m²
                    </div>
                    <div className="post-item">
                        <strong>Price:</strong> {postDetail.price} VND
                    </div>
                    <div className="post-item">
                        <strong>Legal Documents:</strong> {postDetail.legalStatus}
                    </div>
                    <div className="post-item">
                        <strong>Zipcode:</strong> {postDetail.zipcode}
                    </div>
                    <div className="post-item">
                        <strong>Number of Bedrooms:</strong> {postDetail.bedrooms}
                    </div>
                    <div className="post-item">
                        <strong>Number of Bathrooms:</strong> {postDetail.bathrooms}
                    </div>
                </div>

                <div className="post-meta">
                    <span className="post-date">Date up: {new Date(postDetail.createdDate).toLocaleDateString()} </span>
                    <div className="end">
                        <span className="post-author">Author: tuan</span>
                        <span className="post-phone">Phone: 09999999</span>
                        <span className="post-email">Email: tuan@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <Link to="/admin/CDPost">
                    <button className='btn btn-info btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2'>
                        <i className='bi bi-arrow-left'></i>
                    </button>
                </Link>
                <div>
                    <button className="btn btn-success btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2" onClick={() => handleSuccess(postDetail.id)}>
                        <i className="bi bi-check2"></i>
                    </button>
                    <button className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2" onClick={() => handleDeny(postDetail.id)}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailPost;

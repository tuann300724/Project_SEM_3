import React from 'react';
import './DetailPost.scss';
import { Link } from 'react-router-dom';

function DetailPost() {
    return (
        <div className="detail-post">
            <div className="post-title">Detailed Post</div>
            <div className="post-type">Property Type: mini</div>
            <h4>Address: hochiminh</h4>
            <div className="post-image-wrapper">
                <img className="post-image" src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474174ewO/anh-meme-meo-khoc-cuc-cute_042216244.jpg" alt="Post" />
            </div>
            <div className="post-details">
                <h2>Title</h2>
                <p>miim</p>
                <h4>Content</h4>
                <p>dep</p>

                <div className="post-info">
                    <div className="post-item">
                        <strong>Acreage:</strong> 200 m²
                    </div>
                    <div className="post-item">
                        <strong>Price:</strong> 9999 VND
                    </div>
                    <div className="post-item">
                        <strong>Legal Documents:</strong> full
                    </div>
                    <div className="post-item">
                        <strong>Interior:</strong> full
                    </div>
                    <div className="post-item">
                        <strong>Number of Bedrooms:</strong> 2
                    </div>
                    <div className="post-item">
                        <strong>Number of Bathrooms:</strong> 2
                    </div>
                </div>

                <div className="post-meta">
                    <span className="post-date">Date up: 12/12/2022</span>
                    <div className="end">
                        <span className="post-author">Author: tuan</span>
                        <span className="post-phone">Phone: 09999999</span>
                        <span className="post-email">Email: tuan@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <Link to="/admin/CDPost"><button className='btn btn-info btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2'><i className='bi bi-arrow-left'></i></button></Link>
                <div>
                <button className="btn btn-success btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2">
                    <i className="bi bi-check2"></i>
                </button>
                <button className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2">
                    <i className="bi bi-x"></i>
                </button>
                </div>
               
            </div>
        </div>
    );
}

export default DetailPost;

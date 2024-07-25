import React from 'react';
import './CDPost.scss'; 


function CDPost(props) {
    return (
        <div>
            <div className='titlePage'>
                <h3 className='p-3'>Waiting For Approval</h3>
            </div>
            <div className="horizontal-line mb-3"></div>
            <div className="list-post">
                <ul>
                    <li className="post-item" key="post1">
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
                            <p className="post-address"><i className="bi bi-geo-alt-fill"></i>: Sample Address</p>
                            <p className="post-bedrooms"><i className="fas fa-bed"></i>: 3</p>
                            <p className="post-bathrooms"><i className="fas fa-bath"></i>: 2 </p>
                            <p className="post-date"><i className="bi bi-file-post-fill"></i>: Sample Date</p>
                        </div>
                        <div className="edit-button">
                             <button className="btn btn-info btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"><i class="bi bi-eye-fill"></i></button>
                            <button className="btn btn-success btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"><i className="bi bi-check2"></i></button>
                            <button className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"><i className="bi bi-x"></i></button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='titlePage'>
                <h3 className='p-3'>Waiting For Approval The Change</h3>
            </div>
            <div className="horizontal-line mb-3"></div>
            <div className="list-post">
                <ul>
                    <li className="post-item" key="post2">
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
                            <p className="post-address"><i className="bi bi-geo-alt-fill"></i>: Sample Address</p>
                            <p className="post-bedrooms"><i className="fas fa-bed"></i>: 3</p>
                            <p className="post-bathrooms"><i className="fas fa-bath"></i>: 2 </p>
                            <p className="post-date"><i className="bi bi-file-post-fill"></i>: Sample Date</p>
                        </div>
                        <div className="edit-button">
                            <button className="btn btn-info btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2">
                            <i class="bi bi-eye-fill"></i>
                            </button>
                            <button className="btn btn-success btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"><i className="bi bi-check2"></i></button>
                            <button className="btn btn-danger btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2"><i className="bi bi-x"></i></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CDPost;

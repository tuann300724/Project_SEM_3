import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

function SideBar() {
    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);

    return (
        <div>
            <div className="d-flex flex-column align-items-center p-9 bg-light rounded">
                <div className="d-flex flex-column align-items-center">
                    <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center">
                        <span>U</span>
                    </div>
                    <h5 className="mt-2">user3306813</h5>
                    <p className="text-muted">0 points <i className="bi bi-info-circle"></i></p>
                </div>
                <div className="w-100 mt-3 p-3 bg-white rounded shadow-sm">
                    <h6>Account Balance</h6>
                    <div className="d-flex justify-content-between">
                        <span>Main Account</span>
                        <span>0</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Promotional Account</span>
                        <span>0</span>
                    </div>
                    <div className="mt-3 p-2 bg-light rounded d-flex justify-content-between align-items-center">
                        <span>Transfer Code</span>
                        <span className="fw-bold">BDS33068131</span>
                        <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-clipboard"></i></button>
                    </div>
                    <button className="btn btn-outline-danger w-100 mt-3">Add Funds</button>
                </div>
                <ul className="list-group w-100 mt-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link className='link' to="/usermanager/overview"><span><i className="bi bi-house-door"></i> Overview</span></Link>
                        <span className="badge bg-danger text-white">New</span>
                    </li>
                    <li 
                        className="list-group-item d-flex justify-content-between align-items-center"
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}
                    >
                        <Link className='link' to="/usermanager/ListPost"><span><i className="bi bi-file-earmark-text"></i> Post Management</span></Link>
                        {hovered1 && (
                            <div className="hover-box">
                                <p>Post Management</p>
                                <ul className="list-group w-200 mt-3">
                                    <li className="d-flex"><Link className='link' to="/usermanager/new-post"><span>New post</span></Link></li>
                                    <li className="d-flex"><Link className='link' to="/usermanager/ListPost"><span>List posts</span></Link></li>
                                </ul>                     
                            </div>
                        )}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link className='link' to="/usermanager/customer-management"><span><i className="bi bi-people"></i> Customer Management</span></Link>
                        <span className="badge bg-danger text-white">New</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}>
                        <Link className='link' to="/usermanager/membership-packages"><span><i className="bi bi-gift"></i> Membership Packages</span></Link>
                        <span className="badge bg-info text-white">Save up to -30%</span>
                        {hovered && (
                            <div className="hover-box">
                                <p>Membership Packages</p>
                                <ul className="list-group w-200 mt-3">
                                    <li className="d-flex"> <Link className='link' to="/usermanager/membership-packages"><span> Register to buy</span></Link>
                                    </li>
                                </ul>                     
                            </div>
                        )}
                    </li>
                
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link className='link' to="/usermanager/financial-management"><span><i className="bi bi-wallet2"></i> Financial Management</span></Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                      onMouseEnter={() => setHovered2(true)}
                      onMouseLeave={() => setHovered2(false)}>
                        <Link className='link' to="/usermanager/edit-info"><span><i className="bi bi-person"></i> Personal Account Management</span></Link>
                        {hovered2 && (
                            <div className="hover-box">
                                <p>Personal Account Management</p>
                                <ul className="list-group w-200 mt-3">
                                    <li className="d-flex"> <Link className='link' to="/usermanager/edit-info"><span>Edit Account</span></Link></li>
                                    <li className="d-flex"> <Link className='link' to="/usermanager/account-settings"><span>Account Setting</span></Link></li>
                                </ul>                     
                            </div>
                        )}
                    </li>
                  
                   
                </ul>
            </div>
        </div>
    );
}

export default SideBar;

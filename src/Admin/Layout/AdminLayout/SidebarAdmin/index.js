import React from 'react';
import './SidebarAdmin.scss';
import { Link } from 'react-router-dom';


function SidebarAdmin({isActive}) {
  
  
    return (
       
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus'></i>
                <span className="logo_name">BatDongSan</span>
            </div>
            <div className="nav-link">
                <li>
                    <Link  className="active" to="/admin">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/CDPost">
                        <i className='bx bx-box'></i>
                        <span className="links_name">Manager Post</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/ListPost">
                        <i className='bx bx-list-ul'></i>
                        <span className="links_name">Post</span>
                    </Link>
                </li>
                <li>
                    <Link to ="/admin/AccountUser">
                        <i className='bx bx-user'></i>
                        <span className="links_name">User Account</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/Banner">
                        <i className='bx bx-pen'></i>
                        <span className="links_name">Banner design</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/PackageList">
                        <i className='bx bx-package'></i>
                        <span className="links_name">Package</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/Country">
                        <i className='bi bi-geo-alt'></i>
                        <span className="links_name">Country</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/Feedback">
                        <i className='bx bx-message'></i>
                        <span className="links_name">Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/NewAdmin">
                        <i className='bx bx-heart'></i>
                        <span className="links_name">New</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog'></i>
                        <span className="links_name">Setting</span>
                    </a>
                </li>
                <li className="log_out">
                    <a href="#">
                        <i className='bx bx-log-out'></i>
                        <span className="links_name">Log out</span>
                    </a>
                </li>
            </div>
        </div>

    );
}

export default SidebarAdmin;
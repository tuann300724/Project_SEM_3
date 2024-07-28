import React, { useState } from 'react';
import './SidebarAdmin.scss';
import { Link } from 'react-router-dom';

function SidebarAdmin({ isActive }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus bx-flashing'></i>
                <span className="logo_name">BatDongSan</span>
            </div>
            <div className="nav-link">
                <li>
                    <Link className="active" to="/admin">
                        <i className='bx bx-grid-alt bx-tada-hover'></i>
                        <span className="links_name">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/ListPost">
                        <div className={`nav-item ${isSubMenuOpen ? 'open' : ''}`} onClick={toggleSubMenu}>
                           <i className='bx bx-list-ul bx-tada-hover'></i> 
                            <span className="links_name">Manager Post</span>
                            <i className={`bx ${isSubMenuOpen ? 'bx-chevron-down bx-fade-down' : 'bx-chevron-right bx-fade-right'}`}></i>
                        </div>
                    </Link>
                    
                </li>
                {isSubMenuOpen && (
                        <ul className="sub-menu">
                            <li><Link to="/admin/CDPost"><i className="bx bx-loader bx-spin"></i>Processing Post</Link></li>
                            <li><Link to="/admin/DenyPost"><i className='bx bx-box bx-tada-hover'></i>Refused Post</Link></li>
                        </ul>
                    )}
                <li>
                    <Link to="/admin/AccountUser">
                        <i className='bx bx-user  bx-tada-hover'></i>
                        <span className="links_name">User Account</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/Banner">
                        <i className='bx bx-pen  bx-tada-hover'></i>
                        <span className="links_name">Banner design</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/PackageList">
                        <i className='bx bx-package  bx-tada-hover'></i>
                        <span className="links_name">Package</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/NewAdmin">
                        <i className='bx bxs-news  bx-tada-hover'></i>
                        <span className="links_name">New</span>
                    </Link>
                </li>
              
                <li >
                    <Link to="/admin/">
                        <i className='bx bx-log-out  bx-tada-hover'></i>
                        <span className="links_name">Log out</span>
                    </Link>
                </li>
            </div>
        </div>
    );
}

export default SidebarAdmin;

import React from 'react';
import './SidebarAdmin.scss';


function SidebarAdmin({isActive}) {
  
  
    return (
       
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus'></i>
                <span className="logo_name">CodingLab</span>
            </div>
            <div className="nav-link">
                <li>
                    <a className="active">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-box'></i>
                        <span className="links_name">Product</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-list-ul'></i>
                        <span className="links_name">Order list</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className="links_name">Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-coin-stack'></i>
                        <span className="links_name">Stock</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-book-alt'></i>
                        <span className="links_name">Total order</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user'></i>
                        <span className="links_name">Team</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-message'></i>
                        <span className="links_name">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-heart'></i>
                        <span className="links_name">Favorites</span>
                    </a>
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
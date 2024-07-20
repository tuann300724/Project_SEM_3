import React from 'react';
import style from './SidebarAdmin.module.scss';
import classNames from 'classnames/bind';

function SidebarAdmin({isActive}) {
    const cx = classNames.bind(style);
  
    return (
       
        <div className={cx("sidebar", isActive ? "active" : "")}>
            <div className={cx("logo-details")}>
                <i className={cx('bx bxl-c-plus-plus')}></i>
                <span className={cx("logo_name")}>CodingLab</span>
            </div>
            <div className={cx("nav-link")}>
                <li>
                    <a className={cx("active")}>
                        <i className={cx('bx bx-grid-alt')}></i>
                        <span className={cx("links_name")}>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-box'></i>
                        <span className={cx("links_name")}>Product</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-list-ul'></i>
                        <span className={cx("links_name")}>Order list</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className={cx("links_name")}>Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-coin-stack'></i>
                        <span className={cx("links_name")}>Stock</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-book-alt'></i>
                        <span className={cx("links_name")}>Total order</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user'></i>
                        <span className={cx("links_name")}>Team</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-message'></i>
                        <span className={cx("links_name")}>Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-heart'></i>
                        <span className={cx("links_name")}>Favorites</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog'></i>
                        <span className={cx("links_name")}>Setting</span>
                    </a>
                </li>
                <li className={cx("log_out")}>
                    <a href="#">
                        <i className='bx bx-log-out'></i>
                        <span className={cx("links_name")}>Log out</span>
                    </a>
                </li>
            </div>
        </div>

    );
}

export default SidebarAdmin;
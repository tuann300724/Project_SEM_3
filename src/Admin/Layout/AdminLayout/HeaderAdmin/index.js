import React from 'react';
import style from './HeaderAdmin.module.scss'
import classNames from 'classnames/bind';
function HeaderAdmin({handleSidebarToggle,isActive}) {
    const cx = classNames.bind(style);
    return (
        <div className={cx("home-section", isActive ? "active" : "")}>
             <nav>
                    <div className={cx("sidebar-button")} onClick={handleSidebarToggle}>
                        <i className={cx('bx', !isActive ? 'bx-menu-alt-right' : 'bx-menu' )}></i>
                        <span className={cx("dashboard")}>Dashboard</span>
                    </div>
                    <div className={cx("search-box")}>
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className={cx("profile-details")}>
                        <img src="images/profile.jpg" alt=""/>
                            <span className={cx("admin_name")}>Prem Shahi</span>
                            <i className='bx bx-chevron-down' ></i>
                    </div>
                </nav>
        </div>
    );
}

export default HeaderAdmin;
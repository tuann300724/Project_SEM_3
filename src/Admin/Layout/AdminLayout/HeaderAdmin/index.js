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
                    
                    <div className={cx("profile-details")}>
                        <img src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1" alt=""/>
                            <span className={cx("admin_name")}>Tuan </span>
                    </div>
                </nav>
        </div>
    );
}

export default HeaderAdmin;
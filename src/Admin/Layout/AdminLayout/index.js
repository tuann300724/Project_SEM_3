import React, { useState } from 'react';
import SidebarAdmin from './SidebarAdmin';
import style from './Layout.module.scss';
import HeaderAdmin from './HeaderAdmin';
import classNames from 'classnames/bind';
function AdminLayout({ children }) {
    const cx = classNames.bind(style);
    const [isActive, setIsActive] = useState(false);

    const handleSidebarToggle = () => {
        setIsActive(!isActive);
    };
    return (

        <div>
            <SidebarAdmin isActive={isActive} />
            <div>
                <HeaderAdmin isActive={isActive} handleSidebarToggle={handleSidebarToggle} />
                <div className={cx("home-content", isActive ? "active" : "")}>
                    {children}
                </div>
            </div>

        </div>
    );
}

export default AdminLayout;
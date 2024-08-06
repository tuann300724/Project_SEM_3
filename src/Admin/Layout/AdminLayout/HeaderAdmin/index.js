import React, { useEffect, useState } from 'react';
import style from './HeaderAdmin.module.scss'
import classNames from 'classnames/bind';
import axios from "axios";
import catavatar from '../../../../public/images/catavatar.jpg'
function HeaderAdmin({handleSidebarToggle,isActive}) {
    const cx = classNames.bind(style);
    const [userid, setUserid] = useState(JSON.parse(localStorage.getItem('DataLogin')));
    const [user, setUser] = useState();
    useEffect(() =>{
        axios.get(`http://localhost:5223/api/User/${userid.Id}`)
        .then(result => {
            setUser(result.data.data)
            console.log(result.data.data)
        })
        .catch(err => console.error(err));
    }, [])
    return (
        <div className={cx("home-section", isActive ? "active" : "")}>
             <nav>
                    <div className={cx("sidebar-button")} onClick={handleSidebarToggle}>
                        <i className={cx('bx', !isActive ? 'bx-menu-alt-right' : 'bx-menu' )}></i>
                        
                    </div>
                    
                    <div className={cx("profile-details")}>
                        <img src={user ? user.avatar || catavatar : catavatar} alt=""/>
                            <span className={cx("admin_name")}>{user ? user.username : "Lỗi"} </span>
                    </div>
                </nav>
        </div>
    );
}

export default HeaderAdmin;
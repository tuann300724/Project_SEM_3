import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Layout.scss';
import SideBar from '../SideBar';
import ListPost from '../ListPost';
import DashBoard from '../Dashboard';
import AccountSettings from '../AccountSettings';
import EditInfo from '../EditInfo';

function LayoutUser() {
    return (
        <div className='AdminPage'>
            <div className='MainContent'>
                <div className='LayoutSidebar'>
                    <SideBar />
                </div>
                <div className='Content'>
                    <Routes>
                        <Route path="/" element={<DashBoard />} />
                        <Route path="/ListPost" element={<ListPost />} />
                        <Route path="/overview" element={<DashBoard />} />
                        <Route path="/edit-info" element={<EditInfo />} />
                        <Route path="/account-settings" element={<AccountSettings />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default LayoutUser;

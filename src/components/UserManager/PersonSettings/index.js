import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import EditInfo from '../EditInfo';
import AccountSettings from '../AccountSettings';

function PersonSettings() {
  return (
    <div className="container p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Quản lý tài khoản</h1>
      <div className="border-bottom mb-6">
        <nav className="nav">
          <Link className="nav-link" to="/usermanager/edit-info">Chỉnh sửa thông tin</Link>
          <Link className="nav-link" to="/usermanager/account-settings">Cài đặt tài khoản</Link>
        </nav>
      </div>
      <div className='form'>
        <Routes>
          <Route path="/usermanager/edit-info" element={<EditInfo />} />
          <Route path="/usermanager/account-settings" element={<AccountSettings />} />    
        </Routes>
      </div> 
    </div>
  );
}

export default PersonSettings;

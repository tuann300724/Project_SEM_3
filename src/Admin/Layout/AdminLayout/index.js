import React from 'react';
import SidebarAdmin from './SidebarAdmin';


function AdminLayout({children}) {
    return (
        <div>
            <SidebarAdmin/>
            <div className='container-fluid'>
                <div className='content'>
                    {children}
                </div>
            </div>
           
        </div>
    );
}

export default AdminLayout;
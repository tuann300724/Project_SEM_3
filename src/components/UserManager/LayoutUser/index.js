import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Layout.scss';
import SideBar from '../SideBar';
import ListPost from '../ListPost';
import DashBoard from '../Dashboard';
import AccountSettings from '../AccountSettings';
import EditInfo from '../EditInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';

function LayoutUser() {
    const openmenu = document.getElementById("open");
    const ref = useRef(null)
    const [open, setOpen] = useState(true);
    const handlemenuopen = () => {
        ref.current.classList.add("active")
        setOpen(false);
    }
    const handlemenuclose = () => {
        ref.current.classList.remove("active")
        setOpen(true);
    }

    return (
        <div className='AdminPage'>
            <div className='LayoutSidebar' id='menu' ref={ref}>
                {open ? <div className='closemenu' id='open' onClick={handlemenuopen}> <FontAwesomeIcon icon={faArrowRight} /> </div> : <div className='closemenu' id='open' onClick={handlemenuclose}> <FontAwesomeIcon icon={faArrowLeft} /> </div>}
                <SideBar />
            </div>
            <div className='MainContent container-xl'>

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

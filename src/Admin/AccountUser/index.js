import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountUser.scss';
import axios from 'axios';

function AccountUser() {
    const [searchQuery, setSearchQuery] = useState('');
    const [account, setAccount] = useState([]);
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://localhost:5223/api/User");
            setAccount(result.data.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    const handleStatusToggle = async (id, isActive) => {
        try {
            const newIsActive = !isActive; 
            await axios.put(`http://localhost:5223/changeActive/${id}`, { isActive: newIsActive });
            fetchUser(); 
        } catch (error) {
            console.error("Error updating isActive status:", error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    console.log(account)
    const filteredAccounts = account.filter(account =>
        account.username && account.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Filtered accounts:", filteredAccounts); 

    return (
        <div className="account-user">
            <h1>User Account</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search user..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="container-user">
                {filteredAccounts.map(account => (
                    <div className="account-card" key={account.id}>
                        <img src={account.avatar} alt={`${account.username}'s avatar`} className="avatar" />
                        <div className="account-details">
                            <h3>{account.username}</h3>
                            <p>{account.email}</p>
                            <p>{account.phone}</p>
                        </div>
                        <div className="account-actions">
                                 <button
                                    className={`btn btn-${account.isActive ? 'success' : 'secondary'} btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2`}
                                    onClick={() => handleStatusToggle(account.id, account.isActive)}
                                >
                                    {account.isActive ? 'Active' : 'Disactive'}
                                </button>
                            <button 
                                className="btn view btn-sm mt-2 m-2 pl-3 pr-3 pt-2 pb-2" 
                                onClick={() => navigate(`/admin/AccountDetail/${account.id}`)}
                            >
                                View
                            </button>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountUser;

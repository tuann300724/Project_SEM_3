import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountUser.scss';
import axios from 'axios';

function AccountUser() {
    const [searchQuery, setSearchQuery] = useState('');
    const [account, setAccount] = useState([]);
    const navigate = useNavigate();

    function handleFetchUser() {
        axios.get("http://localhost:5223/api/user")
            .then(res => {
                console.log("API response:", res.data);
                setAccount(Array.isArray(res.data.data) ? res.data.data : []);
                console.log("Accounts set to state:", Array.isArray(res.data.data) ? res.data.data : []); // Log the data being set to state
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        handleFetchUser();
    }, []);

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
                            <button className="btn disable">Disable</button>
                            <button 
                                className="btn view" 
                                onClick={() => navigate(`/admin/AccountDetail/${account.id}`)}
                            >
                                View
                            </button>
                            <button className="btn edit">Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountUser;

import React, { useState } from 'react';
import './AccountUser.scss';

const accounts = [
    {
        id: 1,
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/50',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/50',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
    },
    {
        id:3,
        name: 'phong',
        avatar: 'https://via.placeholder.com/50',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    },
    {
        id: 4,
        name: 'tuan',
        avatar: 'https://via.placeholder.com/50',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
    },
    {
        id: 5,
        name: 'ádasd',
        avatar: 'https://via.placeholder.com/50',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    },
    {
        id: 6,
        name: 'yoeng',
        avatar: 'https://via.placeholder.com/50',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
    },
    
];

function AccountUser() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAccounts = accounts.filter(account =>
        account.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="account-user">
                    <h1>User Acount</h1>
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
                        <img src={account.avatar} alt={`${account.name}'s avatar`} className="avatar" />
                        <div className="account-details">
                            <h3>{account.name}</h3>
                            <p>{account.email}</p>
                            <p>{account.phone}</p>
                        </div>
                        <div className="account-actions">
                            <button className="btn disable">Disable</button>
                            <button className="btn view">View</button>
                            <button className="btn edit">Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountUser;

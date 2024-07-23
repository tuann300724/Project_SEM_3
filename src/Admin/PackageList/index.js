import React, { useState } from 'react';
import './PackageList.scss';

const initialPackages = [
    {
        id: 1,
        name: 'Basic Package',
        price: '$100',
        vat: '10%',
        date: '2024-07-01',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Premium Package',
        price: '$200',
        vat: '15%',
        date: '2024-01-15',
        status: 'Inactive'
    },
 
];

function PackageList() {
    const [packages, setPackages] = useState(initialPackages);
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredPackages = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="package-list">
            <h1>Package List</h1>
            <div className="actions">
                <div className="btn">
                    <button className="btn btn-primary">+ New</button>
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Search packages..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Package Name</th>
                            <th>Price</th>
                            <th>VAT</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPackages.map(pkg => (
                            <tr key={pkg.id}>
                                <td>{pkg.id}</td>
                                <td>{pkg.name}</td>
                                <td>{pkg.price}</td>
                                <td>{pkg.vat}</td>
                                <td>{pkg.date}</td>
                                <td>{pkg.status}</td>
                                <td>
                                    <button className="btn edit">Edit</button>
                                    <button className="btn delete">Delete</button>
                                    <button className={`btn status ${pkg.status.toLowerCase()}`}>
                                        {pkg.status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PackageList;

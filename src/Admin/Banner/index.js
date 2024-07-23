import React, { useState } from 'react';
import './Banner.scss';

const initialBanners = [
    {
        id: 1,
        name: 'Summer Sale',
        company: 'ABC Corp',
        image: 'https://via.placeholder.com/100',
        date: '2024-07-01',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Winter Discount',
        company: 'XYZ Ltd',
        image: 'https://via.placeholder.com/100',
        date: '2024-01-15',
        status: 'Inactive'
    },
    // Add more banners as needed
];

function Banner() {
    const [banners, setBanners] = useState(initialBanners);
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredBanners = banners.filter(banner =>
        banner.name.toLowerCase().includes(search.toLowerCase()) ||
        banner.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="banner-list">
            <h1>Banner List</h1>
            <div className="actions">
                <div className="btn">
                    <button className="btn btn-primary">+ New</button>
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Search banners..."
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
                            <th>Name</th>
                            <th>Company</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map(banner => (
                            <tr key={banner.id}>
                                <td>{banner.id}</td>
                                <td>{banner.name}</td>
                                <td>{banner.company}</td>
                                <td><img src={banner.image} alt={banner.name} className="banner-image" /></td>
                                <td>{banner.date}</td>
                                <td>{banner.status}</td>
                                <td>
                                    <button className="btn edit">Edit</button>
                                    <button className="btn delete">Delete</button>
                                    <button className={`btn status ${banner.status.toLowerCase()}`}>
                                        {banner.status}
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

export default Banner;

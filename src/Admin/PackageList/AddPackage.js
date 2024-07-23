import React, { useState } from 'react';
import './AddForm.scss';

function AddPackage() {
    const [form, setForm] = useState({
        name: '',
        price: '',
        vat: '',
        date: '',
        status: 'Active'
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Package added:', form);
    };

    return (
        <div className="add-form">
            <h1>Add Package</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Package Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="vat">VAT</label>
                    <input
                        type="text"
                        id="vat"
                        name="vat"
                        value={form.vat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="actions">
                    <button type="submit" className="btn">Add Package</button>
                </div>
            </form>
        </div>
    );
}

export default AddPackage;

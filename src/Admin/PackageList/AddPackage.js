import React, { useState } from 'react';
import './AddForm.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPackage() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [vat, setVat] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'price') setPrice(value);
        if (name === 'vat') setVat(value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5081/api/Package", {
                name,
                price,
                vat
            });
            console.log("Success:", response.data);
            setMessage('Package added successfully!'); 
            setTimeout(() => navigate('/admin/PackageList'), 1000); 
            setName('');
            setPrice('');
            setVat('');
        } catch (error) {
            console.error("Error:", error.response.data);
            setMessage('Error adding package.'); 
        }
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
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="vat">VAT</label>
                    <input
                        type="number"
                        id="vat"
                        name="vat"
                        value={vat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="actions">
                    <button type="submit" className="btn">Add Package</button>
                </div>
                {message && <p className="message">{message}</p>} {/* Display message */}
            </form>
        </div>
    );
}

export default AddPackage;

import React, { useEffect, useState } from 'react';
import './AddForm.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditPackage() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [vat, setVat] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const result = await axios.get(`http://localhost:5081/api/Package/${id}`);
                const { name, price, vat } = result.data.data;
                setName(name);
                setPrice(price);
                setVat(vat);
            } catch (error) {
                console.error("Error fetching package:", error);
            }
        };

        fetchPackage();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'price') setPrice(value);
        if (name === 'vat') setVat(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5081/api/Package/${id}`, {id, name, price, vat });
            setMessage('Package updated successfully!');
            setTimeout(() => navigate('/admin/PackageList'), 1000); 
        } catch (error) {
            console.error("Error updating package:", error);
            setMessage('Error updating package.');
        }
    };

    return (
        <div className="add-form">
            <h1>Edit Package</h1>
            <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={id} />
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
                    <button type="submit" className="btn">Update Package</button>
                </div>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default EditPackage;

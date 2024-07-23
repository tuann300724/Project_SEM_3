import React, { useState } from 'react';
import './AddForm.scss';

function AddNew() {
    return (
        <div className="add-form">
            <h1>Add News</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        required
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">New Type</label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        required
                    >
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="actions">
                    <button type="submit" className="btn">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddNew;

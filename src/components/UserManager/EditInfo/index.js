import React, { useState } from 'react';
import './EditInfo.scss';

function EditInfo() {
    const [avatar, setAvatar] = useState(null);

    // Function to handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearAvatar = () => {
        setAvatar(null);
    };

    return (
        <div className="container py-4">
            <div className="card">
                <div className="p-5">
                    <h1 className="card-title text-center mb-4">Account Management</h1>
                    
                    <form>
                        {/* Avatar Section */}
                        <div className="mb-4 d-flex justify-content-center align-items-center">
                            <div className="image-upload-container">
                                {avatar ? (
                                    <img src={avatar} alt="Avatar" className="user-image" />
                                ) : (
                                    <div className="avatar-placeholder d-flex ">
                                        <div>
                                            <div><i className="bi bi-camera-fill"></i></div>
                                            <div><span className="camera-icon">upload file</span></div>
                                        </div>
                                    </div>
                                )}
                                <input type="file" className="input-file" onChange={handleFileChange} accept="image/*" />
                            </div>
                        </div>

                        {/* Personal Information Section */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
                            <div className="row g-3">
                                <div className="col-md-5">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Tuấn Nguyễn" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                            <div className="row g-3">
                                <div className="col-md-5">
                                    <label htmlFor="phoneNumber" className="form-label">Primary Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNumber" />
                                    <button className="btn btn-outline-danger mt-2">+ Add Phone Number</button>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" value="tuan300724@gmail.com" />
                                </div>
                            </div>
                        </div>

                        {/* Save Changes Button */}
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-danger">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditInfo;

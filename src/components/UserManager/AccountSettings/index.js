import React, { useState } from 'react';

function AccountSettings(props) {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Change Password</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="current-password" className="form-label">Current Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showCurrentPassword ? 'text' : 'password'}
                                            id="current-password"
                                            className="form-control"
                                            aria-label="Current Password"
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={toggleShowCurrentPassword}
                                        >
                                            <i className="bi bi-eye-fill"></i>
                                        </button>
                                    </div>
                                    <a href="#" className="form-text mt-2 text-danger">Forgot your password?</a>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="new-password" className="form-label">New Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showNewPassword ? 'text' : 'password'}
                                            id="new-password"
                                            className="form-control"
                                            aria-label="New Password"
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={toggleShowNewPassword}
                                        >
                                            <i className="bi bi-eye-fill"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm-password" className="form-label">Confirm New Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            id="confirm-password"
                                            className="form-control"
                                            aria-label="Confirm New Password"
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={toggleShowConfirmPassword}
                                        >
                                            <i className="bi bi-eye-fill"></i>
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger">Save Changes</button>
                            </form>
                            <ul className="mt-4 text-muted list-unstyled">
                                <li>Minimum 8 characters</li>
                                <li>At least 1 uppercase letter</li>
                                <li>At least 1 digit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;

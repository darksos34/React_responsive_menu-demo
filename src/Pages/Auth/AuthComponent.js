import React, { useState } from 'react';

const AuthComponent = ({ onLogin, isLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(formData.email, formData.password);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    </div>
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>
                {isLogin ? (
                    <p>Don't have an account? Register Above</p>
                ) : (
                    <p>Already have an account? Login Above</p>
                )}
            </div>
        </div>
    );
};

export default AuthComponent;

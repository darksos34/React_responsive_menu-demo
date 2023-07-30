import React, { useState, useRef, useEffect } from 'react';

const LoginComponent = ({ onLogin, onClose }) => {
    // Close the component when clicking outside the form
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    }), handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    }, handleSubmit = (event) => {
        event.preventDefault();
        onLogin(formData.email, formData.password);
    }, loginRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (loginRef.current && !loginRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    // Fake Google login function for testing purposes


    return (
        <>
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <button className="button-login" type="submit">Login</button>
            </form>

        </>
    );
};

export default LoginComponent;

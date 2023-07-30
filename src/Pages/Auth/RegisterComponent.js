import React, { useState, useRef, useEffect } from 'react';

const RegisterComponent = ({ onRegister, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        country: '',
        gender: '',
        age: '',
        robotCheck: false,
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleRegister = (event) => {
        event.preventDefault();
        onRegister(formData);
    };

    // Close the component when clicking outside the form
    const loginRef = useRef();
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

    return (
        <>
            <h2>Register</h2>
            <form className="form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Country:</label>
                    <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="date" name="age" value={formData.age} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox" name="robotCheck" checked={formData.robotCheck} onChange={handleInputChange} required />
                        I'm not a robot
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default RegisterComponent;

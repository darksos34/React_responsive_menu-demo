import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
    const [newComment, setNewComment] = useState('');
    const [selectedPicture, setSelectedPicture] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        setNewComment(e.target.value);
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedPicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            const commentData = {
                text: newComment,
                picture: selectedPicture,
                file: selectedFile,
            };
            onAddComment(commentData);
            setNewComment('');
            setSelectedPicture(null);
            setSelectedFile(null);
        }
    };
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Initial login status is false
    const handleLogin = () => {
        setIsLoggedIn(true); // Simulated login functionality
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Simulated logout functionality
    };

    return (
        <>

            <div className="AddComment">
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}
                <h2>Add a New Comment</h2>
                {(isLoggedIn && <form onSubmit={handleSubmit}>
                    <textarea value={newComment} onChange={handleChange} />
                    <input  disabled={true} type="file" accept="image/*" onChange={handlePictureChange} />
                    <input disabled={true} type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
                    <button  disabled={true} type="submit">Add Comment</button>
                </form>)}
                {selectedPicture && <img src={selectedPicture} alt="Uploaded" style={{ maxWidth: '200px' }} />}
                {selectedFile && <p>Selected File: {selectedFile.name}</p>}
            </div>

        </>
    );
};

export default AddComment;

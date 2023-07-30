import React, { useState } from 'react';

const Comment = ({ id, text, date, picture, file, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const [editedPicture, setEditedPicture] = useState(picture);
    const [editedFile, setEditedFile] = useState(file);
    const [fontStyle, setFontStyle] = useState('Arial');
    const [fontSize, setFontSize] = useState('16');
    const [fontWeight, setFontWeight] = useState('normal');

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    const handlePictureChange = (e) => {
        const fileInput = e.target.files[0];
        if (!fileInput) return;


        setEditedPicture(URL.createObjectURL(fileInput));
    };

    const handleFileChange = (e) => {
        const fileInput = e.target.files[0];
        if (!fileInput) return;


        setEditedFile(fileInput.name);
    };

    const handleFontStyleChange = (e) => {
        setFontStyle(e.target.value);
    };

    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value);
    };

    const handleFontWeightChange = (e) => {
        setFontWeight(e.target.value);
    };

    const handleSave = () => {
        const editedComment = {
            id,
            text: editedText,
            picture: editedPicture,
            file: editedFile,
            fontStyle,
            fontSize,
            fontWeight,
        };
        onEdit(editedComment);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedText(text);
        setEditedPicture(picture);
        setEditedFile(file);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const commentStyle = {
        fontFamily: fontStyle,
        fontSize: fontSize + 'px',
        fontWeight: fontWeight,
    };


    return (
        <div className="Comment">

            <div className="Comment-header">
                <div className="Comment-date">{date}</div>
            </div>
            {isEditing  ? (
                <div>
                    <textarea value={editedText} onChange={handleTextChange} style={commentStyle} />
                    {editedPicture && (
                        <div className="ImagePreview">
                            <img src={editedPicture} alt="Preview" />
                        </div>
                    )}
                    {editedFile && <p>File: {editedFile}</p>}
                    <input type="file" accept="image/*" onChange={handlePictureChange} />
                    <input type="file" onChange={handleFileChange} />
                    <label>Font Style:</label>
                    <select value={fontStyle} onChange={handleFontStyleChange}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                        {/* Add more font options here */}
                    </select>
                    <label>Font Size:</label>
                    <input type="number" value={fontSize} onChange={handleFontSizeChange} />
                    <label>Font Weight:</label>
                    <select value={fontWeight} onChange={handleFontWeightChange}>
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                        <option value="bolder">Bolder</option>
                        {/* Add more font weight options here */}
                    </select>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p style={commentStyle}>{text}</p>
                    {picture && (
                        <div className="ImagePreview">
                            <img src={picture} alt="Preview" />
                        </div>
                    )}
                    {file && <p>File: {file}</p>}
                  <button  disabled={true} onClick={handleEdit}>Edit</button>
                 <button  disabled={true} onClick={() => onDelete(id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Comment;

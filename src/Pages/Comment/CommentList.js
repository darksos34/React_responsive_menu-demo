import React, { useState } from 'react';

import AddComment from './AddComment';
import './styles.css';
import Comment from "./Comment";

const CommentList = () => {

    const [comments, setComments] = useState([
        { id: 1, text: 'This is comment 1', date: '2023-07-29 10:30' },
        { id: 2, text: 'This is comment 2', date: '2023-07-29 11:15' },
        { id: 3, text: 'This is comment 3', date: '2023-07-29 12:00' },
    ]);

    const handleEditComment = (id, editedText) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === id ? { ...comment, text: editedText } : comment
            )
        );
    };
    const handleDeleteComment = (id) => {
        setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    };

    const handleAddComment = (commentData) => {
        const id = Date.now();
        const newComment = {
            id,
            text: commentData.text,
            date: new Date().toLocaleString(),
            picture: commentData.picture,
            file: commentData.file,
        };
        setComments([...comments, newComment]);
    };
    return (
        <div className="CommentList">


            <h2>Comments</h2>
            <AddComment onAddComment={handleAddComment} />
            <div className="CommentsContainer">
                {comments.slice(-10).map((comment) =>  (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        text={comment.text}
                        date={comment.date}
                        picture={comment.picture}
                        file={comment.file}
                        onEdit={handleEditComment}
                        onDelete={handleDeleteComment}

                    />
                ))}
            </div>
        </div>
    );
};

export default CommentList;

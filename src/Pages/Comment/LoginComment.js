// import React, { useEffect, useState } from 'react';
// import Comment from './Comment';
// import AddComment from './AddComment';
//
// const LoginComment = () => {
//     const [comments, setComments] = useState([]);
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state (assuming you have it)
//     const [userRole, setUserRole] = useState('user'); // User role (change this as per your application)
//
//     useEffect(() => {
//         // Fetch comments when the component mounts
//         fetchComments();
//     }, []);
//
//     const fetchComments = async () => {
//         try {
//             const response = await fetch('/api/comments'); // Replace with your backend API URL
//             const data = await response.json();
//             setComments(data);
//         } catch (error) {
//             console.error('Error fetching comments:', error);
//         }
//     };
//
//     const handleAddComment = async (newComment) => {
//         try {
//             const response = await fetch('/api/comments', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newComment),
//             });
//             const data = await response.json();
//             setComments((prevComments) => [...prevComments, data]);
//         } catch (error) {
//             console.error('Error adding comment:', error);
//         }
//     };
//
//     const handleEditComment = async (id, updatedComment) => {
//         try {
//             await fetch(`/api/comments/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedComment),
//             });
//             // Update the comments state after a successful update (not shown here)
//         } catch (error) {
//             console.error('Error updating comment:', error);
//         }
//     };
//
//     const handleDeleteComment = async (id) => {
//         try {
//             await fetch(`/api/comments/${id}`, {
//                 method: 'DELETE',
//             });
//             // Update the comments state after a successful delete (not shown here)
//         } catch (error) {
//             console.error('Error deleting comment:', error);
//         }
//     };
//
//     return (
//         <div>
//             {isLoggedIn && (
//                 <AddComment onAddComment={handleAddComment} />
//             )}
//             {comments.map((comment) => (
//                 <Comment
//                     key={comment.id}
//                     id={comment.id}
//                     text={comment.text}
//                     date={comment.date}
//                     picture={comment.picture}
//                     file={comment.file}
//                     userRole={userRole}
//                     onEdit={handleEditComment}
//                     onDelete={handleDeleteComment}
//                 />
//             ))}
//         </div>
//     );
// };
//
// export default LoginComment;

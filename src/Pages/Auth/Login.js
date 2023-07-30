// import React, { useState } from 'react';
//
// const Login = ({ onLogin }) => {
//     const [ setIsLoggedIn] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//     };
//
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };
//
//     const handleLogin = () => {
//         // Replace this logic with your actual authentication mechanism
//         // For example, you can validate the username and password against a backend server or store
//         // For simplicity, we are using a hardcoded username and password here
//         if (username === 'user' && password === 'password') {
//             setIsLoggedIn(true);
//             onLogin();
//         } else {
//             alert('Invalid username or password.');
//         }
//     };
//
//     return (
//         <div className="Login">
//             <h2>Login</h2>
//             <label>Username:</label>
//             <input type="text" value={username} onChange={handleUsernameChange} />
//             <label>Password:</label>
//             <input type="password" value={password} onChange={handlePasswordChange} />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };
//
// export default Login;

import React, { useState } from 'react';
import axios from 'axios';  // for making HTTP requests
import { useNavigate } from 'react-router-dom';  // importing useNavigate hook


function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();  // using the hook to get the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, {
        username: username,
        password: password
      });
      
      if (response.data && response.data.data) {
        // Assuming the token is saved in localStorage for simplicity
        localStorage.setItem('authToken', response.data.data);

        // Using navigate function to redirect to the platform page
        navigate('/platform');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data);
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
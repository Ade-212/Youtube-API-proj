import styles from './stylesregister.module.css';
import { useNavigate } from 'react-router-dom';  // importing useNavigate hook
import axios from 'axios';
import { useState } from 'react';

function Signup() {
    const [data, setData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: ''
    });
  
    const navigate = useNavigate();  // using the hook to get the navigate function
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleRegister = async (e) => {
      e.preventDefault();
      console.log("Register button clicked", data);
      try {
        const signupUrl = `${process.env.REACT_APP_BACKEND_URL}/api/users`;
        const {data:res} = await axios.post(signupUrl, data);
        navigate('/login');
        console.log(res.message);
      } catch (error) {
        console.log("Error during registration", error.response);
        if (error.response.status >= 400 && error.response.status < 500) {
          setError(error.response.data.message);
        }
      }
    };
    
    const handleLoginRedirect = () => {
      navigate('/login');
    }
  
    return (
      <div id="registerForm">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <br />
          
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <br />
          <br />

          {error && <div className={styles.error_msg}>{error}</div>}
          <button type="submit" className={styles.buttonSpacing}>Register</button>
          <button type="button" onClick={handleLoginRedirect}>Login</button>
        </form>
      </div>
    );
}
  
  export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom'; 
import Log from '../assests/login.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        alert('Login successful');
        navigate('/'); 
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); //  for Show specific error message from server
    } else {
        alert('Invalid credentials. Please try again.');
    }
    console.error('Login error:', error.response?.data || error.message);
}
};


  return (
    <div>
    <div className="lg-cont">
    <div className='lg-imag' data-aos="fade-left">
        <img src={Log} alt="Signup" />
        </div>
    <form onSubmit={handleSubmit}>
    <div className="signUp-text">
    <h1>Welcome Back :)</h1>
     </div>
     <br />
     <h3>Email Address</h3>
      <input type="text" name="email" placeholder="you@example.com" className="inputs" value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className="pass-text">
       <h3>Password</h3>
      </div>
      <input type="password" name="password" placeholder="Enter 6 characters or more" className="inputs" value={password} onChange={(e) => setPassword(e.target.value)} />
      <span className='fp'><Link to="/forgot-password">Forget Password?</Link></span>
      <label htmlFor="remember-me">
       <input type="checkbox" id="remember-me" /> Remember Me
      </label>
        <br />
        <button type="submit" className="Lg">Login</button>
        {error && <p className="error">{error}</p>}
        <div className="signUp-text">
        Doesn't have an account yet? <span><Link to="/signup">Signup</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

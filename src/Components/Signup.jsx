import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sign from '../assests/signup.png';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/submit', { email, password });
      console.log(response.data);
      navigate('/'); 
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div>
      <div className="lg-cont">
        <div className='lg-imag'data-aos="fade-right">
          <img src={Sign} alt="Signup" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signUp-text"></div>
          <h3>Email Address</h3>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="you@example.com"
            className="inputs" 
          />
          <div className="pass-text">
            <h3>Password</h3>
          </div>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter 6 characters or more"
            className="inputs" 
          />
          <br />
          <button type="submit" className="Lg">Sign Up</button>
          <div className="signUp-text">
            Already Have an Account? <span><Link to="/Login">Login here</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

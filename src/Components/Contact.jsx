import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Log from '../assests/login.png';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [FullName, setFullName] = useState('');
    const [Feedback, setFeedback] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
    e.preventDefault();
      try {
      const response = await axios.post('http://localhost:5000/api/submit', { email, FullName,setFeedback });
      console.log(response.data);
      navigate('/'); 
      } catch (error) {
      console.error('There was an error submitting the form!', error);
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
     <h1>We'd love to hear from you</h1><br/>
     <p>Have a suggestion? Fill out the form below, and we'll take a look!</p>
    </div>
          <br />
          <input type="text" name="email" placeholder="you@example.com" className="inputs" value={email}
           onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" name="Full Name" placeholder="Enter Your Name" className="inputs"value={FullName}
            onChange={(e) => setFullName(e.target.value)}/>
          <input type ="text" name ="message" placeholder ="feedback" className="inputs" value={Feedback} 
          onChange={(e) => setFeedback(e.target.value)} style={{ height:'100px'}} />       
          <br />
          <button type="submit" className="Lg">Submit</button>
        </form>
      </div>
    </div>
  )
}

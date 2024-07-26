import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Contact1 from '../assests/customer-experience.png';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/submit', { email, fullName, feedback }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.data);
            navigate('/feedback');
        } catch (error) {
            console.error('There was an error submitting the form!', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <div className="lg-cont">
            <div className='lg-imag' data-aos="fade-left">
            <img src={Contact1} alt="ContactUs" style={{ width: '500px', height: '500px' }} />
            </div>
            <form onSubmit={handleSubmit} style={{ marginTop: '-3%' }}>
            <div className="signUp-text">
              <h1>We'd love to hear from you :)</h1><br />
              <p>Have a suggestion? Fill out the form below, and we'll take a look!</p>
            </div>
          <input type="email" name="email" placeholder="you@example.com" className="inputs" value={email}  onChange={(e) => setEmail(e.target.value)}  />
          <input type="text"  name="fullName" placeholder="Enter Your Name"className="inputs"   value={fullName}  onChange={(e) => setFullName(e.target.value)} />
         <textarea  name="feedback" placeholder="Feedback" className="inputs" value={feedback} onChange={(e) => setFeedback(e.target.value)} style={{ height: '100px' }} />
        <br />
         <button type="submit" className="Lg">Submit</button>
        </form>
            </div>
        </div>
    );
}

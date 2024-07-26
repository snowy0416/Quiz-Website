import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quizlogo from '../assests/quizlogo.png';

function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={`nav ${isMenuActive ? 'menu-active' : ''}`}>
      <div className="c1">
        <img src={Quizlogo} alt="logo" style={{ width: '80px', height: '80px' }} />
        <p className="tx1">BrainZap</p>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        </div>
       <div className="c2">
        <div className="c2-1">
        <ul>
          <li>
          <Link to="/home">Home</Link>
            </li>
          <li>
          <Link to="/Quizzes">Quizzes</Link>
            </li>
          <li>
          <Link to="/About">About Us</Link>
            </li>
          <li>
          <Link to="/Contact">Contact Us</Link>
            </li>
            </ul>
            </div>  
      <div className="c3"> 
      <ul>
        <li>
        <Link to ="/Login">
        <button className="btn1">Login</button>
        </Link></li>
        <li>
        <Link to ="/Signup">
        <button className="btn1 btn2">Sign up</button>
        </Link></li>
        </ul>
      </div>  
  </div>

   
    </div>
  );}




export default Nav;

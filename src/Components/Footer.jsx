import React from 'react';
import { Link } from 'react-router-dom';
import Quizlogo from '../assests/quizlogo.png';
import SocialIcons from '../assests/Social Icons.png';
import SocialIcons2 from '../assests/Social Icons2.png';
import SocialIcon3 from '../assests/Social Icons3.png';
import SocialIcons4 from '../assests/Social Icons4.png';

function Footer() {
  return (
    <div>
        <div className="footer">
        <div className="div1">
          <div className="c1">
            <img src={Quizlogo} alt="logo" style={{ width: '50px', height: '40px' }}  />
            <p className="tx1">BrainZap</p>
          </div>
          <p>Copyright © 2020 BrainZap ltd.</p>
          <p>All rights reserved</p><br/>
          <img src={SocialIcons}alt="logo" style={{ width: '28px',height:'30px' }} />
          <img src={SocialIcons2} alt="logo" style={{ width: '28px',height:'30px' }} />
          <img src={SocialIcon3}alt="logo" style={{ width: '28px',height:'30px' }} />
          <img src={SocialIcons4}alt="logo" style={{ width: '28px',height:'30px' }} />
        </div>
        <div className="div2">
          <div className="div2-1">
            <h3>Quick Links</h3>
              <ul className="easy">
          <li className="list-item">
          <Link to="/home">Home</Link>
            </li>
          <li className="list-item">
          <Link to="/Quizzes">Quizzes</Link>
            </li>
          <li className="list-item">
          <Link to="/About">About</Link>
            </li>
          <li className="list-item">
          <Link to="/Contact">Contact us </Link>
            </li>
            </ul>
          </div>
          <div className="div2-2">
            <h3>Popular Quizes</h3>
            <ul className="easy">
          <li className="list-item">
          <Link to="/home">Current Affairs</Link>
            </li>
          <li className="list-item">
          <Link to="/Quizzes">Programming</Link>
            </li>
          <li className="list-item">
          <Link to="/About">Medical Science</Link>
            </li>
          <li className="list-item">
          <Link to="/Contact">Puzzles</Link>
            </li>
            </ul>
          </div>
          <div className="div2-3">
            <h3>Stay up to date</h3>
            <input type ="text" name ="email" placeholder ="you@example.com" className="emx"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


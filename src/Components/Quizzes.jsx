import React from 'react';
import { Link } from 'react-router-dom';
import Programming2 from '../assests/programming2.jpg'
import Current2 from '../assests/current2.jpg';
import Medical1 from '../assests/medical.jpg';
import Logical from '../assests/logical.jpg';
import database from '../assests/database.jpg';
import networking from '../assests/networking.jpg';

export default function Quizzes() {
  return (
    <div>
      <div className="qz-text" style={{color:'rgb(165, 115, 222)',marginTop:'3%'}} data-aos="zoom-in-right">
      <h1>Check Out Our Quizzes</h1>
      </div>
      <div className="box-container" data-aos="zoom-out-left" >
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage: `url(${Programming2})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Programming</h3>
                  <p>Master Programming with Our Quiz</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: `url(${Programming2})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Programming</h3>
                  <p>Test your coding skills! Our Programming Quiz covers various languages. Challenge yourself and become a coding expert</p>
                  <Link to="/Programming">
                  <button className="flip-box-button">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage: `url(${Current2})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Current Affairs</h3>
                  <p>Stay Informed with our Current affair Quiz</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: `url(${Current2})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Current Affairs</h3>
                  <p>Challenge your knowledge with our Current Affairs Quiz! Stay updated on recent news in politics, sports, and technology.</p>
                  <Link to ="/Current">
                  <button className="flip-box-button">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage:  `url(${Medical1})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header"> Medical Science</h3>
                  <p>Explore Medical Science with Our Quiz</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage:  `url(${Medical1})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Medical Science</h3>
                  <p>Test your medical knowledge! Our Medical Science Quiz covers various topics and concepts. Challenge yourself and learn more.</p>
                  <Link to ="/MedicalScience">
                  <button className="flip-box-button">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        <div className="box-container"data-aos="zoom-out-right">
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage: `url(${Logical})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Logical Reasoning</h3>
                  <p>Challenge your mind with our Logical Reasoning Quiz</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: `url(${Logical})`}}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Logical Reasoning</h3>
                  <p>Test your problem-solving and creativity with our fun, brain-teasing logical reasoning quiz. Ready for the challenge?</p>
                  <Link to ="/Puzzles">
                  <button className="flip-box-button">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage: `url(${database})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Database</h3>
                  <p>Test your Database Knowledge</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: `url(${database})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Database</h3>
                  <p>Test your knowledge with our Database Quiz! Answer questions on database concepts and practices to sharpen your skills and boost your expertise.</p>
                  <Link to ="/Database">
                  <button className="flip-box-button">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage: `url(${networking})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header"> Networking</h3>
                  <p>Boost your Expertise with our questions</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: `url(${networking})`  }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">Networking</h3>
                  <p>Challenge your understanding of networking concepts with our engaging quiz. Test your skills and deepen your expertise in network technologies.</p>
                  <Link to ="/Networking">
                  <button className="flip-box-button">Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
          </div> 
    </div>
  );
}

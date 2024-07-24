import React from 'react';
import { Link } from 'react-router-dom';
import Programming from '../assests/programming.jpg'

export default function Quizzes() {
  return (
    <div>
      <div className="qz-text">
        <h1>Check Out Our Quizzes</h1>
        <br />
        <p>Explore a wide range of quizzes available, covering diverse topics and interests, designed to test your knowledge and provide a fun and engaging experience.</p>
      </div>
      <div className="box-container" data-aos="zoom-out-left">
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center"  style={{ backgroundImage: `url(${Programming})` }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Programming</h3>
                <p>Master Programming with Our Quiz</p>
              </div>
            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Programming</h3>
                <p>Test your coding skills! Our Programming Quiz covers various languages. Challenge yourself and become a coding expert.</p>
                <Link to="/Programming">
                  <button className="flip-box-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Current Affairs</h3>
                <p>Stay Informed with our Current affair Quiz</p>
              </div>
            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Current Affairs</h3>
                <p>Challenge your knowledge with our Current Affairs Quiz! Stay updated on recent news in politics, sports, and technology.</p>
                <Link to="/Current">
                  <button className="flip-box-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Medical Science</h3>
                <p>Explore Medical Science with Our Quiz</p>
              </div>
            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Medical Science</h3>
                <p>Test your medical knowledge! Our Medical Science Quiz covers various topics and concepts. Challenge yourself and learn more.</p>
                <Link to="/MedicalScience">
                  <button className="flip-box-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-container" data-aos="zoom-out-right">
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Logical Reasoning</h3>
                <p>Challenge your mind with our Logical Reasoning Quiz</p>
              </div>
            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Logical Reasoning</h3>
                <p>Test your problem-solving and creativity with our fun, brain-teasing logical reasoning quiz. Ready for the challenge?</p>
                <Link to="/Puzzles">
                  <button className="flip-box-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Database</h3>
                <p>Test your Database Knowledge</p>
              </div>
            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Database</h3>
                <p>Test your knowledge with our Database Quiz! Answer questions on database concepts and practices to sharpen your skills and boost your expertise.</p>
                <Link to="/Database">
                  <button className="flip-box-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box-item">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Networking</h3>
                <p>Boost your Expertise with our Networking Quiz</p>
              </div>
            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")' }}>
              <div className="inner color-white">
                <h3 className="flip-box-header">Networking</h3>
                <p>Challenge your understanding of networking concepts with our engaging quiz. Test your skills and deepen your expertise in network technologies.</p>
                <Link to="/Networking">
                  <button className="flip-box-button">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

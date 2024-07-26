import React from 'react';
import Image from '../assests/image.png'; 
import Video1 from '../assests/video1.mp4'; 
import { Link } from 'react-router-dom';
import Programming2 from '../assests/programming2.jpg'
import Current2 from '../assests/current2.jpg';
import Medical1 from '../assests/medical.jpg';
import Logical from '../assests/logical.jpg';
import database from '../assests/database.jpg';
import networking from '../assests/networking.jpg';



function Home() {
  return (
    <div>
    <div className="con1" >
        <div className="left" data-aos="zoom-in-right">
          <h1 className="text1">Unleash Your Knowledge Potential!</h1>
          <p style={{textAlign:'left'}}>Discover a world of fun and learning with our engaging quizzes. Test your knowledge, brush up on various topics,
            and challenge friends. QuizNest offers an exciting way to boost your intellect. Ready to play and learn?
          </p>
        </div>
        <div className="right"data-aos="zoom-in-left">
          <img src={Image} alt="logo" style={{ width: '600px', height: '600px' }} />
        </div>
      </div>
      <div className="con1 con2">
        <div className="video-container" data-aos="zoom-out-down">
          <video autoPlay loop muted>
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right1" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h1 className="text2">Teaching, minus the time with BrainZap</h1>
          <br /><br />
          <hr className='line'></hr>
          <p style={{textAlign:'left'}}>It focuses on traditional methods, such as direct instruction, interactive discussions, 
            hands-on activities, and manual assessments. This approach emphasizes personal interaction, customized feedback,
            and adaptive learning strategies to engage students and evaluate their understanding.
          </p>
          <hr className='line'></hr><br /><br />
          <hr className='line'></hr>
          <p style={{textAlign:'left'}}>In Active Participation Students take part in group activities, projects, and discussions,
            which promotes collaboration and allows them to apply and deepen their understanding.
            This hands-on approach enhances their critical thinking skills and encourages active engagement with the material.
          </p>
          <hr className='line'></hr>
        </div>
      </div>
        <div className="box-container" data-aos ="zoom-out-down" >
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
        <div className="box-container" data-aos ="zoom-out-down">
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

export default Home;

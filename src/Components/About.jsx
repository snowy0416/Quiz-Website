import React from 'react'
import About1 from '../assests/About1.png'

 function About() {
  return (
    <div>
    {/* <div className="about-text">
      <h1>About BrainZap</h1>
    </div> */}
    <div className="con1" >
      <div className="left" data-aos="zoom-in-right">
      <h1 className="text1" style={{marginTop:'-25%'}}>Who we are!</h1>
      <p style ={{textAlign:'left'}}>BrainZap is a vibrant online platform committed to delivering the joy of learning and the excitement of competition 
        to users around the globe. Our platform caters to a diverse audience, including students seeking to enhance their knowledge, 
        professionals aiming to stay sharp in their fields, and trivia enthusiasts who enjoy testing their knowledge on a wide range of topics.
      </p>
      </div>
      <div className="right"data-aos="fade-left">
      <img src={About1} alt="logo" style={{ width: '700px', height: '600px' }} />
      </div>
      </div>
    </div>
  )
}
export default About;

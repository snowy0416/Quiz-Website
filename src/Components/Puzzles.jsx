import React from 'react'
import { Link } from 'react-router-dom'
import LrQuiz1 from '../assests/LrQuiz (1).png'

function Puzzles() {
  return (
    <div>
      <div className="Current-heading">
        <h1>
         Logical Reasoning Quiz
        </h1>
      </div>
      <div className="main-con">
      <div className="Current-con">
        <h2 className="cr-text">Instructions:</h2>
        <ul className=" Current-easy">
          <li className="list-items">
          This is a FREE online test. Beware of scammers 
          </li>
          <li className="list-items">
          Total number of questions: 10.
          </li>
          <li className="list-items">
          Each question carries 1 mark; there are no negative marks
          </li>
          <li className="list-items">
          DO NOT refresh the page.
          </li>
          <li className="list-items">
          All the best!
          </li>
        </ul>
        <Link to ="/Test4">
      <button className="cr-btn">Start Test</button>
      </Link>
      </div>
      <div className='pg-imag' data-aos="fade-left">
    <img src={LrQuiz1} alt="CA Quiz"  style={{ width: '600px', height: '500px' }}  />
    </div>
      </div>
    </div>
  )
}

export default Puzzles


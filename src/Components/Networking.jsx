import React from 'react'
import { Link } from 'react-router-dom'

function Networking() {
  return (
    <div>
      <div className="Current-heading">
        <h1>
        Networking Quiz
        </h1>
      </div>
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
        <Link to ="/Test6">
      <button className="cr-btn">Start Test</button>
      </Link>
      </div>
   
    </div>
  )
}

export default Networking


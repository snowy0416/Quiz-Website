import React from 'react'
import feedback1 from '../assests/feedback.gif'

function feedback() {
  return (
    <div>
        <h1 style ={{color:'rgb(165, 115, 222)'}}>Thank you for your feedback!!</h1><br/><br/>
         <div className='gify' data-aos="fade-right" >
        <img src={feedback1} alt="Signup" style ={{borderRadius:'50%',width:'500px',height:'500px'}}/>
        </div>
    </div>
  )
}

export default feedback
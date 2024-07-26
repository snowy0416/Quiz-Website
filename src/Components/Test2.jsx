import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "1. Which financial institution launched the 'MSME Sahaj' online loan solution for MSMEs?",
    options: [
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "State Bank of India"
    ],
    answer: 3
  },
  {
    question: "2. The Post Office Act of 2023 replaced which act?",
    options: [
      "1898",
      "1923",
      "1974",
      "1952"
    ],
    answer: 0
  },
  {
    question: "3. Which Indian naval vessel participated in Ex. RIMPAC-24 at Pearl Harbour?",
    options: [
      "INS Vikrant",
      "INS Shivalik",
      "INS Vikramaditya",
      "INS Kolkata"
    ],
    answer: 1
  },
  {
    question: "4. Which country's Navy signed a deal for an 800-ton Ocean Going Tug with India?",
    options: [
      "Maldives",
      "Mauritius",
      "Sri Lanka",
      "Bangladesh"
    ],
    answer: 2
  },
  {
    question: "5. With which country did India implement the Mutual Recognition Agreement (MRA) for organic products?",
    options: [
      "Taiwan",
      "Japan",
      "South Korea",
      "China"
    ],
    answer: 1
  },
  {
    question: "6. Which country has offered cooperation to India in building small nuclear power plants?",
    options: [
      "Russia",
      "USA",
      "United Kingdom",
      "France"
    ],
    answer: 0
  },
  {
    question: "7. According to the Economist Intelligence Unit's Global Liveability Index 2024, which city has been ranked as the best city to live in for the third consecutive year?",
    options: [
      "Copenhagen",
      "Zurich",
      "Melbourne",
      "Vienna"
    ],
    answer: 3
  },
  {
    question: "8. Where is the headquarters of the Food and Agriculture Organization located?",
    options: [
      "Geneva",
      "Vienna",
      "Rome",
      "Paris"
    ],
    answer: 2
  },
  {
    question: "9. Where was India's first successful foetal blood transfusion performed?",
    options: [
      "AIIMS Hyderabad",
      "AIIMS Mumbai",
      "AIIMS Delhi",
      "AIIMS Chennai"
    ],
    answer: 2
  },
  {
    question: "10. Who will be the new Foreign Secretary of India starting July 2024?",
    options: [
      "Pankaj Saran",
      "S. Jaishankar",
      "Nirupama Rao",
      "Vikram Misri"
    ],
    answer: 3
  }
];

function Test2() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    navigate('/result2');
  };

  return (
    <div>
   <h1 style={{marginTop:'3%',color:'rgb(165,115,222)'}} data-aos="zoom-in-right">Current Affairs Quiz</h1>
      {questions.map((q, index) => (
       <div key={index} className="question-block">
        <p>{q.question}</p>
        {q.options.map((option, optIndex) => (
         <label key={optIndex}>
         <input  type="radio" name={`question-${index}`} value={optIndex}  checked={userAnswers[index] === optIndex}  onChange={() => handleAnswerChange(index, optIndex)}/>
          {option}  
          </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="cr-btn">Submit</button>
    </div>
  );
}

export default Test2;

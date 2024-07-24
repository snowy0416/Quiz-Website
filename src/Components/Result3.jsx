import React, {useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/result.css"

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
  

  function Result3() {
    const navigate = useNavigate();
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const score = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);
  
    const percentage = score / questions.length;
    const gaugeRef = useRef(null);
  
    useEffect(() => {
      if (gaugeRef.current) {
        let currentValue = 0;
        const updateGauge = setInterval(() => {
          if (currentValue >= percentage) {
            clearInterval(updateGauge);
          } else {
            currentValue += 0.01;
            if (currentValue > percentage) {
              currentValue = percentage;
            }
            setGaugeValue(gaugeRef.current, currentValue);
          }
        }, 10); 
      }
    }, [percentage]);
  
    function setGaugeValue(gauge, value) {
      if (value < 0 || value > 1) {
        return;
      }
      gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
      gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
    }
  
    return (
      <div>
        <h1>Result</h1>
        <div className="gauge" ref={gaugeRef}>
          <div className="gauge__body">
            <div className="gauge__fill"></div>
            <div className="gauge__cover">0%</div>
          </div>
        </div>
        <h3>Your Score: {score} / {questions.length}</h3>
        <button onClick={() => navigate('/Test3')} className="cr-btn">Take Quiz Again</button>
      </div>
    );
  }
  export default Result3;
  

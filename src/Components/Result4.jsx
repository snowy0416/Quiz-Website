import React, {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/result.css"

const questions = [
  {
    question: "1. JAK, KBL, LCM, MDN, _____",
    options: [
      "OEP",
      "NEO",
      "MEN",
      "PFQ"
    ],
    answer: 1
  },
  {
    question: "2. SCD, TEF, UGH, ____, WKL",
    options: [
      "CMN",
      "UJI",
      "VIJ",
      "IJT"
    ],
    answer: 2
  },
  {
    question: "3. Find the word that names a necessary part of the underlined word. purchase",
    options: [
      "trade",
      "money",
      "bank",
      "acquisition"
    ],
    answer: 1
  },
  {
    question: "4. The words in the bottom row are related in the same way as the words in the top row. snow mountain ski, warmth lake ?",
    options: [
      "sand",
      "swim",
      "sunburn",
      "vacation"
    ],
    answer: 1
  },
  {
    question: "5. The words in the bottom row are related in the same way as the words in the top row. apples fruit supermarket, novel book ?",
    options: [
      "bookstore",
      "magazine",
      "vegetable",
      "shopping"
    ],
    answer: 0
  },
  {
    question: "6. PULSATE : THROB",
    options: [
      "walk : run",
      "tired : sleep",
      "examine : scrutinize",
      "ballet : dancer",
      "find : lose"
    ],
    answer: 2
  },
  {
    question: "7. Here are some words translated from an artificial language. dionot means oak tree, blyonot means oak leaf, blycrin means maple leaf. Which word could mean 'maple syrup'?",
    options: [
      "blymuth",
      "hupponot",
      "patricrin",
      "crinweel"
    ],
    answer: 2
  },
  {
    question: "8. Though the waste of time or the expenditure on fashions is very large, yet fashions have come to stay. They will not go, come what may. However, what is now required is that strong efforts should be made to displace the excessive craze for fashion from the minds of these youngsters. The passage best supports the statement that:",
    options: [
      "fashion is the need of the day.",
      "the excessive craze for fashion is detrimental to one's personality.",
      "the hoard for fashion should be done away with so as not to let down the constructive development.",
      "work and other activities should be valued more than the outward appearance."
    ],
    answer: 2
  },
  {
    question: "9. Statements: In a recent survey report, it has been stated that those who undertake physical exercise for at least half an hour a day are less prone to have any heart ailments. Conclusions: Moderate level of physical exercise is necessary for leading a healthy life. All people who do desk-bound jobs definitely suffer from heart ailments.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow"
    ],
    answer: 0
  },
  {
    question: "10. Statements: People who speak too much against dowry are those who had taken it themselves. Conclusions: It is easier said than done. People have double standards.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Either I or II follows",
      "Neither I nor II follows",
      "Both I and II follow"
    ],
    answer: 1
  }
];
  

function Result4() {
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
      <button onClick={() => navigate('/Test4')} className="cr-btn">Take Quiz Again</button>
    </div>
  );
}
export default Result4;



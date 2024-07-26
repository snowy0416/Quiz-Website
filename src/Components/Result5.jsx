import React ,{useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/result.css";

const questions = [
  {
    question: "1. Find the SQL statement below that is equal to the following: SELECT NAME FROM CUSTOMER WHERE STATE = 'VA';",
    options: [
      "SELECT NAME IN CUSTOMER WHERE STATE IN ('VA');",
      "SELECT NAME IN CUSTOMER WHERE STATE = 'VA';",
      "SELECT NAME IN CUSTOMER WHERE STATE = 'V';",
      "SELECT NAME FROM CUSTOMER WHERE STATE IN ('VA');"
    ],
    answer: 3
  },
  {
    question: "2. The wildcard in a WHERE clause is useful when?",
    options: [
      "An exact match is necessary in a SELECT statement.",
      "An exact match is not possible in a SELECT statement.",
      "An exact match is necessary in a CREATE statement.",
      "An exact match is not possible in a CREATE statement."
    ],
    answer: 1
  },
  {
    question: "3. There is an equivalent join expression that can be substituted for all subquery expressions.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "4. Changing cardinalities in a database is:",
    options: [
      "a common database design task.",
      "a rare database design task, but does occur.",
      "a database design task that never occurs.",
      "is impossible to do, so a new database must be constructed and the data moved into it."
    ],
    answer: 1
  },
  {
    question: "5. A correlated subquery is processed as a nested subquery.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "6. SQL Server supports three recovery modes: simple, full and Bulk.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "7. ADO.NET provides the ability to create and process in-memory databases called:",
    options: [
      "views.",
      "relations.",
      "tables.",
      "datasets."
    ],
    answer: 3
  },
  {
    question: "8. Which JDBC driver Type(s) is(are) the JDBC-ODBC bridge?",
    options: [
      "Type 1",
      "Type 2",
      "Type 3",
      "Type 4"
    ],
    answer: 0
  },
  {
    question: "9. The term neural networks as used in data mining is a misnomer.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "10. All enterprise resource planning (ERP) systems are heavily dependent on databases to store the data required by the ERP applications.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  }
];
  

function Result5() {
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
  <h1 style={{marginTop:'3%',color:'rgb(165,115,222)'}} data-aos="zoom-in-right">Check Out Your Score!!</h1>
      <div className="gauge" ref={gaugeRef}>
        <div className="gauge__body">
          <div className="gauge__fill"></div>
          <div className="gauge__cover">0%</div>
        </div>
      </div>
      <h3>Your Score: {score} / {questions.length}</h3>
      <button onClick={() => navigate('/Test5')} className="cr-btn">Take Quiz Again</button>
    </div>
  );
}
export default Result5;



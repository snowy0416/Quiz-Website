import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

function Test5() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft , setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() =>{
    if(timeLeft > 0){
      const timer = setTimeout (()=> setTimeLeft(timeLeft -1),1000 );
      return () =>clearTimeout(timer);
    }else{
      handleSubmit();
    }
  },[timeLeft]);

  useEffect(() => {
    document.title = `Quiz - ${Math.floor(timeLeft /60)}:${String(timeLeft % 60).padStart(2,'0')}`;
  },[timeLeft]);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    navigate('/result5');
  };

  return (
    <div>
  <h1 style={{marginTop:'3%',color:'rgb(165,115,222)'}} data-aos="zoom-in-right">Database Quiz</h1>
  {questions.map((q, index) => (
   <div key={index} className="question-block">
   <p>{q.question}</p>
   {q.options.map((option, optIndex) => (
   <label key={optIndex}>
    <input type="radio" name={`question-${index}`} value={optIndex} checked={userAnswers[index] === optIndex} onChange={() => handleAnswerChange(index, optIndex)} />
              {option}
            </label>
      ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="cr-btn">Submit</button>
    </div>
  );
}

export default Test5;

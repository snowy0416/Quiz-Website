import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "1. Which of the following statements is not true?",
    options: [
      "Enzymes are proteins that bind to specific substrates and increase the velocity of reactions involving those substrates",
      "Enzymes function by overcoming the activation energy barrier of a reaction",
      "Enzymes make thermodynamically favorable reactions to proceed; they cannot make unfavorable reactions to occur",
      "Enzymes only function when they are in intact cells"
    ],
    answer: 3
  },
  {
    question: "2. An enzyme and a reactant molecule maintain relationship as",
    options: [
      "a temporary association",
      "an association stabilized by a covalent bond",
      "one in which the enzyme is changed permanently",
      "non complementary binding"
    ],
    answer: 0
  },
  {
    question: "3. The active site of an enzyme remains",
    options: [
      "at the center of globular proteins",
      "rigid and does not change shape",
      "complementary to the rest of the molecule",
      "none of the above"
    ],
    answer: 3
  },
  {
    question: "4. A classical uncompetitive inhibitor is a compound that binds",
    options: [
      "reversibly to the enzyme substrate complex yielding an inactive ESI complex",
      "irreversibly to the enzyme substrate complex yielding an inactive ESI complex",
      "reversibly to the enzyme substrate complex yielding an active ESI complex",
      "irreversibly to the enzyme substrate complex yielding an active ESI complex"
    ],
    answer: 0
  },
  {
    question: "5. The types of inhibition pattern based on Michaelis Menten equation are",
    options: [
      "competitive",
      "non-competitive",
      "uncompetitive",
      "all of the above"
    ],
    answer: 3
  },
  {
    question: "6. Milk digestibility is improved by using",
    options: [
      "RNase",
      "lactase",
      "β-amylase",
      "none of these"
    ],
    answer: 1
  },
  {
    question: "7. Which of the following metallic ion is there in ascorbic acid oxidase?",
    options: [
      "Mg",
      "Fe",
      "Cu",
      "Mn"
    ],
    answer: 2
  },
  {
    question: "8. The continuous cultures are not widely used in industry because",
    options: [
      "they are not suited for the production of secondary metabolites",
      "contamination or mutation can have a disastrous effect on the operation",
      "the government will not approve the licensing of pharmaceuticals produced in continuous cultures",
      "all of the above"
    ],
    answer: 3
  },
  {
    question: "9. Production of organic acids in batch culture is generally growth associated phase followed by non-growth associated production. The probable reason for this is that",
    options: [
      "organic acids uncouple catabolism from anabolism",
      "biomass yields increase as the fermentation proceeds",
      "organic acids are secondary metabolites",
      "high concentrations of organic acid promote the growth of the microbial population"
    ],
    answer: 0
  },
  {
    question: "10. Biomass concentrations during fermentation is",
    options: [
      "diluting the samples to optical density less than 0.3",
      "monitored by controlling the changes in biomass concentrations",
      "considering that optical density is proportional to the surface area of the biomass in the sample",
      "all of the above"
    ],
    answer: 3
  }
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft , setTimeLeft] =useState(300);
  const navigate = useNavigate();

  useEffect (() =>{
    if(timeLeft > 0){
      const timer =setTimeout(() => setTimeLeft(timeLeft-1),1000);
      return () =>clearTimeout(timer);
    }else{
      handleSubmit();
    }
  },[timeLeft]);

  useEffect(() =>{
    document.title =`Quiz - ${Math.floor(timeLeft /60)}:${String(timeLeft % 60).padStart(2,'0')}`;
  },[timeLeft]);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    navigate('/result3');
  };

  return (
    <div>
 <h1 style={{marginTop:'3%',color:'rgb(165,115,222)'}} data-aos="zoom-in-right">MedicalScience Quiz</h1>
     {questions.map((q, index) => (
     <div key={index} className="question-block">
      <p>{q.question}</p>
     {q.options.map((option, optIndex) => (
      <label key={optIndex}>
       <input  type="radio"  name={`question-${index}`}  value={optIndex}  checked={userAnswers[index] === optIndex} onChange={() => handleAnswerChange(index, optIndex)}/>
             {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="cr-btn">Submit</button>
    </div>
  );
}

export default Quiz;

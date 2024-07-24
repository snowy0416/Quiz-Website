import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import  "../css/result.css";

const questions = [
  {
    question: "1. Point out the error in the following program.",
    code: `#include<stdio.h>
int main()
{
    void v = 0;
    printf("%d", v);
    return 0;
}`,
    options: [
      "Declaration syntax error 'v' (or) Size of v is unknown or zero.",
      "Program terminates abnormally.",
      "No error.",
      "None of these."
    ],
    answer: 0
  },
  {
    question: "2. What will be the output of the program?",
    code: `#include<stdio.h>
int fun(int, int);
typedef int (*pf) (int, int);
int proc(pf, int, int);

int main()
{
    printf("%d\\n", proc(fun, 6, 6));
    return 0;
}
int fun(int a, int b)
{
   return (a==b);
}
int proc(pf p, int a, int b)
{
   return ((*p)(a, b));
}`,
    options: [
      "6",
      "1",
      "0",
      "-1"
    ],
    answer: 1
  },
  {
    question: "3. What will be the output of the program?",
    code: `#include<stdio.h>
#define MAN(x, y) ((x)>(y)) ? (x):(y);

int main()
{
    int i=10, j=5, k=0;
    k = MAN(++i, j++);
    printf("%d, %d, %d\\n", i, j, k);
    return 0;
}`,
    options: [
      "12, 6, 12",
      "11, 5, 11",
      "11, 5, Garbage",
      "12, 6, Garbage"
    ],
    answer: 0
  },
  {
    question: "4. Will the program compile successfully?",
    code: `#include<stdio.h>
#define X (4+Y)
#define Y (X+3)

int main()
{
    printf("%d\\n", 4*X+2);
    return 0;
}`,
    options: [
      "Yes",
      "No"
    ],
    answer: 1
  },
  {
    question: "5. Will the following program print the message infinite number of times?",
    code: `#include<stdio.h>
#define INFINITELOOP while(1)

int main()
{
    INFINITELOOP
    printf("IndiaBIX");
    return 0;
}`,
    options: [
      "Yes",
      "No"
    ],
    answer: 0
  },
  {
    question: "6. Can you combine the following two statements into one?",
    code: `char *p;
p = (char*) malloc(100);`,
    options: [
      "char p = *malloc(100);",
      "char *p = (char) malloc(100);",
      "char *p = (char*)malloc(100);",
      "char *p = (char *)(malloc*)(100);"
    ],
    answer: 2
  },
  {
    question: "7. What will be the output of the program?",
    code: `#include<stdio.h>

void fun(void *p);
int i;

int main()
{
    void *vptr;
    vptr = &i;
    fun(vptr);
    return 0;
}
void fun(void *p)
{
    int **q;
    q = (int**)&p;
    printf("%d\\n", **q);
}`,
    options: [
      "Error: cannot convert from void** to int**",
      "Garbage value",
      "0",
      "No output"
    ],
    answer: 1
  },
  {
    question: "8. What will be the output of the program assuming that the array begins at the location 1002 and size of an integer is 4 bytes?",
    code: `#include<stdio.h>

int main()
{
    int a[3][4] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
    printf("%u, %u, %u\\n", a[0]+1, *(a[0]+1), *(*(a+0)+1));
    return 0;
}`,
    options: [
      "448, 4, 4",
      "520, 2, 2",
      "1006, 2, 2",
      "Error"
    ],
    answer: 2
  },
  {
    question: "9. What will be the output of the program?",
    code: `#include<stdio.h>

int main()
{
    static int arr[] = {0, 1, 2, 3, 4};
    int *p[] = {arr, arr+1, arr+2, arr+3, arr+4};
    int **ptr=p;
    ptr++;
    printf("%d, %d, %d\\n", ptr-p, *ptr-arr, **ptr);
    *ptr++;
    printf("%d, %d, %d\\n", ptr-p, *ptr-arr, **ptr);
    *++ptr;
    printf("%d, %d, %d\\n", ptr-p, *ptr-arr, **ptr);
    ++*ptr;
    printf("%d, %d, %d\\n", ptr-p, *ptr-arr, **ptr);
    return 0;
}`,
    options: [
      "0, 0, 0\n1, 1, 1\n2, 2, 2\n3, 3, 3",
      "1, 1, 2\n2, 2, 3\n3, 3, 4",
      "1, 1, 1\n2, 2, 2\n3, 3, 3",
      "0, 1, 2\n1, 2, 3\n2, 3, 4"
    ],
    answer: 1
  },
  {
    question: "10. Which of the following is correct way to define the function fun() in the below program?",
    code: `#include<stdio.h>

int main()
{
    int a[3][4];
    fun(a);
    return 0;
}`,
    options: [
      "void fun(int p[][4])",
      "void fun(int *p[4])",
      "void fun(int *p[][4])",
      "void fun(int *p[3][4])"
    ],
    answer: 0
  }
];


function Result() {
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
      <button onClick={() => navigate('/Test1')} className="cr-btn">Take Quiz Again</button>
    </div>
  );
}
export default Result;

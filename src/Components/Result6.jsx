import React,{useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/result.css";
const questions = [
    {
      question: "1. In a network with dozens of switches, how many root bridges would you have?",
      options: [
        "1",
        "2",
        "5",
        "12"
      ],
      answer: 0
    },
    {
      question: "2. What type of RJ45 UTP cable is used between switches?",
      options: [
        "Straight-through",
        "Crossover cable",
        "Crossover with a CSU/DSU",
        "Crossover with a router in between the two switches"
      ],
      answer: 1
    },
    {
      question: "3. How does a host on an Ethernet LAN know when to transmit after a collision has occurred?",
      options: [
        "In a CSMA/CD collision domain, multiple stations can successfully transmit data simultaneously.",
        "In a CSMA/CD collision domain, stations must wait until the media is not in use before transmitting.",
        "You can improve the CSMA/CD network by adding more hubs.",
        "After a collision, the station that detected the collision has first priority to resend the lost data.",
        "After a collision, all stations run a random backoff algorithm. When the backoff delay period has expired, all stations have equal priority to transmit data."
      ],
      answer: 4
    },
    {
      question: "4. What is the maximum number of IP addresses that can be assigned to hosts on a local subnet that uses the 255.255.255.224 subnet mask?",
      options: [
        "14",
        "15",
        "16",
        "30"
      ],
      answer: 3
    },
    {
      question: "5. What layer of the OSI model would you assume the problem is in if you type show interface serial 1 and receive the following message? 'Serial1 is down, line protocol is down.'",
      options: [
        "Physical layer",
        "Data Link layer",
        "Network layer",
        "None. It is a router problem."
      ],
      answer: 0
    },
    {
      question: "6. What is the problem with an interface if you type show interface serial 0 and receive the following message? 'Serial0 is administratively down, line protocol is down.'",
      options: [
        "The keepalives are different times.",
        "The administrator has the interface shut down.",
        "The administrator is pinging from the interface.",
        "No cable is attached."
      ],
      answer: 1
    },
    {
      question: "7. What information is displayed by the show hosts command?",
      options: [
        "Temporary DNS entries",
        "The names of the routers created using the hostname command",
        "The IP addresses of workstations allowed to access the router",
        "Permanent name-to-address mappings created using the ip host command",
        "The length of time a host has been connected to the router via Telnet"
      ],
      answer: 1
    },
    {
      question: "8. If your routing table has a static, a RIP, and an IGRP route to the same network, which route will be used to route packets by default?",
      options: [
        "Any available route",
        "RIP route",
        "Static route",
        "IGRP route",
        "They will all load-balance."
      ],
      answer: 2
    },
    {
      question: "9. You type debug ip rip on your router console and see that 172.16.10.0 is being advertised to you with a metric of 16. What does this mean?",
      options: [
        "The route is 16 hops away.",
        "The route has a delay of 16 microseconds.",
        "The route is inaccessible.",
        "The route is queued at 16 messages a second."
      ],
      answer: 2
    },
    {
      question: "10. Which of the following protocols support VLSM, summarization, and discontiguous networking?",
      options: [
        "RIPv1",
        "IGRP",
        "EIGRP",
        "OSPF",
        "BGP",
        "RIPv2"
      ],
      answer: 2
    }
  ];

  function Result6() {
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
        <button onClick={() => navigate('/Test6')} className="cr-btn">Take Quiz Again</button>
      </div>
    );
  }
  export default Result6;
  

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Quizzes from './Components/Quizzes';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Current from './Components/Current';
import Programming from './Components/Programming';
import MedicalScience from './Components/MedicalScience';
import Puzzles from './Components/Puzzles';
import Database from './Components/Database';
import Networking from './Components/Networking';
import Test1 from './Components/Test1';
import Test2 from './Components/Test2';
import Test3 from './Components/Test3';
import Test4 from './Components/Test4';
import Test5 from './Components/Test5';
import Test6 from './Components/Test6';
import Result from './Components/Result';
import Result2 from './Components/Result2';
import Result3 from './Components/Result3';
import Result4 from './Components/Result4';
import Result5 from './Components/Result5';
import Result6 from './Components/Result6';
import './css/home.css';
import './css/login.css';
import './css/footer.css';
import './css/current.css';
import './css/Test1.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
    Aos.init();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <p>{message}</p>
        <Routes>
          <Route path="/Quizzes" element={<Quizzes />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Current" element={<Current />} />
          <Route path="/Programming" element={<Programming />} />
          <Route path="/MedicalScience" element={<MedicalScience />} />
          <Route path="/Puzzles" element={<Puzzles />} /> 
          <Route path="/Database" element={<Database />} />
          <Route path="/Networking" element={<Networking />} />
          <Route path="/Test1" element={<Test1 />} />
          <Route path="/Test2" element={<Test2 />} />
          <Route path="/Test3" element={<Test3 />} />
          <Route path="/Test4" element={<Test4 />} />
          <Route path="/Test5" element={<Test5 />} />
          <Route path="/Test6" element={<Test6 />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Result2" element={<Result2 />} />
          <Route path="/Result3" element={<Result3 />} />
          <Route path="/Result4" element={<Result4 />} />
          <Route path="/Result5" element={<Result5 />} />
          <Route path="/Result6" element={<Result6 />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

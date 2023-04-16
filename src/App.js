import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutText="aboutUs " />
        <div className="container my-3">

          <Routes>
            <Route path='/' element={<Textform heading=<h2>Enter the text to analyz below</h2> />} />
            <Route path='/about' element={<About />} />
          </Routes>

        </div>
      </Router>




    </>
  );
}

export default App;


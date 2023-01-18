/* eslint-disable no-lone-blocks */
/* eslint-disable react/prefer-stateless-function */
import './style/style.scss';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import './components/logic/calculate';
import './components/logic/operate';
import Cal from './components/CalculatorPart';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="Title-name">
          MATH MAGICIANS
        </div>
        <div className="nav-links">
          <Link to="/Home"> Home </Link>
          <Link to="/Calculator"> Calculator </Link>
          <Link to="/Quote"> Quote </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Cal />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;

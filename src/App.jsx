// src/App.jsx

import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import global styles
import AddBook from "./components/AddBook";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-book">Add Book</Link>
        </nav>

        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/add-book" element ={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

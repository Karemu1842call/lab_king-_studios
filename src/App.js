import logo from './logo.svg';
import React from 'react';
import './App.css';

import Home from './components/Home';
import SearchBox from './components/SearchBox';
import Navbar from './components/Navbar';
import Instructor from './components/Instructor.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar />
      <Home />
      <SearchBox/>
      <Instructor />
    </div>
  );
}
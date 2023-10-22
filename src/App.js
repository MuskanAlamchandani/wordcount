import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="WordCounter" aboutText="About Us" />
      <div className="container my-3"><TextForm heading="Enter your text here" /></div>
    </>
  );
}

export default App;
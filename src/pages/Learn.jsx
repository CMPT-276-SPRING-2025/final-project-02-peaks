import React from 'react';
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';

function Learn() {
  return (
    <>
      <Logo/>
      <div className="learn-container">
        <h1>How to use MisoHungry</h1>
        <div className="learn-instructions">
            <div className="instruction-container">
                <h2>Step 1</h2>
                <p>Input ingredients</p>  
            </div>
            <div className="instruction-container">
                <h2>Step 2</h2>
                <p>Select filters</p> 
            </div>
            <div className="instruction-container">
                <h2>Step 3</h2>
                <p>Find recipes</p> 
            </div>
        </div>
        <p><NavLink to = '/index' className={({ isActive }) => isActive ? "active-link" : ""}>Back to Home</NavLink></p>
      </div>
    </>
  );
}

export default Learn;
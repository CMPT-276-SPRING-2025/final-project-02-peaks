import React from 'react';

function Homepage() {
  return (
    <>
      <div className="home-container">
        <h1>MisoHungry</h1>
        <button type="button">
            <a href="#" className="start-button">Click to Start!</a>
        </button>
        <p>or <a href="#" className="start-button">click here</a> to learn</p>
      </div>
    </>
  );
}

export default Homepage;

// Homepage.js

import React from 'react';
import './Homepage.css';

function Homepage() {
  const handleBoxClick = () => {
    // Handle box click event
    alert('Box clicked!');
  };

  return (
    <div className="Homepage">
      <nav className="Navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
      <header className="Header">
        <h1>Welcome to Car Sales</h1>
        <p> f, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anc</p>
      </header>
      
      <main className="Content">
        <div className="Box" onClick={handleBoxClick}>
          <h2>Car Selling Made Easy</h2>
          <p>Sell your car hassle-free with our professional services.</p>
        </div>
        <div className="Box">
          <h2>Explore Our Wide Selection</h2>
          <p>Find the perfect car from our extensive inventory.</p>
        </div>
        <div className="Box">
          <h2>Quality and Reliability</h2>
          <p>Buy a car with confidence. We ensure top-notch quality and reliability.</p>
        </div>
      </main>
      
      <footer className="Footer">
        <p>&copy; 2023 Car Sales. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;

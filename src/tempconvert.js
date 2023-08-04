
import React, { useState } from 'react';
import './tempconvert.css';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
  };

  return (
    <div className="page-container">
      <div className="temperature-converter">
        <h1>Temperature Converter</h1>
        <div>
          <label>Celsius: </label>
          <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </div>
        <div>
          <label>Fahrenheit: </label>
          <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        </div>
      </div>
      <div className="core-content">
        <h2>Temperature Formulas</h2>
        <p>
          Celsius to Fahrenheit: F = 9/5 ( ° C) + 32
          <br></br>
          Fahrenheit to Celsius: C = 5/9 (° F - 32)
        </p>
      </div>
    </div>
  );
};

export default TemperatureConverter;

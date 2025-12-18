import React, { useState } from 'react';
import './../styles/App.css';
import ChildComponentOne from './ChildComponentOne';
import ChildComponentTwo from './ChildComponentTwo';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleState = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponentOne handleState={handleState} />
      <ChildComponentTwo handleState={handleState} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;

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
    <div>
      <ChildComponentOne handleState={handleState} />
      <ChildComponentTwo handleState={handleState} />
      Selected Option: {selectedOption}
    </div>
  );
};

export default App;

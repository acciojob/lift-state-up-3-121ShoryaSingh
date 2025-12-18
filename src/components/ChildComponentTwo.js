import React from 'react';

const ChildComponentTwo = ({ handleState }) => {
  return (
    <div>
      Child Component 2
      <button
        onClick={() => {
          handleState('Option 2');
        }}
      >
        Option 2
      </button>
    </div>
  );
};

export default ChildComponentTwo;

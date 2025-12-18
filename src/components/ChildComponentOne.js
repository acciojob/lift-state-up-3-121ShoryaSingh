import React from 'react';

const ChildComponentOne = ({ handleState }) => {
  return (
    <div>
      Child Component 1
      <button
        onClick={() => {
          handleState('option 1');
        }}
      >
        Option 1
      </button>
    </div>
  );
};

export default ChildComponentOne;

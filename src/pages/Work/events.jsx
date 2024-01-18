import React from 'react';

const Card = (props) => {
  const options = {
    'EVENTS': `Events description goes here.....`,
    'COMMUNITY': `Community description goes here.....`,
    'MVP': `MVP description goes here.....`,
    'RESOURCE': `Resource description goes here.....`,
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h1 className="text-2xl font-bold mb-2">{props.name}</h1>
      <p className="text-sm md:text-base">{options[props.name]}</p>
    </div>
  );
}

export default Card;

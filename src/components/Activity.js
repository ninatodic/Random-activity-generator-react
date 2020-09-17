import React from 'react';

const Activity = ({ activity }) => {
  return (
    <div className={`random-activity ${activity === '' ? 'hidden' : ''}`}>
      <h1>{activity}</h1>
    </div>
  );
};

export default Activity;

import React from 'react';

const Timer = ({ minutes, seconds }) => (
  <div className="text-gray-700 font-medium">
    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
  </div>
);

export default Timer;
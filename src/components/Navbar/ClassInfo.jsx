import React from 'react';
import Logo from './Logo';

const ClassInfo = ({ title, grade }) => (
  <div className="flex items-center space-x-2">
    <Logo />
    <span className="text-gray-700 font-medium">
      {title} <span className="text-gray-500">{grade}</span>
    </span>
  </div>
);






export default ClassInfo;
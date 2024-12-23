import React from 'react';

const EndClassButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
  >
    End class
  </button>
);

export default EndClassButton;
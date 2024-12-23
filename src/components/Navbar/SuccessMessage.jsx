import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl animate-modal text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">
        Class ended successfully
      </h3>
      <p className="text-gray-600 mb-6">
        Thank you for completing the class session.
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
);

export default SuccessMessage;
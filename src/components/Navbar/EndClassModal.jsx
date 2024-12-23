import React, { useState } from 'react';

const EndClassModal = ({ isOpen, onClose, onEndClass }) => {
  const [reason, setReason] = useState('completed');
  const [subReason, setSubReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl animate-modal">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Select a reason to end class</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="reason"
              value="completed"
              checked={reason === 'completed'}
              onChange={(e) => {
                setReason(e.target.value);
                setSubReason('');
                setOtherReason('');
              }}
              className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
            />
            <span className="text-gray-700">Class completed</span>
          </label>

          <div>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="interrupted"
                checked={reason === 'interrupted'}
                onChange={(e) => {
                  setReason(e.target.value);
                  setOtherReason('');
                }}
                className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
              />
              <span className="text-gray-700">Class interrupted/aborted</span>
            </label>

            {reason === 'interrupted' && (
              <div className="ml-7 mt-2 space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="subReason"
                    value="no-show"
                    checked={subReason === 'no-show'}
                    onChange={(e) => setSubReason(e.target.value)}
                    className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-gray-600">Student didn't show up for the class.</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="subReason"
                    value="no-interest"
                    checked={subReason === 'no-interest'}
                    onChange={(e) => setSubReason(e.target.value)}
                    className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-gray-600">Student didn't show any interest.</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="subReason"
                    value="student-disconnected"
                    checked={subReason === 'student-disconnected'}
                    onChange={(e) => setSubReason(e.target.value)}
                    className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-gray-600">Student got disconnected.</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="subReason"
                    value="teacher-disconnected"
                    checked={subReason === 'teacher-disconnected'}
                    onChange={(e) => setSubReason(e.target.value)}
                    className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-gray-600">I got disconnected.</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="subReason"
                    value="other"
                    checked={subReason === 'other'}
                    onChange={(e) => setSubReason(e.target.value)}
                    className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-gray-600">Other reason</span>
                </label>

                {subReason === 'other' && (
                  <div className="ml-7 mt-2">
                    <textarea
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      placeholder="Type here"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      rows={3}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onEndClass}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            End Class
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndClassModal;
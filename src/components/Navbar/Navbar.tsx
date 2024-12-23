import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ClassInfo from './ClassInfo';
import Timer from './Timer';
import EndClassButton from './EndClassButton';
import EndClassModal from './EndClassModal';
import SuccessMessage from './SuccessMessage';
import useCountdown from '../../hooks/useCountdown';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { minutes, seconds, isRunning, stopTimer } = useCountdown(34 * 60 + 40);
  const location = useLocation();

  const handleEndClass = () => {
    stopTimer();
    setIsModalOpen(false);
    setShowSuccess(true);
  };

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo and class info - always visible */}
          <div className="flex items-center">
            <ClassInfo title="Trial Lesson" grade="[Grade 1-3]" />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' ? 'text-red-500' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/posts"
              className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/posts' ? 'text-red-500' : ''
              }`}
            >
              Posts
            </Link>
            <Timer minutes={minutes} seconds={seconds} />
            <EndClassButton onClick={() => setIsModalOpen(true)} />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Timer minutes={minutes} seconds={seconds} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute inset-x-0 top-16 bg-white border-b border-gray-200 transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-red-500 bg-red-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/posts"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === '/posts' 
                  ? 'text-red-500 bg-red-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Posts
            </Link>
            <div className="px-3 py-2">
              <EndClassButton onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }} />
            </div>
          </div>
        </div>
      </div>

      <EndClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEndClass={handleEndClass}
      />

      {showSuccess && <SuccessMessage />}
    </nav>
  );
};

export default Navbar;
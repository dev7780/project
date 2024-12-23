import { useState, useEffect } from 'react';

const useCountdown = (initialSeconds) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const stopTimer = () => setIsRunning(false);

  return {
    minutes: Math.floor(timeLeft / 60),
    seconds: timeLeft % 60,
    isRunning,
    stopTimer,
  };
};

export default useCountdown;
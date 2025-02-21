// Counter.tsx
import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
  // State to store the counter value
  const [count, setCount] = useState<number>(0);

  // Effect to set up the interval
  useEffect(() => {
    // Set up the interval when the component mounts
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Increment every 1000ms (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default Counter;

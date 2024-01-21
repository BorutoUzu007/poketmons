import React, { useEffect, useState } from 'react'

export default function Timer({interval}: {interval: number}) {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
      const timerId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, interval);
  
      // Cleanup function to clear the interval when the component is unmounted
      return () => {
        clearInterval(timerId);
      };
    }, [interval]);
  
    return (
      <div>
        <p>Timer: {counter}</p>
      </div>
    );
}

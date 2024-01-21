// components/Results.tsx
import React from 'react';

interface ResultsProps {
  correctAnswers: number;
}

const Results: React.FC<ResultsProps> = ({correctAnswers }) => {
    console.log(correctAnswers);
  return (
    <div>
      <h1>Results</h1>
      <p>Correct Answers: {correctAnswers}</p>
      {/* Add more details if needed */}
    </div>
  );
};

export default Results;
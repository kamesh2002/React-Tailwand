import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "React is a ___?",
    options: ["Library", "Framework", "Database", "Language"],
    answer: "Library",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const handleRetake = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300">
      {showScore ? (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Your Score: {score} / {questions.length}
          </h2>
          <button
            onClick={handleRetake}
            className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {questions[current].question}
          </h3>
          <div className="space-y-2">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="w-full bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded hover:bg-blue-200 transition"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Question {current + 1} of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

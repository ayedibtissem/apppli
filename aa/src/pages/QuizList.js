import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizList = ({ category }) => {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:3005/quiz/quiz/phishing`);
     
      setQuiz(response.data);
    };
    fetchQuiz();
  }, [category]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{category} Quiz</h1>
      <ul>
        {quiz.questions && quiz.questions.map((q, i) => (
          <li key={i}>
            <h3>{q.question}</h3>
            <ul>
              {q.options.map((option, j) => (
                <li key={j}>
                  <label>
                    <input type="radio" name={`question${i}`} value={j} />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button>Submit</button>
    </div>
  );
};

export default QuizList;


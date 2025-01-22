import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchQuizzes } from "../utils/api";

const QuizListing = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      const quizzesData = await fetchQuizzes();
      setQuizzes(quizzesData);
    };
    getQuizzes();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available</p>
      ) : (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz._id} className="mb-4">
              <Link to={`/quizzes/${quiz._id}`} className="text-blue-500">{quiz.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizListing;

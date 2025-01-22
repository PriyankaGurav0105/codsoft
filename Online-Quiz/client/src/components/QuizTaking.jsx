import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchQuiz } from "../utils/api";

const QuizTaking = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const getQuiz = async () => {
      const quizData = await fetchQuiz(id);
      setQuiz(quizData);
      setAnswers(new Array(quizData.questions.length).fill(null));
    };
    getQuiz();
  }, [id]);

  const handleAnswerChange = (index) => (e) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(e.target.value);
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      <div>
        <h3 className="mb-2">{quiz.questions[currentQuestion].question}</h3>
        {quiz.questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="mb-2">
            <input
              type="radio"
              name="answer"
              value={index}
              checked={answers[currentQuestion] === index}
              onChange={handleAnswerChange(currentQuestion)}
              className="mr-2"
            />
            {option}
          </div>
        ))}
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizTaking;

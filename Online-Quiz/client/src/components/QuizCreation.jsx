import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuiz } from "../utils/api";

const QuizCreation = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], correctAnswer: 0 }]);

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index][e.target.name] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correctAnswer: 0 }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    try {
      await createQuiz({ title, questions });
      navigate("/quizzes");
    } catch (error) {
      console.error("Error creating quiz", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Quiz</h2>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            className="w-full p-2 mb-2 border rounded"
            placeholder="Question"
            name="question"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, e)}
          />
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center mb-2">
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder={`Option ${optionIndex + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, optionIndex, e)}
              />
            </div>
          ))}
          <select
            className="w-full p-2 mb-2 border rounded"
            value={question.correctAnswer}
            name="correctAnswer"
            onChange={(e) => handleQuestionChange(index, e)}
          >
            {question.options.map((option, optionIndex) => (
              <option key={optionIndex} value={optionIndex}>
                {option}
              </option>
            ))}
          </select>
          <button
            onClick={() => removeQuestion(index)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove Question
          </button>
        </div>
      ))}
      <button
        onClick={addQuestion}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Question
      </button>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizCreation;


const QuizResults = ({ quiz, answers }) => {
  const correctAnswers = quiz.questions.filter(
    (q, index) => q.correctAnswer === answers[index]
  ).length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <p>Your Score: {correctAnswers}/{quiz.questions.length}</p>
      <ul>
        {quiz.questions.map((q, index) => (
          <li key={index} className="mb-2">
            <span>{q.question}: </span>
            <span className={answers[index] === q.correctAnswer ? "text-green-500" : "text-red-500"}>
              {q.options[answers[index]]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizResults;

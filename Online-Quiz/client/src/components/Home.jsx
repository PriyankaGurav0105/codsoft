import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to QuizMaker</h1>
      <div className="flex space-x-4">
        <Link to="/quizzes" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Take a Quiz</Link>
        <Link to="/create-quiz" className="bg-green-500 text-white px-4 py-2 rounded-lg">Create a Quiz</Link>
      </div>
    </div>
  );
};

export default Home;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QuizCreation from "./components/QuizCreation";
import QuizListing from "./components/QuizListing";
import QuizTaking from "./components/QuizTaking";
import QuizResults from "./components/QuizResults";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<QuizListing />} />
          <Route path="/create-quiz" element={<QuizCreation />} />
          <Route path="/quizzes/:id" element={<QuizTaking />} />
          <Route path="/quiz-results/:id" element={<QuizResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

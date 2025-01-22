import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        QuizMaker
      </Link>
      <div>
        <Link to="/login" className="mx-4">Login</Link>
        <Link to="/register" className="mx-4">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

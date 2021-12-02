import { Link } from "react-router-dom";
import "./Navigation.css";

// Navigation
const Navigation = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
};
export default Navigation;

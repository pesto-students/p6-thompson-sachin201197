import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <h2>
        <Link to="/">Shortly</Link>
      </h2>
      <div className="appData">
        <span>
          <Link to="/feature">Feature</Link>
        </span>
        <span>
          <Link to="/pricing">Pricing</Link>
        </span>
        <span>
          <Link to="/about-us">About Us</Link>
        </span>
      </div>
      <div className="auth">
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/sign-up">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

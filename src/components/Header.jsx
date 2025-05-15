//Header Component
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <img
        src={LOGO_URL}
        className="logo"
        alt="logo"
        width="100px"
        height="100px"
      />

      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

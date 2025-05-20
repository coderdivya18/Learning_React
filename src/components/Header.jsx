//Header Component
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";

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
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

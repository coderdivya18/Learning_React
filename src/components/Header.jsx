import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/Custom Hooks/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md font-manrope">
            <img
                src={LOGO_URL}
                alt="logo"
                className="w-24 h-24 object-contain"
            />

            <nav>
                <ul className="flex gap-6 items-center text-gray-700 text-md font-bold">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="hover:text-blue-600 transition">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-blue-600 transition">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

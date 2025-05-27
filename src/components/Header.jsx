import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/Custom Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useContext, useState} from "react";
import {useSelector} from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const [btnNameReact, setBtnNameReact] = useState("Login");

    //Subscribing to store
    const items = useSelector((store) => store.cart.items);
    console.log(items);

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
                        <Link to="/cart"
                              className="hover:text-blue-600 transition">Cart <span
                            className="text-bold ">({items?.length})</span></Link>
                    </li>
                    <button
                        className="login px-2 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                    <li>
                        {loggedInUser}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

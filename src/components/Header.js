

import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col sm:flex-row justify-between h-auto sm:h-14 bg-blue-400 shadow-lg sm:bg-blue-400 lg:bg-blue-300 p-2 sm:p-4">
      <div className="flex items-center justify-center sm:justify-start m-2 sm:m-4">
        <img className="w-38 h-9" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex flex-col sm:flex-row items-center m-2 sm:m-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="text-xs sm:text-sm">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </div>
          <Link to="/" className="text-xs sm:text-sm">
            Home
          </Link>
          <Link to="/about" className="text-xs sm:text-sm">
            About 
          </Link>
          <Link to="/contact" className="text-xs sm:text-sm">
            Contact 
          </Link>
          <Link to="/grocery" className="text-xs sm:text-sm">
            Grocery
          </Link>
        </div>

        <div className="flex items-center space-x-2 ml-2 sm:space-x-4 mt-2 sm:mt-0">
          <Link to="/cart" className="font-semibold text-sm sm:text-base">
            Cart - ({cartItems.length} items)
          </Link>
          <button
            className="px-2 sm:px-4 login text-xs sm:text-sm"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <div className="text-xs sm:text-sm">{loggedInUser}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

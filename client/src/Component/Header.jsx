import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { selectCartItems } from "../redux/cartSlice";

const Header = () => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const token = localStorage.getItem("token");  // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");  // Remove the token from localStorage
    window.location.reload();  // Reload the page after logging out
  };

  return (
    <div className="font-poppins w-screen h-20 border-2 border-gray-400 flex justify-between items-center px-4 rounded-sm shadow-lg">
      <div>
        <img src={logo} alt="logo" className="w-36 h-16 object-contain" />
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Home
          </button>
        </Link>

        <Link to="/about">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            About
          </button>
        </Link>

        <Link to="https://github.com/Vadiraj-19" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Github
          </button>
        </Link>

        <Link to="/cart">
          <button className="relative bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Cart
            {totalItems > 0 && (
              <span className="absolute top-[-6px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[1px]">
                {totalItems}
              </span>
            )}
          </button>
        </Link>

        {!token ? (
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

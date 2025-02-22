import { useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const handleLogout = async() => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="relative bg-gray-800">
      <div className="mx-auto flex h-16 items-center justify-between px-4 py-3 md:px-7">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <img
              src="/src/assets/logo.png"
              className="h-10 w-10 mr-2"
              alt="logo"
            />
            <h1 className="cursor-default text-2xl text-rainbow">Vanfit</h1>
          </div>

          <div className="hidden md:flex">
            <Navbar />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-4">
              <NavLink
                to="/dashboard"
                className="cursor-pointer text-white hover:text-yellow-400"
              >
                Dashboard
              </NavLink>
              <button className="hover:text-red-500 cursor-pointer"
              onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="cursor-pointer text-gray-300 hover:text-white"
            >
              Login
            </NavLink>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute w-full bg-gray-800 md:hidden">
          <Navbar isMobile onLinkClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
